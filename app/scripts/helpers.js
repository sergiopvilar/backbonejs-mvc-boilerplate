/* global define */

define([], function(){

	'use strict';

    var Hp = function(){

        this.actualDate = function(){
            return new Date().toLocaleDateString();
        };

    };

    return new Hp();

});