(function(window, undefined){
    var jQuery = function(selector, context){
        return new jQuery.fn.init(selector, context);
    };

    jQuery.fn = jQuery.prototype = { // 实例变量和实例方法
        constructor: jQuery,
        init: function(selector, context){

            return this;
        },

        each: function(callback, args){
            jQuery.each(this, callback, args);
        }
    };

    jQuery.fn.init.prototype = jQuery.prototype;

    jQuery.extend = jQuery.fn.extend = function(){

    };

    jQuery.extend({ // 静态变量和静态方法
        each : function(obj, callback, args){

        }
    });

    window.jQuery = window.$ = jQuery;

})(window, undefined);
