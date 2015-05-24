# border

CSS在很大程度上拓展了border的样式，让我们可以做出更加丰富的效果

## border-radius

圆角是做网页永远绕不过的话题，以前基本是通过背景图片做的，有了CSS3后简单属性搞定，我们可以通过`border-radius`设置元素的圆角半径

	border-radius: 5px;

对于正方形`border-radius`设置为边长的一半，就变成圆了

	width: 100px;
	height: 100px;
	border-radius: 50px;

`border-radius`是缩写格式，其实border-radius和border属性一样，还可以把各个角单独拆分出来，也就是以下四种写法

	border-top-left-radius: <length>  <length>
	border-top-right-radius: <length>  <length>
	border-bottom-right-radius:<length>  <length>
	border-bottom-left-radius:<length>  <length>

<length> <length>中第一个值是圆角水平半径，第二个值是垂直半径,如果第二个值省略，那么其等于第一个值，这时这个角就是一个四分之一的圆角，如果任意一个值为0，那么这个角就不是圆角

## border-image

边框都是线条略显单调，使用CSS3可以用图片作为边框的修饰

### source

	border-image-source:url(image url);

这个和background类似，指定想使用的图片来源

### width

	border-image-width: 1;

指定border的宽度

![](http://image.zhangxinxu.com/image/blog/201001/border-image-nine.png)

### repeat

三种repeat方式

1. stretch 压缩或伸展border-image的背景图片以其刚好适应border-width的宽度

3. repeat 简单的重复

2. round 压缩或伸展border-image的背景图片以图片最小单元刚好适应border-width的宽度，在此基础上重复

### outset

边框图像区域超出边框的量

### slice

	border-image-slice: number|%|fill;

此属性指定顶部，右，底部，左边缘的图像向内偏移，分为九个区域：四个角，四边和中间。图像中间部分将被丢弃（完全透明的处理），除非填写关键字。如果省略第四个数字/百分比，它和第二个相同的。如果也省略了第三个，它和第一个是相同的。如果也省略了第二个，它和第一个是相同的。

1. 数字：数字表示图像的像素（位图图像）或向量的坐标（如果图像是矢量图像）

2. 百分比：百分比图像的大小是相对的：水平偏移图像的宽度，垂直偏移图像的高度

3. fill：保留图像中间部分

[理解几个属性](http://segmentfault.com/a/1190000002550108)


看个好玩的例子

	.bordered {
	  width: 500px;
	  border-width: 20px;
	  border-image: url(http://i.imgur.com/gP414jh.png) 20 stretch;
	}

	<div class="bordered">
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.<br>
	  This is a div with some content.
	</div>

感觉困难有工具帮忙生成 [border-image-generator](http://border-image.com/#%7B%22src%22%3A%22http%3A%2F%2Fwww.w3.org%2FTR%2Fcss3-background%2Fborder.png%22%2C%22linkBorder%22%3Atrue%2C%22borderWidth%22%3A%5B0%2C0%2C0%2C0%5D%2C%22imageOffset%22%3A%5B27%2C27%2C27%2C27%5D%2C%22fill%22%3Atrue%2C%22setRepat%22%3Afalse%2C%22repeat%22%3A%5B%22repeat%22%2C%22repeat%22%5D%2C%22scaleFactor%22%3A3%2C%22setRepeat%22%3Atrue%7D)

## box-shadow

比格甚高的阴影效果也被CSS3原生支持了

	box-shadow:inset x-offset y-offset blur-radius spread-radius color

box-shadow属性至多有6个参数设置

1. 阴影类型：此参数是一个可选值，如果不设值，其默认的投影方式是外阴影；如果取其唯一值`inset`,就是将外阴影变成内阴影

2. X-offset:是指阴影水平偏移量其值可以是正负值可以取正负值，如果值为正值，则阴影在对象的右边，反之其值为负值时，阴影在对象的左边

3. Y-offset:是指阴影的垂直偏移量，其值也可以是正负值，如果为正值，阴影在对象的底部，反之其值为负值时，阴影在对象的顶部

4. 阴影模糊半径：此参数是可选，，但其值只能是为正值，如果其值为0时，表示阴影不具有模糊效果，其值越大阴影的边缘就越模糊

5. 阴影扩展半径：此参数可选，其值可以是正负值，如果值为正，则整个阴影都延展扩大，反之值为负值是，则缩小

6. 阴影颜色：此参数可选，如果不设定任何颜色时，浏览器会取默认色，但各浏览器默认色不一样

看个例子

	box-shadow: 3px 3px 3px orange;

box-shadow可以使用一个或多个投影，如果使用多个投影时必须需要用逗号`,`分开

	box-shadow: 3px 3px 3px orange, 3px 3px 3px red;

## box-sizing

这个属性多少和边框也相关，传统的盒模型width就是指内容区域宽度，和padding、border没有关系，但是这在布局上带来一定的困难

`box-sizing`可以改变盒模型

1. content-box：标准盒模型
2. border-box：width = content width + paddingLeft + borderLeft + paddingRight + borderRight
