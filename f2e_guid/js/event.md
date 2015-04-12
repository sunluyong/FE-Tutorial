# 事件

JavaScript和HTML的交互是通过事件实现的。JavaScript采用异步事件驱动编程模型，当文档、浏览器、元素或与之相关对象发生特定事情时，浏览器会产生事件。如果JavaScript关注特定类型事件，那么它可以注册当这类事件发生时要调用的句柄

看起来很拗口，其实事件是一个很生活的术语，举个例子

老张家着火了

这就是一个事件，这个事件出现后怎么办呢？

大家用灭火器灭火

这就是事件处理程序，也就是事件发生后的处理动作，对应到浏览器的交互模型中，用户点击了一个按钮，这就是一个事件，也就是发生了用户点击按钮这么件事，对应的做法就是我们提前写好的事件处理程序执行

## 事件流

事件流描述的是从页面中接收事件的顺序，比如有两个嵌套的div，点击了内层的div，这时候是内层的div先触发click事件还是外层先触发？目前主要有三种模型

1. IE的事件冒泡：事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的元素

2. Netscape的事件捕获：不太具体的节点更早接收事件，而最具体的元素最后接收事件，和事件冒泡相反

3. DOM事件流：DOM2级事件规定事件流包括三个阶段，事件捕获阶段，处于目标阶段，事件冒泡阶段，首先发生的是事件捕获，为截取事件提供机会，然后是实际目标接收事件，最后是冒泡阶段

这种分歧在日常生活中也很常见，举个例子，某个地方出了抢劫事件，我们有多种处理方式

1. 村里先发现，报告给乡里，乡里报告到县城，县城报告给市里。。。。
2. 市里先知道这事儿，然后交代给县城怎么处理，县城交给到乡里处理，乡里交给村里处理

Opera、Firefox、Chrome、Safari都支持DOM事件流，IE不支持事件流，只支持事件冒泡

如有以下html

	<!DOCTYPE html >
	<html>
	<head>
	    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	    <title>Test Page</title>
	</head>
	<body>
	    <div>
	        Click Here</div>
	</body>
	</html>

点击div区域

<table border="1" cellpadding="20" cellspacing="0">
	<tr>
		<td><img src="http://images.cnblogs.com/cnblogs_com/dolphinX/201211/201211230945536798.png"></td>
		<td><img src="http://images.cnblogs.com/cnblogs_com/dolphinX/201211/201211230945581230.png"></td>
		<td><img src="http://images.cnblogs.com/cnblogs_com/dolphinX/201211/201211230946053626.png"></td>
	</tr>
	<tr>
		<td>事件冒泡模型</td>
		<td>事件捕获模型</td>
		<td>DOM事件流</td>
	</tr>
</table>

## 事件处理程序

我们也称之为事件侦听器（listener），事件就是用户或浏览器自身执行的某种动作。比如click、load、mouseover等，都是事件类型（俗称事件名称），而响应某个事件的方法就叫做事件处理程序或者事件监听器

也就是我们需要提前定义好某些事件发生了该怎么处理，这个过程叫做绑定事件处理程序，了解了这些，我们看看如何给元素添加事件处理程序

### HTML内联方式

元素支持的每个事件都可以使用一个相应事件处理程序同名的HTML属性指定。这个属性的值应该是可以执行的JavaScript代码，我们可以为一个button添加`click`事件处理程序

	<input type="button" value="Click Here" onclick="alert('Clicked!');" />

在HTML事件处理程序中可以包含要执行的具体动作，也可以调用在页面其它地方定义的脚本,刚才的例子可以写成这样

	<input type="button" value="Click Here" onclick="showMessage();" />

  <script type="text/javascript">
      function showMessage() {
          alert('Clicked!');
      }
  </script>

在HTML中指定事件处理程序书写很方便，但是有两个缺点。

