function Todo(id){
	this.ref = document.getElementById(id);
	this.itemsWrap =  this.ref.querySelector('.todo-items');
	this.activeNumWrap = this.ref.querySelector('.active-num');
	this.completeWrap = this.ref.querySelector('.complete-wrap');
	this.completeNumWrap = this.ref.querySelector('.complete-num');

	this.items = {};
	this.index = 0;

	this.init();
}

Todo.prototype.init = function(){
	var _todo = this;

	//绑定添加item事件处理程序
	var input = this.ref.querySelector('input');
	input.addEventListener('keydown', function(e){
		//不是回车键，直接返回
		if(e.keyCode !== 13) return;

		// 输入框者内容为空，直接返回
		if(this.value.trim() === '') return;

		_todo.add(this.value);

		this.value = '';
	}, false);

	// 切换所有item状态
	this.ref.querySelector('.todo-toggle').addEventListener('click', function(e){
		var items = _todo.items;
		if(this.className.indexOf('complete') === -1){
			for(id in items){
				if(!items[id].isActive) continue;
				items[id].switchStatus();
			}
			this.className += ' complete';
		}else{
			for(var id in items){
				if(items[id].isActive) continue;
				items[id].switchStatus();
			}

			this.className = this.className.replace(' complete', '');
		}
	}, false);

	//选择视图事件
	var switchWrap = this.ref.querySelector('.todo-filters');
	var switches = switchWrap.querySelectorAll('.switch');

	switchWrap.addEventListener('click', function(e){
		var className = e.target.className;

		if(!className.indexOf('switch') === -1) return;

		for(var i = switches.length - 1; i >= 0; i--){
			switches[i].className = switches[i].className.replace(' current', '');
		}

		var view = 'all';

		if(className.indexOf('active') > -1){
			view = 'active';
		}else if(className.indexOf('complete') > -1){
			view = 'complete';
		}

		_todo.switchView(view);

		if(e.target.className.indexOf('current') === -1){
			e.target.className += ' current';
		}
	}, false);

	// 清除已完成项目事件
	this.ref.querySelector('.todo-clear').addEventListener('click', function(e){
		var items = _todo.items;
		for(var id in items){
			if(!items[id].isActive){
				_todo.remove(items[id].ref);
			}
		}
		_todo.refresh();
	}, false);
};

Todo.prototype.add = function(text){
	var id = 'item' + this.index++;
	var newItem = new TodoItem(id, text, this);
	this.items[id] = newItem;
	this.refresh();
};

Todo.prototype.remove = function(item_dom){
	this.itemsWrap.removeChild(item_dom);
	delete this.items[item_dom.id];
	this.refresh();
};

Todo.prototype.switchView = function(view){
	if(view === 'all'){
		for(var id in this.items){
			this.items[id].show();
		}
	}else{
		var activeShow = (view === 'active' ? true : false);
		for(var id in this.items){
			if(this.items[id].isActive === activeShow){
				this.items[id].show();
			}else{
				this.items[id].hide();
			}
		}
	}
};

Todo.prototype.refresh = function(){
	var items = this.items;

	var activeNum = 0,
			completeNum = 0;

	for(var id in items){
		if(items[id].isActive){
			activeNum++;
		}else{
			completeNum++;
		}
	}

	this.activeNumWrap.innerText = activeNum;
	this.completeNumWrap.innerText = completeNum;

	if(completeNum === 0){
		this.completeWrap.style.display = 'none';
	}else{
		this.completeWrap.style.display = 'inline';
	}
}

function TodoItem(id, text, app){
	this.ref = null;
	this.app = app;

	this.id = id;
	this.text = text;
	this.isActive = true;

	this.init();
}

TodoItem.prototype.init = function(){
	//新建todo item DOM节点
	var ele = document.createElement('li');
	ele.className = 'todo-item';
	ele.id = this.id;
	ele.innerHTML += '<div class="status"></div>';
	ele.innerHTML += '<span class="item-text">' + this.text + '</span>';
	ele.innerHTML += '<div class="delete"></div>';
	this.ref = ele;

	//把新建item节点插入Todo DOM结构中
	var wrap = this.app.itemsWrap;
	wrap.insertBefore(ele, wrap.firstChild);

	var _todo = this.app;

	//绑定修改状态事件处理程序
	ele.querySelector('.status').addEventListener('click', function(e){
		var item = _todo.items[ele.id];
		item.switchStatus();
	}, false);

	//绑定“删除项目”事件处理程序
	ele.querySelector('.delete').addEventListener('click', function(e){
		_todo.remove(ele);
	}, false);

	//绑定双击修改事件
	ele.addEventListener('click', function(e){
		var textWrap = this.querySelector('span');
		textWrap.setAttribute('contenteditable', true);

		var className = textWrap.className;
		if(className.indexOf('item-text') > -1 && className.indexOf('editing') === -1){
			textWrap.className += ' editing';
		}
	}, false);

	document.addEventListener('click', function(e){
		var target = e.target;

		if(target.className.indexOf('editing') === -1){
			var editingEle = document.querySelector('.editing');
			if(! editingEle) return;

			editingEle.className = editingEle.className.replace('editing', '');
			editingEle.removeAttribute('contenteditable');
			_todo.items[ele.id].text = editingEle.innerText;
		}
	}, false);
}

TodoItem.prototype.switchStatus = function(){
	this.isActive = !this.isActive;
	if(this.isActive){
		this.ref.className = this.ref.className.replace(' done', '');
	}else{
		this.ref.className += ' done';
	}
	this.app.refresh();
};

TodoItem.prototype.hide = function(){
	if(this.ref.style.display !== 'none'){
		this.ref.style.display = 'none';
	}
};

TodoItem.prototype.show = function(){
	if(this.ref.style.display !== 'block'){
		this.ref.style.display = 'block';
	}
};
