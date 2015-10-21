/**
 * Created by WG on 2015/10/20.
 */
moReady(function(){
    setTimeout(function(){ index.build();},0);
});

var index  = (function(){
    var optIndex = {
        build:function(){
            document.getElementById('divStar0').innerHTML = common.star(0);
            document.getElementById('divStar1').innerHTML = common.star(1);
            document.getElementById('divStar11').innerHTML = common.star(1.5);
            document.getElementById('divStar2').innerHTML = common.star(2);
            document.getElementById('divStar22').innerHTML = common.star(2.5);
            document.getElementById('divStar3').innerHTML = common.star(3);
            document.getElementById('divStar33').innerHTML = common.star(3.5);
            document.getElementById('divStar4').innerHTML = common.star(4);
            document.getElementById('divStar44').innerHTML = common.star(4.5,5);
            document.getElementById('divStar5').innerHTML = common.star(5,5);
        },
    };

    return {
        build:function(){optIndex.build();}
    };

})();