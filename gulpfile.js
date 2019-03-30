const gulp = require('gulp'),
			uglify = require('gulp-uglify'),
			rename = require('gulp-rename'),
			concat = require('gulp-concat');
const	babel = require('gulp-babel');

const sass = require('gulp-sass');

const cssnano = require('gulp-cssnano');

const imagemin = require('gulp-imagemin');
gulp.task('test',function(){
	console.log('测试任务');
})
//es6=》es5
gulp.task('es6',()=>{
	gulp.src('./src/ES6JS/*.js')
	.pipe(babel({
		presets : ['@babel/env']
	}))
	.pipe(gulp.dest('./src/ES5JS'))
})
//处理js
gulp.task('js',function(){
	gulp.src('./src/ES5JS/*.js')
	.pipe(uglify())
	.pipe(rename({'suffix':'.min'}))
	// .pipe(concat('main.min.js'))
	.pipe(gulp.dest('./dist/js'))
})
//处理sass
gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
//	.pipe(cssnano())
	.pipe(rename({"suffix":".min"}))
	.pipe(gulp.dest('./dist/css'))
})
//压缩img
gulp.task('img',function(){
	gulp.src('./src/img/*.*')
		.pipe(imagemin({
			optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
			multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
		}))
		.pipe(gulp.dest('src/image'))
})


gulp.task('default',function(){
	gulp.watch(['./src/ES5JS/*.js'],['js']);
	gulp.watch(['./src/ES6JS/*.js'],['es6']);
	gulp.watch(['./src/sass/*.scss'],['sass']);
})
