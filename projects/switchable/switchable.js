function Switchable(container, conf){
	var defaultConf = {
		index: 0,
		width: 800,
		duration: 200,
		autoplay: false,
		interval: 2000
	};

	this.conf = conf || {};

	this.conf = $.extend(defaultConf, this.conf);

	this.currentItemIndex = this.conf.index;
	this.timerId = null;

	this.ref = $(container);
	this.items = this.ref.find('>li');
	this.indicators = null;

	this.init();
}

Switchable.autoTask = function(switchable){
	switchable.timerId = setInterval(function(){
  		switchable.next();
  	}, switchable.conf.interval);
};

Switchable.prototype.init = function(){
	var ref = this.ref;

	// 构造包裹层、当前位置指示器 DOM结构
	ref.wrap('<div class="switchable-wrap"></div>')
		 .addClass('switchable-container');

	var indicatorWrap = $('<div class="switchable-indicators"></div>');
  ref.after(indicatorWrap);

	this.items.addClass('switchable-item')
						.each(function(index, ele){
							indicatorWrap.append('<div data-index="' + index + '" class="switchable-indicator"></div>');
						});

	this.indicators = indicatorWrap.find('.switchable-indicator');

	// 自动设置包裹层的宽高
	$('.switchable-wrap').css({
    width: this.conf.width,
    height: ref.height()
  });

  // 绑定 "当前位置指示器" 点击事件
  var _switchable = this;
  indicatorWrap.on('click', '.switchable-indicator', function(e){
    if($(this).hasClass('current')) return;

    var itemIndex = _switchable.indicators.index(this);
    _switchable.go(itemIndex, true);
  });

  // 自动轮播处理
  var _switchable = this;
  if(this.conf.autoplay){
  	Switchable.autoTask(this);

  	ref.hover(function(){
  		clearInterval(_switchable.timerId);
  		_switchable.timerId = null;
  	}, function(){
  		Switchable.autoTask(_switchable);
  	});
  }

	// 切换到默认item
  this.go(this.currentItemIndex);
};

Switchable.prototype.go = function(index, isClick){
	var conf = this.conf,
			items = this.items,
			indicators = this.indicators,
			ref = this.ref;

	var newIndex = index;

	if(newIndex < 0){
    newIndex = items.length - 1;
  }else if(newIndex > items.length-1){
    newIndex = 0;
  }

  var currentItemIndex = this.currentItemIndex,
      width = conf.width,
      offset = (newIndex - currentItemIndex) * width,
      opration = newIndex - currentItemIndex > 0 ? '-=' : '+=';

  // 让正在进行的动画结束
  ref.stop(true, true);
  if(this.conf.autoplay && isClick){
  	clearInterval(this.timerId);
  	this.timerId = null;
  }

  var _switchable = this;

  if(newIndex - currentItemIndex > 0){
    ref.animate({
      left: opration + offset + 'px'
    }, conf.duration, function(){

      var i = currentItemIndex;

      while(i != newIndex){
        items = ref.find('.switchable-item');
        item = items.last();
        item.after(items.first());
        i += 1;
      }

      ref.css('left', 0);

      if(_switchable.conf.autoplay && isClick){
      	Switchable.autoTask(_switchable);
      }
    });

  }else{
    var i = currentItemIndex;

    while(i != newIndex){
      items = ref.find('.switchable-item');
      item = items.first();
      item.before(items.last());
      i -= 1;
    }

    ref.css('left', opration + offset);

    ref.animate({
      left: 0
    }, conf.duration, function(){

    	if(_switchable.conf.autoplay && isClick){
      	Switchable.autoTask(_switchable);
      }

    });
  }

  indicators.removeClass('current')
  					.eq(newIndex).addClass('current');

  this.currentItemIndex = newIndex;
};

Switchable.prototype.prev = function(){
	this.go(this.currentItemIndex- 1);
};

Switchable.prototype.next = function(isClick){
	this.go(this.currentItemIndex + 1, isClick);
};
