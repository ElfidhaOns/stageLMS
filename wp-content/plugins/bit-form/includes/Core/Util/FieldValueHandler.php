<?php

namespace BitCode\BitForm\Core\Util;

use BitCode\BitForm\Admin\Form\Helpers;
use BitCode\BitForm\Core\Form\FormManager;

final class FieldValueHandler
{
  public static function replaceFieldWithValue($stringToReplaceField, $fieldValues, $formID = null)
  {
    if (empty($stringToReplaceField)) {
      return $stringToReplaceField;
    }
    if (!is_string($stringToReplaceField)) {
      $stringToReplaceField = wp_json_encode($stringToReplaceField);
    }

    if ($formID) {
      $stringToReplaceField = self::replaceValueOfBf_all_data($stringToReplaceField, $fieldValues, $formID);
      $stringToReplaceField = self::replaceRepeaterFieldValue($stringToReplaceField, $fieldValues, $formID);
    }

    $stringToReplaceField = self::replaceSmartTagWithValue($stringToReplaceField);

    $fieldPattern = '/\${\w[^ ${}]*}/';
    preg_match_all($fieldPattern, $stringToReplaceField, $matchedField);
    if (empty($matchedField)) {
      return $stringToReplaceField;
    }
    $uniqueFieldsInStr = array_unique($matchedField[0]);
    foreach ($uniqueFieldsInStr as $key => $value) {
      $fieldName = substr($value, 2, strlen($value) - 3);
      $fieldValue = null;
      if (isset($fieldValues[$fieldName])) {
        $targetFieldValue = isset($fieldValues[$fieldName]['value']) ? $fieldValues[$fieldName]['value'] : $fieldValues[$fieldName];
        if ('array' === gettype($targetFieldValue) || 'object' === gettype($targetFieldValue)) {
          foreach ((array) $targetFieldValue as $singleTargetVal) {
            if (isset($fieldValue)) {
              if (is_numeric($fieldValue) && is_numeric($singleTargetVal)) {
                $fieldValue = $fieldValue + $singleTargetVal;
              } else {
                $fieldValue = "$fieldValue,  $singleTargetVal";
              }
            } else {
              $fieldValue = $singleTargetVal;
            }
          }
          // $fieldValue = wp_json_encode($targetFieldValue);
        } else {
          $fieldValue = strval($targetFieldValue);
        }
        $stringToReplaceField = str_replace($value, $fieldValue, $stringToReplaceField);
      } else {
        $stringToReplaceField = str_replace($value, '', $stringToReplaceField);
      }
    }

    // check if the string is a function like : "${_bf_calc(${b27-5}*10)}"
    // TO DO: Implement the function properly
    // if (self::isFunction($stringToReplaceField)) {
    //   $functionName = self::getFunctionName($stringToReplaceField);

    //   switch ($functionName) {
    //     case '_bf_calc':
    //       return self::getFunctionParameter($stringToReplaceField);
    //     case '_bf_count':
    //       return self::getCountValue($stringToReplaceField);
    //     default:
    //       return 0;
    //   }
    // }
    return $stringToReplaceField;
  }

  /**
   * Summary of getCountValue - get the count value from the function string "${_bf_count(item-1, item-2)}" => 2
   *
   * @param string $functionString
   * @return int
   */
  private static function getCountValue(string $functionString): int
  {
    $options = self::getFunctionParameter($functionString);
    $option = explode(',', $options);
    return count($option);
  }

  /**
   * Summary of getFunctionParameter - get the function parameter from the function string "${_bf_calc(2*10)}" => 2*10
   *
   * @param string $functionString
   * @return string
   */
  private static function getFunctionParameter(string $functionString): string
  {
    $regexPattern = '/\(([^)]*)\)/';
    preg_match($regexPattern, $functionString, $matches);
    return $matches[1];
  }

