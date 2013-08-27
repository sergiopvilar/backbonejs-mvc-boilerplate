/* global define */

define([
    'models/sampleModel'
], function (Model) {

    'use strict';

    var SampleController = function () {

        this.model = Model;

        this.set = function (key, value) {
            this[key] = value;
        };

        this.fetch = function (success, error) {

            var modelFetch = this.model.fetch();

            modelFetch.success(function (data) {

                if (success){
                    success(data);
                }

            });

            modelFetch.error(function (er) {

                if (error){
                    error(er);
                }

            });

        };

    };

    return new SampleController();

});