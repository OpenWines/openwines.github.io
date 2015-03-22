/*
 * build.js
 * Copyright (C) 2015 ronan <ronan@cider>
 *
 * Distributed under terms of the MIT license.
 */

var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates')
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    dir         = __dirname,
    source      = './src',
    build       = './'
    ;

Metalsmith(dir)
    .use(markdown())
    .use(collections({
        pages: {
            pattern: source + '/*.md',
            metadata: {
                title: 'OpenWines',
                name: 'Articles',
                description: 'Open-Data for Wines'
            }
        }
    }))
    .use(permalinks({
        pattern: ':title'
    }))
    .use(templates('jade'))
    .destination(build)
    .build()

