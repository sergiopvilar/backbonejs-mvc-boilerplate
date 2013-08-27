/* global define, Backbone, _config */

define([
], function () {

	'use strict';

    var BootstrapModel = Backbone.Model.extend({

        urlRoot: _config.apiUrl + 'your path'

    });

    return new BootstrapModel();

});