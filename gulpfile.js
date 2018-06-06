var gulp        = require('gulp'),
	ts 			= require("gulp-typescript"),
	tsProject 	= ts.createProject("tsconfig.json"),
	browserSync = require("browser-sync").create(),
	reload      = browserSync.reload;

var config = {
	server: {baseDir: "./"},
    startPath: '/',
	port: 9000
};

gulp.task('watch', function () {
	gulp.watch(['dist/**/*.*', 'index.html']).on('change', reload);
});

gulp.task('ts', function () {
	gulp.watch('src/**/*.ts', ['ts-compile'])
})

gulp.task('ts-compile', function () {
	return gulp.src('src/**/*.ts')
	.pipe(tsProject())
	.pipe(gulp.dest('dist'))
})

gulp.task('default', ['watch', 'ts'], function () {
	browserSync.init(config);
});