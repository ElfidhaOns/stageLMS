<?php
/**
 * Title: Latest Posts
 * Slug: blockskit-education/latest-posts
 * Categories: all, latest-posts
 * Keywords: latest-posts
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"var:preset|spacing|x-large","padding":{"top":"var:preset|spacing|xx-large","bottom":"var:preset|spacing|xx-large","left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}}},"backgroundColor":"surface","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xx-large);padding-right:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--xx-large);padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":""} -->
<div class="wp-block-column"></div>
<!-- /wp:column -->

<!-- wp:column {"width":"66%"} -->
<div class="wp-block-column" style="flex-basis:66%"><!-- wp:heading {"textAlign":"center","level":6,"style":{"elements":{"link":{"color":{"text":"var:preset|color|accent"}}}},"textColor":"accent"} -->
<h6 class="wp-block-heading has-text-align-center has-accent-color has-text-color has-link-color"><?php echo wp_kses_post( html_entity_decode( esc_html__( 'BLOGS &amp; INSIGHTS' , 'blockskit-education' ) ) ); ?></h6>
<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|small","left":"0","right":"0"}}}} -->
<h2 class="wp-block-heading has-text-align-center" style="margin-top:var(--wp--preset--spacing--x-small);margin-right:0;margin-bottom:var(--wp--preset--spacing--small);margin-left:0"><?php echo wp_kses_post( html_entity_decode( esc_html__( 'Checkout Our Blogs &amp; Insights' , 'blockskit-education' ) ) ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php esc_html_e( 'Egestas nec orci labore distinctio irure ornare montes hic erat illo sapien? Beatae, laboriosam, eiusmod consequat suscipit rem nascetur perspiciatis, voluptatem congue.', 'blockskit-education' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"width":""} -->
<div class="wp-block-column"></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:query {"queryId":17,"query":{"perPage":"3","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":false}} -->
<div class="wp-block-query"><!-- wp:post-template {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"style":{"spacing":{"blockGap":"0"},"border":{"radius":"20px"}},"className":"is-style-default","layout":{"type":"flex","orientation":"vertical"}} -->
<div class="wp-block-group is-style-default" style="border-radius:20px"><!-- wp:post-featured-image {"style":{"border":{"radius":{"topLeft":"20px","topRight":"20px"}}}} /-->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"30px","right":"30px","bottom":"30px","left":"30px"},"blockGap":"0"},"border":{"radius":{"bottomLeft":"20px","bottomRight":"20px"}}},"backgroundColor":"pure-white","layout":{"inherit":false}} -->
<div class="wp-block-group has-pure-white-background-color has-background" style="border-bottom-left-radius:20px;border-bottom-right-radius:20px;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px"><!-- wp:post-title {"level":5,"isLink":true,"style":{"typography":{"fontStyle":"normal","fontWeight":"700","textTransform":"capitalize"},"spacing":{"margin":{"bottom":"var:preset|spacing|x-small"}}}} /-->

<!-- wp:post-excerpt {"moreText":"Learn More...","excerptLength":16,"style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}}},"className":"link-no-underline"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"align":"center","placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p class="has-text-align-center"></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->