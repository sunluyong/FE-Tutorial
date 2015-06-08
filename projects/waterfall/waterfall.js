(function($){
	$.fn.waterfall = function(options){
		var defaultConf = {
			imgWidth: 200,
			marginBottom: 15
		};

		var conf = $.extend({}, defaultConf, options || {});

		var container = this,
				wrap = this.find('.wrap');

		wrap.addClass('wrap-' + conf.imgWidth);

		conf.imgWidth += 22;

		var cols = Math.floor(container.width() / conf.imgWidth);
		var marginRight = (container.width() - conf.imgWidth*cols) / (cols-1);

		wrap.css('margin-right', -1*marginRight);
		var boxes = wrap.find('.box');

		var base = [];
		for(var i = 0; i < cols; i++){
			base[i] = 0;
		}

		$(window).on('load', function(){
			boxes.each(function(){
				var box = $(this);
				var index = getMinIndex();

				box.css({
					left: index * (conf.imgWidth + marginRight),
					top : base[index]
				});

				base[index] += box.height() + 22 + conf.marginBottom;
			});
		});

		function getMinIndex(){
			var l = base.length;
			var min = base[l-1], index = l-1;

			for(var i = l-2; i>= 0; i--){
				if(base[i] <= min){
					index = i;
				}
			}
			return index;
		}
	};
})(jQuery);
