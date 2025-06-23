<?php

namespace BitCode\BitForm\Widgets;

use BitCode\BitForm\Core\Form\FormHandler;

final class RegisterGutenBlock
{
  public function register()
  {
    if (!function_exists('register_block_type')) {
      return;
    }

    // self::gutenbergBlock();

    add_action('enqueue_block_editor_assets', function () {
      wp_enqueue_script(
        'bitforms-gutenberg-block',
        BITFORMS_ROOT_URI . '/assets/gutenberg-shortcode-block.js',
        BITFORMS_VERSION,
        true
      );

      $formHandler = FormHandler::getInstance();
      $all_forms = $formHandler->admin->getAllForm();
      $bitformsForms = apply_filters(
        'bitforms_localize_block_script',
        [
          'forms' => $all_forms
        ]
      );

      $bitformsForms['ajaxUrl'] = admin_url('admin-ajax.php');
      $bitformsForms['nonce'] = wp_create_nonce('bitforms_save');

      wp_localize_script('bitforms-gutenberg-block', 'bitformsBlock', $bitformsForms);
    });
  }

  public function shortcodeBlock()
  {
    wp_enqueue_script(
      'bitforms-gutenberg-block',
      BITFORMS_ROOT_URI . '/assets/gutenberg-shortcode-block.js',
      BITFORMS_VERSION,
      true
    );

    $formHandler = FormHandler::getInstance();
    $all_forms = $formHandler->admin->getAllForm();
    $bitformsForms = apply_filters(
      'bitforms_localize_block_script',
      [
        'forms' => $all_forms
      ]
    );

    wp_localize_script('bitforms-gutenberg-block', 'bitformsBlock', $bitformsForms);
  }

  public static function gutenbergBlock()
  {
    // TODO: Attention: This function is temporary block.
    // if (!function_exists('register_block_type')) {
    //   return;
    // }

    register_block_type('bitforms/form-shortcode', [
      'render_callback' => function ($attributes, $content) {
        $formId = $attributes['formID'] ?? '';
        // error_log('form id' . $formId);
        // error_log('content' . $content);

        if (empty($formId)) {
          return '';
        }

        // $formHandler = FormHandler::getInstance();
        // $form = $formHandler->admin->getForm($formId);
        // if (empty($form)) {
        //   return '';
        // }

        if ($content) {
          echo $content;
          return '';
        }
        $shortCode = '[bitform id=\'' . $formId . '\']';
        // error_log('shortcode' . $shortCode);
        return do_shortcode($shortCode);
      },
      'attributes' => [
        'formId' => [
          'type'    => 'string',
          'default' => '',
        ],
      ],
    ]);
  }
}
