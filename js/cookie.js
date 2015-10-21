/**
 * Created by WG on 2015/10/20.
 * 系统级别的cookie操作 将jquery的cookie 插件整理出来了
 */
var mo = mo || {};

(function(mo){
    var pluses = /\+/g;

    function extend(destination, source) {
        for (var property in source)
            destination[property] = source[property];
        return destination;
    }

    function isFunction(obj){
        return (typeof obj === 'function');
    }

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return  isFunction(converter)? converter(value) : value;
    }

    var config = mo.cookie = function (key, value, options) {
        // Write
        if (value !== undefined && !isFunction(value)) {
            options = extend(config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '',
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                result = read(cookie, value);
                break;
            }

            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};

    mo.removeCookie = function (key, options) {
        if (mo.cookie(key) === undefined) {
            return false;
        }
        mo.cookie(key, '', extend({}, options, { expires: -1 }));
        return !mo.cookie(key);
    };
})(mo);