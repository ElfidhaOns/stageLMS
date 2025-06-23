<?php
/**
 * Title: Template Page
 * Slug: blockskit-education/template-page
 * Categories: template
 * Inserter: false
 */
$blockskit_education_images = array(
	BLOCKSKIT_EDUCATION_URL . 'assets/images/inner-banner-img1.png',
);
?>

<!-- wp:group {"tagName":"main","style":{"spacing":{"margin":{"top":"0px"},"padding":{"top":"0px","bottom":"var:preset|spacing|x-large"},"blockGap":"var:preset|spacing|x-large"}},"layout":{"type":"constrained"}} -->
<main class="wp-block-group" style="margin-top:0px;padding-top:0px;padding-bottom:var(--wp--preset--spacing--x-large)"><!-- wp:cover {"url":"<?php echo esc_url($blockskit_education_images[0]); ?>","id":79,"dimRatio":80,"overlayColor":"foreground","focalPoint":{"x":0.5,"y":0},"minHeight":480,"align":"full","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|xx-large"},"padding":{"top":"var:preset|spacing|xx-large","bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull" style="margin-bottom:var(--wp--preset--spacing--xx-large);padding-top:var(--wp--preset--spacing--xx-large);padding-bottom:var(--wp--preset--spacing--large);min-height:480px"><span aria-hidden="true" class="wp-block-cover__background has-foreground-background-color has-background-dim-80 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-79" alt="" src="<?php echo esc_url($blockskit_education_images[0]); ?>" style="object-position:50% 0%" data-object-fit="cover" data-object-position="50% 0%"/><div class="wp-block-cover__inner-container"><!-- wp:post-title {"textAlign":"center","level":1} /--></div></div>
<!-- /wp:cover -->

<!-- wp:post-featured-image /-->

<!-- wp:post-content {"layout":{"type":"default"}} /--></main>
<!-- /wp:group -->