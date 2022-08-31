let mix = require('laravel-mix');

mix.js('js/app.js', '/').setPublicPath('dist');
mix.sass('sass/style.scss', '/').setPublicPath('dist');
