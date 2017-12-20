  <footer>
    <div class="max-width-4">
      © <?php echo date('Y'); ?> <?php echo $site->copyright(); ?>
    </div>
  </footer>

  <?php echo js(array(
    '//use.fontawesome.com/releases/v5.0.1/js/all.js',
    '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.4/cookieconsent.min.js',
    '/assets/js/main.bundle.js?v='.date('YmdHi'),
  )); ?>

  <script>
  window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#eaf7f7",
        "text": "#5c7291"
      },
      "button": {
        "background": "#56cbdb",
        "text": "#ffffff"
      }
    },
    "theme": "edgeless",
    "position": "bottom-left",
    "content": {
      "message": '<?php echo $site->cookie(); ?>',
    }
  })});
  </script>
  
  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
  <script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X');ga('send','pageview');
  </script>


</body>
</html>