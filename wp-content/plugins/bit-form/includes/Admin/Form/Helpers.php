<?php

namespace BitCode\BitForm\Admin\Form;

use BitCode\BitForm\Core\Cryptography\Cryptography;
use BitCode\BitForm\Core\Database\FormEntryModel;
use BitCode\BitForm\Core\Util\Log;
use Exception;
use WP_Error;

class Helpers
{
  private static $encryptEntryIds = [];

  public static $file_upload_types = ['file-up', 'advanced-file-up'];

  public static $repeated_array_type_data_fields = ['check', 'image-select'];

  public static function filterNullEntries($entries)
  {
    $filteredEntries = [];
    foreach ($entries as $entry) {
      foreach ($entry as $key => $value) {
        if (is_null($value)) {
          unset($entry->$key);
        }
      }
      if (count((array) $entry)) {
        $filteredEntries[] = $entry;
      }
    }
    return $filteredEntries;
  }

  public static function scriptLoader($src, $id, $instanceObj = null, $selector = '', $attrs = [], $integrity = null, $contentId = '')
  {
    $attributes = wp_json_encode($attrs);
    $instObj = '';
    if ($instanceObj) {
      $instObj .= <<<INST
script.onload = function () {
  bfSelect('#{$contentId}').querySelectorAll('{$selector}').forEach(function(fld){
    $instanceObj;
  });
}
INST;
    }
    return <<<LOAD_SECRIPT
var script =  document.createElement('script'), integrity = '$integrity', attrs = $attributes, id = '$id';
script.src = '$src';
script.id = id;
if(integrity){
  script.integrity = integrity;
  script.crossOrigin = 'anonymous';
}
if(attrs){
  Object.entries(attrs).forEach(function([key, val]){
    script.setAttribute(key,val);
  })
}
$instObj;
var bodyElm = document.body;
var alreadyExistScriptElm = bodyElm ? bodyElm.querySelector('script#$id'):null;
if(alreadyExistScriptElm){
  bodyElm.removeChild(alreadyExistScriptElm)
}
if(!(window.recaptcha && id === 'g-recaptcha-script')){
  bodyElm.appendChild(script);
}
LOAD_SECRIPT;
  }

  public static function minifyJs($input)
  {
    if ('' === trim($input)) {
      return $input;
    }
    return preg_replace(
      [
        '/ {2,}/',
        '/\s*=\s*/',
        '/\s*,\s*/',
        '/\s+(?=\(|\{|\:|\?)|\t|(?:\r?\n[ \t]*)+/s'
      ],
      [' ', '=', ',', ''],
      $input
    );
  }

  public static function removeJsSingleLineComments($code)
  {
    $length = strlen($code);
    $result = '';
    $inString = false;
    $inTemplate = false;
    $inRegex = false;
    $escapeNext = false;
    $stringDelimiter = '';
    $i = 0;

    while ($i < $length) {
      $char = $code[$i];
      $nextChar = $i + 1 < $length ? $code[$i + 1] : '';

      if ($escapeNext) {
        $result .= $char;
        $escapeNext = false;
      } elseif ($inString) {
        $result .= $char;
        if ('\\' === $char) {
          $escapeNext = true;
        } elseif ($char === $stringDelimiter) {
          $inString = false;
        }
      } elseif ($inTemplate) {
        $result .= $char;
        if ('\\' === $char) {
          $escapeNext = true;
        } elseif ('`' === $char) {
          $inTemplate = false;
        }
      } elseif ($inRegex) {
        $result .= $char;
        if ('\\' === $char) {
          $escapeNext = true;
        } elseif ('/' === $char) {
          $inRegex = false;
        }
      } else {
        if ('"' === $char || "'" === $char) {
          $inString = true;
          $stringDelimiter = $char;
          $result .= $char;
        } elseif ('`' === $char) {
          $inTemplate = true;
          $result .= $char;
        } elseif ('/' === $char) {
          if ('/' === $nextChar) {
            // Single-line comment found
            while ($i < $length && "\n" !== $code[$i]) {
              $i++;
            }
            continue; // skip until newline
          } elseif ('*' === $nextChar) {
            // Block comment start, just copy it (optional, depending on need)
            $result .= $char;
          } else {
            // Assume division or regex
            $result .= $char;
          }
        } else {
          $result .= $char;
        }
      }
      $i++;
    }

    return $result;
  }

