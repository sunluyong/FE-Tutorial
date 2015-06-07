# flex

除了 CSS 中已有的布局系统之外，CSS3还提供了一个额外的布局系统。在这个新的框模型中，框的子代采用水平或垂直布局，而且可将未使用的空间分配给特定的子代，或者通过“弹性”分配给应展开的子代，在各子代间进行分配。这些框的嵌套（水平嵌套在垂直中，或垂直嵌套在水平中）可用于在两个维度中构建布局。

Flexbox 为 display 属性赋予了一个新的值`box`，还为我们提供了8个新的属性：

1. box-orient
2. box-pack
3. box-align
4. box-flex
5. box-flex-group
6. box-ordinal-group
7. box-direction
8. box-lines

这些属性有的作用于父容器，有的作用于子容器，需要配合使用

先介绍用于父容器的几个

## display:flex

一个容器设置了`display:flex;`属性就定义了一个`flex`容器，它的直接子元素会接受这个flex环境

	.container {
	  display: flex; /* or inline-flex */
	}

## flex-direction

![image](https://cdn.css-tricks.com/wp-content/uploads/2014/05/flex-direction1.svg)

设置或检索伸缩盒对象的子元素在父容器中的位置

	.container {
	  flex-direction: row | row-reverse | column | column-reverse;
	}

1. `row` 默认值，水平从左到右
2. `row-reverse` 水平从右到左
3. `column` 垂直从上到下
4. `column-reverse` 垂直从下到上

## flex-wrap

![image](https://cdn.css-tricks.com/wp-content/uploads/2014/05/flex-wrap.svg)

设置或检索弹性盒模型对象的子元素超出父容器时是否换行

默认所有的flex item会尝试放在一行中，可以通过设置`flex-wrap`设置新行的方向

	.container{
	  flex-wrap: nowrap | wrap | wrap-reverse;
	}

1. `nowrap` 默认值，不换行
2. `wrap` 换行
3. `wrap-reverse` 换行，并且颠倒行顺序

## flex-flow

`flex-direction` 和 `flex-wrap` 的缩写，默认值`row nowrap`

	flex-flow: <‘flex-direction’> || <‘flex-wrap’>

## justify-content

![image](https://cdn.css-tricks.com/wp-content/uploads/2013/04/justify-content.svg)

设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式，当弹性盒里一行上的所有子元素都不能伸缩或已经达到其最大值时，这一属性可协助对多余的空间进行分配。当元素溢出某行时，这一属性同样会在对齐上进行控制

	.container {
	  justify-content: flex-start | flex-end | center | space-between | space-around;
	}

1. `flex-start` 默认值、弹性盒子元素将向行起始位置对齐

2. `flex-end` 弹性盒子元素将向行结束位置对齐

3. `center`弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐

4. `space-between` 弹性盒子元素会平均地分布在行里

5. `space-around` 弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半

## align-items

![image](https://cdn.css-tricks.com/wp-content/uploads/2014/05/align-items.svg)

设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式

	.container {
	  align-items: flex-start | flex-end | center | baseline | stretch;
	}


1. `flex-start` 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。

2. `flex-end` 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。

3. `center` 弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。

4. `baseline` 如弹性盒子元素的行内轴与侧轴为同一条，则该值与`flex-start`等效。其它情况下，该值将参与基线对齐。

5. `stretch` 如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

## align-content

![image](https://cdn.css-tricks.com/wp-content/uploads/2013/04/align-content.svg)

设置或检索弹性盒堆叠伸缩行的对齐方式

	.container {
	  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
	}

1. `flex-start` 各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧靠住前面一行。

2. `flex-end` 各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧靠住前面一行。

3. `center` 各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。

4. `space-between` 各行在弹性盒容器中平均分布。第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等。

5. `space-around` 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半。

6. `stretch` 各行将会伸展以占用剩余的空间。剩余空间被所有行平分，以扩大它们的侧轴尺寸。

**然后是用在子元素上的属性**

## order

![image](https://cdn.css-tricks.com/wp-content/uploads/2013/04/order-2.svg)

在默认情况下flex order会按照书写顺训呈现，可以通过`order`属性改变，数值小的在前面，还可以是负数

	.item {
	  order: <integer>;
	}

## flex-grow

![image](https://cdn.css-tricks.com/wp-content/uploads/2014/05/flex-grow.svg)

设置或检索弹性盒的扩展比率,根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间

	.item {
	  flex-grow: <number>; /* default 0 */
	}

## flex-shrink

设置或检索弹性盒的收缩比率,根据弹性盒子元素所设置的收缩因子作为比率来收缩空间

	.item {
	  flex-shrink: <number>; /* default 1 */
	}

看个例子

	<ul id="flex">
		<li>a</li>
		<li>b</li>
		<li>c</li>
	</ul>

	#flex{display:-webkit-flex;display:flex;width:400px;margin:0;padding:0;list-style:none;}
	#flex li{width:200px;}
	#flex li:nth-child(1){background:#888;}
	#flex li:nth-child(2){background:#ccc;}
	#flex li:nth-child(3){-webkit-flex-shrink:3;flex-shrink:3;background:#aaa;}

**flex-shrink**的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。

c显式的定义了`flex-shrink`，a,b没有显式定义，但将根据默认值1来计算，可以看到总共将剩余空间分成了5份，其中a占1份，b占1份，c占3分，即1:1:3

我们可以看到父容器定义为400px，子项被定义为200px，相加之后即为600px，超出父容器200px。那么这么超出的200px需要被a,b,c消化

按照以上定义a,b,c将按照1:1:3来分配200px，计算后即可得40px,40px,120px

换句话说，a,b,c各需要消化40px,40px,120px，那么就需要用原定义的宽度相减这个值，最后得出a为160px，b为160px，c为80px

## flex-basis

设置或检索弹性盒伸缩基准值，如果所有子元素的基准值之和大于剩余空间，则会根据每项设置的基准值，按比率伸缩剩余空间

	.item {
	  flex-basis: <length> | auto; /* default auto */
	}


## flex

`flex-grow`, `flex-shrink`,` flex-basis` 的缩写

	.item {
	  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
	}


## align-self

![image](https://cdn.css-tricks.com/wp-content/uploads/2014/05/align-self.svg)

设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式，可以覆盖父容器`align-items`的设置

	.item {
	  align-self: auto | flex-start | flex-end | center | baseline | stretch;
	}


## 参考

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[CSS参考手册](http://css.doyoe.com/)
