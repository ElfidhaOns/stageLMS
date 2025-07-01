<?php

namespace BitCode\BitForm\Frontend\Form\View\Conversational\Fields;

use BitCode\BitForm\Core\Util\FrontendHelpers;

class HiddenField
{
  public static function init($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error = null, $value = null)
  {
    $inputWrapper = new ConversationalInputWrapper($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error, $value);
    $input = self::field($formID, $field, $rowID, $form_atomic_Cls_map, $value);
    return $inputWrapper->wrapper($input);
  }

  private static function field($formID, $field, $rowID, $form_atomic_Cls_map, $value)
  {
    $fieldHelpers = new ConversationalFieldHelpers($formID, $field, $rowID, $form_atomic_Cls_map);
    $sugg = '';
    $inputMode = '';
    $name = $fieldHelpers->name();
    $ph = $fieldHelpers->placeholder();
    $value = $fieldHelpers->value();
    $list = '';
    $bfFrontendFormIds = FrontendHelpers::$bfFrontendFormIds;
    $contentCount = count($bfFrontendFormIds);

    if (property_exists($field, 'suggestions') && count($field->suggestions) > 0) {
      $list = "list='{$rowID}-{$contentCount}-datalist'";
      $sugg .= "<datalist id='{$rowID}-{$contentCount}-datalist'>";
      foreach ($field->suggestions as $suggestion) {
        $val = (isset($suggestion->val) && !empty($suggestion->val)) ? $suggestion->val : $suggestion->lbl;
        $sugg .= "<option value='{$fieldHelpers->esc_attr($val)}'>{$fieldHelpers->esc_html($suggestion->lbl)}</option>";
      }
      $sugg .= '</datalist>';
    }

    if (property_exists($field, 'inputMode') && '' !== $field->inputMode) {
      $inputMode = "inputMode='{$fieldHelpers->esc_attr($field->inputMode)}'";
    }

    return <<<HiddenField
    <div 
      {$fieldHelpers->getCustomAttributes('inp-fld-wrp')}
      class="{$fieldHelpers->getConversationalCls('inp-fld-wrp')} {$fieldHelpers->getCustomClasses('inp-fld-wrp')}"
    >
      <input
        {$fieldHelpers->getCustomAttributes('fld')}
        id="{$rowID}-{$contentCount}"
        {$list}
        class="{$fieldHelpers->getConversationalCls('focus-elm')} {$fieldHelpers->getConversationalMultiCls('fld')} {$fieldHelpers->getCustomClasses('fld')}"
        type="{$field->typ}"   
        {$ph}
        {$inputMode}
        {$name}
        {$value}
      />
    </div>
    {$sugg}
HiddenField;
  }
}
