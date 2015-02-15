'use strict';

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

var del = require('del');
var runSequence = require('run-sequence');
var opn = require('opn');

var NwBuilder = require('node-webkit-builder');

var paths = {
	dev: {},
	public: {},
	background: {},
	build: 'build',
	cache: 'ressource',
	deploy: 'deploy'
}

paths.background.packageJSON 	= 'package.json';
paths.background.dependencies 	= 'node_modules/**';

paths.dev.root 			= 'dev/'; 
paths.dev.assets 		= paths.dev.root + 'assets/';
paths.dev.styles 		= paths.dev.assets + 'sass/';
paths.dev.images 		= paths.dev.assets + 'img/';
paths.dev.fonts 		= paths.dev.assets + 'fonts/';
paths.dev.scripts 		= paths.dev.assets + 'js/';

paths.public.root 		= 'app/';
paths.public.assets 	= paths.public.root + 'assets/';
paths.public.styles 	= paths.public.assets + 'css/';
paths.public.images 	= paths.public.assets + 'img/';
paths.public.fonts 		= paths.public.assets + 'fonts/';
paths.public.scripts 	= paths.public.assets + 'js/';

// Node webkit builder for deployement 
var nw = new NwBuilder({
	files: [paths.background.packageJSON, paths.public.root + 'index.html'],
	plateform: ['osx', 'win', 'linux'],
	buildDir: paths.build,
	cacheDir: paths.cache,
	forceDownload: false,
	version: 'v0.11.5'
});

// Task for compile style files
// SASS -- > CSS
gulp.task('style', function(){ 
	var s = plugin.size();
	return 	plugin.rubySass(paths.dev.styles + 'style.scss', {
				style: 'expanded',
				precision: 10,
				sourcemap: true
			})
			.pipe(s)
			.pipe(gulp.dest(paths.public.styles))
			.pipe(plugin.notify({
				title: 'Style',
				message: 'Style compilation completed' + s.prettySize
			}));
});

// Task for compile js files
// *.js -- > app.js
gulp.task('js', function(){
	var s = plugin.size();
	return 	gulp.src(paths.dev.scripts + '*.js')
			.pipe(s)
			.pipe(plugin.concat('app.js'))
			.pipe(gulp.dest(paths.public.scripts))
			.pipe(plugin.notify({
				title: 'JS',
				message: 'JS compilation completed' + s.prettySize
			}));
});

// Task for compile vendors js files
// vendors/*.js -- > vendors.js
gulp.task('vendors', function(){
	var s = plugin.size();
	return 	gulp.src(paths.dev.scripts + 'vendors/*.js')
			
			.pipe(plugin.concat('vendors.js'))
			.pipe(gulp.dest(paths.public.scripts))
			.pipe(plugin.notify({
				title: 'Vendors',
				message: 'Vendors compilation completed' + s.prettySize
			}));
});

// Task for compile images files
// img.{jpg,png,svg,gif} -- > optimized img.{jpg,png,svg,gif}
gulp.task('images', function(){
	var s = plugin.size();
	return 	gulp.src(paths.dev.images + '**')
			.pipe(s)
			.pipe(plugin.imagemin({
				progressive: true,
				interlaced: true,
				optimizationLevel: 5
			}))
			.pipe(gulp.dest(paths.public.images))
			.pipe(plugin.notify({
				title: 'Images',
				message: 'Images compilation completed' + s.prettySize
			}));
});

// Just copy fonts file to public directory
gulp.task('fonts', function(){
	var s = plugin.size();
	return	gulp.src(paths.dev.fonts + '**')
			.pipe(s)
			.pipe(gulp.dest(paths.public.fonts))
			.pipe(plugin.notify({
				title: 'Fonts',
				message: 'Fonts compilation completed' + s.prettySize
			}));
});

// Just html file to public directory
gulp.task('html', function(){
	var s = plugin.size();
	return	gulp.src(paths.dev.root + '**/*.html')
			.pipe(s)
			.pipe(gulp.dest(paths.public.root))
			.pipe(plugin.notify({
				title: 'HTML',
				message: 'HTML compilation completed' + s.prettySize
			}));
});

// Just copy text file to public directory
gulp.task('copy', function(){
	var s = plugin.size();
	return 	gulp.src(paths.dev.root + '**')
			.pipe(s)
			.pipe(gulp.dest(paths.public.root))
			.pipe(plugin.notify({
				title: 'File',
				message: 'File compilation completed' + s.prettySize
			}));
});

// Clean the public directory
gulp.task('clean', function(){
	del(paths.public.root);
	del(paths.build);
});

gulp.task('dev', ['clean'], function(){
	runSequence('html', ['images', 'fonts', 'style', 'js', 'vendors'], function(){

		// runSequence('build');

		gulp.watch([paths.dev.root + '**/*.html'], ['html']);
		gulp.watch([paths.dev.styles + '**/*.scss'], ['style']);
		gulp.watch([paths.dev.scripts + '*.js'], ['js']);
		gulp.watch([paths.dev.scripts + 'vendors/*.js'], ['vendors']);
		gulp.watch([paths.dev.images + '**/*'], ['images']);
		plugin.notify({
			title: 'Watch',
			message: 'I look at you'
		});

	});
})


// gulp.task('build', function(){
// 	nw.build().then(function(){
// 		plugin.notify({
// 			title: 'NodeWebkit',
// 			message: 'Application Compiled'
// 		});
// 		opn(paths.build+'osx64/app.app');
// 	}).catch(function(error){
// 		plugin.notify(error);
// 		console.log(error);
// 	});
// })


