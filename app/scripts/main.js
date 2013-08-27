require.config({

    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore-amd/underscore',
        'backbone': '../bower_components/backbone-amd/backbone',
        'text': '../bower_components/requirejs-text/text',
        'templates': '../templates'

    },

    config: {
        text: {
            env: 'xhr'
        }
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            exports: 'Backbone'
        },
        'config': {
            deps: ['jquery']
        },
        'functions': {
            deps: ['jquery', 'config']
        },
        'helpers': {
            deps: ['jquery', 'config', 'functions']
        }
    }

});

require([
    'app',
    'config',
    'functions',
    'helpers',
    'jquery',
    'underscore',
    'backbone'
], function (App, config, functions, helpers) {

    window._config = config;
    window._fn = functions;
    window._hp = helpers;

    App.initialize();

});