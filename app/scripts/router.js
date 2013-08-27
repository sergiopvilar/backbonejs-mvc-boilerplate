/* global define, Backbone */

define([
], function () {

    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {

            '*actions': 'index'

        }
    });

    var initialize = function (init) {

        if (init === true) {

            var router = new AppRouter();

            router.on('route:index', function () {
                require(['views/sampleView'], function (Route) {
                    new Route();
                });
            });

            Backbone.history.start({ pushState: true });

            // Pega os clicks
            $('body').delegate('a', 'click', function () {
                router.navigate($(this).attr('href'), true);
                return false;
            });

            if (window.location.hash) {
                var hash = window.location.hash;
                router.navigate(hash, true);
            }

        }

    };

    return {
        initialize: initialize
    };

});
