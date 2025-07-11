<?php

namespace LearnPress\Gutenberg\Blocks\SingleCourseElements;

use LearnPress\Gutenberg\Utils\StyleAttributes;
use LearnPress\TemplateHooks\Course\SingleCourseTemplate;
use LP_Debug;
use Throwable;

/**
 * Class CourseMaterialBlockType
 *
 * Handle register, render block template
 */
class CourseMaterialBlockType extends AbstractCourseBlockType {
	public $block_name = 'course-material';

	public function get_supports(): array {
		return [
			'align'      => [ 'wide', 'full' ],
			'color'      => [
				'gradients'  => true,
				'background' => true,
				'text'       => true,
			],
			'typography' => [
				'fontSize'                    => true,
				'__experimentalFontWeight'    => true,
				'__experimentalTextTransform' => true,
			],
			'spacing'    => [
				'padding' => true,
				'margin'  => true,
			],
		];
	}

	/**
	 * Render content of block tag
	 *
	 * @param array $attributes | Attributes of block tag.
	 *
	 * @return false|string
	 */
	public function render_content_block_template( array $attributes, $content, $block ): string {
		$html = '';

		try {
			$courseModel = $this->get_course( $attributes, $block );
			$userModel   = $this->get_user();
			if ( ! $courseModel ) {
				return $html;
			}

			$html_material = SingleCourseTemplate::instance()->html_material( $courseModel, $userModel );

			if ( empty( $html_material ) ) {
				return $html;
			}

			$html = $this->get_output( $html_material );
		} catch ( Throwable $e ) {
			LP_Debug::error_log( $e );
		}

		return $html;
	}
}
