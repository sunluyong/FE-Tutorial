# iframe

iframe 也是html的一个标签，不过不是往页面上添加一个元素那么简单，iframe 会创建包含另外一个文档的内联框架（即行内框架）

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<p>下面放置一个iframe</p>

		<iframe src="./inner.html" width="500" height="300" frameborder="1"></iframe>
	</body>
	</html>


[demo](/demo/iframe.html)

## 属性

* frameborder：可用值为1和0，规定是否显示框架周围的边框
* width：frame的宽度
* height：frame的高度
* src：引入的资源（页面、图片等）url

## 父子关系

在父窗体中，Iframe是document对象的一个子对象，可以直接在脚本中访问子窗体中的对象

在子窗体内`parent`对象就代表父窗体，要在子窗体中访问父窗体中的对象，无一例外都通过parent对象来进行

