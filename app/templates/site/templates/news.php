<?php snippet('header') ?>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 left">
          <?php snippet('submenu') ?>
        </div>
        <div class="col-sm-9 center">
          <h2><?php echo $page->title(); ?></h2>
          <?php foreach($news as $news_item): ?>
            <?php echo $news_item->title(); ?>
          <?php endforeach ?>
        </div>
      </div>
    </div>
  </main>
<?php snippet('footer') ?>
