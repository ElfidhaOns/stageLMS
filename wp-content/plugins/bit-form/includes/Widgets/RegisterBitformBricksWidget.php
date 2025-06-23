<?php

namespace BitCode\BitForm\Widgets;

if (!defined('ABSPATH')) {
  exit;
}

/**
 * RegisterBitformBricksWidget
 *
 * This class is used to register the Bitform widget for Bricks Builder.
 *
 * @package BitCode\BitForm\Widgets
 * @since 1.0.0
 *
 * @version 1.0.0
 *
 * @description
 * This class is used to register the Bitform widget for Bricks Builder.
 * It includes the necessary methods to register the widget and set its controls.
 *
 * @see https://academy.bricksbuilder.io/article/create-your-own-elements/
 */
class RegisterBitformBricksWidget
{
  public static function register_widgets()
  {
    $bitformBricksWidgetFile = BITFORMS_PLUGIN_DIR_PATH . 'includes/Widgets/BitformBricksWidget.php';
    if (file_exists($bitformBricksWidgetFile) && class_exists('\Bricks\Elements')) {
      \Bricks\Elements::register_element($bitformBricksWidgetFile);
    }
  }
}
