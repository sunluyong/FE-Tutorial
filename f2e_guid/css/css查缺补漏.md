#css查缺补漏

## 半透明

CSS规定了一个专门负责透明的属性`opacity`，其含义为**不透明度**，值是`0～1`的值，0表示完全透明，1表示完全不透明

	div{
		opacity: 0.2;
		background: #000;
		color: red;
	}


<div style="opacity: 0.2;background:#000;color:red;width:100px;height:100px;font-size:50px;">123</div>


效果还不错，但是有个问题，低版本的IE不支持这个属性，有一套自己的写法

	filter:alpha(opacity=50);

我们在书写的时候要注意浏览器兼容性问题，并且先写非标准属性，再写标准属性

	div{
		filter:alpha(opacity=20);
		opacity: 0.2;
		background: #000;
		color: red;
	}

这样看起来很完美了，浏览器兼容性问题也得到了解决，但是有一个附加的坏处，就是一旦对元素设置了透明，其子元素也全部变为透明，对比一下没有设置的

<div style="background:#000;color:red;width:100px;height:100px;font-size:50px;">123</div>

我们可以注意到，文字都变成透明的了，我们只是想背景半透明

### 解决办法

1. 为元素添加一个绝对定位的子元素，设置大小和该元素一样，把半透明加在绝对定位元素上作为遮罩，`z-index`设置到最底部，达到背景半透明效果

2. 使用CSS3新属性`rgba`

RGB对于大家来说一点不陌生，就是红色R+绿色G+蓝色B，RGBA就是在RGB的基础上加进了一个透明通道Alpha，这个属性不会有刚才那种对子元素及文字造成影响

	div{
		background: rgba(0, 0, 0, 0.2);
		color: red;
	}


<div style="background:rgba(0, 0, 0, 0.2);color:red;width:100px;height:100px;font-size:50px;">123</div>



## display: none 与 visibility: hidden

这两个属性看起来都是让元素隐藏，有什么区别呢？

从文档角度而言，`display:none`表示把该元素从文档中删除，当作其不存在，自然“隐藏”了，实际上是删除了


`visibility: hidden`意思是元素本来在文档哪里就放在哪里，浏览器一样去渲染，但是视觉上不表现出来

这样我们就知道两个的浏览器层面的区别了，前者根本不渲染，后者还会渲染，只不过不可见。也就是说前者不占据空间，后者虽然不可见，但仍然占据空间


	AAA<span style="display:none;">BBB</span>CCC
  	<br/>
  	AAA<span>BBB</span>CCC
  	<br/>
  	AAA<span style="visibility:hidden;">BBB</span>CCC


AAA<span style="display:none;">BBB</span>CCC
<br/>
AAA<span>BBB</span>CCC
<br/>
AAA<span style="visibility:hidden;">BBB</span>CCC

## display

display除了控制隐藏显示，还可以控制元素类型

1. inline：行内元素
2. block：块元素
3. inline-block，表现上和行内元素一样，但是支持height、width等属性的设置
4. table、table-cell

我们可以通过改变元素的display属性，改变其表现

	<span style="display: block;">123</span>

这时候span表现的就和块元素一样了
