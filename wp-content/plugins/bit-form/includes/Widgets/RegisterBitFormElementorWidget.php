<?php

namespace BitCode\BitForm\Widgets;

if (!defined('ABSPATH')) {
  exit;
}

class RegisterBitFormElementorWidget
{
  public function __construct()
  {
    add_action('elementor/widgets/register', [$this, 'register_widgets']);
    add_action('elementor/editor/after_save', [$this, 'clearElementorCache']);
    add_action('update_option_elementor_css', [$this, 'clearElementorCache']);
  }

  public function register_widgets()
  {
    $this->enqueueAssets();

    if (file_exists(BITFORMS_PLUGIN_DIR_PATH . 'includes/Widgets/BitFormElementorWidget.php')) {
      require_once BITFORMS_PLUGIN_DIR_PATH . 'includes/Widgets/BitFormElementorWidget.php';
      \Elementor\Plugin::instance()->widgets_manager->register(new BitFormElementorWidget());
    }
  }

  private function enqueueAssets()
  {
    // add_action('elementor/frontend/after_enqueue_styles', function () {
    //   wp_enqueue_style('bitform-elementor-widget', BITFORMS_ASSET_URI . '/css/bitform-elementor-widget.css', [], '1.0.0');
    // });
  }

  public function clearElementorCache()
  {
    if (class_exists('\Elementor\Plugin')) {
      \Elementor\Plugin::$instance->files_manager->clear_cache();
    }
  }
}
