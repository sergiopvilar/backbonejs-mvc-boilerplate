define([
], function () {

    var BootstrapModel = Backbone.Model.extend({

        urlRoot: _config.api_url + "json.php"

    });

    return new BootstrapModel;

});