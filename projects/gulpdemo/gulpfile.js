var gulp = require('gulp');

var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var less = require('gulp-less');
var concat = require('gulp-concat');
var wrapper = require('gulp-wrapper');
var del = require('del');

gulp.task('less', function(){
	return gulp.src('src/index.less')
			.pipe(less())
			.pipe(minifyCss({compatibility: 'ie8'}))
			.pipe(wrapper({
				header: '<style>',
				footer: '</style>'
	    }))
			.pipe(gulp.dest('build'));
});

gulp.task('js', function(){
	return gulp.src('src/index.js')
			.pipe(uglify())
			.pipe(wrapper({
				header: '<script>',
				footer: '</script>'
	    }))
			.pipe(gulp.dest('build'));
});

gulp.task('build', ['less', 'js'], function(){
	return gulp.src(['build/index.css', 'src/index.xtpl', 'build/index.js'])
			.pipe(concat('index.xtpl'))
			.pipe(gulp.dest('build'));
});

gulp.task('default', ['build'], function(){
	del(['build/index.js', 'build/index.css']);
});
