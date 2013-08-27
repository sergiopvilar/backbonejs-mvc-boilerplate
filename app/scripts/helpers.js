define([], function(){

    var hp = function(){

        this.actualDate = function(){
            return new Date().toLocaleDateString();
        }

    };

    return new hp;

});