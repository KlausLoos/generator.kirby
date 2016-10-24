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

  <link href="data:image/x-icon;..." rel="icon" type="image/x-icon" />

  <link href='https://fonts.googleapis.com/css?family=Roboto:400,700|Fjalla+One|Droid+Serif' rel='stylesheet' type='text/css'>

  <link rel="stylesheet" href="/assets/css/style.bundle.css?v=<?php echo date('YmdHi');?>">

</head>

<?php $p = ( $page->depth() == 1 ) ? $page : $page->parents()->last(); ?>

<body class="<?php echo $p->id();?> <?php echo $page->intendedTemplate(); ?> <?php echo $page->slug(); ?>">
  <!--[if lt IE 9]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <header>
    <nav class="navbar navbar-light navbar-fixed-top">
      <button class="navbar-toggler hidden-sm-up pull-xs-right" type="button" data-toggle="collapse" data-target="#navbar"> &#9776;</button>
      <div class="container">
        <a class="navbar-brand" href="/">MARK POŽLEP</a>
        <?php snippet('menu') ?>
      </div>
    </nav>
  </header>

  <div id="list"></div>
  <div id="filter"></div>
