<?php
/**
 * Modèle du tableau de bord frontend
 *
 * @package Tutor\Templates
 * @subpackage Dashboard
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 1.4.3
 */

use Tutor\Models\CourseModel;
use Tutor\Models\WithdrawModel;

$response = wp_remote_get('http://127.0.0.1:5000/ping');

if (is_wp_error($response)) {
    echo 'Erreur de connexion à Flask : ' . $response->get_error_message();
} else {
    $body = wp_remote_retrieve_body($response);
    echo 'Réponse Flask : ' . $body;
}

if ( tutor_utils()->get_option( 'enable_profile_completion' ) ) {
	$profile_completion = tutor_utils()->user_profile_completion();
	$is_instructor      = tutor_utils()->is_instructor( null, true );
	$total_count        = count( $profile_completion );
	$incomplete_count   = count(
		array_filter(
			$profile_completion,
			function( $data ) {
				return ! $data['is_set'];
			}
		)
	);
	$complete_count     = $total_count - $incomplete_count;

	if ( $is_instructor ) {
		if ( isset( $total_count ) && isset( $incomplete_count ) && $incomplete_count <= $total_count ) {
			?>
			<div class="tutor-profile-completion tutor-card tutor-px-32 tutor-py-24 tutor-mb-40">
				<div class="tutor-row tutor-gx-0">
					<div class="tutor-col-lg-7 <?php echo tutor_utils()->is_instructor() ? 'tutor-profile-completion-content-admin' : ''; ?>">
						<div class="tutor-fs-5 tutor-fw-medium tutor-color-black">
							<?php esc_html_e( 'Complétez votre profil', 'tutor' ); ?>
						</div>

						<div class="tutor-row tutor-align-center tutor-mt-12">
							<div class="tutor-col">
								<div class="tutor-row tutor-gx-1">
									<?php for ( $i = 1; $i <= $total_count; $i++ ) : ?>
										<div class="tutor-col">
											<div class="tutor-progress-bar" style="--tutor-progress-value: <?php echo $i > $complete_count ? 0 : 100; ?>%; height: 8px;"><div class="tutor-progress-value" area-hidden="true"></div></div>
										</div>
									<?php endfor; ?>
								</div>
							</div>

							<div class="tutor-col-auto">
								<span class="tutor-round-box tutor-my-n20">
									<i class="tutor-icon-trophy" area-hidden="true"></i>
								</span>
							</div>
						</div>

						<div class="tutor-fs-6 tutor-mt-20">
							<?php
								$profile_complete_text = __( 'Veuillez compléter le profil', 'tutor' );
							if ( $complete_count > ( $total_count / 2 ) && $complete_count < $total_count ) {
								$profile_complete_text = __( 'Vous y êtes presque', 'tutor' );
							} elseif ( $complete_count === $total_count ) {
								$profile_complete_text = __( 'Merci d\'avoir complété votre profil', 'tutor' );
							}
								$profile_complete_status = $profile_complete_text;
							?>

							<span class="tutor-color-muted"><?php echo esc_html( $profile_complete_status ); ?> :</span>
							<span><?php echo esc_html( $complete_count . '/' . $total_count ); ?></span>
						</div>
					</div>

					<div class="tutor-col-lg-1 tutor-text-center tutor-my-24 tutor-my-lg-n24">
						<div class="tutor-vr tutor-d-none tutor-d-lg-inline-flex"></div>
						<div class="tutor-hr tutor-d-flex tutor-d-lg-none"></div>
					</div>

					<div class="tutor-col-lg-4 tutor-d-flex tutor-flex-column tutor-justify-center">
						<?php
						$i           = 0;
						$monetize_by = tutils()->get_option( 'monetize_by' );
						foreach ( $profile_completion as $key => $data ) {
							if ( '_tutor_withdraw_method_data' === $key ) {
								if ( 'free' === $monetize_by ) {
									continue;
								}
							}
							$is_set = $data['is_set'];
							?>
								<div class="tutor-d-flex tutor-align-center<?php echo $i < ( count( $profile_completion ) - 1 ) ? ' tutor-mb-8' : ''; ?>">
									<?php if ( $is_set ) : ?>
										<span class="tutor-icon-circle-mark-line tutor-color-success tutor-mr-8"></span>
									<?php else : ?>
										<span class="tutor-icon-circle-times-line tutor-color-warning tutor-mr-8"></span>
									<?php endif; ?>

									<span class="<?php echo $is_set ? 'tutor-color-secondary' : 'tutor-color-muted'; ?>">
										<a class="tutor-btn tutor-btn-ghost tutor-has-underline" href="<?php echo esc_url( $data['url'] ); ?>">
											<?php echo esc_html( $data['text'] ); ?>
										</a>
									</span>
								</div>
								<?php
								$i++;
						}
						?>
					</div>
				</div>
			</div>
			<?php
		}
	} else {
		if ( ! $profile_completion['_tutor_profile_photo']['is_set'] ) {
			$alert_message = sprintf(
				'<div class="tutor-alert tutor-primary tutor-mb-20">
					<div class="tutor-alert-text">
						<span class="tutor-alert-icon tutor-fs-4 tutor-icon-circle-info tutor-mr-12"></span>
						<span>
							%s
						</span>
					</div>
					<div class="alert-btn-group">
						<a href="%s" class="tutor-btn tutor-btn-sm">' . __( 'Cliquez ici', 'tutor' ) . '</a>
					</div>
				</div>',
				$profile_completion['_tutor_profile_photo']['text'],
				tutor_utils()->tutor_dashboard_url( 'settings' )
			);

			echo $alert_message; //phpcs:ignore
		}
	}
}
?>

