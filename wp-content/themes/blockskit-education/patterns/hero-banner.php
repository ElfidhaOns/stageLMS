<?php
/**
 * Title: Hero Banner
 * Slug: blockskit-education/hero-banner
 * Categories: all, banner
 * Keywords: hero banner
 */
$blockskit_education_images = array(
    BLOCKSKIT_EDUCATION_URL . 'assets/images/home-banner-img1.jpg',
);
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"200px","bottom":"0","right":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small"}},"color":{"gradient":"linear-gradient(230deg,rgb(120,73,228) 24%,rgb(80,53,242) 100%)"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-background" style="background:linear-gradient(230deg,rgb(120,73,228) 24%,rgb(80,53,242) 100%);padding-top:200px;padding-right:var(--wp--preset--spacing--x-small);padding-bottom:0;padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"var:preset|spacing|x-large","left":"var:preset|spacing|xx-large"}}}} -->
<div class="wp-block-columns"><!-- wp:column {"verticalAlignment":"top","style":{"spacing":{"padding":{"bottom":"0","top":"113px"}}}} -->
<div class="wp-block-column is-vertically-aligned-top" style="padding-top:113px;padding-bottom:0"><!-- wp:heading {"level":6,"style":{"elements":{"link":{"color":{"text":"var:preset|color|secondary"}}}},"textColor":"secondary"} -->
<h6 class="wp-block-heading has-secondary-color has-text-color has-link-color has-x-small-font-size"><?php esc_html_e( '100% BEST LEARNING PLATFORM', 'blockskit-education' ); ?></h6>
<!-- /wp:heading -->

<!-- wp:heading {"style":{"spacing":{"margin":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|small"}},"elements":{"link":{"color":{"text":"var:preset|color|pure-white"}}},"typography":{"fontStyle":"normal","fontWeight":"700","lineHeight":"1.19"}},"textColor":"pure-white","fontSize":"xxx-large"} -->
<h2 class="wp-block-heading has-pure-white-color has-text-color has-link-color has-xxx-large-font-size" style="margin-top:var(--wp--preset--spacing--x-small);margin-bottom:var(--wp--preset--spacing--small);font-style:normal;font-weight:700;line-height:1.19"><?php echo wp_kses_post( html_entity_decode( esc_html__( 'Learn &amp; Improve Your Education' , 'blockskit-education' ) ) ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|pure-white"}}}},"textColor":"pure-white"} -->
<p class="has-pure-white-color has-text-color has-link-color"><?php esc_html_e( 'ncidunt sunt animi! Eleifend fames fringilla cumque, dui scelerisque minim Ex necessitatibus irure. Veritatis augue dis, molestias, magni scelerisque proident quia, pellentesque fames fringilla cumque.', 'blockskit-education' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"},"blockGap":"var:preset|spacing|small"}}} -->
<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--large)"><!-- wp:button {"style":{"spacing":{"padding":{"left":"30px","right":"30px","top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}},"border":{"radius":"10px","width":"0px","style":"none"},"typography":{"fontSize":"15px"}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:15px"><a class="wp-block-button__link wp-element-button" style="border-style:none;border-width:0px;border-radius:10px;padding-top:var(--wp--preset--spacing--x-small);padding-right:30px;padding-bottom:var(--wp--preset--spacing--x-small);padding-left:30px"><?php esc_html_e( 'LEARN MORE', 'blockskit-education' ); ?></a></div>
<!-- /wp:button -->

<!-- wp:button {"style":{"spacing":{"padding":{"left":"27px","right":"27px","top":"12px","bottom":"12px"}},"border":{"radius":"10px","width":"0px","style":"none"},"typography":{"fontSize":"15px"}},"className":"is-style-bk-button-secondary"} -->
<div class="wp-block-button has-custom-font-size is-style-bk-button-secondary" style="font-size:15px"><a class="wp-block-button__link wp-element-button" style="border-style:none;border-width:0px;border-radius:10px;padding-top:12px;padding-right:27px;padding-bottom:12px;padding-left:27px"><?php esc_html_e( 'FIND COURSES', 'blockskit-education' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"bottom","width":"520px"} -->
<div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:520px"><!-- wp:group {"style":{"border":{"radius":{"topLeft":"50%","topRight":"50%","bottomLeft":"0%","bottomRight":"0%"},"width":"0px","style":"none"},"spacing":{"padding":{"top":"var:preset|spacing|xx-small","bottom":"0","left":"var:preset|spacing|xx-small","right":"var:preset|spacing|xx-small"}}},"backgroundColor":"primary","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-primary-background-color has-background" style="border-style:none;border-width:0px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-left-radius:0%;border-bottom-right-radius:0%;padding-top:var(--wp--preset--spacing--xx-small);padding-right:var(--wp--preset--spacing--xx-small);padding-bottom:0;padding-left:var(--wp--preset--spacing--xx-small)"><!-- wp:image {"id":662,"width":"505px","height":"auto","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":{"topLeft":"50%","topRight":"50%","bottomLeft":"0%","bottomRight":"0%"}}}} -->
<figure class="wp-block-image size-full is-resized has-custom-border"><img src="<?php echo esc_url($blockskit_education_images[0]); ?>" alt="" class="wp-image-662" style="border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-left-radius:0%;border-bottom-right-radius:0%;width:505px;height:auto"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->