<h2>News</h2>
<ul class="news list-group">
  <?php foreach(page('news')->children()->visible()->limit(1) as $news_item): ?>
    <li class="list-group-item">
      <a href="/<?php echo $news_item->uri() ?>"><?php echo $news_item->title()->html() ?></a></h2>
    </li>
  <?php endforeach ?>
</ul>