<div class="tutor-fs-5 tutor-fw-medium tutor-color-black tutor-text-capitalize tutor-mb-24 tutor-dashboard-title"><?php esc_html_e( 'Tableau de bord', 'tutor' ); ?></div>
<div class="tutor-dashboard-content-inner">

	<?php
	$user_id = get_current_user_id();
	$is_instructor = current_user_can( tutor()->instructor_role );

	// Initialize variables
	$enrolled_course_count = 0;
	$completed_course_count = 0;
	$active_course_count = 0;
	$total_students = 0;
	$my_courses = array();
	$earning_sum = null;

	if ( $is_instructor ) {
		// INSTRUCTOR DASHBOARD - Show only instructor-related data
		$total_students = tutor_utils()->get_total_students_by_instructor( $user_id );
		$my_courses = CourseModel::get_courses_by_instructor( $user_id, CourseModel::STATUS_PUBLISH );
		$earning_sum = WithdrawModel::get_withdraw_summary( $user_id );
	} else {
		// STUDENT DASHBOARD - Show only student-related data
		$enrolled_course = tutor_utils()->get_enrolled_courses_by_user( $user_id, array( 'private', 'publish' ) );
		$completed_courses = tutor_utils()->get_completed_courses_ids_by_user();
		$active_courses = tutor_utils()->get_active_courses_by_user( $user_id );
		
		$enrolled_course_count = $enrolled_course ? $enrolled_course->post_count : 0;
		$completed_course_count = count( $completed_courses );
		$active_course_count = is_object( $active_courses ) && $active_courses->have_posts() ? $active_courses->post_count : 0;
	}

	$status_translations = array(
		'publish' => __( 'Publié', 'tutor' ),
		'pending' => __( 'En attente', 'tutor' ),
		'trash'   => __( 'Corbeille', 'tutor' ),
	);
	?>

	<div class="tutor-row tutor-gx-lg-4">
		<?php if ( ! $is_instructor ) : ?>
			<!-- STUDENT DASHBOARD CARDS -->
			<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
				<div class="tutor-card">
					<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
						<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
							<i class="tutor-icon-book-open" area-hidden="true"></i>
						</span>
						<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block"><?php echo esc_html( $enrolled_course_count ); ?></div>
						<div class="tutor-fs-7 tutor-color-secondary"><?php esc_html_e( 'Cours inscrits', 'tutor' ); ?></div>
						<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto"><?php echo esc_html( $enrolled_course_count ); ?></div>
					</div>
				</div>
			</div>

			<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
				<div class="tutor-card">
					<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
						<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
							<i class="tutor-icon-mortarboard-o" area-hidden="true"></i>
						</span>
						<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block"><?php echo esc_html( $active_course_count ); ?></div>
						<div class="tutor-fs-7 tutor-color-secondary"><?php esc_html_e( 'Cours actifs', 'tutor' ); ?></div>
						<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto"><?php echo esc_html( $active_course_count ); ?></div>
					</div>
				</div>
			</div>

			<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
				<div class="tutor-card">
					<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
						<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
							<i class="tutor-icon-trophy" area-hidden="true"></i>
						</span>
						<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block"><?php echo esc_html( $completed_course_count ); ?></div>
						<div class="tutor-fs-7 tutor-color-secondary"><?php esc_html_e( 'Cours terminés', 'tutor' ); ?></div>
						<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto"><?php echo esc_html( $completed_course_count ); ?></div>
					</div>
				</div>
			</div>
		<?php else : ?>
			<!-- INSTRUCTOR DASHBOARD CARDS -->
			<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
				<div class="tutor-card">
					<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
						<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
							<i class="tutor-icon-user-graduate" area-hidden="true"></i>
						</span>
						<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block"><?php echo esc_html( $total_students ); ?></div>
						<div class="tutor-fs-7 tutor-color-secondary"><?php esc_html_e( 'Nombre total d\'étudiants', 'tutor' ); ?></div>
						<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto"><?php echo esc_html( $total_students ); ?></div>
					</div>
				</div>
			</div>

			<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
				<div class="tutor-card">
					<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
						<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
							<i class="tutor-icon-box-open" area-hidden="true"></i>
						</span>
						<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block"><?php echo esc_html( count( $my_courses ) ); ?></div>
						<div class="tutor-fs-7 tutor-color-secondary"><?php esc_html_e( 'Nombre total de cours', 'tutor' ); ?></div>
						<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto"><?php echo esc_html( count( $my_courses ) ); ?></div>
					</div>
				</div>
			</div>

			<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
				<div class="tutor-card">
					<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
						<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
							<i class="tutor-icon-coins" area-hidden="true"></i>
						</span>
						<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block"><?php echo wp_kses_post( tutor_utils()->tutor_price( $earning_sum->total_income ) ); ?></div>
						<div class="tutor-fs-7 tutor-color-secondary"><?php esc_html_e( 'Revenus totaux', 'tutor' ); ?></div>
						<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto"><?php echo wp_kses_post( tutor_utils()->tutor_price( $earning_sum->total_income ) ); ?></div>
					</div>
				</div>
			</div>
		<?php endif; ?>
	</div>
