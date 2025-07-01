<?php
require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/image.php';

// 🔐 Gestion upload PDF/PPT
if ( isset($_POST['upload_pdf_course']) && current_user_can('edit_posts') ) {
    $title       = sanitize_text_field( $_POST['course_title'] );
    $price_type  = $_POST['course_price_type'] ?? 'free';
    $price       = isset($_POST['course_price']) ? floatval($_POST['course_price']) : 0;

    $file_main   = $_FILES['course_file'];
    $file_detail = $_FILES['course_detail_pdf'];

    $main_upload_id   = !empty($file_main['name'])   ? media_handle_upload( 'course_file', 0 ) : null;
    $detail_upload_id = !empty($file_detail['name']) ? media_handle_upload( 'course_detail_pdf', 0 ) : null;

    if ( ! is_wp_error( $main_upload_id ) ) {
        $post_id = wp_insert_post( array(
            'post_title'    => $title,
            'post_status'   => 'publish',
            'post_type'     => 'tutor_course',
        ) );

        update_post_meta( $post_id, 'attached_course_file', $main_upload_id );
        update_post_meta( $post_id, '_tutor_course_is_publishable', 'yes' );
        update_post_meta( $post_id, '_tutor_course_status', 'publish' );
        update_post_meta( $post_id, '_tutor_course_require_login', 'on' );

        update_post_meta( $post_id, '_tutor_course_price_type', $price_type );
        if ( $price_type === 'paid' ) {
            update_post_meta( $post_id, '_tutor_course_price', $price );
        }

        if ( $detail_upload_id && ! is_wp_error( $detail_upload_id ) ) {
            update_field( 'pdf_du_cours', $detail_upload_id, $post_id );
        }

        wp_update_post([
            'ID' => $post_id,
            'post_author' => get_current_user_id()
        ]);

        $section_id = tutor_utils()->create_section([
            'course_id' => $post_id,
            'title'     => 'Introduction',
            'order'     => 1,
        ]);

        $lesson_id = wp_insert_post([
            'post_title'  => 'Bienvenue',
            'post_type'   => 'lesson',
            'post_status' => 'publish',
            'post_parent' => $post_id,
        ]);

        tutor_utils()->insert_lesson_to_section([
            'lesson_id'  => $lesson_id,
            'section_id' => $section_id,
        ]);

        wp_redirect( add_query_arg( 'upload_success', '1', tutor_utils()->tutor_dashboard_url( 'my-courses' ) ) );
        exit;
    }
}

// 🔧 Placeholder
$placeholder_img = tutor()->url . 'assets/images/placeholder.svg';
$current_user_id = get_current_user_id();
?>

