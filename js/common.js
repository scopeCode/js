/**
 * Created by WG on 2015/10/20.
 * 公共处理JS方法集合
 */

var common = (function(){

    var star = {
        arr:[],
        cnt:0,
        max:5,
        emptyCnt:0,
        getStarStr:function(){
            //设定返回的字符串arr 为空
            star.arr.length = 0;

            if(star.cnt==0||star.cnt > star.max){
                star.arr.push(star.getEmptyStarStr(star.max));
            }else{
                //var dotIndex = star.cnt.toString().indexOf('.');
                if(RegexUtil.isFloatEx(star.cnt)){//如果是float且 一定是一位小数点的判定
                    star.cnt = star.cnt - 0.5;
                    star.arr.push(star.getFullStarStr(star.cnt));
                    star.emptyCnt = star.max - star.cnt - 1;
                    star.arr.push(star.getHalfStarStr());
                }else{//整形的情况
                    star.emptyCnt = star.max - star.cnt;
                    star.arr.push(star.getFullStarStr(star.cnt));
                }

                if(star.emptyCnt > 0){
                    star.arr.push(star.getEmptyStarStr(star.emptyCnt));
                }
            }
            return star.arr.join('');
        },
        getFullStarStr:function(cnt){
            var i = 0,arr=[];
            for(i;i<cnt;i++){
                arr.push('<span class="star star-full"></span>');
            }
            return arr.join('');
        },
        getEmptyStarStr:function(cnt){
            var i = 0,arr=[];
            for(i;i<cnt;i++){
                arr.push('<span class="star star-empty"></span>');
            }
            return arr.join('');
        },
        getHalfStarStr:function(){
           return '<span class="star star-half"></span>'
        }
    };

    return {
        star:function(cnt,max){
            star.cnt = cnt||star.cnt;
            star.max = max||star.max;
            return star.getStarStr();
        }
    }
})();