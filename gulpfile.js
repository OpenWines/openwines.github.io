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
    debug =         require('gulp-debug'),
    notify =        require('gulp-notify'),
    open =          require('gulp-open')
;

var src =           './src',
    assets =        './assets',
    website =       './',
    metadata = {
        site_name:      'OpenWines',
        title:          'OpenWines',
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
        vendor:     src + '/js/vendor/**/*.js',
        plugins:    src + '/js/plugins/*.js',
        images:     src + '/images/**/*'
    },
    destination: {
        cssFile:        'main.css',
        vendorFile:     'vendor.js',
        css:            assets + '/css',
        js:             assets + '/js',
        images:         assets + '/images',
        min: {
            cssFile:    'main.min.css',
            jsFile:     'main.min.js',
            vendorFile: 'vendor.min.js'
        }
    },
    html:           [
        website + '/*.html',
        website + '/posts/*.html'
    ]
};

var site = {
    'title': 'Wunderdog K-9 Care & Training',
    'url': 'http://localhost:9000',
    'urlRoot': '/',
    'author': 'Lynn Wunderli',
    'email': 'wunderdogwi@yahoo.com',
    'time': new Date()
}

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
        .pipe(rename(paths.destination.cssFile))
        .pipe(gulp.dest(paths.source.css));
});

// Uncss
gulp.task('ultimcss', ['less'], function () {
    gulp.src(paths.destination.css + paths.destination.cssFile)
        .pipe(uncss({
            html: [website + 'index.html'] // *.html files all use a common layout template
        }))
        .pipe(minifyCss())
        .pipe(rename(paths.destination.min.cssFile))
        .pipe(gulp.dest(paths.destination.css));
});

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

// Minify New or Changed HTML Pages
gulp.task('htmlpage', function() {
    gulp.src(paths.html)
        //.pipe(changed(website)) // source & dest are the same
        .pipe(minifyHTML())
        .pipe(gulp.dest(website));
});

// Minify Vendor
gulp.task('vendor', function() {
    gulp.src(paths.source.vendor)
        .pipe(uglify())
        .pipe(concat(paths.destination.vendorFile))
        .pipe(rename(paths.destination.min.vendorFile))
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

/**
 * - Extracts front-matter from each markdown file, assigns it to file object
 * - Converts markdown to HTML
 * - Passes each file through a template (using hogan flavour of mustache) adding some extra site variables
 * - Outputs to a public directory
 *
 * In the template a simple global navigation is generated of the root files siblings.
 * inspiration: https://github.com/paulwib/gulp-ssg/blob/master/examples/markdown-website/gulpfile.js
 */

gulp.task('build', ['watch', 'less', 'ultimcss', 'htmlpage', 'include', 'scripts', 'imagemin', 'vendor', 'plugins'], function () {

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
            { siteTitle: 'Example Website'},
            { engine: 'hogan' }
        ))

        // Output to build directory
        .pipe(gulp.dest(website))

});

// Watch for changes in files
gulp.task('watch', function() {
    gulp.watch(paths.source.less + '/**/*.less', ['ultimcss']);
    gulp.watch(paths.partials + '/**/*.html', ['include']);
    gulp.watch(paths.html, ['htmlpage']);
    gulp.watch(paths.source.scripts, ['scripts']);
    gulp.watch(paths.source.vendor, ['vendor']);
    gulp.watch(paths.source.plugins, ['plugins']);
    gulp.watch(paths.source.images, ['imagemin']);
});

gulp.task('check', function(){
    gulp.src(website + 'index.html')
        .pipe(open());
});

// Default Task
gulp.task('default', ['clean'], function () {
    gulp.start('build');

});

