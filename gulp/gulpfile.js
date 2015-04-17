// ==========================================
// ===             Require                ===
// ==========================================
	var gulp = require('gulp');
	var plugin = require('gulp-load-plugins')();
	var runSequence = require('run-sequence');
	var minimist = require('minimist');
	var NwBuilder = require('node-webkit-builder');
// ==========================================


// ==========================================
// ===         setup Path variables       ===
// ==========================================
	var sourcePaths = {
		CSS: 'src/sass/**/*.scss',
		CSSPath: 'src/sass/',
		JS: 'src/js/**/*.js',
		JSPath: 'src/js/',
		VENDORS: 'src/vendors/**/*.js'
	};
	var destPaths = {
		BASE: '../app/',
		CSS: '../app/css/',
		JS: '../app/js/'
	};
// ==========================================


// =========================================
// ===           Enviro Variables        ===
// =========================================
	var minify = true;  // this is set to true when running the "default" task

	var pkg = require('./package.json');
	var banner = ['/**',
		' * <%= pkg.name %> - <%= pkg.description %>',
		' * @version v<%= pkg.version %>',
		' * @license <%= pkg.license %>',
		' */',
		''].join('\n');

	var knownOptions = {
	  string: 'env',
	  default: { env: process.env.NODE_ENV || 'production' }
	};

	var options = minimist(process.argv.slice(2), knownOptions);
// =========================================



// =========================================
// ===        Node Webkit builder        ===
// =========================================
	var nw;
// =========================================


// -------------------------
// --    task: app   --
// -------------------------
gulp.task('app', function(){
	gulp.src('', {read: false})
		.pipe(plugin.shell(['nw app'], { cwd: '../' } ));
});
// -------------------------



// -------------------------
// --    task: SASS       --
// -------------------------

gulp.task('sass', function(callback) {
	runSequence('sass-clean', 'sass-build', callback);

});

gulp.task('sass-clean', function(){
	return 	gulp.src(destPaths.CSS + '*.{css, css\.map}')
				.pipe(plugin.clean({force: true}));
});

gulp.task('sass-build', function(){
	return 	gulp.src(sourcePaths.CSSPath + 'style.scss')
				.pipe(plugin.rubySass({ style: 'expanded'})).on('error', plugin.notify.onError({message: 'sass error: <%= error %>'}))
				.pipe(plugin.autoprefixer( { browsers: ['Chrome >= 30'] } ))
				.pipe(plugin.if(minify, plugin.csso()))
				.pipe(plugin.header(banner, { pkg : pkg } ))
				.pipe(gulp.dest(destPaths.CSS));
});



// -------------------------
// --    task: Scripts    --
// -------------------------
gulp.task('scripts', function(callback) {
	runSequence('scripts-clean', 'scripts-build', callback);
});

gulp.task('scripts-clean', function(){
	return 	gulp.src(destPaths.JS + '*.js')
				.pipe(plugin.clean({force: true}));
});

gulp.task('scripts-build', function(){
	return 	gulp.src(sourcePaths.JSPath + '*.js')
				.pipe(plugin.webpack({ output: { filename: "script.js" }, target: 'node-webkit' }))
				.pipe(plugin.if(minify, plugin.uglify()))
				.pipe(plugin.header(banner, { pkg : pkg } ))
				.pipe(gulp.dest(destPaths.JS));
});

// -------------------------
// --    task: HTML    --
// -------------------------
gulp.task('html', function(callback) {
	runSequence('html-clean', 'html-build', callback);
});

gulp.task('html-clean', function(){
	return 	gulp.src(destPaths + '*.html')
				.pipe(plugin.clean({force: true}));
});

gulp.task('html-build', function(){
	return 	gulp.src('*.html')
				.pipe(gulp.dest(destPaths.BASE));
});



// -------------------------
// --     task: watch     --
// -------------------------
gulp.task('watch', function() {
	gulp.watch(sourcePaths.CSS, ['sass']);
	gulp.watch(sourcePaths.JS, ['scripts']);
	gulp.watch(sourcePaths.BASE, ['html']);
});


// -------------------------
// --    task: build      --
// -------------------------
gulp.task('build', function(callback) {
	nw = new NwBuilder({
	    files: ['../app/**'],
	    platforms: ['osx', 'win', 'linux'],
	    buildDir: '../build',
	    cacheDir: '../ressources',
	    macIcns: '../app/icons/app_icon.ico'
	});
	nw.on('log', function (msg) { plugin.util.log('node-webkit-builder', msg); });
	return nw.build().catch(function(err) { plugin.util.log('node-webkit-builder', err); });

});

// -------------------------
// --    task: serve      --
//--------------------------
gulp.task('serve', function(callback) {
	if (options.env === 'dev') { minify = false; }
	runSequence('html', 'sass', 'scripts', 'app', 'watch', callback);
});


// -------------------------
// --    task: default    --
// -------------------------
gulp.task('default', function (callback) {
	minify = true;
	runSequence('html', 'sass', 'scripts', callback);
});


