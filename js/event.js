/**
 * Created by WG on 2015/10/20.
 */

var EventUtil = (function(){

    var event = {

        //阻止事件冒泡事件处理
        stopPropagation : function (e) {
            e = e || window.event;
            if(e.stopPropagation) { //W3C阻止冒泡方法
                e.stopPropagation();
            } else {
                e.cancelBubble = true; //IE阻止冒泡方法
            }
        },
        request:function(url, opt){
            function fn() {}
            var async = opt.async !== false,
                method = opt.method || 'GET',
                data = opt.data || null,
                success = opt.success || fn,
                failure = opt.failure || fn;
            method = method.toUpperCase();
            if (method == 'GET' && data) {
                url += (url.indexOf('?') == -1 ? '?' : '&') + data;
                data = null;
            }
            var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            xhr.onreadystatechange = function() {
                event._onStateChange(xhr, success, failure);
            };
            xhr.open(method, url, async);
            if (method == 'POST') {
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
            }
            xhr.send(data);
            return xhr;
        },
        _onStateChange:function(xhr, success, failure){
            if (xhr.readyState == 4) {
                var s = xhr.status;
                if(s==404){
                    window.location.href = "404";
                }
                else{
                    if (s >= 200 && s < 300) {
                        try{
                            var resultJson = JSON.parse(xhr.responseText);
                            success(resultJson);
                        }catch(ex){
                            success(xhr.responseText);
                        }
                    }else {
                        failure(xhr);
                    }
                }
            }
        }
    };

    return {
        //阻止事件冒泡事件处理
        stopPropagation:function(e){event.stopPropagation(e);},
        Ajax:event.request,
    };
})();