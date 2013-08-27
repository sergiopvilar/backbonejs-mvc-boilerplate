define([
    'models/sampleModel'
], function (Model) {

    "use strict";

    var sampleController = function () {

        this.model = Model;

        this.set = function (key, value) {
            this[key] = value;
        };

        this.fetch = function (success, error) {

            var model_fetch = this.model.fetch();

            model_fetch.success(function (data) {

                if (success) success(data);

            });

            model_fetch.error(function (er) {

                if (error) error(er);

            });

        }

    };

    return new sampleController()

});