const gulp = require('gulp');
const postcss = require('gulp-postcss');
const react = require('gulp-react');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const RevAll = require('gulp-rev-all');
const filter = require('gulp-filter');
const useref = require('gulp-useref');
const csso = require('gulp-csso');
const browserify = require('browserify');
const shim = require('browserify-shim');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const del = require('del')
const jsFilter = filter('./html/**/*.js',{restore:true}),
        cssFilter = filter('./html/**/*.css',{restore:true}),
        htmlFilter = filter(['./html/*.html'],{restore:true});
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
        .pipe(gulp.dest('./assets'));
    });
});
gulp.task('builddev3', () => {
    return watch('./html/*.html', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/*.html')
        .pipe(useref())                         // 解析html中的构建块
        // .pipe(jsFilter)                         // 过滤所有js
        .pipe(cssFilter)                        // 过滤所有css
        // .pipe(csso())                           // 压缩优化css
        .pipe(postcss())
        // .pipe(gulp.dest('./assets'))
        .pipe(cssFilter.restore)
        .pipe(RevAll.revision({                 // 生成版本号
            dontRenameFile: ['.html'],          // 不给 html 文件添加版本号
            dontUpdateReference: ['.html']      // 不给文件里链接的html加版本号
        }))
        .pipe(htmlFilter)                       // 过滤所有html
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest('./assets'));
    });
});
//上线环境的gulp
gulp.task('buildprod', () => {
});
gulp.task('del',function () {
    del('./assets');                               // 构建前先删除dist文件里的旧版本
})
gulp.task('default', ['del',process.env.NODE_ENV == "production" ? 'buildprod' : 'builddev3']);
