<?php

namespace BitCode\BitForm\Widgets;

use BitCode\BitForm\GlobalHelper;
use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!\defined('ABSPATH')) {
  exit;
}

class BitFormElementorWidget extends Widget_Base
{
  public function get_name()
  {
    return 'bitform-widget';
  }

  public function get_keywords()
  {
    return [
      'bitform',
      'bitforms',
      'form',
      'bitform widget',
      'form widget',
      'contact forms',
      'elementor form',
      'bit form',
      'form builder',
      'shortcode',
    ];
  }

  public function get_title()
  {
    return __('Bit Form', 'bit-form');
  }

  public function get_icon()
  {
    return 'eicon-form-horizontal';
  }

  public function get_script_depends()
  {
    return ['bitform-style'];
  }

  public function get_categories()
  {
    return ['general'];
  }

  protected function _register_controls()
  {
    $this->start_controls_section(
      'section_bit_form',
      [
        'label' => __('Bit Form', 'bit-form'),
      ]
    );

    $this->add_control(
      'form_id',
      [
        'label'       => esc_html__('Select Forms', 'bit-form'),
        'type'        => Controls_Manager::SELECT2,
        'placeholder' => esc_html__('Select a Bitform', 'bit-form'),
        'label_block' => true,
        'multiple'    => false,
        'options'     => GlobalHelper::getForms(),
        'default'     => 0,
        'render_type' => 'template',
      ]
    );

    $this->end_controls_section();
  }

  /**
   * Render widget output on the frontend.
   *
   * @return void
   */
  protected function render()
  {
    $settings = $this->get_settings_for_display();
    $form_id = $settings['form_id'];

    if (empty($form_id)) {
      return;
    }

    $css_path = BITFORMS_UPLOAD_BASE_URL . '/form-styles/bitform-' . $form_id . '-formid.css';

    wp_dequeue_style('bitform-style-css');

    if (is_admin() && \Elementor\Plugin::$instance->editor->is_edit_mode()) {
      echo "<link rel='stylesheet' id='bitform-style-css' href='{$css_path}' type='text/css' media='all' />";
    } else {
      wp_enqueue_style('bitform-style', $css_path, [], time());
    }

    $form_html = do_shortcode("[bitform id='$form_id']");

    if (\Elementor\Plugin::$instance->editor->is_edit_mode()) {
      echo '<div class="bitform-preview">';
      echo $form_html;
      echo '</div>';
    } else {
      echo $form_html;
    }
  }
}
