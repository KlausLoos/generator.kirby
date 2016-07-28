/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | Please report any issues you encounter:
 |  https://github.com/shakyShane/browser-sync/issues
 |
 | For up-to-date information about the options:
 |  https://github.com/shakyShane/browser-sync/wiki/Working-with-a-Config-File
 |
 */
//var httpProxy = require('http-proxy');
//var proxy = httpProxy.createProxyServer({});

module.exports = {
    files: ['app/assets/css/*.css', 'app/assets/js/**/*.js', 'app/assets/js/**/*.jsx' , 'app/content/**/*.txt', 'app/site/**/*.php'],
    proxy: '127.0.0.1:9061',
    open: false,
    notify :false,
    routes: {
        "/node_modules": "node_modules"
    }
};