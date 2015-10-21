/**
 * Created by WG on 2015/10/20.
 */

var RegexUtil = (function(){
    /**
     * 正则规则JSON
     */
    var pattern ={
        isMobile:/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
        //0511-4405222 or 021-87888822
        isPhone:/d{3}-d{8}|d{4}-d{7}/,
        isInteger:/^[1-9]d*$/,
        //保留2位小数的float类型的数字
        isFloat:/^\d+[\.\d]?\d{0,2}$/,
        //保留一位小数的float类型的数字
        isFloatEx:/^\d+[\.\d]?\d{0,1}$/,
        //是否是中文及日文及韩文
        isChineseChar:/[\u4E00-\u9FA5\uF900-\uFA2D]/,
        //是否包含全交
        isFullwidthChar: /[\uFF00-\uFFEF]/,
        isEmail:/w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/,
        //6位的邮政编码
        isZipCode:/[1-9]d{5}(?!d) /,
        //身份证号码  15 or 18
        isIdCard:/d{15}|d{18} /
    };

    return {
        isMoible:function(a){           return pattern.isMobile.test(a); },
        isPhone:function(a){            return pattern.isPhone.test(a); },
        isInteger:function(a){          return pattern.isInteger.test(a); },
        isFloat:function(a){            return pattern.isFloat.test(a); },
        isFloatEx:function(a){            return pattern.isFloatEx.test(a); },
        isChineseChar:function(a){      return pattern.isChineseChar.test(a); },
        isFullwidthChar:function(a){    return pattern.isFullwidthChar.test(a);},
        isEmail:function(a){            return pattern.isEmail.test(a);},
        isZipCode:function(a){          return pattern.isZipCode.test(a);},
        isIdCard:function(a){           return pattern.isIdCard.test(a);},
    };

})();