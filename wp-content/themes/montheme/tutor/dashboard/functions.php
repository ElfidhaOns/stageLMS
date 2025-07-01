
add_action('tutor_course/single/enrolled/before', 'add_ai_quiz_button');

function add_ai_quiz_button() {
    if ( current_user_can('tutor_instructor') && is_singular('courses') ) {
        ?>
        <button id="generate-ai-quiz" class="tutor-btn tutor-btn-primary" data-course-id="<?php echo get_the_ID(); ?>">
            🤖 Générer un quiz IA
        </button>
        <script>
        document.getElementById('generate-ai-quiz').addEventListener('click', function () {
            const courseId = this.dataset.courseId;
            fetch('/wp-admin/admin-ajax.php?action=generate_ai_quiz&course_id=' + courseId)
              .then(res => res.json())
              .then(data => alert(data.message))
              .catch(err => alert('Erreur : ' + err));
        });
        </script>
        <?php
    }
}
add_action('wp_ajax_generate_ai_quiz', 'handle_generate_ai_quiz');

function handle_generate_ai_quiz() {
    $course_id = intval($_GET['course_id']);

    // 🔁 Appel à Flask
    $response = wp_remote_post('http://127.0.0.1:5000/api/generate-quiz', [
        'headers' => ['Content-Type' => 'application/json'],
        'body' => json_encode(['course_content' => get_the_content($course_id)])
    ]);

    if (is_wp_error($response)) {
        wp_send_json_error(['message' => 'Erreur de connexion à Flask']);
    }

    $data = json_decode(wp_remote_retrieve_body($response), true);
    $questions = $data['questions'] ?? [];

    if (empty($questions)) {
        wp_send_json_error(['message' => 'Aucune question reçue']);
    }

    // 📝 Création du post quiz
    $quiz_post_id = wp_insert_post([
        'post_title' => 'Quiz IA - ' . get_the_title($course_id),
        'post_type' => 'tutor_quiz',
        'post_status' => 'publish',
        'post_author' => get_current_user_id()
    ]);

    if (!$quiz_post_id) {
        wp_send_json_error(['message' => 'Erreur lors de la création du quiz']);
    }

    // 🧠 Conversion des questions
    $formatted_questions = [];
    foreach ($questions as $q) {
        $formatted_questions[] = [
            'question_title' => $q['question'],
            'question_type' => 'single_choice',
            'question_mark' => 1,
            'question_options' => array_map(function ($opt) {
                return ['option_title' => $opt];
            }, $q['options']),
            'correct_answer' => [$q['answer']]
        ];
    }

    // 💾 Sauvegarde dans les métadonnées du quiz
    update_post_meta($quiz_post_id, 'tutor_quiz_option', $formatted_questions);

    // 🔗 Lier automatiquement au premier topic du cours (si existe)
    $topics = tutor_utils()->get_topics_by_course($course_id);
    if (!empty($topics)) {
        $topic_id = $topics[0]->term_id;
        tutor_utils()->add_quiz_to_topic($quiz_post_id, $course_id, $topic_id);
    }

    wp_send_json_success(['message' => 'Quiz IA généré avec succès 🎉']);
}
