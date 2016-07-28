<?php if(!defined('KIRBY')) exit ?>

title: News Item
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  date:
    label: Date
    type:  date
    format: DD/MM/YYYY
  text:
    label: Text
    type:  textarea
  tags:
    label: Tags
    type:  tags
