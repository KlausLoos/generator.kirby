<?php

return function($site, $pages, $page, $args) {

  // get all articles and add pagination
  $news = $page->children()->visible()->flip()->paginate(20);

  if(!array_key_exists('year',$args)) $args['year'] = date('Y',time());

  $selected = array();

  foreach($news as $child):
    if(date('Y',$child->date()) ==  $args['year']):
      $selected[] = $child;
    endif;
  endforeach;

  $news = $selected;

  // create a shortcut for pagination
  //$pagination = $news->pagination();

  // pass $news and $pagination to the template
  return compact('news');

};
