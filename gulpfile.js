const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

let tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});


gulp.task('compile', () => {
    tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['compile']);

gulp.task('default', ['build']);