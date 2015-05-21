# Media Queries

## 自适应阶段

自从有了不同屏幕的尺寸，我们就开始尝试自适应了

### 居中

虽然不能让所有屏幕都自适应，但是可以利用居中让元素看起来在同一位置

	.center{
		width: 990px;
		margin: 0 auto;
		height: 200px;
		line-height: 200px;
	}

### 百分比

同样可以利用百分比让DOM结构适应屏幕

	.container{
		border-top: solid 1px #666;
		border-left: solid 1px #666;;
	}

	.item{
		display: inline-block;
		width: 33%;
		height: 200px;
		border-right: solid 1px #666;
		border-bottom: solid 1px #666;
		background: orange;
		box-sizing: border-box;
	}

### 浮动

对于宽度不一的，我们可以利用浮动做到一定程度的自适应

	.container{
		overflow: hidden;
		padding: 20px;
	}

	.item{
		float: left;
		padding: 8px 12px;
		border: solid 1px #1686cc;
	}

## 响应式

终于等来了CSS3的Media Queries，可以让我们针对不同的设备场景使用不同的CSS

### CSS 2

实际上在很早之前，CSS就支持媒体查询了

  <link href="css/reset.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
  <link href="css/print.css" rel="stylesheet" type="text/css" media="print" />

页面有些部分需要在打印的时候隐藏或者变大，这时候可以使用media使某些style只在打印的时候生效

	@media print {
	   /* 适用于印刷的样式 */
	}

常用的媒体类型有

	1. all（所有），适用于所有设备。
	2. handheld（手持），用于手持设备。
	3. print（印刷），用于分页材料以及打印预览模式下在屏幕上的文档视图。
	4. projection（投影），用于投影演示文稿，例如投影仪。
	5. screen（屏幕） ，主要用于计算机屏幕。

在使用的时候可以在样式表直接书写 `@media指令+空格+媒体类型`（多个逗号隔开）

	@media print {
	   body { font-size: 10pt }
	 }
	 @media screen {
	   body { font-size: 13px }parsing-errors
	 }
	 @media screen, print {
	   body { line-height: 1.2 }
	 }

### CSS 3

但是CSS 2的媒体类型应用场景极为有限，CSS3大大拓展了这一能力

	@media screen and (max-width: 990px){
		.container{
			background: orange;
		}
	}

当媒体类型匹配且表达式为真的时候，对应style就会其作用，除非使用not或者only操作符，否则媒体类型不是必需的，默认代表所有媒体类型。

### 操作符

#### and

and操作符用于将多个media feature组合成一个查询，同时用于组合media type 和media feature，一个基本的media query类似这样，一个meidia feature作用于所有media type

	@media (min-width: 700px) { ... }

但是如果只想在横向显示时应用就可以使用and操作符把media type和media feature结合起来

	@media (min-width: 700px) and (orientation: landscape) { ... }

这样上面的media query只有在可视窗口（viewport）最小是700px并且是横向显示的时候才返回true，如果还想进一步限制设备为tv可以这样

	@media tv and (min-width: 700px) and (orientation: landscape) { ... }

#### 逗号分隔的列表

在使用逗号分隔的查询列表中每个查询都被视为一个独立的查询，任何本查询中的作用符不影响其他查询，只要有一个查询返回true，style就会被作用。

举例来说，如果希望特定style在viewport最小宽度为700px或手持式设备上生效，可以这么写：

	@media (min-width: 700px), handheld and (orientation: landscape) { ... }

#### not

not操作符作用域整个查询，所以只有在整个查询返回`false`的情况下使用not后才会返回`true`。当使用逗号分隔的列表的时候not作用于邻近的查询，而不会作用于每个查询

	@media not all and (monochrome) { ... }

查询其实会这样起作用

	@media not (all and (monochrome)) { ... }

而不是这样

	@media (not all) and (monochrome) { ... }

对于逗号分隔的列表

	@media not screen and (color), print and (color)

查询是这样子的

	@media (not (screen and (color))), print and (color)

#### only

only操作符用于阻止不支持带有media feature的media queries的浏览器应用特定style

	<link rel="stylesheet" media="only screen and (color)" href="example.css" />

### media features

有以下常用的media feature

1. width：浏览器宽度

2. height：浏览器高度

3. device-width：设备屏幕分辨率的宽度值

4. device-height：设备屏幕分辨率的高度值

5. orientation：浏览器窗口的方向纵向还是横向，当窗口的高度值大于等于宽度时该特性值为portrait，否则为landscape

6. aspect-ratio：比例值，浏览器的纵横比

7. device-aspect-ratio：比例值，屏幕的纵横比

8. color：设备使用多少位的颜色值，如果不是彩色设备，值为0

9. color-index：色彩表的色彩数

10. monochrome：单色帧缓冲器每个像素的字节

11. resolution：分辨率值，设备分辨率值

12. scan：电视机类型设备扫描方式，progressive或interlace

13. grid：只能指定两个值0或1，是否基于栅格的设备

### 如何引入media

有两种常用的引入方式

#### link方法引入

	<link rel="stylesheet" type="text/css" href="styleB.css"  media="screen and (min-width: 600px) and (max-width: 800px)">

#### @media引入

	@media screen and (min-width: 600px) and (max-width: 800px){

	    选择器{

	        属性：属性值；

	    }

	}

### 浏览器兼容性

![](http://cdn.w3cplus.com/cdn/farfuture/lB--vhekXm-09KiMA_Ys992SDRmmmnFH2O9csmfgtxo/mtime:1341237753/sites/default/files/media-query-browers.png)

## 应用

For iPhone 4

	<link rel="stylesheet" media="only screen and (-webkit-min-device-pixel-ratio: 2)" type="text/css" href="iphone4.css" />
	For iPad

	<link rel="stylesheet" media="all and (orientation:portrait)" href="portrait.css">
	<link rel="stylesheet" media="all and (orientation:landscape)" href="landscape.css">

移动设备iPad上的Safari和在iPhone上的是相同的，只是他们不同之处是iPad声明了不同的方向，比如说上面的例子，在纵向(portrait)时采用portrait.css来，在横向（landscape）时采用landscape.css。

For Android

		/*240px的宽度*/

	  <link rel="stylesheet" media="only screen and (max-device-width:240px)" href="android240.css" type="text/css" />

	  /*360px的宽度*/

	  <link rel="stylesheet" media="only screen and (min-device-width:241px) and (max-device-width:360px)" href="android360.css" type="text/css" />

	  /*480px的宽度*/

	  <link rel="stylesheet" media="only screen and (min-device-width:361px) and (max-device-width:480px)" href="android480.css" type="text/css" />

## 参考

[http://www.w3cplus.com/content/css3-media-queries](http://www.w3cplus.com/content/css3-media-queries)

[http://www.w3cplus.com/css3/css3-media-queries-for-iPhone-and-iPads](http://www.w3cplus.com/css3/css3-media-queries-for-iPhone-and-iPads)

[https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)
