# HTML

HyperText Markup Language，超文本标记语言，标准通用标记语言下的一个应用，HTML被用来结构化信息——例如标题、段落和列表等等，也可用来在一定程度上描述文档的外观和语义。

`超文本`就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素

超文本标记语言的结构包括`head`和`body`，head提供关于网页的信息，body部分提供网页的具体内容

## 拓展名

HTML档案最常用的扩展名为.`html`，但是有如DOS等的旧操作系统限制扩展名最多为3个文字符号，所以`.htm`扩展名也允许使用。而如今.htm扩展名的使用较为减少

## 发展历史

* 超文本标记语言（第一版）——在1993年6月发为互联网工程工作小组（IETF）工作草案发布（并非标准）
* HTML 2.0——1995年11月作为RFC 1866发布，在RFC 2854于2000年6月发布之后被宣布已经过时
* HTML 3.2——1997年1月14日，W3C推荐标准
* HTML 4.0——1997年12月18日，W3C推荐标准
* HTML 4.01（微小改进）——1999年12月24日，W3C推荐标准
* ISO/IEC 15445:2000（“ISO HTML”）——2000年5月15日发布，基于严格的HTML 4.01语法，是国际标准化组织和国际电工委员会的标准
* HTML 5.0——HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定

## 基本结构

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		Content
	</body>
	</html>

## XHTML

可扩展超文本标记语言（eXtensible HyperText Markup Language），是一种标记语言，表现方式与HTML类似，不过语法上更加严格。从继承关系上讲，HTML是一种基于标准通用标记语言（SGML）的应用，是一种非常灵活的置标语言，而XHTML则基于可扩展标记语言（XML），XML是SGML的一个子集。XHTML 1.0在2000年1月26日成为W3C的推荐标准

## DOCTYPE

HTML 4.01 规定了叁种文档类型：严格、过渡以及框架集

		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//en" "http://www.w3. org/TR/html4/strict.dtd">

		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//en" "http://www.w3. org/TR/html4/loose.dtd">

		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//en" "http://www.w3. org/TR/html4/frameset.dtd">

html5统一使用

	<!DOCTYPE html>


## 参考

[维基百科 HTML](http://zh.wikipedia.org/wiki/HTML)

[百度百科 HTML](http://baike.baidu.com/view/692.htm)

[MDN HTML参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference)
