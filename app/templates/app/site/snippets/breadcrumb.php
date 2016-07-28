<ol class="breadcrumb">
  <?php foreach($site->breadcrumb() as $crumb): ?>
    <?php if($crumb->slug() != $page->slug()): ?>
      <li><a href="/<?php echo $crumb->uri() ?>"><?php echo html($crumb->title()) ?></a></li>
    <?php endif; ?>
  <?php endforeach ?>
</ol>
