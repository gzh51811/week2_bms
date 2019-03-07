var gulp = require('gulp');//初始化 像原生js里面的new过程

//布置任务：把src下面的index.html 复制到dist目录

gulp.task('copyindex',function() {
	return gulp.src('./src/index.html').pipe(gulp.dest('dist'));
});
gulp.task('copyhtml',function() {
	return gulp.src('./src/html/**').pipe(gulp.dest('dist/html'));
});
gulp.task('copyapi',function() {
	return gulp.src('/src/api/connect.php').pipe(gulp.dest('dist/api'));
});
gulp.task('copydata',function() {
	return gulp.src('/src/data/*').pipe(gulp.dest('dist/data'));
});
////1.编译sass ：考拉
//var sass = require('gulp-sass');
//gulp.task('sass',function() {
//	return gulp.src('./src/css/*.scss')
//				.pipe(sass())
//				.pipe(gulp.dest('dist/css'));
//});


////2.压缩css文件
//var cssmin = require('gulp-cssmin');
//gulp.task('cssmin',function() {
//	return gulp.src('dist/css/*')
//				.pipe(cssmin())
//				.pipe(gulp.dest('dist/css'));
//});

//3.ES6-ES5才能压缩, 箭头函数，let const

let babel = require('gulp-babel');

//es6转es5
gulp.task('es6',function(){
	gulp.src('./src/api/routers/*')
	.pipe(babel({
		'presets':['es2015']
	}))
	.pipe(gulp.dest('dist/api/routers'));
});
//4.压缩js文件:先把ES6转成ES3再压缩
var js = require('gulp-uglify');
gulp.task('jsmin',function() {
	return gulp.src('dist/api/routers/*')
				.pipe(js())
				.pipe(gulp.dest('dist/api/routers/*'));
});
//5.压缩图片
var imgmin = require('gulp-imagemin');

gulp.task('imgmin',function() {
	return gulp.src('./src/images/*')
				.pipe(imgmin())
				.pipe(gulp.dest('dist/images'));
});