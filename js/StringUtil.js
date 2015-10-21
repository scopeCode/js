/**
 * Created by WG on 2015/10/20.
 */

var StringUtil =(function(){

    /**
     * 获取URL参数信息
     * @param param
     * @returns {*}
     */
    function getQueryString (param) {
        var query = window.location.search;
        var iLen = param.length;
        var iStart = query.indexOf(param);
        if (iStart == -1){
            return "";
        }
        iStart += iLen + 1;
        var iEnd = query.indexOf("&", iStart);
        if (iEnd == -1){
            return query.substring(iStart);
        }
        return query.substring(iStart, iEnd);
    };


    return {
        getQueryString:function(a){ return getQueryString(a);}
    };

})();