1. 存在加载顺序问题，如果事件处理程序在html代码之后加载，用户可能在事件处理程序还未加载完成时就点击按钮之类的触发事件，存在时间差问题

2. 这样书写html代码和JavaScript代码紧密耦合，维护不方便

### JavaScript指定事件处理程序

通过JavaScript指定事件处理程序就是把一个方法赋值给一个元素的事件处理程序属性。

每个元素都有自己的事件处理程序属性，这些属性名称通常为小写，如`onclick`等，将这些属性的值设置为一个函数，就可以指定事件处理程序，如下

	<input id="btnClick" type="button" value="Click Here" />

	<script type="text/javascript">
	    var btnClick = document.getElementById('btnClick');
	    btnClick.onclick = function showMessage() {
	        alert(this.id);
	    };
	</script>

这样处理，事件处理程序被认为是元素的方法，事件处理程序在元素的作用域下运行，this就是当前元素，所以点击button结果是：btnClick

这样还有一个好处，我们可以删除事件处理程序，只需把元素的onclick属性赋为null即可

### DOM2事件处理程序

DOM2级事件定义了两个方法用于处理指定和删除事件处理程序的操作：

1. addEventListener
2. removeEventListener

所有的DOM节点都包含这两个方法，并且它们都接受三个参数：

1. 事件类型
2. 事件处理方法
3. 布尔参数，如果是true表示在捕获阶段调用事件处理程序，如果是false，则是在事件冒泡阶段处理

刚才的例子我们可以这样写

	<input id="btnClick" type="button" value="Click Here" />

	<script type="text/javascript">
	    var btnClick = document.getElementById('btnClick');
	    btnClick.addEventListener('click', function() {
	        alert(this.id);
	    }, false);
	</script>

上面代码为button添加了click事件的处理程序，在冒泡阶段触发，与上一种方法一样，这个程序也是在元素的作用域下运行，不过有一个好处，我们可以为click事件添加多个处理程序

	<input id="btnClick" type="button" value="Click Here" />

	<script type="text/javascript">
	    var btnClick = document.getElementById('btnClick');

	    btnClick.addEventListener('click', function() {
	        alert(this.id);
	    }, false);

	    btnClick.addEventListener('click', function() {
	        alert('Hello!');
	    }, false);
	</script>

这样两个事件处理程序会在用户点击button后按照添加顺序依次执行。

通过addEventListener添加的事件处理程序只能通过removeEventListener移除，移除时参数与添加的时候相同，这就意味着刚才我们添加的匿名函数无法移除，因为匿名函数虽然方法体一样，但是句柄却不相同，所以当我们有移除事件处理程序的时候可以这样写

	<input id="btnClick" type="button" value="Click Here" />

	<script type="text/javascript">
	    var btnClick = document.getElementById('btnClick');

	    var handler=function() {
	        alert(this.id);
	    }

	    btnClick.addEventListener('click', handler, false);
	    btnClick.removeEventListener('click', handler, false);
	</script>

## IE兼容性

下面就是老生常谈的IE兼容性问题了。。。

IE并不支持addEventListener和removeEventListener方法，而是实现了两个类似的方法

1. attachEvent

2. detachEvent

这两个方法都接收两个相同的参数

1. 事件处理程序名称

2. 事件处理程序方法

由于IE指支持事件冒泡，所以添加的程序会被添加到冒泡阶段，使用attachEvent添加事件处理程序可以如下

	<input id="btnClick" type="button" value="Click Here" />

	<script type="text/javascript">
	    var btnClick = document.getElementById('btnClick');
	    var handler=function() {
	        alert(this.id);
	    }
	    btnClick.attachEvent('onclick', handler);
	</script>

结果是undefined，很奇怪，一会儿我们会介绍到

使用attachEvent添加的事件处理程序可以通过detachEvent移除，条件也是相同的参数，匿名函数不能被移除。

	<input id="btnClick" type="button" value="Click Here" />

	<script type="text/javascript">
	    var btnClick = document.getElementById('btnClick');

	    var handler=function() {
	        alert(this.id);
	    }

	    btnClick.attachEvent('onclick', handler);
	    btnClick.detachEvent('onclick', handler);
	</script>

