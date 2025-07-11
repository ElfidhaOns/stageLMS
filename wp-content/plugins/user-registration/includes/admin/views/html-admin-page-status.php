<?php
/**
 * Admin View: Page - Status
 *
 * @package UserRegistration
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$current_tab = ! empty( $_REQUEST['tab'] ) ? sanitize_title( wp_unslash( $_REQUEST['tab'] ) ) : 'logs'; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
$page_tabs   = array(
	'logs'        => __( 'Logs', 'user-registration' ),
	'system_info' => __( 'System Info', 'user-registration' ),
);

/**
 * Filter to add admin status tabs.
 *
 * @param array $page_tabs Tabs to be added.
 */
$page_tabs = apply_filters( 'user_registration_admin_status_tabs', $page_tabs );
?>
<hr class="wp-header-end">
<div class="ur-admin-page-topnav" id="ur-lists-page-topnav">
	<div class="ur-page-title__wrapper">
		<div class="ur-page-title__wrapper-logo">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
				<path d="M29.2401 2.25439C27.1109 3.50683 25.107 5.13503 23.3536 6.88846C21.6002 8.64188 19.972 10.6458 18.7195 12.6497C19.5962 14.4031 20.3477 16.1566 20.9739 18.0352C22.1011 15.6556 23.4788 13.5264 25.2323 11.6477V18.4109C25.2323 22.544 22.4769 26.1761 18.4691 27.3033H18.2185C17.9681 24.047 17.2166 20.9158 16.0894 17.91C14.4612 13.7769 11.9563 10.0196 8.69995 6.88846C6.94652 5.13503 4.94263 3.63208 2.81347 2.25439L2.3125 2.00388V18.2857C2.3125 24.9237 7.07177 30.6849 13.7097 31.8121H13.835C15.3379 32.0626 16.8409 32.0626 18.2185 31.8121H18.3438C24.9818 30.6849 29.7411 24.9237 29.7411 18.2857V2.00388L29.2401 2.25439ZM6.82128 18.2857V11.6477C10.7039 16.0313 13.0835 21.4168 13.5845 27.1781C9.57669 26.0509 6.82128 22.4188 6.82128 18.2857ZM15.9642 0C14.0855 0 12.5825 1.50291 12.5825 3.38158C12.5825 5.26025 14.0855 6.7632 15.9642 6.7632C17.8428 6.7632 19.3457 5.26025 19.3457 3.38158C19.3457 1.50291 17.8428 0 15.9642 0Z" fill="#475BB2"/>
			</svg>
		</div>
		<div class="ur-page-title__wrapper-menu">
			<ul class="ur-page-title__wrapper-menu__items">
			<?php
			foreach ( $page_tabs as $name => $label ) {
				echo '<li><a href="' . esc_url( admin_url( 'admin.php?page=user-registration-status&tab=' . $name ) ) . '" class=" ';
				if ( $current_tab === $name ) {
					echo 'current';
				}
				echo '">' . esc_html( $label ) . '</a>';
			}
			?>
			</ul>
		</div>
	</div>
</div>
	<?php
	switch ( $current_tab ) {
		case 'logs':
			UR_Admin_Status::status_logs();
			break;
		case 'system_info':
			UR_Admin_Status::system_info();
			break;
		default:
			break;
	}

	?>
</div>
