var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minify = require('gulp-uglifycss');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');

// 1. 压缩js到build目录
// 2. 编译sass文件为css文件，并复制到build

gulp.task('js', function(){

	gulp.src('src/script/**/*.js')
			.pipe(uglify())
			.pipe(concat('combo.js'))
			.pipe(gulp.dest('build/script'));

});

gulp.task('css', function(){

	gulp.src('src/style/**/*.scss')
			.pipe(sass())
			.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
			//.pipe(minify())
			.pipe(gulp.dest('build/style'));

});

gulp.task('default', ['js', 'css'], function(){
	console.log('done');
});


gulp.task('watch', function(){
	gulp.watch('src/script/**/*.js', ['js']);
	gulp.watch('src/style/**/*.scss', ['css']);
});

gulp.task('watch2', function(){
	gulp.watch('src/**/*', ['js', 'css']);
})
