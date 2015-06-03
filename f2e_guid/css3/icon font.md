# icon font

在很多网站项目中，我们常常会用到各种透明小图标，然后网站要兼容各个浏览器，也可能会有多个尺寸，甚至还要考虑换肤等需求。那么我们就要将这些小图标输出为多种尺寸、颜色和文件格式

icon font指的是像使用文字一样使用图标，利用`@font-face`做个特殊的字体，不同的图标使用特殊的字体+文字就可以表达

那么为什么要利用字体来表示图标呢

使用字体来实现图标有很多优势：

1. 字体文件小，一般20-50kb

2. 容易编辑和维护，尺寸和颜色可以用css来控制

3. 透明完全兼容IE6

## 做法

1. 复习 `font-face`知识

2. 自己制作或者查找免费icon font文件

3. 使用CSS伪元素

## 实践

网上免费的icon font很多，随便

[Font Awesome](http://fortawesome.github.io/Font-Awesome/)

[阿里巴巴矢量图标库](http://www.iconfont.cn/)

[foundation Icon Fonts](http://foundation.zurb.com/icon-fonts.html)

先使用font-face声明字体：

	@font-face {
	    font-family: 'emotion';
	    src: url('emotion.eot'); /* IE9*/
	    src: url('emotion.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
	        url('emotion.woff') format('woff'), /* chrome、firefox */
	        url('emotion.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
	        url('emotion.svg#svgFontName') format('svg'); /* iOS 4.1- */ }

然后，在icon元素上使用该字体就好了

	.icon{font-family:"emotion" Tahoma; ... }

最后，在页面中使用这个字体

	<span class="icon">i</span>

支持CSS3的浏览器可以更上流一点儿，我们每次修改html可能没那么方便，如果要改变某个icon，则可能需要修改相关字符，比如将i修改为e等。如果使用css3的伪元素，可以方便很多

	.icon{
	    display:inline-block;
	    width:16px;
	    height:16px;
	    /*占个位**/ ...
	}
	.icon:after, .icon::after{
	    font-family:"emotion" Tahoma;
	    display:inline-block;
	    content:"i";/*在这里调用字符*/
	    width:16px;
	    height:16px;
	    margin-left:-16px;/*position:absolute什么的也可以，看具体情况*/
	}

## 工具、参考

[CSS tricks](https://css-tricks.com/examples/IconFont/)

[CSS3 icon font完全指南](http://www.qianduan.net/css3-icon-font-guide/)