  /**
   * @method name : saveFile
   * @description : save js/css field to disk
   * @param  : $path => like(dirName/css), $fileName => main.css, $script
   * @return : boolean
   */
  public static function saveFile($path, $fileName, $script, $fileOpenMode = 'a')
  {
    try {
      $rootDir = BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR;
      $path = trim($path, '/');
      $pathArr = explode('/', $path); // like "fieldname/user => [Fieldname, user]
      foreach ($pathArr as $d) {
        $rootDir .= $d . DIRECTORY_SEPARATOR;
        if (!realpath($rootDir)) {
          mkdir($rootDir);
        }
      }
      $fullPath = $rootDir . $fileName;
      $file = fopen($fullPath, $fileOpenMode);
      if (false === $file) {
        throw new Exception("Failed to open file: $fullPath");
      }
      if (false === fwrite($file, $script)) {
        throw new Exception("Failed to write to file: $fullPath");
      }
      if (false === fclose($file)) {
        throw new Exception("Failed to close file: $fullPath");
      }
      return true;
    } catch (\Exception $e) {
      Log::debug_log($e->getMessage());
      return false;
    }
  }

  /**
   * @method name : generatePathDirOrFile
   * @dscription : generate path for js/css file
   * @params : $path => like(dirName/css)
   * @return : a string of full path
   */
  public static function generatePathDirOrFile($path)
  {
    $rootDir = BITFORMS_CONTENT_DIR . DIRECTORY_SEPARATOR;
    $path = trim($path, '/');
    $pathArr = explode('/', $path); // like "fieldname/user => [Fieldname, user]
    foreach ($pathArr as $d) {
      $rootDir .= $d . DIRECTORY_SEPARATOR;
    }
    return rtrim($rootDir, DIRECTORY_SEPARATOR);
  }

  public static function fileRead($filePath)
  {
    $fileContent = '';
    if (file_exists($filePath)) {
      $file = fopen($filePath, 'r');
      $fileContent .= fread($file, filesize($filePath));
      fclose($file);
    }
    return $fileContent;
  }

  public static function getDataFromNestedPath($data, $key)
  {
    $keys = explode('->', $key);
    $lastKey = array_pop($keys);
    $dataType = is_array($data) ? 'array' : (is_object($data) ? 'object' : '');
    if ('array' === $dataType) {
      return self::accessFromArray($data, $keys, $lastKey);
    }
    if ('object' === $dataType) {
      return self::accessFromObject($data, $keys, $lastKey);
    }
  }

  private static function accessFromObject($data, $keys, $lastKey)
  {
    foreach ($keys as $k) {
      if (!property_exists($data, $k)) {
        return null;
      }
      $data = $data->$k;
    }
    return isset($data->$lastKey) ? $data->$lastKey : null;
  }

  private static function accessFromArray($data, $keys, $lastKey)
  {
    foreach ($keys as $k) {
      if (!array_key_exists($k, $data)) {
        return null;
      }
      $data = $data[$k];
    }
    return isset($data[$lastKey]) ? $data[$lastKey] : null;
  }

  public static function setDataToNestedPath($data, $key, $value)
  {
    $keys = explode('->', $key);
    $lastKey = array_pop($keys);
    foreach ($keys as $k) {
      if (!array_key_exists($k, $data)) {
        $data->$k = (object) [];
      }
      $data = $data->$k;
    }
    $data->$lastKey = json_decode(wp_json_encode($value));
    ;
    return $data;
  }