## 跨浏览器的事件处理程序

前面内容我们可以看到，在不同的浏览器下，添加和移除事件处理程序方式不相同，要想写出跨浏览器的事件处理程序，首先我们要了解不同的浏览器下处理事件处理程序的区别

在添加事件处理程序事addEventListener和attachEvent主要有几个区别

1. **参数个数不相同**，这个最直观，addEventListener有三个参数，attachEvent只有两个，attachEvent添加的事件处理程序只能发生在冒泡阶段，addEventListener第三个参数可以决定添加的事件处理程序是在捕获阶段还是冒泡阶段处理（我们一般为了浏览器兼容性都设置为冒泡阶段）

2. **第一个参数意义不同**，addEventListener第一个参数是事件类型（比如click，load），而attachEvent第一个参数指明的是事件处理函数名称（onclick，onload）

3. **事件处理程序的作用域不相同**，addEventListener的作用域是元素本身，this是指的触发元素，而attachEvent事件处理程序会在全局变量内运行，this是window，所以刚才例子才会返回undefined，而不是元素id

4. **为一个事件添加多个事件处理程序时，执行顺序不同**，addEventListener添加会按照添加顺序执行，而attachEvent添加多个事件处理程序时顺序无规律(添加的方法少的时候大多是按添加顺序的反顺序执行的，但是添加的多了就无规律了)，所以添加多个的时候，不依赖执行顺序的还好，若是依赖于函数执行顺序，最好自己处理，不要指望浏览器

了解了这四点区别后我们可以尝试写一个浏览器兼容性比较好的添加事件处理程序方法

	function addEvent(node, type, handler) {
	    if (!node) return false;
	    if (node.addEventListener) {
	        node.addEventListener(type, handler, false);
	        return true;
	    }
	    else if (node.attachEvent) {
	        node.attachEvent('on' + type, handler, );
	        return true;
	    }
	    return false;
	}

这样，首先我们解决了第一个问题参数个数不同，现在三个参数，采用事件冒泡阶段触发

第二个问题也得以解决，如果是IE，我们给type添加上on

第四个问题目前还没有解决方案，需要用户自己注意，一般情况下，大家也不会添加很多事件处理程序

试试这个方法感觉很不错，但是我们没有解决第三个问题，由于处理程序作用域不同，如果handler内有this之类操作，那么就会出错。在IE下，实际上大多数函数都会有this操作

	function addEvent(node, type, handler) {
	    if (!node) return false;
	    if (node.addEventListener) {
	        node.addEventListener(type, handler, false);
	        return true;
	    }
	    else if (node.attachEvent) {
	        node.attachEvent('on' + type, function() { handler.apply(node); });
	        return true;
	    }
	    return false;
	}

这样处理就可以解决this的问题了，但是新的问题又来了，我们这样等于添加了一个匿名的事件处理程序，无法用detachEvent取消事件处理程序，有很多解决方案，我们可以借鉴大师的处理方式，jQuery创始人John Resig是这样做的

	function addEvent(node, type, handler) {
	    if (!node) return false;
	    if (node.addEventListener) {
	        node.addEventListener(type, handler, false);
	        return true;
	    }
	    else if (node.attachEvent) {
	        node['e' + type + handler] = handler;
	        node[type + handler] = function() {
	            node['e' + type + handler](window.event);
	        };
	        node.attachEvent('on' + type, node[type + handler]);
	        return true;
	    }
	    return false;
	}

在取消事件处理程序的时候

	function removeEvent(node, type, handler) {
	    if (!node) return false;
	    if (node.removeEventListener) {
	        node.removeEventListener(type, handler, false);
	        return true;
	    }
	    else if (node.detachEvent) {
	        node.detachEvent('on' + type, node[type + handler]);
	        node[type + handler] = null;
	    }
	    return false;
	}

