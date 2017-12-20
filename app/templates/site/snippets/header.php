<!DOCTYPE html>
<html lang="en" class="no-js">

<head>

  <meta charset="utf-8" />

  <title>
    <?php echo html($site->title()) ?> |
      <?php echo strip_tags($page->title()); ?>
  </title>

  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta content="<?php html($site->title()) ?>" property="og:title" />
  <meta content="<?php echo html($site->description()) ?>" property="og:description" />

  <link href="data:image/x-icon;..." rel="icon" type="image/x-icon" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.4/cookieconsent.min.css"/>
  <link rel="stylesheet" href="/assets/css/style.css?v=<?php echo date('YmdHi');?>"/>

</head>

<?php $p = ( $page->depth() == 1 ) ? $page : $page->parents()->last(); ?>

<body class="flex flex-column <?php echo $p->id();?> <?php echo $page->intendedTemplate(); ?> <?php echo $page->slug(); ?>">
  <!--[if lt IE 9]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <header>
    <nav class="max-width-4 mx-auto">
      <a class="logo" href="/"></a>
      <?php snippet('menu') ?>
    </nav>
  </header>

  <div id="list"></div>
  <div id="filter"></div>
