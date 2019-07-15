const gulp = require('gulp');
const postcss = require('gulp-postcss');
const react = require('gulp-react');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const assetRev = require('gulp-asset-rev');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const shim = require('browserify-shim');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const filter = require('gulp-filter');
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const del = require('del')
const jsFilter = filter('./html/static/js/pdfJs/',{restore:true}),
        cssFilter = filter('./html/**/*.css',{restore:true}),
        htmlFilter = filter(['./html/**/*.html'],{restore:true});
//css文件压缩，更改版本号，并通过rev.manifest将对应的版本号用json表示出来
gulp.task('build_css', () => {
    return watch('./html/**/*.css', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.css')
        .pipe(csso())
        // .pipe(assetRev())
        .pipe(rev())
        .pipe(gulp.dest('./dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/css'))
    });
});
//js文件压缩，更改版本号，并通过rev.manifest将对应的版本号用json表示出
gulp.task('build_js', () => {
    return watch('./html/**/*.js', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.js')
        // .pipe(jsFilter)
        // .pipe(uglify())
        // .pipe(assetRev())
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
    return watch('./html/**/*.pdf', {
		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
	}, () => {
        gulp.src('./html/**/*.pdf')
        .pipe(gulp.dest('./dist/'));
    });
});
// gulp.task('build_component', () => {
//     return watch('./html/component/*.js', {
// 		ignoreInitial: false //指示chokidar是否应该忽略初始添加事件
// 	}, () => {
//         browserify('./html/component/main.js')
//         .transform(babelify, {
//             presets: ['es2015', 'react']
//         })
//         .transform(shim)
//         .bundle()
//         .pipe(source('main.js'))
//         .pipe(gulp.dest('../apache-tomcat-8.5.30/webapps/ROOT/assets/script'));
//     });
// });
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
gulp.task('default', [process.env.NODE_ENV == "production" ? 'buildprod' : 'build_css','build_js','build_img','build_file','rev','build_html']);
