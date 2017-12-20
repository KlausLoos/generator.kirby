<ul class="block-nav list-reset m0">
  <?php foreach($pages->visible() as $p): ?>
  <li class="inline-block ml4 sm-hide xs-hide <?php echo $p->id(); ?>">
    <a class="<?php e($p->isOpen(), ' active') ?>" href="/<?php echo $p->uri() ?>"><?php echo $p->title()->html() ?></a>
  </li>
  <?php endforeach ?>
  <li class="inline-block md-hide lg-hide" id="mobile-menu"><span class="open"><span class="hamburger"></span><span class="close"></span></li>
</ul>
