<?php

namespace BitCode\BitForm\Core\Integration\Twilio;

use BitCode\BitForm\Core\Util\ApiResponse as UtilApiResponse;
use BitCode\BitForm\Core\Util\HttpHelper;

/**
 * Provide functionality for Record insert,upsert
 */
class RecordApiHelper
{
  protected $_defaultHeader;
  public static $apiBaseUri = 'https://api.twilio.com/2010-04-01';

  private $_sid;

  private $_from_num;

  private $logID;

  private $_logResponse;

  private $_entryID;

  private $_formID;

  public function __construct($integrationDetails, $sid, $token, $from_num, $logID, $formID, $entryID)
  {
    $this->_sid = $sid;
    $this->_from_num = $from_num;
    $this->_defaultHeader = [
      'Authorization' => 'Basic ' . base64_encode("$sid:$token"),
      'Accept'        => '*/*',
      'verify'        => false,
      'Content-Type'  => 'application/x-www-form-urlencoded'
    ];
    $this->_logResponse = new UtilApiResponse();
    $this->logID = $logID;

    $this->_entryID = $entryID;
    $this->_formID = $formID;
  }

  public function sendMessage($data)
  {
    $data['From'] = $this->_from_num;
    $apiEndpoint = self::$apiBaseUri . "/Accounts/$this->_sid/Messages.json";
    $response = HttpHelper::post($apiEndpoint, $data, $this->_defaultHeader);
    return $response;
  }

  public function generateReqDataFromFieldMap($data, $fieldMap)
  {
    $dataFinal = [];

    foreach ($fieldMap as $value) {
      $triggerValue = $value->formField;
      $actionValue = $value->twilioField;
      if ('custom' === $triggerValue) {
        $dataFinal[$actionValue] = $value->customValue;
      } elseif (!is_null($data[$triggerValue])) {
        $dataFinal[$actionValue] = $data[$triggerValue];
      }
    }
    return $dataFinal;
  }

  public function executeRecordApi($integId, $fieldValues, $fieldMap)
  {
    $finalData = $this->generateReqDataFromFieldMap($fieldValues, $fieldMap);
    $apiResponse = $this->sendMessage($finalData);

    $entryDetails = [
      'formId'      => $this->_formID,
      'entryId'     => $this->_entryID,
      'fieldValues' => $fieldValues
    ];

    if ((property_exists($apiResponse, 'status') && 400 === $apiResponse->code) || property_exists($apiResponse, 'code')) {
      $this->_logResponse->apiResponse($this->logID, $integId, ['type' => 'twilio sms sending', 'type_name' => 'sms sent'], 'errors', $apiResponse, $entryDetails);
    } else {
      $this->_logResponse->apiResponse($this->logID, $integId, ['type' => 'twilio sms sending', 'type_name' => 'sms sent'], 'success', $apiResponse, $entryDetails);
    }
    return $apiResponse;
  }
}
