// jQuery 对象构造直接构造

// (function(window, undefined){
//     var jQuery = function (selector, context) {
//       // 构造函数
//     };

//     jQuery.prototype = {
//         // 属性、实例方法
//         print: function(){

//         }
//     };

//     window.jQuery = window.$ = jQuery;
// })(window, undefined);

// // 使用方式
// var $ = new jQuery();
// $.print();


// 构造函数内实例化

// var jQuery = function (selector, context) {
//   return new jQuery(); // 死循环
// };

// jQuery.prototype = {
//     // 属性、实例方法
//     print: function(){

//     }
// };


// 借助方法

// var jQuery = function(selector, context){
//     return jQuery.prototype.init(selector, context);
// };

// jQuery.prototype = {
//     init: function(selector, context){
//         return this;
//     },

//     print: function(){

//     }
// };



// 获取整个对象

var jQuery = function(selector, context){
    return new jQuery.prototype.init(selector, context);
};

jQuery.fn = jQuery.prototype = {
    init: function(selector, context){
        return this;
    },

    print: function(){

    }
};

jQuery.fn.init.prototype = jQuery.fn;
