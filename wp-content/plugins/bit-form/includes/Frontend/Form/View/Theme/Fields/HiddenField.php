<?php

namespace BitCode\BitForm\Frontend\Form\View\Theme\Fields;

use BitCode\BitForm\Core\Util\FrontendHelpers;

class HiddenField
{
  public static function init($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error = null, $value = null)
  {
    $inputWrapper = new ClassicInputWrapper($field, $rowID, $field_name, $form_atomic_Cls_map, $formID, $error, $value);
    $input = self::field($field, $rowID, $form_atomic_Cls_map, $value);
    return $inputWrapper->wrapper($input, true, true);
  }

  private static function field($field, $rowID, $form_atomic_Cls_map, $value)
  {
    $fieldHelpers = new ClassicFieldHelpers($field, $rowID, $form_atomic_Cls_map);

    $sugg = '';
    $req = $fieldHelpers->required();
    $disabled = $fieldHelpers->disabled();
    $readonly = $fieldHelpers->readonly();
    $inputMode = '';
    $name = $fieldHelpers->name();
    $ac = $fieldHelpers->autocomplete();
    $ph = $fieldHelpers->placeholder();
    $value = $fieldHelpers->value();
    $bfFrontendFormIds = FrontendHelpers::$bfFrontendFormIds;
    $contentCount = count($bfFrontendFormIds);

    $onClickAttr = self::onClickAttr($field, $rowID);

    return <<<HiddenField
    <div 
      {$fieldHelpers->getCustomAttributes('inp-fld-wrp')}
      class="{$fieldHelpers->getAtomicCls('inp-fld-wrp')} {$fieldHelpers->getCustomClasses('inp-fld-wrp')}"
    >
      <input
        {$fieldHelpers->getCustomAttributes('fld')}
        id="{$rowID}-{$contentCount}"
        class="{$fieldHelpers->getAtomicCls('fld')} {$fieldHelpers->getCustomClasses('fld')}"
        type="{$field->typ}"
        {$req}
        {$disabled}
        {$readonly}
        {$ph}
        {$ac}
        {$inputMode}
        {$name}
        {$value}
        {$onClickAttr}
      />
    </div>
    {$sugg}
HiddenField;
  }

  private static function onClickAttr($field, $rowID)
  {
    $onClickAttr = '';
    $dateType = ['date', 'datetime-local', 'month', 'time', 'week'];
    //field type check
    if (in_array($field->typ, $dateType)) {
      $onClickAttr = "onclick='this.showPicker();'";
    }
    return $onClickAttr;
  }
}
