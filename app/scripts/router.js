// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {

            '*actions': 'index'

        }
    });

    var initialize = function (init) {

        if (init == true) {

            var app_router = new AppRouter;

            app_router.on('route:index', function () {
                require(['views/sampleView'], function (Route) {
                    new Route();
                });
            });

            Backbone.history.start({ pushState: true });

            // Pega os clicks
            $("body").delegate("a", "click", function () {
                app_router.navigate($(this).attr('href'), true);
                return false;
            });

            if (window.location.hash) {
                hash = window.location.hash;
                app_router.navigate(hash, true);
            }

        }

    };
    return {
        initialize: initialize
    };
});
