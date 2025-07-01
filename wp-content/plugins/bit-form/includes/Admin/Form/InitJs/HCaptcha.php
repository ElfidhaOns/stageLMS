<?php

namespace BitCode\BitForm\Admin\Form\InitJs;

class HCaptcha
{
  public static function init()
  {
    return <<<HCAPTCHA_INIT_JS
    const src = 'https://js.hcaptcha.com/1/api.js?recaptchacompat=off';
    const attrs = {
      async: true,
      defer: true,
    };
    const id = 'bit_hcaptcha_script-' + contentId; 
    const initFunc = function(){
      bf_globals[contentId].inits[fldKey] = getFldInstance(contentId, fldKey, fldType)
    };

    scriptLoader(src, '', attrs, id, initFunc);
HCAPTCHA_INIT_JS;
  }
}
