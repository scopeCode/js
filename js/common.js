/**
 * Created by WG on 2015/10/20.
 * 公共处理JS方法集合
 */

var common = (function(){

    var star = {
        arr:[],
        cnt:0,
        starStr:'<span class="star star-#{star}></span>',
        append:function(){
            if(star.cnt==0){
                return "";
            }else{
                if(RegexUtil.isFloat(star.cnt)){

                }else{

                }
            }
        },
        getFullStarStr:function(){

        },
        getEmptyStarStr:function(){

        },
        getHalfStarStr:function(){
            star.arr.push(star.starStr.format({star:"half"}));
        }
    };

    return {
        star:function(cnt){
            star.cnt = cnt;
            star.append();
        }
    }
})();