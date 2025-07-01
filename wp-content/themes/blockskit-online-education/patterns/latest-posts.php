<?php
/**
 * Title: Latest Posts
 * Slug: blockskit-online-education/latest-posts
 * Categories: theme
 * Keywords: blog posts
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xx-large","bottom":"var:preset|spacing|xx-large","left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"},"margin":{"top":"0","bottom":"0"}}},"backgroundColor":"surface","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xx-large);padding-right:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--xx-large);padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--small)"><!-- wp:separator {"style":{"layout":{"selfStretch":"fixed","flexSize":"50px"}},"backgroundColor":"highlight"} -->
<hr class="wp-block-separator has-text-color has-highlight-color has-alpha-channel-opacity has-highlight-background-color has-background"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":6,"style":{"elements":{"link":{"color":{"text":"var:preset|color|highlight"}}}},"textColor":"highlight","fontSize":"x-small"} -->
<h6 class="wp-block-heading has-highlight-color has-text-color has-link-color has-x-small-font-size"><?php esc_html_e( 'LATEST BLOG', 'blockskit-online-education' ); ?></h6>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"500","lineHeight":"1.1"}},"fontSize":"xxx-large","fontFamily":"jost"} -->
<h2 class="wp-block-heading has-text-align-center has-jost-font-family has-xxx-large-font-size" style="font-style:normal;font-weight:500;line-height:1.1"><?php esc_html_e( 'Checkout Our Blogs', 'blockskit-online-education' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|large"}}},"fontFamily":"poppins"} -->
<p class="has-text-align-center has-poppins-font-family" style="margin-top:var(--wp--preset--spacing--small);margin-bottom:var(--wp--preset--spacing--large)"><?php esc_html_e( 'Cumque modi placeat ratione occaecat pariatur ultricies cillum!', 'blockskit-online-education' ); ?><br><?php esc_html_e( 'Vestibulum! Facilis hendrerit fusce accusamus sed volutpat.', 'blockskit-online-education' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:query {"queryId":17,"query":{"perPage":"3","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":false}} -->
<div class="wp-block-query"><!-- wp:post-template {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"className":"is-style-default","style":{"spacing":{"blockGap":"0"},"border":{"radius":"20px"}},"layout":{"type":"flex","orientation":"vertical"}} -->
<div class="wp-block-group is-style-default" style="border-radius:20px"><!-- wp:post-featured-image {"style":{"border":{"radius":{"topLeft":"15px","topRight":"15px","bottomLeft":"0px","bottomRight":"0px"}}}} /-->

<!-- wp:group {"style":{"border":{"radius":{"bottomLeft":"15px","bottomRight":"15px"}},"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"blockGap":"0"}},"backgroundColor":"pure-white","layout":{"inherit":false}} -->
<div class="wp-block-group has-pure-white-background-color has-background" style="border-bottom-left-radius:15px;border-bottom-right-radius:15px;padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--medium)"><!-- wp:post-title {"isLink":true,"style":{"typography":{"textTransform":"capitalize","fontStyle":"normal","fontWeight":"500","fontSize":"24px","letterSpacing":"0px"},"spacing":{"margin":{"bottom":"var:preset|spacing|x-small"}}},"fontFamily":"jost"} /-->

<!-- wp:post-excerpt {"moreText":"LEARN MORE..","excerptLength":13,"className":"link-no-underline","fontFamily":"poppins"} /--></div>
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