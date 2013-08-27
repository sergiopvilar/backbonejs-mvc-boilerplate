define([
    'controllers/sampleController',
    'text!templates/sampleTemplate.html'
], function (Controller, Template) {

    var sampleView = Backbone.View.extend({

        model: null,
        container: _config.container,

        initialize: function () {

            this.render();

        },

        render: function () {

            var that = this,
                renderedTemplate = '';

            Controller.fetch(function (data) {

                _fn.debug(data);

                renderedTemplate = _.template(Template)(data);
                $(that.container).html(renderedTemplate);

                that.UIEventsInit();

            });

        },

        UIEventsInit: function () {

            $('a.hi').click(function(){
               alert($(this).text());
            });

        }

    });

    return sampleView;

});