  /**
   * Summary of isFunction - check if the string is a function "${_bf_calc(${b27-5}*10)}" or not "${_bf_date}"
   *
   * @param string $functionString
   * @return bool true if the string is a function else false
   */
  private static function isFunction(string $functionString): bool
  {
    $regexPattern = '/\([^)]*\)/';
    return preg_match($regexPattern, $functionString);
  }

  /**
   * Summary of getFunctionName - get the function name from the function string "${_bf_calc(${b27-5}*10)}" => _bf_calc
   *
   * @param string $functionString
   * @return string
   */
  private static function getFunctionName(string $functionString): string
  {
    $regexPattern = '/\b([a-zA-Z_][a-zA-Z0-9_]*)\(/';
    preg_match($regexPattern, $functionString, $matches);
    return $matches[1];
  }

  public static function validateMailArry($emailAddresses, $fieldValues)
  {
    if (!is_array($emailAddresses)) {
      return [FieldValueHandler::replaceFieldWithValue($emailAddresses, $fieldValues)];
    }
    foreach ($emailAddresses as $key => $email) {
      if (!is_email($email)) {
        $email = FieldValueHandler::replaceFieldWithValue($email, $fieldValues);
        if (is_email($email)) {
          $emailAddresses[$key] = $email;
        }
      }
    }
    return $emailAddresses;
  }

  public static function replaceSmartTagWithValue($contentWithSmartTag)
  {
    $fieldPattern = '/(\${_[^{]*?)(?=\})}/';
    $matchPattern = preg_match_all($fieldPattern, $contentWithSmartTag, $matchedField);
    if (!$matchPattern) {
      return $contentWithSmartTag;
    }

    $ajaxRequest = false;
    if (isset($_REQUEST['action']) && 'bitforms_trigger_workflow' === $_REQUEST['action']) {
      $ajaxRequest = true;
    }

    foreach (array_unique($matchedField[0]) as $value) {
      $fieldName = trim(substr($value, 2, strlen($value) - 3));

      $matches = preg_match('/\("*([^\)]+"*)\)/', $value, $matchCustomFormat);

      $customValue = '';
      if ($matches) {
        $removeQuote = ["'", '"'];
        $customValue = str_replace($removeQuote, '', $matchCustomFormat[1]);
        $fieldName = str_replace($matchCustomFormat[0], '', $fieldName);
      }

      $tagFieldValues = SmartTags::getSmartTagValue($fieldName, $ajaxRequest, $customValue);
      $contentWithSmartTag = str_replace($value, $tagFieldValues, $contentWithSmartTag);
    }
    return $contentWithSmartTag;
  }

  public static function isEmpty($val)
  {
    if (empty($val) && !in_array($val, ['0', 0, 0.0], true)) {
      return true;
    }
    return false;
  }

