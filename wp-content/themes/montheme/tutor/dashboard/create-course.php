<?php
/**
 * Frontend course create template
 *
 * @package Tutor\Templates
 * @subpackage Dashboard
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 1.4.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use TUTOR\Input;

get_tutor_header( true );

do_action( 'tutor_load_template_before', 'dashboard.create-course', null );

$course_id = Input::get( 'course_id', 0, Input::TYPE_INT );
$post      = get_post( $course_id ); //phpcs:ignore

setup_postdata( $post );

echo '<div style="padding:20px; background:#fffae5; border:1px solid #ccc; margin-bottom:20px;">👋 Hello World depuis create-course.php</div>';

do_action( 'tutor_frontend_course_builder' );

do_action( 'tutor_load_template_after', 'dashboard.create-course', null );

get_tutor_footer( true );