John Resig很巧妙地利用了闭包，看起来很不错。

## 事件对象

在触发DOM上的某个事件的时候会产生一个事件对象event，这个对象包含着所有与事件有关的信息，包括产生事件的元素、事件类型等相关信息。所有浏览器都支持event对象，但支持方式不同。

### DOM中的事件对象

兼容DOM的浏览器会产生一个event对象传入事件处理程序中。应用一下刚才我们写的addEvent方法

	var btnClick = document.getElementById('btnClick');
  	addEvent(btnClick, 'click', handler);

点击button的时候我们可以看到弹出内容是click的弹窗

event对象包含与创建它的特定事件有关的属性和方法，触发事件的类型不同，可用的属性和方法也不同，但是所有事件都会包含

<table border="1" cellspacing="0" cellpadding="5">
<tbody>
<tr>
<td valign="top" width="130">
<p align="center"><strong>属性/方法</strong></p>
</td>
<td valign="top" width="91">
<p align="center"><strong>类型</strong></p>
</td>
<td valign="top" width="79">
<p align="center"><strong>读/写</strong></p>
</td>
<td valign="top" width="681">
<p align="center"><strong>说明</strong></p>
</td>
</tr>
<tr>
<td valign="top" width="130">bubbles</td>
<td valign="top" width="91">Boolean</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">事件是否冒泡</td>
</tr>
<tr>
<td valign="top" width="130">cancelable</td>
<td valign="top" width="91">Boolean</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">是否可以取消事件的默认行为</td>
</tr>
<tr>
<td valign="top" width="130">currentTarget</td>
<td valign="top" width="91">Element</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">事件处理程序当前处理元素</td>
</tr>
<tr>
<td valign="top" width="130">detail</td>
<td valign="top" width="91">Integer</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">与事件相关细节信息</td>
</tr>
<tr>
<td valign="top" width="130">eventPhase</td>
<td valign="top" width="91">Integer</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">事件处理程序阶段：1 捕获阶段，2 处于目标阶段，3 冒泡阶段</td>
</tr>
<tr>
<td valign="top" width="130">preventDefault()</td>
<td valign="top" width="91">Function</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">取消事件默认行为</td>
</tr>
<tr>
<td valign="top" width="130">stopPropagation()</td>
<td valign="top" width="91">Function</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">取消事件进一步捕获或冒泡</td>
</tr>
<tr>
<td valign="top" width="130">target</td>
<td valign="top" width="91">Element</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">事件的目标元素</td>
</tr>
<tr>
<td valign="top" width="130">type</td>
<td valign="top" width="91">String</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">被触发的事件类型</td>
</tr>
<tr>
<td valign="top" width="130">view</td>
<td valign="top" width="91">AbstractView</td>
<td valign="top" width="79">只读</td>
<td valign="top" width="681">与事件关联的抽象视图，等同于发生事件的window对象</td>
</tr>
</tbody>
</table>

在事件处理程序内部，`this`始终等同于`currentTarget`，而target是事件的实际目标。

要阻止事件的默认行为，可以使用`preventDefault()`方法，前提是cancelable值为true，比如我们可以阻止链接导航这一默认行为

	document.getElementsByTagName('a').onclick = function (e) {
	    e.preventDefault();
	}

`stopPaopagation()`方法可以停止事件在DOM层次的传播，即取消进一步的事件捕获或冒泡。我们可以在button的事件处理程序中调用stopPropagation()从而避免注册在body上的事件发生

	var handler = function (e) {
	    alert(e.type);
	    e.stopPropagation();
	}

	addEvent(document.body, 'click', function () { alert('Clicked body')});
	var btnClick = document.getElementById('btnClick');
	addEvent(btnClick, 'click', handler);

