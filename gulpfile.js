const gulp        = require('gulp'),
      concat      = require('gulp-concat'),
      cleanCSS    = require('gulp-clean-css'),      
      browserSync = require('browser-sync').create();

/**
 * Copy HTML files
 */
gulp.task('html', () => {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

/**
 * Compile Sass files
 */
gulp.task('css', () => {
    gulp.src('src/style/**/*.css')        
        .pipe(concat('style.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

/**
 * Create static server and watchers
 */
gulp.task('browser-sync', ['html','css'], () => {
   browserSync.init({
       server: {
           baseDir: 'dist/'
       }
   });
   
   gulp.watch('src/style/**/*.css', ['css']);
   gulp.watch('src/**/*.html', ['html']);
   
   gulp.watch('src/**/*.html').on('change', browserSync.reload);
});

/**
 * Gulp default task
 */
gulp.task('default', ['browser-sync']);