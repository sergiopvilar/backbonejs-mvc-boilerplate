/* global define, _config */

define([], function(){

	'use strict';

    var Fn = function(){

        this.debug = function(obj){

            if(_config.debug === true){
                console.debug(obj);
            }

        };

    };

    return new Fn();

});