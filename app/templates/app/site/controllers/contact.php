<?php

return function($site, $pages, $page) {

  $form = uniform('contact-form', array(
        'required' => array(
          'first_name' => '',
          'family_name' => '',
          'message' => '',
          '_from' => 'email'
        ),
        'validate' => array(
            'tel' => 'num'
        ),
        'actions'  => array(
           array(
              '_action' => 'email',
              'to'      => 'bramloosveld@gmail.com',
              'sender'  => $site->email(),
              'subject' =>  'MSE-Europe website: new contact'
           )
        )
     )
  );

  return compact('form');

};

//http://blog.the-inspired-ones.de/kirby-with-uniform
//https://github.com/mzur/kirby-uniform