/**
 * Created by WG on 2015/10/21.
 */


var DocUtil = (function(){

    var doc ={
        getById:function(id){document.getElementById(id);},
        /**
         * 元素是否有calss
         * @param {String} element DOM对象 例如：window，li等
         * @param {String} className 样式名称
         * @return {Boolean} 布尔值
         */
        hasClass: function(obj, cls) {
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },
        /***
         * 添加样式，如果已经存在则不进行添加
         * @param {Element} obj 网页元素   var obj = documnet.getElementById("id");
         * @param {Stirng}  cls 样式的名称   class ==> .active 中的 active
         */
        addClass : function(obj, cls) {
            if (!doc.hasClass(obj, cls)) obj.className += " " + cls;
        },
        /***
         * 删除元素的样式
         * @param {Element} obj 网页元素   var obj = documnet.getElementById("id");
         * @param {Stirng}  cls 样式的名称   class ==> .active 中的 active
         */
        removeClass:function(obj, cls){
            if (doc.hasClass(obj, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                obj.className = obj.className.replace(reg, ' ');
            }
        },
        /**
         * 设定元素的样式
         * @param {Element} obj 网页元素   var obj = documnet.getElementById("id");
         * @param {Stirng}  cls 样式的名称   class ==> .active 中的 active
         */
        setSingleClass:function(obj, cls){
            obj.className = cls;
        },
        /**
         * 获取或者设置当前元素的属性值
         * @param {String} element DOM对象 例如：window，li等
         * @param {String} attr 属性
         * @param {String} (value) 属性的值，此参数如果没有那么就是获取属性值，此参数如果存在那么就是设置属性值
         */
        attr: function (element, attr, value) {
            if (arguments.length == 2) {
                return element.attributes[attr] ? element.attributes[attr].nodeValue : undefined
            }
            else if (arguments.length == 3) {
                element.setAttribute(attr, value)
            }
        },
        /***
         *根据class样式获取元素
         *@param  {Element} obj 元素对象
         *@param  {String}  cls 样式字符串
         *@return {Array}   aResult 结果数组
         */
        getByClass:function(obj, cls){
            obj = obj||document.body;
            var aEle= obj.getElementsByTagName('*');
            var len = aEle.length;
            var aResult=[];
            var re = new RegExp('\\b'+cls+'\\b', 'i');
            for(var i=0;i<len;i++){
                if(re.test(aEle[i].className)){
                    aResult.push(aEle[i]);
                }
            }
            return aResult;
        },
        /**
         *滚动条在Y轴上的滚动距离
         * @returns {number}
         */
        getScrollTop: function () {
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.body) {
                bodyScrollTop = document.body.scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
            return scrollTop;
        },
        /**
         * 文档的总高度
         * @returns {number}
         */
        getScrollHeight: function () {
            var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if (document.body) {
                bodyScrollHeight = document.body.scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        },
        /**
         * 浏览器视口的高度
         * @returns {number}
         */
        getWindowHeight: function () {
            var windowHeight = 0;
            if (document.compatMode == "CSS1Compat") {
                windowHeight = document.documentElement.clientHeight;
            } else {
                windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        },
        /**
         * 获取id距离 上，右，下，左的距离
         * @param {String} id
         * @returns {{top: number, bottom: number, left: number, right: number}}
         */
        getRect: function (elements) {
            var rect = elements.getBoundingClientRect();
            var clientTop = document.documentElement.clientTop;
            var clientLeft = document.documentElement.clientLeft;
            return { // 兼容ie多出的两个px
                top: rect.top - clientTop, // 距离顶部的位置
                bottom: rect.bottom - clientTop, // 距离顶部加上元素本身的高度就等于bottom的位置
                left: rect.left - clientLeft, // 距离左边的位置
                right: rect.right - clientLeft // 距离右边的位置就是 距离左边的位置加上元素本身的宽度
            };
        }
    };

    return {
            getById:function(id){return doc.getById(id);},
            getByClass:function(obj,cls){return doc.getByClass(obj,cls);},
            hasClass:function(obj,cls){return doc.hasClass(obj,cls);},
            addClass:function(obj,cls){return doc.addClass(obj,cls);},
            removeClass:function(obj,cls){return doc.removeClass(obj,cls);},
            setSingleClass:function(obj,cls){return doc.setSingleClass(obj,cls);},
            attr:function(element, attr, value){return doc.attr(element, attr, value);},
            getScrollTop:function(){return doc.getScrollTop();},
            getScrollHeight:function(){return doc.getScrollHeight();},
            getWindowHeight:function(){return doc.getWindowHeight();},
            getRect:function(obj){return doc.getRect(obj);},
    };
})();