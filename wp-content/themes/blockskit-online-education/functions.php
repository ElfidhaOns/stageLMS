<?php

/**
 * Blockskit Online Education functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Blockskit Online Education
 */

define( 'BLOCKSKIT_ONLINE_EDUCATION_URL', trailingslashit( get_stylesheet_directory_uri() ) );

if ( ! function_exists( 'blockskit_online_education_setup' ) ) {

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	function blockskit_online_education_setup() {

		// Make theme available for translation.
		load_theme_textdomain( 'blockskit-online-education', get_stylesheet_directory() . '/languages' );
	}
}
add_action( 'after_setup_theme', 'blockskit_online_education_setup' );

/**
 * Enqueue scripts and styles
 */
function blockskit_online_education_scripts() {
	$version = wp_get_theme( 'blockskit-online-education' )->get( 'Version' );
	// enqueue parent style
	wp_enqueue_style('blockskit-online-education-parent-style', get_template_directory_uri() . '/style.css');
}
add_action( 'wp_enqueue_scripts', 'blockskit_online_education_scripts' );

/**
 * Label update filter.
 */
function blockskit_online_education_block_pattern_categories_filter( $block_pattern_categories ){
	$block_pattern_categories['theme']['label'] = __( 'Theme Patterns', 'blockskit-online-education' );
	return $block_pattern_categories;
}
add_filter( 'blockskit_base_block_pattern_categories', 'blockskit_online_education_block_pattern_categories_filter' );