/*
 * build.js
 * Copyright (C) 2015 ronan <ronan.guilloux@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates')
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    tags        = require('metalsmith-tags'),
    dir         = __dirname,
    source      = './src',
    build       = './'
    ;

    var metadata = {
        title: 'OpenWines',
        description: 'Open-Data for Wines'
    };

Metalsmith(dir)
    .use(markdown())
    .use(tags({
        handle:     'tags',             // yaml key for tag list in you pages
        path:       '/tags/:tag.html',  // path for result pages
        template:   '/page.jade',       // template to use for tag listing
        sortBy:     'date',             // provide posts sorted by 'date' (optional)
        reverse:    true                // sort direction (optional)
    }))
    .use(collections({
        pages: {
            metadata: metadata
        },
        posts: {
            metadata: metadata
        }
    }))
    .use(permalinks({
        pattern: ':title'
    }))
    .use(templates('jade'))
    .destination(build)
    .build()