若是注释掉e.stopPropagation(); 在点击button的时候，由于事件冒泡，body的click事件也会触发，但是调用这句后，事件会停止传播

### IE中的事件对象

访问IE中的event对象有几种不同的方式，取决于指定事件处理程序的方法。直接为DOM元素添加事件处理程序时，event对象作为window对象的一个属性存在

	var handler = function () {
	    var e = window.event;
	    alert(e.type);
	}
	var btnClick = document.getElementById('btnClick');
	btnClick.onclick = handler;

我们通过window.event取得了event对象，并检测到了其类型，可是如果事件处理程序是通过attachEvent添加的，那么就会有一个event对象被传入事件处理程序中

	var handler = function (e) {
	    alert(e.type);
	}
	var btnClick = document.getElementById('btnClick');
	attachEvent(btnClick, handler);

当然这时候也可以通过window对象访问event，方便起见，我们一般会传入event对象，IE中所有的事件都包含以下属性方法

<table border="1" cellspacing="0" cellpadding="5">
<tbody>
<tr>
<td valign="top" width="100">
<p align="center"><strong>属性/方法</strong></p>
</td>
<td valign="top" width="100">
<p align="center"><strong>类型</strong></p>
</td>
<td valign="top" width="100">
<p align="center"><strong>读/写</strong></p>
</td>
<td valign="top" width="668">
<p align="center"><strong>说明</strong></p>
</td>
</tr>
<tr>
<td valign="top" width="100">cancelBubble</td>
<td valign="top" width="100">Boolean</td>
<td valign="top" width="100">读/写</td>
<td valign="top" width="668">默认为false，设置为true后可以取消事件冒泡</td>
</tr>
<tr>
<td valign="top" width="100">returnValue</td>
<td valign="top" width="100">Boolean</td>
<td valign="top" width="100">读/写</td>
<td valign="top" width="668">默认为true，设为false可以取消事件默认行为</td>
</tr>
<tr>
<td valign="top" width="100">srcElement</td>
<td valign="top" width="100">Element</td>
<td valign="top" width="100">只读</td>
<td valign="top" width="668">事件的目标元素</td>
</tr>
<tr>
<td valign="top" width="100">type</td>
<td valign="top" width="100">String</td>
<td valign="top" width="100">只读</td>
<td valign="top" width="668">被触发的事件类型</td>
</tr>
</tbody>
</table>

### 跨浏览器的事件对象

虽然DOM和IE的event对象不同，但基于它们的相似性，我们还是可以写出跨浏览器的事件对象方案

	function getEvent(e) {
	    return e || window.event;
	}

	function getTarget(e) {
	    return e.target || e.scrElement;
	}

	function preventDefault(e) {
	    if (e.preventDefault)
	        e.preventDefault();
	    else
	        e.returnValue = false;
	}

	function stopPropagation(e) {
	    if (e.stopPropagation)
	        e.stopPropagation();
	    else
	        e.cancelBubble = true;
	}

## 常用HTML事件

有一些HTML事件我们会经常用到，这些事件不一定与用户操作有关，这里只是简单提及，详细用法大家就得百度谷歌了

1. load：当页面完全加载后在window上触发，当图像加载完成后在img元素上触发，或当嵌入内容加载完成时，在object元素上触发

2. unload：页面完全卸载后在window上触发，或嵌入内容卸载后在object元素触发

3. select：用户选择文本框中的字符时触发

4. change：文本框焦点变化后其值改变时触发

5. submit：用户提交表单的时候触发

6. resize：窗口或框架大小变化的时候在window上触发

7. scroll：用户滚动带滚动条的元素时，在该元素上触发

8. focus：页面或元素获得焦点时在window及相应元素上触发

9. blur：页面或元素失去焦点时在window及相应元素上触发

10. beforeunload：页面卸载前在window上触发

11. mousewheel：不算HTML的，当用户通过鼠标滚轮与页面交互，在垂直方向滚动页面时触发



