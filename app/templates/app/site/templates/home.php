<?php snippet('header'); ?>

  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2><?php echo $page->intro_title(); ?></h2>
          <p><?php echo html($page->text()); ?></p>
        </div>
      </div>
    </div>
  </main>

<?php snippet('footer') ?>
