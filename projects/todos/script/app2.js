function Todo(id) {
	this.ref = document.getElementById(id);
	this.itemsWrap =  this.ref.querySelector('.todo-items');
	this.activeNumWrap = this.ref.querySelector('.active-num');
	this.completeWrap = this.ref.querySelector('.todo-clear');
	this.completeNumWrap = this.ref.querySelector('.complete-num');

	this.items = {};
	this.index = 0;
	this.init();
}

Todo.prototype.init = function(){ //对象初始化工作
	var _todo = this;

	// 绑定添加item事件处理程序
	var input = this.ref.querySelector('input');
	input.addEventListener('keydown', function(e){
		if(e.keyCode !== 13 || input.value.trim() === '') return;

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

	// 选择视图事件

	// 清除已完成项目事件
};

Todo.prototype.add = function(text){
	var id = 'item' + this.index++;
	var newItem = new TodoItem(id, text, this);
	this.items[id] = newItem;
	this.refresh();
};

Todo.prototype.remove = function(id){
	delete this.items[id];
	this.itemsWrap.removeChild(document.getElementById(id));
	this.refresh();
};

Todo.prototype.switchView = function(view){

};

Todo.prototype.refresh = function(){
	var items = this.items;

	var activeNum = 0,
			completeNum = 0;

	for(var key in items){
		if(items[key].isActive){
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
};


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

	//插入对应DOM
	var wrap = this.app.itemsWrap;
	wrap.insertBefore(ele, wrap.firstChild);

	var _todo = this.app;

	//绑定删除事件
	ele.querySelector('.delete').addEventListener('click', function(e){
		_todo.remove(ele.id);
	}, false);

	//绑定改变状态事件
	var _todo_item = this;
	ele.querySelector('.status').addEventListener('click', function(e){
		_todo_item.switchStatus();
	}, false);
};

TodoItem.prototype.switchStatus = function(){
	this.isActive = !this.isActive;
	if(this.isActive){
		this.ref.className = this.ref.className.replace(' done', '');
	}else{
		this.ref.className += ' done';
	}
	this.app.refresh();
};
