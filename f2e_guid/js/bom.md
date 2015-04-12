# BOM

BOM(Browser Object Model) 是指浏览器对象模型，是用于描述这种对象与对象之间层次关系的模型，浏览器对象模型提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。BOM由多个对象组成，其中代表浏览器窗口的Window对象是BOM的顶层对象，其他对象都是该对象的子对象。

## window

BOM 的核心是window对象，它表示浏览器的一个实例。在浏览器中，即是javascript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象，这就意味着在网页中定义的任意变量、函数、对象都是以window作为Global对象。

所有在全局作用域中声明的变量、函数、对象都会作为window的属性和方法

	var age = 24;

	function printName(){
		console.log(age);
	}

	console.log(window.age);
	window.printName();

## window对象属性

### window.name

window.name属性用于设置当前浏览器窗口的名字。它有一个特点，就是浏览器刷新后，该属性保持不变。所以，可以把值存放在该属性内，然后跨页面、甚至跨域名使用。当然，这个值有可能被其他网站的页面改写。

	window.name = "Hello World!";
	console.log(window.name);

各个浏览器对这个值的储存容量有所不同，但是一般来说，可以高达几MB。该属性只能保存字符串，且当浏览器窗口关闭后，所保存的值就会消失。因此局限性比较大，但是与iFrame窗口通信时，非常有用。

### window.innerHeight属性，window.innerWidth属性

这两个属性返回网页的CSS布局占据的浏览器窗口的高度和宽度，单位为像素。很显然，当用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。

注意，这两个属性值包括滚动条的高度和宽度。

### scrollX、scrollY

1. scrollX：滚动条横向偏移
2. scrollY：滚动条纵向偏移

这两个值随着滚动位置变化而变化

### scrollTo、scrollBy、scroll

我们也可以通过方法scrollTo或者scroll方法改变滚动条位置到指定坐标

	window.scrollTo(0, 300); // 滚动条移动到300px处

两个参数分别是水平、垂直方向偏移

scrollBy可以相对当前位置移动滚动条，而不是移动到绝对位置

	scrollBy(0, 100); // 滚动条下移100px



### window.frames

window.frames返回一个类似数组的对象，成员为页面内的所有框架，包括frame元素和iframe元素。需要注意的是，window.frames的每个成员对应的是框架内的窗口（即框架的window对象），获取每个框架的DOM树，需要使用window.frames[0].document。

	var iframe = window.getElementsByTagName("iframe")[0];
	var iframe_title = iframe.contentWindow.title;

上面代码用于获取框架页面的标题。

iframe元素遵守同源政策，只有当父页面与框架页面来自同一个域名，两者之间才可以用脚本通信，否则只有使用window.postMessage方法。

在iframe框架内部，使用window.parent指向父页面。

## navigator

Window对象的navigator属性，指向一个包含浏览器相关信息的对象。

navigator.userAgent属性返回浏览器的`User-Agent`字符串，用来标示浏览器的种类。下面是Chrome浏览器的User-Agent。

	navigator.userAgent // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36"

通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且无法保证未来的适用性，更何况各种上网设备层出不穷，难以穷尽。所以，现在一般不再识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的JavaScript功能。

navigator对象中还包括一些其它属性

