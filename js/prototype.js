/**
 * Created by WG on 2015/10/20.
 * 重载JS属性-prototype
 */

/**
 * 重载JS属性-替换字符串中的关键信息
 * @param {string} reallyDo
 * @param {string} replaceWith
 * @param {bool} ignoreCase
 * @returns {string}
 * DEMO:  var  a = " 123 v234 ";   console.log(a.replaceAll(" ","")); //123v234
 */
String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
};
/**
 * 去掉字符串两边的空字符串
 * @returns {string}
 * DEMO:   var  a = " 123 v234 ";   console.log(a.trim()); //123 v234
 */
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};
/**
 * 格式化字符串
 * @param a  {JSON}     JSON设定格式化字符串中对应的值
 * @returns  {String}
 * DEMO:     var li = "<li class='#{cls}'>#{text}</li>"; console.log(li.format({cls:'cls',text:'test'}));
 */
String.prototype.format = function(a){
    c = String(this);
    var b = Array.prototype.slice.call(arguments, 0),
        d = Object.prototype.toString;
    if (b.length) {
        b = b.length == 1 ? (a !== null && (/\[object Array\]|\[object Object\]/.test(d.call(a))) ? a : b) : b;
        return c.replace(/#\{(.+?)\}/g, function (f, h) {
            var g = b[h];
            if ("[object Function]" == d.call(g)) {
                g = g(h);
            }
            return ("undefined" == typeof g ? "" : g);
        });
    }
    return c;
};


/**
 * 格式化    日期+时间  转到指定的格式
 * @param 		formatStr   {String}    格式化后的时间格式
 * @returns  	str		 	{String}
 */
Date.prototype.format = function(formatStr){

    var str	=	"";
    formatStr = formatStr || "yyyy-MM-dd HH:mm:ss";
    date = this;

    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];

    str = str.replace(/yyyy|YYYY/, date.getFullYear());
    str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
    str = str.replace(/MM/, date.getMonth() > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1));
    str = str.replace(/M/g, date.getMonth());
    str = str.replace(/w|W/g, Week[date.getDay()]);

    str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
    str = str.replace(/d|D/g, date.getDate());

    str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
    str = str.replace(/h|H/g, date.getHours());
    str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
    str = str.replace(/m/g, date.getMinutes());

    str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
    str = str.replace(/s|S/g, date.getSeconds());

    return str;
};