  public static function property_exists_nested($obj, $path = '', $valToCheck = null, $checkNegativeVal = 0)
  {
    $path = explode('->', $path);
    $current = $obj;
    foreach ($path as $key) {
      if (is_object($current)) {
        if (property_exists($current, $key)) {
          $current = $current->{$key};
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    if (isset($valToCheck)) {
      if ($checkNegativeVal) {
        return $current !== $valToCheck;
      }
      return $current === $valToCheck;
    }
    return true;
  }

  public static function validateEntryTokenAndUser($entryToken, $entryId)
  {
    // check if the user is logged in
    if (is_user_logged_in()) {
      $user = wp_get_current_user();
      if (in_array('administrator', $user->roles) || current_user_can('manage_bitform')) {
        return true;
      }
      $entryModel = new FormEntryModel();
      $entry = $entryModel->get(
        'id, user_id, form_id',
        [
          'id'      => $entryId,
          'user_id' => $user->ID
        ]
      );
      if (!is_wp_error($entry) && !empty($entry)) {
        return true;
      }
    }
    // check if the entry token is valid
    if (isset($entryToken) && $entryToken) {
      $decryptEntryId = Cryptography::decrypt($entryToken, AUTH_SALT);
      if ($decryptEntryId === $entryId) {
        return true;
      }
    }

    return false;
  }

  public static function validateFormEntryEditPermission($formId, $entryId)
  {
    if (is_user_logged_in()) {
      if (current_user_can('manage_bitform') || current_user_can('bitform_entry_edit') || current_user_can('edit_post')) {
        return true;
      }
    }
    return false;
  }

  public static function honeypotEncryptedToken($str)
  {
    $token = base64_encode(base64_encode($str));
    return $token;
  }

  public static function csrfEecrypted()
  {
    $secretKey = get_option('bf_csrf_secret');
    if (!$secretKey) {
      $secretKey = 'bf-' . time();
      update_option('bf_csrf_secret', $secretKey);
    }
    $tIdenty = base64_encode(random_bytes(32));
    $csrf = \base64_encode(\hash_hmac('sha256', $tIdenty, $secretKey, true));
    return ['csrf' => $csrf, 't_identity' => $tIdenty];
  }

  public static function csrfDecrypted($identy, $token)
  {
    $secretKey = get_option('bf_csrf_secret');
    return \hash_equals(
      \base64_encode(\hash_hmac('sha256', $identy, $secretKey, true)),
      $token
    );
  }

  public static function checkIsIntArr($arr)
  {
    $filteredArray = array_filter($arr, 'is_numeric');
    $intArray = array_map('intval', $filteredArray);
    $result = count($arr) === count($intArray);

    return $result;
  }

  public static function getTruncatedEncryptToken($str, $length = 20)
  {
    $token = hash_hmac('sha256', $str, AUTH_SALT);
    return substr($token, 0, $length);
  }

  public static function getEncryptedEntryId($entryId)
  {
    if (!isset(self::$encryptEntryIds[$entryId])) {
      self::$encryptEntryIds[$entryId] = self::getTruncatedEncryptToken($entryId);
    }
    return self::$encryptEntryIds[$entryId];
  }

  public static function PDFPassHash($entryId)
  {
    return abs(crc32($entryId));
  }

  public static function encryptBinaryData($plaintext)
  {
    $iv = openssl_random_pseudo_bytes(16);
    $encrypted = openssl_encrypt($plaintext, 'AES-256-CBC', BITFORMS_SECRET_KEY, OPENSSL_RAW_DATA, $iv);

    return bin2hex($iv . $encrypted);
  }

  public static function decryptBinaryData($encryptedHex)
  {
    $decoded = hex2bin($encryptedHex);
    $iv = substr($decoded, 0, 16);
    $cipherText = substr($decoded, 16);

    return openssl_decrypt($cipherText, 'AES-256-CBC', BITFORMS_SECRET_KEY, OPENSSL_RAW_DATA, $iv);
  }

  /**
     * Sanitize user-provided HTML content by removing dangerous JS code
     * while allowing all valid HTML/CSS.
     *
     * @param string $html Raw HTML from user input
     * @return string Sanitized safe HTML
     */
  public static function sanitizeUserHTML(string $html): string
  {
    // Remove <script> tags entirely
    $html = preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', '', $html);

    // Remove event handler attributes (like onclick, onload, etc.)
    $html = preg_replace_callback('/<[^>]+>/i', function ($matches) {
      return preg_replace('/\s*on\w+\s*=\s*"[^"]*"/i', '', $matches[0]); // on*=""
    }, $html);

    $html = preg_replace_callback('/<[^>]+>/i', function ($matches) {
      return preg_replace("/\s*on\w+\s*=\s*'[^']*'/i", '', $matches[0]); // on*=''
    }, $html);

    // Remove javascript: from href or src
    $html = preg_replace('/(href|src)\s*=\s*([\'"])\s*javascript:[^\'"]*\2/i', '', $html);

    return $html;
  }

  public static function sanitizeUrlParam($param)
  {
    if (preg_match('/\.\.?\//', $param)) {
      return new WP_Error('parameter_error', 'Invalid URL parameter');
    }

    $param = htmlspecialchars(trim($param), ENT_QUOTES, 'UTF-8');
    return sanitize_text_field($param);
  }

  public static function replaceFieldsDefaultErrorMsg($fields)
  {
    try {
      $appSettings = get_option('bitform_app_settings', (object) []);
      if (!isset($appSettings->globalMessages) || !isset($appSettings->globalMessages->err)) {
        return $fields;
      }

      $globalErrMsg = $appSettings->globalMessages->err;
      $templateCache = []; // [type_errKey] => compiled template

      foreach ($fields as $fieldKey => $field) {
        if (!isset($field->err) || !is_object($field->err)) {
          continue;
        }

        foreach ($field->err as $errKey => $errObj) {
          if (!isset($errObj->dflt)) {
            continue;
          }

          $cacheKey = $field->typ . '_' . $errKey;
          $template = null;

          // 1. Check Cache First
          if (isset($templateCache[$cacheKey])) {
            $template = $templateCache[$cacheKey];
          } else {
            // 2. Lookup from globalErrMsg
            if (isset($globalErrMsg->{$field->typ}->{$errKey})) {
              $template = $globalErrMsg->{$field->typ}->{$errKey};
            } elseif (isset($globalErrMsg->{$errKey}) && !is_object($globalErrMsg->{$errKey})) {
              $template = $globalErrMsg->{$errKey};
            }

            // 3. Cache it
            if ($template) {
              $templateCache[$cacheKey] = $template;
            }
          }

          // 4. Apply Template if Found
          if ($template) {
            $finalMsg = self::replaceShortcodeInErrorMsg($template, $field);
            // 5. Sanitize final output
            $field->err->{$errKey}->dflt = wp_kses_post($finalMsg);
          }
        }

        $fields->{$fieldKey} = $field;
      }
    } catch (Exception $e) {
      Log::debug_log('Error In Replacing Fields Default Error messages: ' . $e->getMessage());
    }
    return $fields;
  }

  //replace shortcode in error message
  public static function replaceShortcodeInErrorMsg($msg, $field)
  {
    $shortcodes = [
      '${field.label}'          => isset($field->lbl) ? $field->lbl : '',
      '${field.minimum}'        => isset($field->mn) ? $field->mn : '',
      '${field.maximum}'        => isset($field->mx) ? $field->mx : '',
      '${field.minimum_file}'   => isset($field->config->minFile) ? $field->config->minFile : '',
      '${field.maximum_file}'   => isset($field->config->maxFile) ? $field->config->maxFile : '',
      '${field.maximum_size}'   => isset($field->config->maxSize) ? $field->config->maxSize : '',
      '${field.minimum_amount}' => isset($field->config->minValue) ? $field->config->minValue : '',
      '${field.maximum_amount}' => isset($field->config->maxValue) ? $field->config->maxValue : '',
    ];
    $msg = str_replace(array_keys($shortcodes), array_values($shortcodes), $msg);
    return $msg;
  }
}
