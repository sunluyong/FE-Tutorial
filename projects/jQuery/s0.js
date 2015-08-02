/*
    1. 定义命名空间
    2. 定义对象
    3. 为对象添加实例属性、方法
    4. 为对象添加静态属性、方法
*/


(function (window, undefined) {

    /*
        1. 定义变量和jQuery
        2. 给jQuery对象添加属性、方法
        3. jQuery.extend()
        4. 添加jQuery的静态方法， 拓展工具方法
        5. Sizzle, 选择器
        6. Callbacks: 回调管理
        7. Deferred: 异步管理
        8. support: 功能检测
        9. data: 数据缓存
        10. queue: 函数队列
        11. DOM属性操作
        12. 事件操作
        13. DOM操作
        14. CSS方法
        15. ajax
        16. 动画
        17. 位置和尺寸
        18. 模块化
    */

    var rootjQuery,
        localtion = window.localtion,
        document = window.document,

    jQuery = function(selector, context, rootjQuery){

    };


    window.jQuery = window.$ = jQuery;
})(window, undefined);


function print(window){
    var first_name = 'Byron';
    var last_name = 'Sun';
    window.name = first_name + last_name;
}

function print(w){var a='Byron',b='Sun';w.name=a+b;}

print(window);

$(function(){
    console.log(123);
});

$(document).ready(function(){
    console.log(123);
});
