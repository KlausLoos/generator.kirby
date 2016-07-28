<ul class="nav navbar-nav pull-sm-right collapse navbar-toggleable-xs" id="navbar"  >
  <?php foreach($pages->visible() as $p): ?>
  <li class="nav-item <?php echo $p->id(); ?> <?php e($p->isOpen(), ' active') ?>">
    <a class="nav-link" href="/<?php echo $p->uri() ?>"><?php echo $p->title()->html() ?></a>
  </li>
  <?php endforeach ?>
</ul>
