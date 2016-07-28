<?php if(!defined('KIRBY')) exit ?>

title: Site
pages: default
fields:
  title:
    label: Title
    type:  text
    width: 1/2
  author:
    label: Author
    type:  text
    width: 1/2
  description:
    label: Description
    type:  textarea
  keywords:
    label: Keywords
    type:  tags
  tel:
    label: Telephone
    type: tel
    width: 1/2
  email:
    label: Email
    type: email
    width: 1/2
  copyright:
    label: Copyright
    type:  textarea