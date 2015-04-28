// ==========================================
// ===             Require                ===
// ==========================================
	var gulp = require('gulp');
	var plugin = require('gulp-load-plugins')();
	var runSequence = require('run-sequence');
	var NwBuilder = require('node-webkit-builder');
	var handlebars = require('handlebars');
	var del = require('del');
	var nw = require('nw').findpath();

// ==========================================

// ==========================================
// ===         setup Path variables       ===
// ==========================================
	var sourcePaths = {
		BASE: 'src/',
		CSS: 'src/sass/',
		JS: 'src/js/',
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
	var pkg = require('./package.json');
	var banner = ['/**',
		' * <%= pkg.name %> - <%= pkg.description %>',
		' * @version v<%= pkg.version %>',
		' * @license <%= pkg.license %>',
		' */',
		''].join('\n');

	var environment = plugin.util.env.env || 'development';
	var isProduction = environment === 'production';
	var webpackConfig = require('./webpack.config.js').getConfig(environment);
	process.env.ENV = environment;
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
	return 	gulp.src('', {read: false})
							.pipe(plugin.shell([
								'nw ../app'
							]));
});
// -------------------------



// -------------------------
// --    task: SASS       --
// -------------------------
gulp.task('clean:styles', function(cb){
	del(destPaths.CSS + '*.{css, css\.map}', {force: true}, cb);
});

gulp.task('styles', ['clean:styles'],function(){
	return 	gulp.src(sourcePaths.CSS + 'style.scss')
							.pipe(plugin.rubySass({ style: 'expanded'})).on('error', plugin.notify.onError({message: 'sass error: <%= error %>'}))
							.pipe(plugin.autoprefixer( { browsers: ['Chrome >= 30'] } ))
							.pipe(plugin.if(isProduction, plugin.csso()))
							.pipe(plugin.header(banner, { pkg : pkg } ))
							.pipe(gulp.dest(destPaths.CSS))
							.pipe(plugin.size({title: 'CSS'}));
});



// -------------------------
// --    task: Scripts    --
// -------------------------
gulp.task('clean:scripts', function(cb){
	del(destPaths.JS + '*.{js, js\.map}', {force: true}, cb);

});

gulp.task('scripts', ['clean:scripts'], function(){
	return 	gulp.src(webpackConfig.entry.app)
							.pipe(plugin.webpack(webpackConfig))
							.pipe(plugin.if(isProduction, plugin.uglify()))
							.pipe(plugin.header(banner, { pkg : pkg } ))
							.pipe(gulp.dest(destPaths.JS))
							.pipe(plugin.size({title: 'JS'}));
});

// -------------------------
// --    task: HTML    --
// -------------------------
gulp.task('html', function(){
	return 	gulp.src(sourcePaths.BASE + 'index.HTML')
							.pipe(gulp.dest(destPaths.BASE))
							.pipe(plugin.size({title: 'HTML'}));
});



// -------------------------
// --     task: watch     --
// -------------------------
gulp.task('watch', function() {
	gulp.watch(sourcePaths.CSS + '**/*.scss', ['styles']);
	gulp.watch(sourcePaths.JS  + '**/*.js', 	['scripts']);
	gulp.watch(sourcePaths.JS  + '**/*.jsx', 	['scripts']);
	gulp.watch(sourcePaths.JS  + '**/*.hbs', 	['html']);
});


// -------------------------
// --    task: build      --
// -------------------------
gulp.task('build', function(callback) {
	nodeWebkit = new NwBuilder({
	    files: ['../app/**'],
	    platforms: ['osx', 'win', 'linux'],
	    buildDir: '../build',
	    cacheDir: '../ressources',
	    macIcns: '../app/icons/app_icon.ico'
	});
	nodeWebkit.on('log', function (msg) { plugin.util.log('node-webkit-builder', msg); });
	return 	nodeWebkit.build()
						.catch(function(err) { plugin.util.log('node-webkit-builder', err); })
						.pipe(plugin.size());

});

// -------------------------
// --    task: serve      --
//--------------------------
gulp.task('serve', function(callback) {
	runSequence('html', 'styles', 'scripts', 'app', 'watch', callback);
});


// -------------------------
// --    task: default    --
// -------------------------
gulp.task('default', function (callback) {
	runSequence('html', 'styles', 'scripts', callback);
});
