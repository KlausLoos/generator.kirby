var fs = require('fs');
var SitemapGenerator = require('sitemap-generator');

// create generator
var generator = new SitemapGenerator('localhost', {
  port: 3002
});

// register event listeners
generator.on('done', function (sitemap) {
  fs.writeFile('app/sitemap.xml', sitemap, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });
});

// start the crawler
generator.start();