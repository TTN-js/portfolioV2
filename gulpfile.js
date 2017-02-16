//required
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber');

//styles
gulp.task('styles', () =>
    sass('styles/style.scss', { 
    	noCache: true, 
    	stopOnError: false,
    	style: 'compressed', 
    })
    .pipe(gulp.dest('css/'))
);

//watch
gulp.task('watch', function(){
	gulp.watch('styles/*.scss', ['styles'])
});

//compiles styles and watches file as default
// gulp.task('default', ['styles', 'watch']);