![](http://lsly1989.qiniudn.com/20150411QQ20150411-1@2x.png)

## screen

screen对象包含了显示设备的信息。

	// 显示设备的高度，单位为像素
	screen.height
	// 1920

	// 显示设备的宽度，单位为像素
	screen.width
	// 1080

一般使用以上两个属性，了解设备的分辨率。上面代码显示，某设备的分辨率是1920x1080。除非调整显示器的分辨率，否则这两个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。


## window.open()

open() 方法用于打开一个新的浏览器窗口或查找一个已命名的窗口。

	window.open(URL,name,features,replace)

| 参数  | 描述
|---|---
|URL|	一个可选的字符串，声明了要在新窗口中显示的文档的 URL。如果省略了这个参数，或者它的值是空字符串，那么新窗口就不会显示任何文档。
|name|一个可选的字符串，该字符串是一个由逗号分隔的特征列表，其中包括数字、字母和下划线，该字符声明了新窗口的名称。这个名称可以用作标记 `<a>` 和 `<form>` 的属性 target 的值。如果该参数指定了一个已经存在的窗口，那么 open() 方法就不再创建一个新窗口，而只是返回对指定窗口的引用。在这种情况下，features 将被忽略。
|features| 一个可选的字符串，声明了新窗口要显示的标准浏览器的特征。如果省略该参数，新窗口将具有所有标准特征。在窗口特征这个表格中，我们对该字符串的格式进行了详细的说明。
|replace|一个可选的布尔值。规定了装载到窗口的 URL 是在窗口的浏览历史中创建一个新条目，还是替换浏览历史中的当前条目。支持下面的值：true: URL 替换浏览历史中的当前条目。false: URL 在浏览历史中创建新的条目。


	window.open("http://www.baidu.com",
	"_blank",
	"toolbar=yes, location=yes, directories=no, status=no,
	menubar=yes, scrollbars=yes, resizable=no,
	copyhistory=yes, width=400, height=400")

### alert()，prompt()，confirm()

alert()、prompt()、confirm()都是浏览器用来与用户互动的方法。它们会弹出不同的对话框，要求用户做出回应。

需要注意的是，alert()、prompt()、confirm()这三个方法弹出的对话框，都是浏览器统一规定的式样，是无法定制的。

alert方法弹出的对话框，只有一个“确定”按钮，往往用来通知用户某些信息。

	// 格式
	alert(message);

	// 实例
	alert("Hello World");

用户只有点击“确定”按钮，对话框才会消失。在对话框弹出期间，浏览器窗口处于冻结状态，如果不点“确定”按钮，用户什么也干不了。

prompt方法弹出的对话框，在提示文字的下方，还有一个输入框，要求用户输入信息，并有“确定”和“取消”两个按钮。它往往用来获取用户输入的数据。

	// 格式
	var result = prompt(text[, default]);

	// 实例
	var result = prompt('您的年龄？', 25)

上面代码会跳出一个对话框，文字提示为“您的年龄？”，要求用户在对话框中输入自己的年龄（默认显示25）。

prompt方法的返回值是一个字符串（有可能为空）或者null，具体分成三种情况。

1. 用户输入信息，并点击“确定”，则用户输入的信息就是返回值。
2. 用户没有输入信息，直接点击“确定”，则输入框的默认值就是返回值。
3. 用户点击了“取消”（或者按了Escape按钮），则返回值是null。

prompt方法的第二个参数是可选的，但是如果不提供的话，IE浏览器会在输入框中显示undefined。因此，最好总是提供第二个参数，作为输入框的默认值。

confirm方法弹出的对话框，除了提示信息之外，只有“确定”和“取消”两个按钮，往往用来征询用户的意见。

	// 格式
	var result = confirm(message);

	// 实例
	var result = confirm("你最近好吗？");

上面代码弹出一个对话框，上面只有一行文字“你最近好吗？”，用户选择点击“确定”或“取消”。

confirm方法返回一个布尔值，如果用户点击“确定”，则返回true；如果用户点击“取消”，则返回false。

### window.getComputedStyle

我们知道DOM元素有个style属性，里面就是元素的style值，使用这个方法是不是可以呢？

大部分情况下是不可以的，因为style中给出的是DOM节点上写的值，而不是计算出的值

听起来比较抽象，举个例子

	<div id="test" style="height:2px;">123</div>

	<script>
	    var div = document.getElementById('test');
	    console.log(div.style.height);
	    console.log(div.style);
	</script>

![](http://lsly1989.qiniudn.com/141231QQ20141231-1.png)


我们去掉div的style属性，添加css样式

	div{
	    height:100px;
	    background:#333;
	}

发现高度变成了`""`

这就是说style属性内的值非常机械，读取的就是元素的内联style属性的值，而不是我们计算出来的实际值，所以一般情况下没什么用处


getComputedStyle是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])

一看这个函数的名字我们就知道问题解决了

	var style = window.getComputedStyle("元素", "伪类");

第二个参数没有伪类设置为null

	var div = document.getElementById('test');

	console.log(window.window.getComputedStyle(div,null));
	image

![](http://lsly1989.qiniudn.com/141231QQ20141231-2.png)

**currentStyle**

这个是低版本IE的实现方案，我们可以写个兼容的方式

	element.currentStyle ?
	    element.currentStyle : window.getComputedStyle(element, null)

### URL的编码/解码方法

JavaScript提供四个URL的编码/解码方法。

1. decodeURI()
2. decodeURIComponent()
3. encodeURI()
4. encodeURIComponent()

**区别**

encodeURI方法**不会**对下列字符编码
1. ASCII字母
2. 数字
3. ~!@#$&*()=:/,;?+'

encodeURIComponent方法**不会**对下列字符编码
1. ASCII字母
2. 数字
3. ~!*()'

所以encodeURIComponent比encodeURI编码的范围更大。

实际例子来说，encodeURIComponent会把 `http://` 编码成 `http%3A%2F%2F` 而encodeURI却不会。

如果你需要编码整个URL，然后需要使用这个URL，那么用encodeURI。
	encodeURI("http://www.cnblogs.com/season-huang/some other thing");
	//"http://www.cnblogs.com/season-huang/some%20other%20thing";

其中，空格被编码成了%20。但是如果你用了encodeURIComponent，那么结果变为

	"http%3A%2F%2Fwww.cnblogs.com%2Fseason-huang%2Fsome%20other%20thing"

当你需要编码URL中的参数的时候，那么encodeURIComponent是最好方法。

	var param = "http://www.cnblogs.com/season-huang/"; //param为参数
	param = encodeURIComponent(param);
	var url = "http://www.cnblogs.com?next=" + param;
	console.log(url) //"http://www.cnblogs.com?next=http%3A%2F%2Fwww.cnblogs.com%2Fseason-huang%2F"

参数中的 "/" 可以编码，如果用encodeURI肯定要出问题，因为后面的/是需要编码的

## 参考

[escape,encodeURI,encodeURIComponent的有什么区别?](http://www.zhihu.com/question/21861899)
