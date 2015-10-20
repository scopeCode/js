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