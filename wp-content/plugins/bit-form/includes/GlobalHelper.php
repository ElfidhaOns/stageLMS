<?php

namespace BitCode\BitForm;

if (!\defined('ABSPATH')) {
  exit;
}

class GlobalHelper
{
  /**
   * Get all forms.
   *
   * @return array
   */
  public static function getForms()
  {
    global $wpdb;

    $allForms = $wpdb->get_results("SELECT forms.id,forms.entries as fm_entries,forms.form_name,forms.status,forms.views,forms.created_at,COUNT(entries.id) as entries FROM `{$wpdb->prefix}bitforms_form` as forms LEFT JOIN `{$wpdb->prefix}bitforms_form_entries` as entries ON forms.id = entries.form_id GROUP BY forms.id");

    if (is_wp_error($allForms)) {
      return $allForms;
    }
    $forms = array_reduce($allForms, function ($carry, $form) {
      $carry[$form->id] = $form->form_name . ' (' . $form->id . ')';
      return $carry;
    }, []);

    if (!empty($forms)) {
      $forms[0] = __('Select a Bitform', 'bit-form');
    }
    return $forms;
  }
}