  public static function formatFieldValueForMail($fields, $fieldValues = [])
  {
    $formattedFldValues = $fieldValues;
    $file_upload_types = Helpers::$file_upload_types;
    $repeated_array_type_data_fields = Helpers::$repeated_array_type_data_fields;
    foreach ($fields as $fldKey => $fldData) {
      if (in_array($fldData->typ, $file_upload_types)) {
        continue;
      }
      if (array_key_exists($fldKey, $fieldValues)) {
        $value = $fieldValues[$fldKey];
        // if (is_array($value)) {
        //   $formattedFldValues[$fldKey] = htmlspecialchars(implode(', ', $value));
        // } else {
        //   $formattedFldValues[$fldKey] = htmlspecialchars($value);
        // }

        // TODO: this code are temporary commented, need to change and remove the comment

        // if (is_array($value)) {
        //   $arrValue = '';
        //   foreach ($value as $v) {
        //     if (is_array($v)) {
        //       foreach ($v as $k1 => $v1) {
        //         if (array_key_exists($k1, $repeaterFieldKey)) {
        //           $oldValue = $repeaterFieldKey[$k1];
        //           if (is_array($v1) && in_array($fields->{$k1}->typ, $repeated_array_type_data_fields)) {
        //             $newValues = '[' . implode(', ', $v1) . '] ';
        //             if (!preg_match('/\[.*\]/', $oldValue)) {
        //               $oldValue = '[' . $oldValue . '] ';
        //             }
        //           } else {
        //             $newValues = $v1;
        //           }
        //           $repeaterFieldKey[$k1] = $oldValue . ', ' . $newValues;
        //         } else {
        //           if (!empty($v1) && is_array($v1)) {
        //             $repeaterFieldKey[$k1] = htmlspecialchars(implode(', ', $v1));
        //           } else {
        //             $repeaterFieldKey[$k1] = htmlspecialchars($v1);
        //           }
        //         }
        //       }
        //     } else {
        //       $arrValue .= $v . ', ';
        //     }
        //   }
        //   $formattedFldValues[$fldKey] = htmlspecialchars(rtrim($arrValue, ', '));
        //   $arrValue = '';
        // } else {
        //   $formattedFldValues[$fldKey] = htmlspecialchars($value);
        // }
        if ('textarea' === $fldData->typ) {
          $formattedFldValues[$fldKey] = nl2br(htmlspecialchars($value));
        }
        if ('date' === $fldData->typ && !empty($value)) {
          $formattedFldValues[$fldKey] = date_i18n(get_option('date_format'), strtotime(htmlspecialchars($value)));
        }
      }
    }

    $merge_values = array_merge($fieldValues, $formattedFldValues);
    // $merge_values = array_merge($merge_values, $repeaterFieldKey);

    return $merge_values;
  }

  public static function changeImagePathInHTMLString($html_body, $path)
  {
    $allowedExtensions = ['jpg', 'jpeg', 'png', 'svg'];
    if (empty($html_body) || empty($path)) {
      return $html_body;
    }

    $allowedMimeTypes = [
      'jpg'  => ['image/jpeg', 'image/pjpeg'],
      'jpeg' => ['image/jpeg', 'image/pjpeg'],
      'png'  => ['image/png'],
      'svg'  => ['image/svg+xml']
    ];

    return preg_replace_callback(
      '/<img\s+[^>]*src="([^"]+)"[^>]*>/i',
      function ($matches) use ($path, $allowedExtensions, $allowedMimeTypes) {
        $src = $matches[1];

        if (filter_var($src, FILTER_VALIDATE_URL)) {
          return $matches[0];
        }

        $fullPath = rtrim($path, '/') . '/' . ltrim($src, '/');

        $extension = strtolower(pathinfo($fullPath, PATHINFO_EXTENSION));

        if (!preg_match('/^(http|https):\/\//', $fullPath)) {
          if (!file_exists($fullPath) || !isset($allowedMimeTypes[$extension])) {
            return '';
          }
          $mimeType = mime_content_type($fullPath);
          if (!in_array($mimeType, $allowedMimeTypes[$extension], true)) {
            return '';
          }
        }

        return str_replace($src, htmlspecialchars($fullPath, ENT_QUOTES), $matches[0]);
      },
      $html_body
    );
  }

  public static function replaceValueOfBf_all_data($stringToReplaceField, $fieldValues, $formId)
  {
    // ${bf_all_fields.1}
    $pattern = '/\$\{bf_all_data\}/'; // Corrected escaping

    preg_match_all($pattern, $stringToReplaceField, $matches);

    if (count($matches[0]) > 0) {
      $formManager = FormManager::getInstance($formId);
      $formFields = $formManager->getFields();
      $fields = self::bindFormData($formFields, $fieldValues, $formId);
      $table = self::generateTable($fields, $formFields);
      $stringToReplaceField = str_replace('${bf_all_data}', $table, $stringToReplaceField);
    }

    return $stringToReplaceField;
  }

