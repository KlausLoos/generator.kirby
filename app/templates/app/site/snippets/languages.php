<ul class="nav navbar-nav navbar-right">
  <?php foreach($site->languages() as $language): ?>
  <li<?php e($site->language() == $language, ' class="active"') ?>>
    <a href="/<?php echo $page->uri($language->code()) ?>" >
      <?php echo html($language->code()) ?>
    </a>
  </li>
  <?php endforeach ?>
</ul>
