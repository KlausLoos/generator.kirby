<?php

return function($site, $pages, $page) {

  //if($site->user()) go('/etools');

  if(r::is('post') and get('create')) {

    try {

      $user = $site->users()->create(array(
        'username'  => 'john',
        'email'     => 'john@doe.com',
        'password'  => 'secretpasswordwillbeencrypted',
        'firstName' => 'John',
        'lastName'  => 'Doe',
        'comments'  => 'Ladida'
      ));

      echo 'The user has been created';

    } catch(Exception $e) {

      echo 'The user could not be created';
      // optional error message: $e->getMessage();

    }

  }

  //return $user;

};
