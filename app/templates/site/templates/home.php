<?php snippet('header'); ?>

  <main>
    <div class="max-width-4">
        <div class="col-12">
          <h2><?php echo $page->intro_title(); ?></h2>
          <p><?php echo html($page->text()); ?></p>
        </div>
    </div>
  </main>

<?php snippet('footer') ?>
