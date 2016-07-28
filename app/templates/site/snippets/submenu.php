<ul class="list-group">
<?php

  $items = false;

  if($root = $pages->findOpen()) {
    $items = $root->children()->visible();
  }
  if($items && $items->count() > 0):
    foreach($items as $item):
?>
      <li class="list-group-item"><a class="<?php ecco($item->isOpen(), 'active') ?>" href="<?php echo $item->uri() ?>"><?php echo html($item->title()) ?></a></li>
<?php

    endforeach;
  endif;

?>
</ul>
