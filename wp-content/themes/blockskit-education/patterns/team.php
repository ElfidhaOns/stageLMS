<?php
/**
 * Title: Team
 * Slug: blockskit-education/team
 * Categories: all, team
 * Keywords: team
 */
$blockskit_education_images = array(
    BLOCKSKIT_EDUCATION_URL . 'assets/images/team-img1.jpg',
    BLOCKSKIT_EDUCATION_URL . 'assets/images/team-img2.jpg',
    BLOCKSKIT_EDUCATION_URL . 'assets/images/team-img3.jpg',
    BLOCKSKIT_EDUCATION_URL . 'assets/images/team-img4.jpg',
);
?>

<!-- wp:group {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"var:preset|spacing|x-large","padding":{"top":"var:preset|spacing|xx-large","bottom":"var:preset|spacing|xx-large","left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}},"color":{"background":"#5b3bee"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#5b3bee;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xx-large);padding-right:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--xx-large);padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":""} -->
<div class="wp-block-column"></div>
<!-- /wp:column -->

<!-- wp:column {"width":"65%"} -->
<div class="wp-block-column" style="flex-basis:65%"><!-- wp:heading {"textAlign":"center","level":6,"style":{"elements":{"link":{"color":{"text":"var:preset|color|accent"}}}},"textColor":"accent"} -->
<h6 class="wp-block-heading has-text-align-center has-accent-color has-text-color has-link-color has-x-small-font-size"><?php esc_html_e( 'OUR TEAM', 'blockskit-education' ); ?></h6>
<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|small","left":"0","right":"0"}},"typography":{"fontStyle":"normal","fontWeight":"700","lineHeight":"1.1"}},"textColor":"pure-white"} -->
<h2 class="wp-block-heading has-text-align-center has-pure-white-color has-text-color" style="margin-top:var(--wp--preset--spacing--x-small);margin-right:0;margin-bottom:var(--wp--preset--spacing--small);margin-left:0;font-style:normal;font-weight:700;line-height:1.1"><?php echo wp_kses_post( html_entity_decode( esc_html__( 'Best Instructor &amp; Teachers' , 'blockskit-education' ) ) ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|pure-white"}}}},"textColor":"pure-white"} -->
<p class="has-text-align-center has-pure-white-color has-text-color has-link-color"><?php esc_html_e( 'Egestas nec orci labore distinctio irure ornare montes hic erat illo sapien? Beatae, laboriosam, eiusmod consequat suscipit rem nascetur perspiciatis, voluptatem congue.', 'blockskit-education' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"width":""} -->
<div class="wp-block-column"></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"var:preset|spacing|medium","left":"var:preset|spacing|medium"}}}} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}},"border":{"radius":"20px"},"color":{"gradient":"linear-gradient(180deg,rgb(142,122,255) 40%,rgb(255,255,255) 40%)"}},"className":"is-style-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-default has-background" style="border-radius:20px;background:linear-gradient(180deg,rgb(142,122,255) 40%,rgb(255,255,255) 40%);padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--small)"><!-- wp:image {"id":325,"width":"230px","sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"50%","color":"#8d7aff","width":"8px"}}} -->
<figure class="wp-block-image aligncenter size-full is-resized has-custom-border"><img src="<?php echo esc_url($blockskit_education_images[0]); ?>" alt="" class="has-border-color wp-image-325" style="border-color:#8d7aff;border-width:8px;border-radius:50%;width:230px"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"textAlign":"center","level":5,"style":{"spacing":{"margin":{"top":"var:preset|spacing|small","bottom":"0"}},"typography":{"fontStyle":"normal","fontWeight":"700"}}} -->
<h5 class="wp-block-heading has-text-align-center" style="margin-top:var(--wp--preset--spacing--small);margin-bottom:0;font-style:normal;font-weight:700"><?php esc_html_e( 'Christane Eve', 'blockskit-education' ); ?></h5>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"5px","bottom":"var:preset|spacing|small"}}},"fontSize":"x-small"} -->
<p class="has-text-align-center has-x-small-font-size" style="margin-top:5px;margin-bottom:var(--wp--preset--spacing--small)"><?php esc_html_e( 'Account Teacher', 'blockskit-education' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"pure-white","iconColorValue":"#FFFFFF","customIconBackgroundColor":"#8d7aff","iconBackgroundColorValue":"#8d7aff","size":"has-small-icon-size","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|xx-small","left":"var:preset|spacing|xx-small"}}},"className":"is-style-default","layout":{"type":"flex","justifyContent":"center"}} -->
<ul class="wp-block-social-links has-small-icon-size has-icon-color has-icon-background-color is-style-default"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"pinterest"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}},"border":{"radius":"20px"},"color":{"gradient":"linear-gradient(180deg,rgb(88,209,205) 40%,rgb(255,255,255) 40%)"}},"className":"is-style-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-default has-background" style="border-radius:20px;background:linear-gradient(180deg,rgb(88,209,205) 40%,rgb(255,255,255) 40%);padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--small)"><!-- wp:image {"id":326,"width":"230px","sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"50%","width":"8px"}},"borderColor":"secondary-accent"} -->
<figure class="wp-block-image aligncenter size-full is-resized has-custom-border"><img src="<?php echo esc_url($blockskit_education_images[1]); ?>" alt="" class="has-border-color has-secondary-accent-border-color wp-image-326" style="border-width:8px;border-radius:50%;width:230px"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"textAlign":"center","level":5,"style":{"spacing":{"margin":{"top":"var:preset|spacing|small","bottom":"0"}},"typography":{"fontStyle":"normal","fontWeight":"700"}}} -->
<h5 class="wp-block-heading has-text-align-center" style="margin-top:var(--wp--preset--spacing--small);margin-bottom:0;font-style:normal;font-weight:700"><?php esc_html_e( 'Edward Norton', 'blockskit-education' ); ?></h5>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"5px","bottom":"var:preset|spacing|small"}},"elements":{"link":{"color":{"text":"var:preset|color|body"}}}},"textColor":"body","fontSize":"x-small"} -->
<p class="has-text-align-center has-body-color has-text-color has-link-color has-x-small-font-size" style="margin-top:5px;margin-bottom:var(--wp--preset--spacing--small)"><?php esc_html_e( 'Science Teacher', 'blockskit-education' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"pure-white","iconColorValue":"#FFFFFF","iconBackgroundColor":"secondary-accent","iconBackgroundColorValue":"#58d0cb","size":"has-small-icon-size","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|xx-small","left":"var:preset|spacing|xx-small"}}},"className":"is-style-default","layout":{"type":"flex","justifyContent":"center"}} -->
<ul class="wp-block-social-links has-small-icon-size has-icon-color has-icon-background-color is-style-default"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"pinterest"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}},"border":{"radius":"20px"},"color":{"gradient":"linear-gradient(180deg,rgb(248,188,36) 40%,rgb(255,255,255) 40%)"}},"className":"is-style-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-default has-background" style="border-radius:20px;background:linear-gradient(180deg,rgb(248,188,36) 40%,rgb(255,255,255) 40%);padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--small)"><!-- wp:image {"id":327,"width":"230px","sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"50%","width":"8px"}},"borderColor":"secondary"} -->
<figure class="wp-block-image aligncenter size-full is-resized has-custom-border"><img src="<?php echo esc_url($blockskit_education_images[2]); ?>" alt="" class="has-border-color has-secondary-border-color wp-image-327" style="border-width:8px;border-radius:50%;width:230px"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"textAlign":"center","level":5,"style":{"spacing":{"margin":{"top":"var:preset|spacing|small","bottom":"0"}},"typography":{"fontStyle":"normal","fontWeight":"700"}}} -->
<h5 class="wp-block-heading has-text-align-center" style="margin-top:var(--wp--preset--spacing--small);margin-bottom:0;font-style:normal;font-weight:700"><?php esc_html_e( 'Jane Seymour', 'blockskit-education' ); ?></h5>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"5px","bottom":"var:preset|spacing|small"}}},"fontSize":"x-small"} -->
<p class="has-text-align-center has-x-small-font-size" style="margin-top:5px;margin-bottom:var(--wp--preset--spacing--small)"><?php esc_html_e( 'Business Teacher', 'blockskit-education' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"pure-white","iconColorValue":"#FFFFFF","iconBackgroundColor":"secondary","iconBackgroundColorValue":"#f8bc24","size":"has-small-icon-size","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|xx-small","left":"var:preset|spacing|xx-small"}}},"className":"is-style-default","layout":{"type":"flex","justifyContent":"center"}} -->
<ul class="wp-block-social-links has-small-icon-size has-icon-color has-icon-background-color is-style-default"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"pinterest"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}},"border":{"radius":"20px"},"color":{"gradient":"linear-gradient(180deg,rgb(247,129,118) 40%,rgb(255,255,255) 40%)"}},"className":"is-style-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-default has-background" style="border-radius:20px;background:linear-gradient(180deg,rgb(247,129,118) 40%,rgb(255,255,255) 40%);padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--small)"><!-- wp:image {"id":328,"width":"230px","sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"50%","width":"8px"}},"borderColor":"accent"} -->
<figure class="wp-block-image aligncenter size-full is-resized has-custom-border"><img src="<?php echo esc_url($blockskit_education_images[3]); ?>" alt="" class="has-border-color has-accent-border-color wp-image-328" style="border-width:8px;border-radius:50%;width:230px"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"textAlign":"center","level":5,"style":{"spacing":{"margin":{"top":"var:preset|spacing|small","bottom":"0"}},"typography":{"fontStyle":"normal","fontWeight":"700"}}} -->
<h5 class="wp-block-heading has-text-align-center" style="margin-top:var(--wp--preset--spacing--small);margin-bottom:0;font-style:normal;font-weight:700"><?php esc_html_e( 'Maanya Hardson', 'blockskit-education' ); ?></h5>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"5px","bottom":"var:preset|spacing|small"}}},"fontSize":"x-small"} -->
<p class="has-text-align-center has-x-small-font-size" style="margin-top:5px;margin-bottom:var(--wp--preset--spacing--small)"><?php esc_html_e( 'Art And Tech', 'blockskit-education' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"pure-white","iconColorValue":"#FFFFFF","iconBackgroundColor":"accent","iconBackgroundColorValue":"#f78176","size":"has-small-icon-size","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|xx-small","left":"var:preset|spacing|xx-small"}}},"className":"is-style-default","layout":{"type":"flex","justifyContent":"center"}} -->
<ul class="wp-block-social-links has-small-icon-size has-icon-color has-icon-background-color is-style-default"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"pinterest"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|x-large"}}}} -->
<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--x-large)"><!-- wp:button {"style":{"spacing":{"padding":{"left":"30px","right":"30px","top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}},"border":{"radius":"10px","width":"0px","style":"none"},"typography":{"fontSize":"15px"}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:15px"><a class="wp-block-button__link wp-element-button" style="border-style:none;border-width:0px;border-radius:10px;padding-top:var(--wp--preset--spacing--x-small);padding-right:30px;padding-bottom:var(--wp--preset--spacing--x-small);padding-left:30px"><?php esc_html_e( 'VIEW ALL TEAMS', 'blockskit-education' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->