<div class="tutor-dashboard-my-courses">
    <div class="tutor-fs-5 tutor-fw-medium tutor-color-black tutor-mb-16">
        🎓 Bienvenue dans votre espace instructeur – Voici vos cours publiés
    </div>

    <div class="tutor-alert tutor-alert-info tutor-mb-24">
        Ici, vous pouvez gérer tous vos cours : modification, suppression, duplication ou publication.
    </div>

    <?php if ( isset($_GET['upload_success']) && $_GET['upload_success'] == '1' ) : ?>
        <div class="tutor-alert tutor-alert-success tutor-mb-16">
            ✅ Le cours a été ajouté avec succès, fichier PDF bien enregistré.
        </div>
    <?php endif; ?>

    <div class="tutor-d-flex tutor-justify-end tutor-mb-16">
        <button class="tutor-btn tutor-btn-primary" onclick="document.getElementById('uploadCourseModal').style.display='block'">
            ➕ Nouveau cours PDF
        </button>
    </div>

    <!-- 📄 Modal upload -->
    <div id="uploadCourseModal" style="display:none; position:fixed; top:10%; left:50%; transform:translateX(-50%); z-index:9999; background:#fff; border:1px solid #ccc; padding:20px; border-radius:10px; width:400px; box-shadow:0 0 20px rgba(0,0,0,0.3);">
        <h3 style="margin-bottom:10px;">📄 Ajouter un cours PDF / PPT</h3>
        <form method="post" enctype="multipart/form-data">
            <label>Titre du cours :</label>
            <input type="text" name="course_title" required style="width:100%; margin-bottom:10px; padding:5px;">

            <label>Fichier principal (PDF/PPT) :</label>
            <input type="file" name="course_file" accept=".pdf,.ppt,.pptx" required style="margin-bottom:10px;">

            <label>Type de cours :</label>
            <select name="course_price_type" onchange="togglePriceField(this)" style="width:100%; margin-bottom:10px; padding:5px;">
                <option value="free">Gratuit</option>
                <option value="paid">Payant</option>
            </select>

            <div id="priceField" style="display:none;">
                <label>Prix (€) :</label>
                <input type="number" name="course_price" min="0" step="0.01" style="width:100%; margin-bottom:10px; padding:5px;">
            </div>

            <label>Détails PDF (optionnel) :</label>
            <input type="file" name="course_detail_pdf" accept=".pdf" style="margin-bottom:15px;">

            <div style="display:flex; justify-content: space-between;">
                <input type="submit" name="upload_pdf_course" value="📤 Télécharger" class="tutor-btn tutor-btn-primary">
                <button type="button" class="tutor-btn tutor-btn-secondary" onclick="document.getElementById('uploadCourseModal').style.display='none'">❌ Fermer</button>
            </div>
        </form>
    </div>

    <script>
    function togglePriceField(select) {
        document.getElementById('priceField').style.display = select.value === 'paid' ? 'block' : 'none';
    }
    </script>

    <!-- 🔥 Cours WordPress -->
    <?php
    $args = [
        'post_type'      => 'tutor_course',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'author'         => $current_user_id,
    ];
    $results = get_posts( $args );

    if ( empty( $results ) ) {
        echo '<p>Aucun cours WordPress trouvé.</p>';
    }
    ?>

    <div class="tutor-dashboard-content-inner">
        <div class="tutor-grid tutor-grid-3">
            <?php
            global $post;
            foreach ( $results as $post ) :
                setup_postdata( $post );

                $tutor_course_img = get_tutor_course_thumbnail_src();
                $course_edit_link = tutor_utils()->course_edit_link( $post->ID );
                $chapters = tutor_utils()->get_sections_by_course_id( $post->ID );
                $chapter_count = is_array( $chapters ) ? count( $chapters ) : 0;
                $is_free = tutor_utils()->is_course_free( $post->ID );
                $course_type = $is_free ? 'Gratuit' : 'Payant';

                $file_id = get_post_meta( $post->ID, 'attached_course_file', true );
                $file_url = $file_id ? wp_get_attachment_url( $file_id ) : '';

                $pdf_acf_id = get_field( 'pdf_du_cours', $post->ID );
                $pdf_acf_url = $pdf_acf_id ? wp_get_attachment_url( $pdf_acf_id ) : '';
                ?>
                <div class="tutor-card tutor-course-card" style="margin-bottom: 20px;">
                    <a href="<?php echo esc_url( get_the_permalink() ); ?>" class="tutor-d-block">
                        <div class="tutor-ratio tutor-ratio-16x9">
                            <img class="tutor-card-image-top" src="<?php echo empty( $tutor_course_img ) ? esc_url( $placeholder_img ) : esc_url( $tutor_course_img ); ?>" alt="<?php the_title(); ?>" loading="lazy">
                        </div>
                    </a>

                    <div class="tutor-card-body">
                        <div class="tutor-meta tutor-mb-8">
                            <span>🗓️ <?php echo esc_html( get_the_date() ); ?> à <?php echo esc_html( get_the_time() ); ?></span>
                        </div>

                        <div class="tutor-course-name tutor-fs-6 tutor-fw-bold tutor-mb-16">
                            <a href="<?php echo esc_url( get_the_permalink() ); ?>"><?php the_title(); ?></a>
                        </div>

                        <div class="tutor-meta tutor-color-muted tutor-mb-8">
                            📚 Chapitres : <strong><?php echo esc_html( $chapter_count ); ?></strong>
                        </div>

                        <div class="tutor-meta tutor-color-muted tutor-mb-8">
                            💰 Type : <strong><?php echo esc_html( $course_type ); ?></strong>
                        </div>

                        <div class="tutor-meta tutor-color-muted tutor-mb-8">
                            👤 Par : <strong><?php echo esc_html( get_the_author() ); ?></strong>
                        </div>

                        <?php if ( $file_url ) : ?>
                            <div class="tutor-meta tutor-color-muted tutor-mb-8">
                                📎 <a href="<?php echo esc_url( $file_url ); ?>" target="_blank">Fichier principal</a>
                            </div>
                        <?php endif; ?>

                        <?php if ( $pdf_acf_url ) : ?>
                            <div class="tutor-meta tutor-color-muted tutor-mb-8">
                                📄 <a href="<?php echo esc_url( $pdf_acf_url ); ?>" target="_blank">PDF Détail</a>
                            </div>
                        <?php endif; ?>

                        <div class="tutor-d-flex tutor-align-center tutor-justify-between tutor-mt-16">
                            <a href="<?php echo esc_url( $course_edit_link ); ?>" class="tutor-btn tutor-btn-outline-primary">✏️ Modifier</a>
                            <a href="#" class="tutor-btn tutor-btn-danger" onclick="return confirm('Voulez-vous vraiment supprimer ce cours ?');">🗑️ Supprimer</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; wp_reset_postdata(); ?>
        </div>
    </div>
</div>