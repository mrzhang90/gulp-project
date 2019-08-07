const gulp = require('gulp');
const watch = require('gulp-watch');
const useref = require('gulp-useref')//进行资源合并
const assetRev = require('gulp-asset-rev');//添加版本号
const rev = require('gulp-rev')//后缀
const revCollector = require('gulp-rev-collector')//根据rev生成的manifest.json文件中的映射, 替换文件名称\路径
const gutil = require('gulp-util');//打印日志
// js
const jshint = require('gulp-jshint');//jshint
const uglify = require('gulp-uglify');//js压缩
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const browserify = require('browserify');
const shim = require('browserify-shim');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const filter = require('gulp-filter');
const del = require('del')
const jsFilter = filter(['./html/**/*.js'],{restore:true}),
        cssFilter = filter('./html/**/*.css',{restore:true}),
        htmlFilter = filter(['./html/**/*.html'],{restore:true});
//css文件压缩，更改版本号，并通过rev.manifest将对应的版本号用json表示出来
gulp.task('build_css', () => {
    return watch('./html/**/*.css', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.css')
        .pipe(csso())
        .pipe(assetRev())
        .pipe(rev())//添加hash后缀
        .pipe(gulp.dest('./dist/'))//移动到dist/css
        .pipe(rev.manifest())//生成文件映射
        .pipe(gulp.dest('./dist/rev/css'))//将映射文件导出到rev/css
    });
}); 
//jshint
gulp.task('jshint', () => {
    // return watch('./html/**/*.js', {
    //     ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
    // }, () => {
    //     gulp.src('./html/**/*.js')
    //     .pipe(jshint())
    //     .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
    // });
});
//js文件压缩，更改版本号，并通过rev.manifest将对应的版本号用json表示出
gulp.task('build_js', () => {
    return watch('./html/**/*.js', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.js')
        // .pipe(jsFilter)
        // .pipe(uglify({
        //     mangle: true,               // 是否修改变量名，默认为 true
        //     compress: true,             // 是否完全压缩，默认为 true
        //     preserveComments: 'all'     // 保留所有注释
        // }))
        //  .on('error', function (err) {
        //     gutil.log(gutil.colors.red('[Error]'), err.toString());
        // })
        .pipe(assetRev())
        // .pipe(jsFilter.restore)
        .pipe(rev())
        .pipe(gulp.dest('./dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/js'))
    });
});
gulp.task('build_img', () => {
    return watch('./html/**/*.{png,jpg,gif,ico}', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.{png,jpg,gif,ico}')
        .pipe(assetRev())
        .pipe(rev())
        .pipe(gulp.dest('./dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/img'))
    });
});
gulp.task('build_file', () => {
    gulp.src('./html/**/*.{pdf,swf,xap,bcmap,svg,ttf,woff}')
    // gulp.src([
    //     './html/**/*.pdf','./html/**/*.swf',
    //     './html/**/*.xap','./html/**/*.bcmap',
    //     './html/**/*.svg','./html/**/*.ttf',
    //     './html/**/*.woff'
    // ])
    .pipe(gulp.dest('./dist/'));
});
//通过hash来精确定位到html模板中需要更改的部分,然后将修改成功的文件生成到指定目录
gulp.task('rev',function(){
    return gulp.src(['dist/rev/**/*.json','./html/**/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest('./dist/'));
});
gulp.task('build_html', () => {
    return watch('./html/**/*.html', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.html')
        .pipe(assetRev())
        .pipe(gulp.dest('./dist/'));
    });
});
// //上线环境的gulp
// gulp.task('buildprod', () => {
//     gulp.src('./html/**/*.{png,jpg,gif,ico}')
//         .pipe(imagemin({
//             optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//             progressive: true,    //类型：Boolean 默认：false 无损压缩jpg图片
//             interlaced: true,     //类型：Boolean 默认：false 隔行扫描gif进行渲染
//             multipass: true,      //类型：Boolean 默认：false 多次优化svg直到完全优化
//             svgoPlugins: [          
//                 {removeViewBox: false}  //不要移除svg的viewbox属性
//             ],       
//             use: [pngquant({quality: '65-80'})]    //使用pngquant深度压缩png图片的imagemin插件/quality 压缩的比例最好60-80之间;
//         }))
//         .pipe(gulp.dest('../apache-tomcat-8.5.30/webapps/ROOT/assets'));
// });
gulp.task('del',function () {
    del('./dist/');                               // 构建前先删除dist文件里的旧版本
})
// gulp.task('default', ['del',process.env.NODE_ENV == "production" ? 'buildprod' : 'builddev1','builddev2','builddev3','builddev4']);
gulp.task('default', ['build_css','jshint','build_js','build_img','build_file','rev','build_html']);
