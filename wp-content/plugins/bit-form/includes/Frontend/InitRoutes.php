<?php

use BitCode\BitForm\Frontend\CustomRoutes;
use BitCode\BitForm\Frontend\FormEntryView;
use BitCode\BitForm\Frontend\StandaloneFormView;

$routes = new CustomRoutes();
$routes->add('bitform-form-view/([0-9]+)/?', [StandaloneFormView::class, 'preview']);
$routes->add('bitform-form-entry-edit/([0-9]+)/?([0-9]+)/?', [FormEntryView::class, 'preview']);

if (class_exists('\BitCode\BitFormPro\Admin\DownloadFile')) {
  $routes->add('bitform-download-file', [\BitCode\BitFormPro\Admin\DownloadFile::class, 'download']); // for all users
  $routes->add('bitform-download-pdf', [\BitCode\BitFormPro\Admin\DownloadFile::class, 'adminDownloadPDF']); // for admin users
}
