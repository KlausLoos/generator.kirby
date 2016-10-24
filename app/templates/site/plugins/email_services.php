<?php

//send html mails via postmark
email::$services['postmark'] = function($email) {

  if(empty($email->options['key'])) throw new Error('Invalid Postmark API Key');

  // reset the api key if we are in test mode
  if(a::get($email->options, 'test')) $email->options['key'] = 'POSTMARK_API_TEST';

  // the url for postmarks api
  $url = 'https://api.postmarkapp.com/email';
  $headers = array(
    'Accept: application/json',
    'Content-Type: application/json',
    'X-Postmark-Server-Token: ' . $email->options['key']
  );
  $data = array(
    'From'     => $email->from,
    'To'       => $email->to,
    'ReplyTo'  => $email->replyTo,
    'Subject'  => $email->subject,
    'TextBody' => $email->body,
    'HtmlBody' => $email->body //this takes care of sending html mail, headers need to be json format
  );
  // fetch the response
  $email->response = remote::post($url, array(
    'data'    => json_encode($data),
    'headers' => $headers
  ));
  if($email->response->code() != 200) {
    throw new Error('The mail could not be sent');
  }

};

//send default html mails - does not work on localhost
email::$services['mail'] = function($email) {

  $headers = array(
    'From: ' . $email->from,
    'Reply-To: ' . $email->replyTo,
    'Return-Path: ' . $email->replyTo,
    'Message-ID: <' . time() . '-' . $email->from . '>',
    'X-Mailer: PHP v' . phpversion(),
    'Content-Type: text/html; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
  );

  ini_set('sendmail_from', $email->from);
  $send = mail($email->to, str::utf8($email->subject), str::utf8($email->body), implode(PHP_EOL, $headers));
  ini_restore('sendmail_from');

  if(!$send) {
    throw new Error('The email could not be sent');
  }

};