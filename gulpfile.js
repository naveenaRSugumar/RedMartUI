var browserSync = require('browser-sync');
var proxyMiddleware = require('http-proxy-middleware');
var gulp = require('gulp');
var proxy = proxyMiddleware('/abc', {target: 'http://localhost:8080/csr'});
gulp.task('default', function () {
    browserSync({
        server: {
            baseDir: "UIApp/",
            directory: true,
            port: 3000,
            middleware: [proxy]
        }
    });
});
