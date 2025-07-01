<?php

namespace BitCode\BitForm\Core\Integration\Dropbox;

use BitCode\BitForm\Core\Util\ApiResponse;
use BitCode\BitForm\Core\Util\FileHandler;
use BitCode\BitForm\Core\Util\HttpHelper;
use WP_Error;

class RecordApiHelper
{
  protected $token;
  protected $formId;
  protected $entryId;
  protected $apiBaseUri = 'https://api.dropboxapi.com';
  protected $contentBaseUri = 'https://content.dropboxapi.com';
  protected $errorApiResponse = [];
  protected $successApiResponse = [];

  private $logResponse;

  public function __construct($token, $formId, $entryId)
  {
    $this->token = $token;
    $this->formId = $formId;
    $this->entryId = $entryId;
    $this->logResponse = new ApiResponse();
  }

  public function uploadFile($folder, $filePath)
  {
    if ('' === $filePath) {
      return;
    }
    $filePath = $this->makeFilePath($filePath);
    $filesize = filesize($filePath);
    $fp = fopen($filePath, 'rb');
    $body = fread($fp, $filesize);
    if (!$body) {
      return new WP_Error(423, 'Can\'t open file!');
    }

    $apiEndPoint = $this->contentBaseUri . '/2/files/upload';
    $headers = [
      'Authorization'   => 'Bearer ' . $this->token,
      'Content-Type'    => 'application/octet-stream',
      'Dropbox-API-Arg' => wp_json_encode([
        'path'            => $this->normalizePath($folder) . '/' . $this->fileName($filePath),
        'mode'            => 'add',
        'autorename'      => true,
        'mute'            => true,
        'strict_conflict' => false
      ]),
    ];
    return HttpHelper::post($apiEndPoint, $body, $headers);
  }

  public function fileName($filePath)
  {
    return basename($filePath);
  }

  public function normalizePath($path)
  {
    return str_replace('\\', '/', $path);
  }

  public function handleAllFiles($folderWithFile, $actions)
  {
    foreach ($folderWithFile as $folder => $filePath) {
      if ('' === $filePath) {
        continue;
      }
      if (is_array($filePath)) {
        foreach ($filePath as $singleFilePath) {
          if ('' === $singleFilePath) {
            continue;
          }
          $response = $this->uploadFile($folder, $singleFilePath);
          $this->storeInState($response);
          $this->deleteFile($singleFilePath, $actions);
        }
      } else {
        $response = $this->uploadFile($folder, $filePath);
        $this->storeInState($response);
        $this->deleteFile($filePath, $actions);
      }
    }
  }

  protected function storeInState($response)
  {
    if (isset($response->id)) {
      $this->successApiResponse[] = $response;
    } else {
      $this->errorApiResponse[] = $response;
    }
  }

  public function deleteFile($filePath, $actions)
  {
    if (isset($actions->delete_from_wp) && $actions->delete_from_wp) {
      $filePath = $this->makeFilePath($filePath);
      FileHandler::deleteIsFileExists($filePath);
    }
  }

  public function makeFilePath($filePath)
  {
    return realpath(FileHandler::getEntriesFileUploadDir($this->formId, $this->entryId) . DIRECTORY_SEPARATOR . $filePath);
  }

  public function executeRecordApi($integrationId, $logID, $fieldValues, $fieldMap, $actions)
  {
    $folderWithFile = [];
    foreach ($fieldMap as $value) {
      if (!is_null($fieldValues[$value->formField])) {
        $folderWithFile[$value->dropboxFormField] = $fieldValues[$value->formField];
      }
    }
    $this->handleAllFiles($folderWithFile, $actions);

    $entryDetails = [
      'formId'      => $this->formId,
      'entryId'     => $this->entryId,
      'fieldValues' => $fieldValues
    ];

    if (count($this->errorApiResponse) > 0) {
      $this->logResponse->apiResponse($logID, $integrationId, ['type' =>  'record', 'type_name' => 'insert'], 'error', 'Some Files Can\'t Upload For Some Reason. ' . wp_json_encode($this->errorApiResponse), $entryDetails);
    }
    if (count($this->successApiResponse) > 0) {
      $this->logResponse->apiResponse($logID, $integrationId, ['type' =>  'record', 'type_name' => 'insert'], 'success', 'All Files Uploaded. ' . wp_json_encode($this->successApiResponse), $entryDetails);
    }
  }
}
