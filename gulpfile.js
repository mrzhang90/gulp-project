const gulp = require('gulp');
const postcss = require('gulp-postcss');
const react = require('gulp-react');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const assetRev = require('gulp-asset-rev');
const browserify = require('browserify');
const shim = require('browserify-shim');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const del = require('del')
//开发环境的gulp
gulp.task('builddev1', () => {
    return watch('./html/**/*.css', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./assets'));
    });
});
// gulp.task('builddev2', () => {
//     return watch('./html/script/*.js', {
// 		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
// 	}, () => {
//         gulp.src('./html/script/*.js')
//         .pipe(gulp.dest('./dest'));
//     });
// });
gulp.task('builddev2', () => {
    return watch('./html/script/*.js', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        browserify('./html/script/main.js')
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .transform(shim)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./assets/script'));

        browserify('./html/script/header.js')
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .transform(shim)
        .bundle()
        .pipe(source('header.js'))
        .pipe(gulp.dest('./assets/script'));
    });
});
gulp.task('builddev3', () => {
    return watch('./html/*.html', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/*.html')
        // .pipe(assetRev())
        .pipe(gulp.dest('./assets'));
    });
});
//上线环境的gulp
gulp.task('buildprod', () => {
	
});
gulp.task('del',function () {
    del('./assets');                               // 构建前先删除dist文件里的旧版本
})
gulp.task('default', ['del',process.env.NODE_ENV == "production" ? 'buildprod' : 'builddev1','builddev2','builddev3']);
