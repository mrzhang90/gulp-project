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
gulp.task('build_css', () => {
    return watch('./html/**/*.css', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('../apache-tomcat-8.5.30/webapps/ROOT/assets'));
    });
});
gulp.task('build_img', () => {
    return watch('./html/**/*.{png,jpg,gif,ico}', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.{png,jpg,gif,ico}')
        .pipe(gulp.dest('../apache-tomcat-8.5.30/webapps/ROOT/assets'));
    });
});
gulp.task('build_js', () => {
    return watch('./html/script/*.js', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/script/*.js')
        .pipe(gulp.dest('../apache-tomcat-8.5.30/webapps/ROOT/assets/script/'));
    });
});
gulp.task('build_component', () => {
    return watch('./html/component/*.js', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        browserify('./html/component/main.js')
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .transform(shim)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('../apache-tomcat-8.5.30/webapps/ROOT/assets/script'));
    });
});
gulp.task('build_jsp', () => {
    return watch('./html/*.jsp', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/*.jsp')
        // .pipe(assetRev())
        .pipe(gulp.dest('../apache-tomcat-8.5.30/webapps/ROOT/WEB-INF/jsp/gm/game'));
    });
});
//上线环境的gulp
gulp.task('buildprod', () => {
    gulp.src('./html/**/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true,    //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true,     //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true,      //类型：Boolean 默认：false 多次优化svg直到完全优化
            svgoPlugins: [          
                {removeViewBox: false}  //不要移除svg的viewbox属性
            ],       
            use: [pngquant({quality: '65-80'})]    //使用pngquant深度压缩png图片的imagemin插件/quality 压缩的比例最好60-80之间;
        }))
        .pipe(gulp.dest('../apache-tomcat-8.5.30/webapps/ROOT/assets'));
});
// gulp.task('del',function () {
//     del('../apache-tomcat-8.5.30/webapps/ROOT/assets');                               // 构建前先删除dist文件里的旧版本
// })
// gulp.task('default', ['del',process.env.NODE_ENV == "production" ? 'buildprod' : 'builddev1','builddev2','builddev3','builddev4']);
gulp.task('default', [process.env.NODE_ENV == "production" ? 'buildprod' : 'build_css','build_img','build_js','build_component','build_jsp']);
