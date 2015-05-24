# Gradient

CSS3渐变分为`liner-gradient`和`radial-gradient`

冠以其语法由于前期草稿阶段各个浏览器都有不同的实现，下面主要介绍2012.04W3C推荐标准语法

## 线性渐变

在线性渐变过程中，颜色沿着一条直线过渡：从左侧到右侧、从右侧到左侧、从顶部到底部、从底部到顶部或着沿任何任意轴

	linear-gradient([[<angle> | to <side-or-corner> ],]?<color-stop>[,<color-stop>]+)

W3C标准线性渐性语法包括三个主要属性参数：

第一个参数指定了渐变的方向，同时决定了渐变颜色的停止位置。这个参数值可以省略，当省略不写的时候其取值为`to bottom`

在决定渐变的方向主要有两种方法：

1. angle：通过角度来确定渐变的方向。0度表示渐变方向从下向上，90度表示渐变方向从左向右。如果取值为下值，其角度按顺时针方向旋转

2. 关键词：通过关键词来确定渐变的方向。比如`to top`、`to right`、`to bottom`和`to left`

这些关键词对应的角度值，除了使用`to top`、`top left`之外，还可以使用`top left`左上角到右下角、`top right`左上角到右下解等。

第二个和第三个参数，表示颜色的起始点和结束点。可以在插入多个颜色值

	div {
	  width: 400px;
	  height: 150px;
	  border: 1px solid #666;
	  line-height: 150px;
	  text-align: center;
	  font-weight: 900;
	  font-size: 30px;
	  color: #fff;
	  margin: 10px auto;
	}
	.toTop {
	  background-image:-webkit-linear-gradient(to top, orange, green);
	  background-image:linear-gradient(to top,orange,green);
	}
	.toTop-deg{
	  background-image:-webkit-linear-gradient(0deg, orange, green);
	  background-image:linear-gradient(0deg,orange,green);
	}
	.toTop-deg2{
	  background-image:-webkit-linear-gradient(360deg, orange, green);
	  background-image:linear-gradient(360deg,orange,green);
	}
	.toTop-deg3 {
	  background-image:-webkit-linear-gradient(-360deg, orange, green);
	  background-image:linear-gradient(-360deg,orange,green);
	}

## 多色线性渐变

在实际中，渐变不仅仅是只有两种颜色，会有多色

	.toLeft {
	  background-image:-webkit-linear-gradient(to left, red, orange,yellow,green,blue,indigo,violet);
	  background-image:linear-gradient(to left, red, orange,yellow,green,blue,indigo,violet);
	}
	.toRight {
	  background-image:-webkit-linear-gradient(to right, red, orange,yellow,green,blue,indigo,violet);
	  background-image:linear-gradient(to right, red, orange,yellow,green,blue,indigo,violet);
	}
	.toTop {
	  background-image:-webkit-linear-gradient(to top, red, orange,yellow,green,blue,indigo,violet);
	  background-image:linear-gradient(to top, red, orange,yellow,green,blue,indigo,violet);
	}
	.toBottom {
	  background-image:-webkit-linear-gradient(to bottom, red, orange,yellow,green,blue,indigo,violet);
	  background-image:linear-gradient(to bottom, red, orange,yellow,green,blue,indigo,violet);
	}

## 径向渐变

CSS3径向渐变是圆形或椭圆形渐变。颜色不再沿着一条直线轴变化，而是从一个起点朝所有方向混合。但相对线性渐变要比径向渐变复杂的多。

	radial-gradient([[<shape> || <size>] [at <position>]?,| at <position>,]?<color-stop>[,<color-stop>]+);

看个例子

	div {
	  width: 400px;
	  height: 300px;
	  margin: 50px auto;
	  border: 5px solid hsla(60,50%,80%,.8);
	  background-image: -webkit-radial-gradient(circle,hsla(120,70%,60%,.9),hsla(360,60%,60%,.9));
	  background-image: radial-gradient(circle,hsla(120,70%,60%,.9),hsla(360,60%,60%,.9));
	}

分析一下参数

### position

主要用来定义径向渐变的圆心位置

1. length：用长度值指定径向渐变圆心的横坐标或纵坐标，可以为负值

2. percentage：用百分比指定径向渐变圆心的横坐标或纵坐标可以为负值

3. left：设置左边为径向渐变圆心的横坐标值

4. center：设置中间为径向渐变圆心的横坐标值或纵坐标

5. right：设置右边为径向渐变圆心的横坐标值

6. top：设置顶部为径向渐变圆心的纵标值

7. bottom：设置底部为径向渐变圆心的纵标值

### size

主要用来确定径向渐变的结束形状大小。如果省略了，其默认值为`farthest-corner`

1. closest-side：指定径向渐变的半径长度为从圆心到离圆心最近的边；
2. closest-corner：指定径向渐变的半径长度为从圆心到离圆心最近的角；
3. farthest-side：指定径向渐变的半径长度为从圆心到离圆心最远的边；
4. farthest-corner：指定径向渐变的半径长度为从圆心到离圆心最远的角；

### shape

主要用来定义径向渐变的形状。其主要包括两个值“circle”和“ellipse”：

1. circle：如果`size`和`length`大小相等，那么径向渐变是一个圆形，也就是用来指定圆形的径向渐变

2. ellipse：如果`size`和`length`大小不相等，那么径向渐变是一个椭圆形，也就是用来指定椭圆形的径向渐变

### color-stop

径向渐变线上的停止颜色，类似于线性渐变的`color-stop`，径向渐变的为渐变线从中心点向右扩散。其中0%表示渐变线的起始点，100%表示渐变线的与渐变容器相交结束的位置。而且其颜色停止可以定义一个负值。


	div {
		width: 400px;
		height: 300px;
		margin: 50px auto;
		border: 5px solid hsla(60,50%,80%,.8);
		background-image: -webkit-radial-gradient(200px 200px at 200px 150px,hsla(120,70%,60%,.9),hsla(360,60%,60%,.9));
		background-image: radial-gradient(200px 200px at 200px  150px,hsla(120,70%,60%,.9),hsla(360,60%,60%,.9));
	}

## 工具

[Ultimate CSS Gradient Generator](http://www.colorzilla.com/gradient-editor/)

## 参考

[再说CSS3渐变——线性渐变](http://www.w3cplus.com/css3/new-css3-linear-gradient.html)

[再说CSS3渐变——径向渐变](http://www.w3cplus.com/css3/new-css3-radial-gradient.html)