  private static function bindFormData($formFields, $formData, $formId)
  {
    $entryID = isset($formData['entry_id']) ? $formData['entry_id'] : null;
    $encryptDirectory = Helpers::getEncryptedEntryId($entryID);

    $uploadPath = $formId . DIRECTORY_SEPARATOR . $encryptDirectory;

    return array_reduce(array_keys($formFields), function ($filteredData, $key) use ($formFields, $formData, $uploadPath) {
      $field = $formFields[$key];

      $ignoreFields = ['button', 'recaptcha', 'html', 'divider', 'section', 'file-up', 'turnstile', 'hcaptcha', 'advanced-file-up', 'image'];

      $arrayValueFldType = ['check', 'select', 'image-select'];

      if (in_array($field['type'], $ignoreFields)) {
        return $filteredData;
      }

      if (isset($formData[$key])) {
        if ('repeater' === $field['type']) {
          $filteredData[$key] = is_string($formData[$key]) ? json_decode($formData[$key], true) : $formData[$key];
        } elseif ('signature' === $field['type']) {
          $file_path = strpos($formData[$key], '/') ? $formData[$key] : $uploadPath . DIRECTORY_SEPARATOR . $formData[$key];
          $filteredData[$key] = '<img src="' . $file_path . '" style="max-width: 100%; height: auto;" />';
        } elseif (in_array($field['type'], $arrayValueFldType)) {
          $filteredData[$key] = is_array($formData[$key]) ? implode(', ', $formData[$key]) : $formData[$key];
        } else {
          $filteredData[$key] = $formData[$key];
        }
      }

      return $filteredData;
    }, []);
  }

  private static function generateTable($fields, $formFields)
  {
    if (empty($fields)) {
      return '<p>No data available.</p>';
    }

    $table = "<table style='font-family: arial, sans-serif; border-collapse: collapse; width: 100%;'>";

    foreach ($fields as $fk => $value) {
      $fieldName = $formFields[$fk]['label'] ?? $fk;
      $table .= "<tr>
              <td style='border: 1px solid #dddddd; text-align: left; padding: 8px; font-weight: bold;'>{$fieldName}</td>
              <td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'>";

      if (is_array($value) && isset($formFields[array_keys($value[0])[0]])) {
        $table .= "<table style='width: 100%; border-collapse: collapse;'>";

        $table .= '<tr>';
        foreach (array_keys($value[0]) as $subKey) {
          $subLabel = $formFields[$subKey]['label'] ?? $subKey;
          $table .= "<th style='border: 1px solid #dddddd; padding: 8px; background-color: #f2f2f2;'>" . $subLabel . '</th>';
        }
        $table .= '</tr>';

        foreach ($value as $row) {
          $table .= '<tr>';
          foreach ($row as $subKey => $subValue) {
            $subValue = is_array($subValue) ? implode(', ', $subValue) : $subValue;
            $table .= "<td style='border: 1px solid #dddddd; padding: 8px;'>" . $subValue . '</td>';
          }
          $table .= '</tr>';
        }
        $table .= '</table>';
      } else {
        $table .= $value;
      }

      $table .= '</td></tr>';
    }

    $table .= '</table>';

    return $table;
  }

  public static function replaceRepeaterFieldValue($stringToReplaceField, $fieldValues, $formID)
  {
    if (!is_string($stringToReplaceField) || empty($stringToReplaceField)) {
      return $stringToReplaceField; // Return as-is if nothing to replace
    }

    $formManager = FormManager::getInstance($formID);
    $formFields = $formManager->getFields();

    // Find all placeholders like ${field_key} example: ${b27-5}
    preg_match_all('/\$\{(b\d+-\d+)\}/', $stringToReplaceField, $matches);

    if (empty($matches[1])) {
      return $stringToReplaceField;
    }
    // Clean field data
    $dataCleaning = self::removeEmptyValues($fieldValues);

    $flatFieldData = self::restructureRepeaterData($dataCleaning, $formManager);
    // generate table for repeater fields
    foreach ($matches[1] as $fk) {
      $repeaterFieldKey = $fk;
      $fieldType = isset($formFields[$repeaterFieldKey]['type']) && !empty($formFields[$repeaterFieldKey]['type']) ? $formFields[$repeaterFieldKey]['type'] : null;
      if ('repeater' === $fieldType) {
        $repeaterMarkup = self::repeaterFieldTable($dataCleaning[$repeaterFieldKey] ?? [], $formFields, $repeaterFieldKey);
        $stringToReplaceField = str_replace('${' . $fk . '}', $repeaterMarkup, $stringToReplaceField);
      } else {
        $repeaterFieldData = self::safeFlatString($flatFieldData[$repeaterFieldKey] ?? '');
        $stringToReplaceField = str_replace('${' . $fk . '}', $repeaterFieldData, $stringToReplaceField);
      }
    }
    return $stringToReplaceField;
  }

