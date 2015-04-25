function Dialog(id, title, content){
	this.id = id;
	this.title = title;
	this.content = content;

	this.ref = null;

	this.init();
}

Dialog.prototype.init = function(){
	// 创建Dialog DOM结构
	var wrap = $('<div id="' + this.id + '" class="dialog"></div>');
	var headerWrap = $('<div class="header">' + this.title + ' <div class="close">x</div> </div>');
	var contentWrap = $('<div class="content"></div>');
	contentWrap.append(this.content);

	wrap.append(headerWrap);
	wrap.append(contentWrap);

	this.ref = wrap;

	// 把Dialog插入body中
	$('body').append(wrap);

	var _dialog = this;
	//绑定关闭事件
	$('.dialog .close').on('click', function(e){
		_dialog.hide();
	});

	$(document).on('click', function(e){
		var target = e.target;

		if($(target).parents('.dialog').length > 0) return false;

		_dialog.hide();
	});
};

Dialog.prototype.show = function(){
	this.ref.css('display', 'block');
	//this.ref.show();
};


Dialog.prototype.hide = function(){
	this.ref.css('display', 'none');
	//this.ref.hide();
};