</div>

<?php
/**
 * Show course progress only for students
 */
if ( ! $is_instructor ) :
	$placeholder_img = tutor()->url . 'assets/images/placeholder.svg';
	$courses_in_progress = tutor_utils()->get_active_courses_by_user( get_current_user_id() );
	?>

	<?php if ( $courses_in_progress && $courses_in_progress->have_posts() ) : ?>
		<div class="tutor-frontend-dashboard-course-progress">
			<div class="tutor-fs-5 tutor-fw-medium tutor-color-black tutor-text-capitalize tutor-mb-24">
				<?php esc_html_e( 'Cours en cours', 'tutor' ); ?>
			</div>
			<?php
			while ( $courses_in_progress->have_posts() ) :
				$courses_in_progress->the_post();
				$tutor_course_img = get_tutor_course_thumbnail_src();
				$course_rating    = tutor_utils()->get_course_rating( get_the_ID() );
				$course_progress  = tutor_utils()->get_course_completed_percent( get_the_ID(), 0, true );
				$completed_number = 0 === (int) $course_progress['completed_count'] ? 1 : (int) $course_progress['completed_count'];
				?>
				<div class="tutor-course-progress-item tutor-card tutor-mb-20">
					<div class="tutor-row tutor-gx-0">
						<div class="tutor-col-lg-4">
							<div class="tutor-ratio tutor-ratio-3x2">
								<img class="tutor-card-image-left" src="<?php echo empty( $tutor_course_img ) ? esc_url( $placeholder_img ) : esc_url( $tutor_course_img ); ?>" alt="<?php the_title(); ?>" loading="lazy">
							</div>
						</div>

						<div class="tutor-col-lg-8 tutor-align-self-center">
							<div class="tutor-card-body">
							<?php if ( $course_rating ) : ?>
									<div class="tutor-ratings tutor-mb-4">
										<?php tutor_utils()->star_rating_generator( $course_rating->rating_avg ); ?>
										<div class="tutor-ratings-count">
											<?php echo esc_html( number_format( $course_rating->rating_avg, 2 ) ); ?>
										</div>
									</div>
								<?php endif; ?>

								<div class="tutor-course-progress-item-title tutor-fs-5 tutor-fw-medium tutor-color-black tutor-mb-12">
								<?php the_title(); ?>
								</div>

								<div class="tutor-d-flex tutor-fs-7 tutor-mb-32">
									<span class="tutor-color-muted tutor-mr-4"><?php esc_html_e( 'Leçons terminées :', 'tutor' ); ?></span>
									<span class="tutor-fw-medium tutor-color-black">
										<span>
										<?php echo esc_html( $course_progress['completed_count'] ); ?>
										</span>
									<?php esc_html_e( 'sur', 'tutor' ); ?>
										<span>
										<?php echo esc_html( $course_progress['total_count'] ); ?>
										</span>
									<?php echo esc_html( _n( 'leçon', 'leçons', $completed_number, 'tutor' ) ); ?>
									</span>
								</div>

								<div class="tutor-row tutor-align-center">
									<div class="tutor-col">
										<div class="tutor-progress-bar tutor-mr-16" style="--tutor-progress-value:<?php echo esc_attr( $course_progress['completed_percent'] ); ?>%"><span class="tutor-progress-value" area-hidden="true"></span></div>
									</div>

									<div class="tutor-col-auto">
										<span class="progress-percentage tutor-fs-7 tutor-color-muted">
											<span class="tutor-fw-medium tutor-color-black ">
											<?php echo esc_html( $course_progress['completed_percent'] . '%' ); ?>
											</span><?php esc_html_e( 'Complété', 'tutor' ); ?>
										</span>
									</div>
								</div>
							</div>
						</div>
						<a class="tutor-stretched-link" href="<?php the_permalink(); ?>"></a>
					</div>
				</div>
				<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		</div>
	<?php endif; ?>
