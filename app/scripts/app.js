/* global define */

define([
    'router'
], function (Router) {

	'use strict';

    var initialize = function () {

        Router.initialize(true);

    };

    return {
        initialize: initialize
    };

});
