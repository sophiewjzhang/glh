'use strict';

var gulp = require('gulp'),
    targetFileName='portal',
    sourceDir = '.',
    devDir ='./build',
    releaseDir='./dist',
    devPaths = {
        stylePath: sourceDir + '/styles',
        tsPath: sourceDir + '/app',
        viewPath: sourceDir + '/views',
        bowerPath: '/bower_components',
        jsPath:  devDir+ '/scripts/',
        outTsPath: devDir+'/app',
        imgPath: devDir+ '/images/',
        fontPath: devDir+ '/fonts/',
        assetPath: devDir+ '/assets/',
        cssPath: devDir+ '/css/',
        packagePath: sourceDir + '/package/'
    },
    builder = {
        typescript: require('typescript'),
        del: require('del'),
        gulpIf: require('gulp-if'),
        util: require('gulp-util'),
        runSequence: require('run-sequence'),
        sourcemaps: require('gulp-sourcemaps'),
        connect: require('gulp-connect'),
        open: require('gulp-open'),
        express: require('gulp-express'),
        ts: require('gulp-typescript'),
        sass: require('gulp-sass')
        /*
         minifyCss: require('gulp-minify-css'),
         minifyHtml: require('gulp-minify-html'),
         uglify: require('gulp-uglify'),
         ngAnnotate: require('gulp-ng-annotate'),
         concat: require('gulp-concat'),
         rev: require('gulp-rev'),
         usemin: require('gulp-usemin'),
         minimist: require('minimist'),
         jshint: require('gulp-jshint'),
         karma: require('gulp-karma'),
         templateCache: require('gulp-angular-templatecache')
         */
    },
    serverOptions = {
        root: 'public',
        port: 8000,
        livereload: true
    },
    tasks = {
        'default': 'default',
        cleanAll: 'clean',
        build: 'build',
        compileTypeScript: 'ts',
        compileScss: 'scss',
        copyJs:'copy-js',
        copyTs:'copy-ts',
        copyCss:'copy-css',
        openBrowser: 'open',
        watch: 'watch',
        watcherRebuild: 'Watcher-Rebuild',
        packageSrc:'package'
    },
    environments = {
        development: 'dev',
        qa: 'qa',
        production: 'release'
    };

/*
 * Clean the dist files/folders before each build.
 * */
gulp.task(tasks.cleanAll, function () {
    return builder.del([
        devDir
    ]);
});
/*
 * build the css file.
 * */
gulp.task(tasks.compileScss, function () {

    return gulp.src([
            devPaths.stylePath + '/**/*.scss'
        ])
        .pipe(builder.sass().on('error', builder.sass.logError))
        .pipe(gulp.dest( devPaths.cssPath ));

});
/*
 * compile the type scripts.
 * */
gulp.task(tasks.compileTypeScript, function () {
    var tsProject = builder.ts.createProject( devPaths.tsPath + '/tsconfig.json', {
        typescript: typescript
    });

    return gulp.src([
            devPaths.tsPath+ '/**/**.js'
        ])
        .pipe(builder.sourcemaps.init())
        .pipe(builder.ts(tsProject))
        .pipe(builder.sourcemaps.write('../maps', { includeContent: false, sourceRoot: '/scripts/src' }))
        .pipe(gulp.dest( devPaths.jsPath));
});

/*
 * compile the type scripts.
 * */
gulp.task(tasks.build, function () {

    builder.runSequence([
        tasks.copyJs,
        tasks.copyTs,
        tasks.compileScss
    ]);
});

gulp.task(tasks.copyJs, function () {
    var libPath='node_modules/';
    return gulp.src([
            libPath+ 'es6-shim/es6-shim.min.js',
            libPath+ 'systemjs/dist/system-polyfills.js',
            libPath+ 'angular2/bundles/angular2-polyfills.js',
            libPath+ 'systemjs/dist/system.js',
            libPath+ 'typescript/lib/typescript.js',
            libPath+ 'rxjs/bundles/Rx.js',
            libPath+ 'angular2/bundles/angular2.js',
            devPaths.tsPath + '/**/**.js'
        ])
        .pipe(gulp.dest( devPaths.jsPath));
});

gulp.task(tasks.copyTs, function () {

    return gulp.src([
            devPaths.tsPath + '/**/**.ts'
        ])
        .pipe(gulp.dest( devPaths.outTsPath));
});

gulp.task('packageJs', function(){
    return gulp.src([
            devPaths.tsPath  +'/**/*.ts'

        ])
        .pipe(gulp.dest( devPaths.packagePath +  devPaths.tsPath ));
});

gulp.task('packageCss', function(){
    return gulp.src([
            devPaths.stylePath + '/**/*.scss'

        ])
        .pipe(gulp.dest( devPaths.packagePath +  devPaths.stylePath ));
});

gulp.task('packageRoot', function(){
    return gulp.src([
            'index.html',
            'gulpfile.js',
            'package.json',
            'tsconfig.json'
        ])
        .pipe(gulp.dest( devPaths.packagePath ));
});

gulp.task(tasks.packageSrc, function () {

    builder.runSequence(
        [
            'packageJs',
            'packageCss',
            'packageRoot'
        ]
    );

});


gulp.task(tasks.default, function () {
    builder.runSequence(
        tasks.compileScss
    );
});
