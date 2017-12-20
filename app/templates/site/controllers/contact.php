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
              'sender'  => 'info@blabla.be', //make sure sender exist with postmark sender & is verified
              'subject' => 'Website: new contact',
              'snippet' => 'uniform-template',
              'service' => 'postmark',
              'service-options' => array(
                'key'    => '48892dab-eba2-4828-acfc-b0d18b42d551'
              )
           )
        )
     )
  );

  return compact('form');

};

//http://blog.the-inspired-ones.de/kirby-with-uniform
//https://github.com/mzur/kirby-uniform