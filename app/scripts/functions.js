define([], function(){

    var fn = function(){

        this.debug = function(obj){

            if(_config.debug === true){
                console.debug(obj);
            }

        }

    };

    return new fn;

});