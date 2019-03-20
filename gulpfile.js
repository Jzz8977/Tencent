const gulp = require('gulp'),
			uglify = require('gulp-uglify'),
			rename = require('gulp-rename'),
			concat = require('gulp-concat');
const	babel = require('gulp-babel');

const sass = require('gulp-sass');

const cssnano = require('gulp-cssnano');

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
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest('./src/mainjs'))
})
//处理sass
gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
//	.pipe(cssnano())
	.pipe(rename({"suffix":".min"}))
	.pipe(gulp.dest('./dist/css'))
})


gulp.task('default',function(){
	gulp.watch(['./src/ES5JS/*.js'],['js']);
	gulp.watch(['./src/ES6JS/*.js'],['es6']);
	gulp.watch(['./src/sass/*.scss'],['sass']);
})
