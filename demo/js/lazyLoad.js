(function($){
	$.fn.lazyLoad = function(options){
		var defaultConf = {
			container: $(window),
			prop: 'data-src',
			callback: null
		};

		var conf = $.extend({}, defaultConf, options || {});
		conf.cache = [];

		this.each(function(ele){
			var data = {
				obj: $(this),
				src: $(this).attr(conf.prop)
			};
			conf.cache.push(data);
		});

		var callback = function(ele){
			if($.isFunction(conf.callback)){
				conf.callback.call(ele);
			}
		};

		var loading = function(){
			var container = conf.container,
					containerHeight = container.height(),
					containerTop = 0;

			if(container[0] === window){
				containerTop = $(window).scrollTop();
			}else{
				containerTop = container.offset().top;
			}

			$.each(conf.cache, function(index, data){
				var o = data.obj,
						src = data.src,
						post = 0,
						postb =0;
				if(o){
					post = o.offset().top - containerTop;
					postb = post + o.height();

					if((post >= 0 && post < containerHeight) || (postb > 0 && postb <= containerHeight)){
						callback(o.attr('src', src));
						data.obj = null;
					}
				}
			});
		};
		loading();
		conf.container.on('scroll', loading);
	};
})(jQuery);

$('.item img').lazyLoad();