  /**
 * Restructures repeater field data to maintain original structure while
 * aggregating nested repeater values into top-level indexed arrays.
 *
 * @param array $data Original field data structure
 * @return array Restructured data with aggregated arrays
 */
  private static function restructureRepeaterData(array $data, $formManagerInstance): array
  {
    $result = $data;

    foreach ($data as $topKey => $topValue) {
      if ($formManagerInstance->isRepeaterField($topKey)) {
        foreach ($topValue as $entryIndex => $entry) {
          if (!is_array($entry)) {
            continue;
          }

          foreach ($entry as $subKey => $subValue) {
            // Handle nested arrays within entries
            if (is_array($subValue)) {
              $result[$subKey][$entryIndex] = $subValue;
            } else {
              $result[$subKey][$entryIndex] = $subValue;
            }
          }
        }
      }
    }

    return $result;
  }

  /**
 * Safely converts any type of form value(Specially Repeater Field Value) to string.
 *
 * @param mixed $data
 * @return string
 */
  public static function safeFlatString($data): string
  {
    if (is_array($data)) {
      return implode(', ', array_map(function ($item) {
        return is_array($item) ? '[' . implode(', ', array_map('strval', $item)) . ']' : self::safeFlatString($item);
      }, $data));
    }

    if (is_object($data)) {
      return method_exists($data, '__toString') ? (string) $data : (json_encode($data) ?: '');
    }

    if (is_null($data)) {
      return '';
    }

    return (string) $data;
  }

  private static function removeEmptyValues($fieldData)
  {
    if (!is_array($fieldData)) {
      return $fieldData;
    }
    // Remove empty values from the array
    return array_filter($fieldData, function ($value) {
      return !empty($value);
    });
  }

  private static function repeaterFieldTable($repeaterFieldData, $formFields, $repeaterFieldKey)
  {
    if (!is_array($repeaterFieldData) || !isset($repeaterFieldData[0]) || !is_array($repeaterFieldData[0])) {
      return ''; // Safely return empty if not a valid repeater structure
    }
    $table = "<table style='font-family: arial, sans-serif; border-collapse: collapse; width: 100%;'>";
    $table .= '<tr>';
    $table .= '<th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">' . self::getLabel($formFields, $repeaterFieldKey) . '</th>';
    $table .= '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">';
    $table .= '<table style="width: 100%; border-collapse: collapse;">';

    $headers = array_keys($repeaterFieldData[0]);
    $table .= '<tr>';
    foreach ($headers as $fk) {
      $table .= '<th style="border: 1px solid #dddddd; padding: 8px; background-color: #f2f2f2;">' . self::getLabel($formFields, $fk) . '</th>';
    }
    $table .= '</tr>';

    foreach ($repeaterFieldData as $row) {
      $table .= '<tr>';
      foreach ($row as $value) {
        $newValue = is_array($value) ? implode(', ', $value) : $value;
        $table .= '<td style="border: 1px solid #dddddd; padding: 8px;">' . $newValue . '</td>';
      }
      $table .= '</tr>';
    }
    $table .= '</table>';

    $table .= '</td>';
    $table .= '</tr>';
    $table .= '</table>';

    return $table;
  }

  private static function getLabel($formFields, $key)
  {
    return $formFields[$key]['label'] ?? $key;
  }
}
