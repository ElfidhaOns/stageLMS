<?php

/**
 * Twilio Integration
 *
 */

namespace BitCode\BitForm\Core\Integration\Twilio;

use BitCode\BitForm\Core\Integration\IntegrationHandler;
use BitCode\BitForm\Core\Util\HttpHelper;
use WP_Error;

final class TwilioHandler
{
  private $_integrationID;
  public static $apiBaseUri = 'https://api.twilio.com/2010-04-01';
  protected $_defaultHeader;

  private $_formID;

  public function __construct($integrationID, $formID)
  {
    $this->_integrationID = $integrationID;

    $this->_formID = $formID;
  }

  public static function registerAjax()
  {
    add_action('wp_ajax_bitforms_twilio_authorization', [__CLASS__, 'checkAuthorization']);
  }

  public static function checkAuthorization()
  {
    if (isset($_REQUEST['_ajax_nonce']) && wp_verify_nonce($_REQUEST['_ajax_nonce'], 'bitforms_save')) {
      $inputJSON = file_get_contents('php://input');
      $tokenRequestParams = json_decode($inputJSON);

      if (
        empty($tokenRequestParams->sid)
        || empty($tokenRequestParams->token)
        || empty($tokenRequestParams->from_num)
      ) {
        wp_send_json_error(
          __(
            'Requested parameter is empty',
            'bit-form'
          ),
          400
        );
      }
      $header = [
        'Authorization' => 'Basic ' . base64_encode("$tokenRequestParams->sid:$tokenRequestParams->token"),
        'Accept'        => '*/*',
        'verify'        => false
      ];
      $apiEndpoint = self::$apiBaseUri . '/Accounts';

      $apiResponse = HttpHelper::get($apiEndpoint, null, $header);

      $xml = simplexml_load_string($apiResponse);
      $json = wp_json_encode($xml);
      $response = json_decode($json, true);

      if (array_key_exists('RestException', $response)) {
        wp_send_json_error(
          'Unauthorize',
          400
        );
      } else {
        wp_send_json_success($apiResponse, 200);
      }
    }
  }

  public function execute(IntegrationHandler $integrationHandler, $integrationData, $fieldValues, $entryID, $logID)
  {
    $integrationDetails = $integrationData->integration_details;
    if (is_string($integrationDetails)) {
      $integrationDetails = json_decode($integrationDetails);
    }
    $fieldMap = $integrationDetails->field_map;
    $sid = $integrationDetails->sid;
    $token = $integrationDetails->token;
    $from_num = $integrationDetails->from_num;
    if (
      empty($sid)
      || empty($token)
      || empty($from_num)
      || empty($fieldMap)
    ) {
      $error = new WP_Error('REQ_FIELD_EMPTY', __('SID, Auth Token,From Number and mapping fields are required for rapidmail api', 'bit-form'));
      return $error;
    }
    $recordApiHelper = new RecordApiHelper($integrationDetails, $sid, $token, $from_num, $logID, $this->_formID, $entryID);
    $twilioResponse = $recordApiHelper->executeRecordApi(
      $this->_integrationID,
      $fieldValues,
      $fieldMap
    );
    return $twilioResponse;
  }
}
