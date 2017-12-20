module.exports = {
  files: ['assets/css/*.css', 'assets/js/**/*.js', 'content/**/*.txt', 'site/**/*.php'],
  proxy: '127.0.0.1:9062',
  open: false,
  notify: true,
  routes: {
    '/node_modules': 'node_modules'
  }
};
