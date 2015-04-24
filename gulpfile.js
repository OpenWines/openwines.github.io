/*
 * gulp.js
 * Copyright (C) 2015 ronan <ronan.guilloux@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

var gulp =          require('gulp'),
    concat =        require('gulp-concat'),
    less =          require('gulp-less'),
    csscomb =       require('gulp-csscomb'),
    minifyCss =     require("gulp-minify-css"),
    uncss =         require('gulp-uncss'),
    path =          require('path'),
    uglify =        require('gulp-uglify'),
    imagemin =      require('gulp-imagemin'),
    cache =         require('gulp-cache'),
    ssg =           require('gulp-ssg'),
    rename =        require('gulp-rename'),
    data =          require('gulp-data'),
    matter =        require('gray-matter'),
    markdown =      require('gulp-markdown'),
    minifyHTML =    require("gulp-minify-html"),
    changed =       require("gulp-changed"),
    wrap =          require('gulp-wrap'),
    includer =      require('gulp-lb-include'),
    del =           require('del'),
    sitemap =       require('gulp-sitemap'),
    debug =         require('gulp-debug'),
    notify =        require('gulp-notify'),
    open =          require('gulp-open')
;

var src =           './src',
    assets =        './assets',
    website =       './',
    metadata = {
        site_name:      'OpenWines',
        description:    'Open-Data for Wines'
    };

var paths = {
    contents:       src + '/contents/**/*.{md, markdown}',
    stylesheets:    src + '/css/*.css',
    template:       src + '/templates/',
    templateFile:   'template.html',
    source: {
        partials:   src + '/partials',
        less:       src + '/less',
        lessFile:   'main.less',
        css:        src + '/css',
        scripts:    src + '/js/scripts/*.js',
        vendor:     src + '/js/vendor/*.js',
        plugins:    src + '/js/plugins/*.js',
        bootscript: src + '/js/vendor/bootstrap/',
        images:     src + '/images/**/*'
    },
    destination: {
        cssFile:        'main.css',
        //vendorFile:     'vendor.js',
        css:            assets + '/css',
        js:             assets + '/js',
        images:         assets + '/images',
        min: {
            cssFile:    'main.min.css',
            jsFile:     'main.min.js',
            //vendorFile: 'vendor.min.js'
        }
    },
    html:           [
        website + '*.html',
        website + 'posts/*.html'
    ]
};

// Purge before rebuild
gulp.task('clean', function(cb) {
    return del([
        assets,
        website + '/*.html',
        website + '/posts/*.html'
    ], cb);
});

// Include - not used yet
gulp.task('include', function () {
    gulp.src(paths.partials + '/template.html')
        .pipe(includer())
        .pipe(gulp.dest(paths.template + paths.templateFile));
});

// Compile Less
gulp.task('less', function () {
    gulp.src(paths.source.less + '/' + paths.source.lessFile)
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(csscomb())
        .pipe(minifyCss())
        .pipe(rename(paths.destination.min.cssFile))
        .pipe(gulp.dest(paths.destination.css));
});

// // Uncss
// gulp.task('ultimcss', ['less'], function () {
//     gulp.src(paths.source.css + '/' + paths.destination.cssFile)

//         .pipe(uncss({
//             html: [website + 'index.html'] // *.html files all use a common layout template
//         }))

//         .pipe(minifyCss())
//         .pipe(rename(paths.destination.min.cssFile))
//         .pipe(gulp.dest(paths.destination.css));
// });

// Minify Scripts
gulp.task('scripts', function() {
    gulp.src(paths.source.scripts)
        .pipe(uglify())
        .pipe(rename(paths.destination.min.jsFile))
        .pipe(gulp.dest(paths.destination.js));
});

// Minify New Images
gulp.task('imagemin', function() {
    gulp.src(paths.source.images)
        .pipe(cache(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(paths.destination.images));
});

// Minify Vendor
gulp.task('vendor', function() {
    gulp.src(paths.source.vendor)
        .pipe(uglify())
        //.pipe(concat(paths.destination.vendorFile))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.destination.js));
});

// Concatenate & Minify Plugins
gulp.task('plugins', function() {
    gulp.src(paths.source.plugins)
        .pipe(concat('plugins.js'))
        .pipe(rename('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.destination.js));
});

// Concatenate & Minify Bootstrap js
gulp.task('bootstrap', function () {
  gulp.src([
          paths.source.bootscript + 'transition.js',
          paths.source.bootscript + 'alert.js',
          paths.source.bootscript + 'button.js',
          paths.source.bootscript + 'carousel.js',
          paths.source.bootscript + 'collapse.js',
          paths.source.bootscript + 'dropdown.js',
          paths.source.bootscript + 'modal.js',
          paths.source.bootscript + 'tooltip.js',
          paths.source.bootscript + 'popover.js',
          paths.source.bootscript + 'scrollspy.js',
          paths.source.bootscript + 'tab.js',
          paths.source.bootscript + 'affix.js'
        ])
    .pipe(concat('bootstrap.js'))
    .pipe(rename('bootstrap.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.destination.js));
});

/**
 * - Extracts front-matter from each markdown file, assigns it to file object
 * - Converts markdown to HTML
 * - Passes each file through a template (using hogan flavour of mustache) adding some extra site variables
 * - Outputs to a public directory
 *
 * In the template a simple global navigation is generated of the root files siblings.
 * inspiration: https://github.com/paulwib/gulp-ssg/blob/master/examples/markdown-website/gulpfile.js
 */
gulp.task('contents', ['watch', 'less',/*'ultimcss',*/ 'include', 'scripts', 'imagemin', 'vendor', 'plugins', 'bootstrap'], function () {

    return gulp.src(paths.contents)

        // Extract YAML front-matter using gulp-data
        .pipe(data(function(file) {
            var m = matter(String(file.contents));
            file.contents = new Buffer(m.content);
            return m.data;
        }))

        // markdown -> HTML
        .pipe(markdown())

        // Rename to .html
        .pipe(rename({ extname: '.html' }))

        // Run through gulp-ssg
        .pipe(ssg())

        // Wrap file in template
        .pipe(wrap(
            { src: 'src/templates/template.html' },
            { siteTitle: metadata.site_name },
            { engine: 'hogan' }
        ))
        .pipe(minifyHTML())

        // Output to build directory
        .pipe(gulp.dest(website));
});

// Sitemap
gulp.task('build', ['contents'], function () {
    gulp.src(paths.html)
        .pipe(sitemap({
            siteUrl: 'http://openwines.eu'
        }))
        .pipe(gulp.dest(website))
        .pipe(notify("build achieved."));
});

// Watch for changes in files
gulp.task('watch', function() {
    gulp.watch(paths.source.less + '/**/*.less', ['less']);
    gulp.watch(paths.partials + '/**/*.html', ['include']);
    gulp.watch(paths.contents, ['build']);
    gulp.watch(paths.source.scripts, ['scripts']);
    gulp.watch(paths.source.vendor, ['vendor']);
    gulp.watch(paths.source.plugins, ['plugins']);
    gulp.watch(paths.source.bootscript, ['bootstrap']);
    gulp.watch(paths.source.images, ['imagemin']);
});

gulp.task('check', function(){
    gulp.src(website + 'index.html')
        .pipe(open());
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