<?php endif; ?>

<?php
/**
 * Show instructor courses only for instructors
 */
if ( $is_instructor ) {
	$instructor_course = tutor_utils()->get_courses_for_instructors( get_current_user_id() );

	if ( count( $instructor_course ) ) {
		$course_badges = array(
			'publish' => 'success',
			'pending' => 'warning',
			'trash'   => 'danger',
		);
		?>
		<div class="popular-courses-heading-dashboard tutor-d-flex tutor-justify-between tutor-mb-24 tutor-mt-md-40 tutor-mt-0">
			<span class="tutor-fs-5 tutor-fw-medium tutor-color-black"><?php esc_html_e( 'Mes cours', 'tutor' ); ?></span>
			<a class="tutor-btn tutor-btn-ghost" href="<?php echo esc_url( tutor_utils()->tutor_dashboard_url( 'my-courses' ) ); ?>">
				<?php esc_html_e( 'Voir tout', 'tutor' ); ?>
			</a>
		</div>
		
		<div class="tutor-dashboard-content-inner">
			<div class="tutor-table-responsive">
				<table class="tutor-table table-popular-courses">
					<thead>
						<tr>
							<th>
								<?php esc_html_e( 'Nom du cours', 'tutor' ); ?>
							</th>
							<th>
								<?php esc_html_e( 'Inscrits', 'tutor' ); ?>
							</th>
							<th>
								<?php esc_html_e( 'Note', 'tutor' ); ?>
							</th>
						</tr>
					</thead>

					<tbody>
						<?php if ( is_array( $instructor_course ) && count( $instructor_course ) ) : ?>
							<?php
							foreach ( $instructor_course as $course ) :
								$enrolled      = tutor_utils()->count_enrolled_users_by_course( $course->ID );
								$course_status = isset( $status_translations[ $course->post_status ] ) ? $status_translations[ $course->post_status ] : __( $course->post_status, 'tutor' ); //phpcs:ignore
								$course_rating = tutor_utils()->get_course_rating( $course->ID );
								$course_badge  = isset( $course_badges[ $course->post_status ] ) ? $course_badges[ $course->post_status ] : 'dark';
								?>
								<tr>
									<td>
										<a href="javascript:void(0);" class="open-course-modal" 
   data-id="<?php echo esc_attr( $course->ID ); ?>" 
   data-title="<?php echo esc_attr( $course->post_title ); ?>"
   data-author="<?php echo esc_attr( get_the_author_meta( 'display_name', $course->post_author ) ); ?>"
   data-date="<?php echo esc_attr( get_the_date( '', $course->ID ) ); ?>"
   data-file="<?php echo esc_url( wp_get_attachment_url( get_post_meta( $course->ID, 'attached_course_file', true ) ) ); ?>"
   data-delete="<?php echo esc_url( get_delete_post_link( $course->ID, '', true ) ); ?>">
   <?php echo esc_html( $course->post_title ); ?>
</a>
									</td>
									<td>
										<?php echo esc_html( $enrolled ); ?>
									</td>
									<td>
										<?php tutor_utils()->star_rating_generator_v2( $course_rating->rating_avg, null, true ); ?>
									</td>
								</tr>
							<?php endforeach; ?>
							<?php else : ?>
								<tr>
									<td colspan="100%" class="column-empty-state">
										<?php tutor_utils()->tutor_empty_state( tutor_utils()->not_found_text() ); ?>
									</td>
								</tr>
							<?php endif; ?>
					</tbody>
				</table>
                <div id="courseDetailsModal" style="display:none; position:fixed; top:10%; left:50%; transform:translateX(-50%); z-index:9999; background:#fff; border:1px solid #ccc; padding:20px; border-radius:10px; width:500px; box-shadow:0 0 20px rgba(0,0,0,0.3);">
    <h3 id="modalCourseTitle">Titre du cours</h3>
    <p><strong>Auteur :</strong> <span id="modalCourseAuthor"></span></p>
    <p><strong>Date :</strong> <span id="modalCourseDate"></span></p>
    <p><strong>Fichier :</strong> <a href="#" target="_blank" id="modalCourseFile">Voir le fichier</a></p>

    <div style="display: flex; justify-content: space-between; margin-top: 20px;">
        <a id="modalEditBtn" href="#" class="tutor-btn tutor-btn-outline-primary">✏️ Modifier</a>
        <a id="modalDeleteBtn" href="#" class="tutor-btn tutor-btn-danger">🗑️ Supprimer</a>
    </div>

    <div style="text-align:right; margin-top:10px;">
        <button onclick="document.getElementById('courseDetailsModal').style.display='none'" class="tutor-btn tutor-btn-secondary">❌ Fermer</button>
    </div>
</div>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".open-course-modal");

    links.forEach(link => {
        link.addEventListener("click", function() {
            const title = this.dataset.title;
            const author = this.dataset.author;
            const date = this.dataset.date;
            const file = this.dataset.file;
            const id = this.dataset.id;
            const deleteUrl = this.dataset.delete;

            document.getElementById("modalCourseTitle").innerText = title;
            document.getElementById("modalCourseAuthor").innerText = author;
            document.getElementById("modalCourseDate").innerText = date;
            document.getElementById("modalCourseFile").href = file;

            document.getElementById("modalEditBtn").href = `/wp-admin/post.php?post=${id}&action=edit`;
            document.getElementById("modalDeleteBtn").href = deleteUrl;

            document.getElementById("courseDetailsModal").style.display = "block";
        });
    });
});
</script>

			</div>
		</div>
		<?php
	}
}
?>