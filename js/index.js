/**
 * Created by WG on 2015/10/20.
 */
moReady(function(){
    setTimeout(function(){ index.build();},0);
});

var index  = (function(){

    var star = "";

    var optIndex = {
        build:function(){
            console.log("success load js");
        },
    };


    return {
        build:function(){optIndex.build();}
    };

})();