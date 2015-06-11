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

		var cols;
		var marginRight;

		var boxes = wrap.find('.box');

		var base = [];

		function doRepos(){
			cols = Math.floor(container.width() / conf.imgWidth);
			marginRight = (container.width() - conf.imgWidth*cols) / (cols-1);
			wrap.css('margin-right', -1*marginRight);

			for(var i = 0; i < cols; i++){
				base[i] = 0;
			}

			boxes.each(function(){
				var box = $(this);
				var index = getMinIndex();

				box.css({
					left: index * (conf.imgWidth + marginRight),
					top : base[index]
				});

				base[index] += box.height() + 22 + conf.marginBottom;
			});
		}

		$(window).on('load', doRepos);

		$(window).resize(doRepos); //记得做节流

		function getMinIndex(){
			var l = base.length;
			var index = l-1;
			for(var i = l-2; i>= 0; i--){
				if(base[i] <= base[index]){
					index = i;
				}
			}
			return index;
		}

		return this;
	};
})(jQuery);
