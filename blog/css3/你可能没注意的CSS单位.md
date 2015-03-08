# 扶今追昔

CSS中的单位我们**经常**用到`px`、`pt`、`em`、`百分比`，px和pt不用多说

## em

em是相对单位，参考物是父元素的`font-size`，具有继承的特点

如果字体大小是16px（浏览器的默认值），那么 `1em = 16px`

这样使用换算很复杂，尤其是和px对应，大家总结出了经验

  body {
    font-size: 62.5%;
  }

这样之后 `1em = 10px` 在布局等使用的时候好换算了很多

<!--more-->

## 百分比

百分比也是很常见的用法，看似简单其实有些初学者可能注意不到的知识

### 相对于谁

首先要明确百分比是相对于谁，宽泛的讲是父元素，但是并不是十分准确

1. 对于普通定位元素就是我们理解的父元素
2. 对于`position: absolute;`的元素是相对于已定位的父元素（offset parent）
3. 对于`position: fixed;`的元素是相对于 ViewPort

viewport：可视窗口，也就是浏览器的window那么大


### 意外

1. padding、margin 如果设置了百分比，会发现左右和预期一样，用的父元素宽度的百分比，但是用的也是 ** 宽度 ** 百分比，而不是想象中的高度的百分比
2. 后代元素继承的是百分比 **计算后的值** ，而不是原百分比，这个对于`line-height`的时候经常会遇到坑，还有这样的面试题问你`line-height`设置为`120%`和`1.2`的区别

# CSS3开启新时代

## rem

em是个很不错的单位，但是有个问题就是可能会带来混乱，因为em依赖于父元素的字体大小，各个元素父元素的字体尺寸不一定一样，会带来布局上很大的不确定性

`rem` font size of the root element

rem相对于根元素`html`（网页），这样使用起来就安全了很多

  html {font-size: 62.5%; /*10 ÷ 16 × 100% = 62.5%*/}
  body {font-size: 1.4rem; /*1.4 × 10px = 14px */}
  h1 { font-size: 2.4rem; /*2.4 × 10px = 24px*/}

IE9+ 和现代浏览器都已经支持了

## vw和vh

* `vw` Viewport宽度， ** 1vw **  等于viewport宽度的1%
* `vh` Viewport高度， ** 1vh **  等于viewport高的的1%

vw和vh会随着viewport变化自动变化，再也不用js控制全屏神马的了

甚至有些人丧心病狂的字体大小都用vw和vh控制，来达到字体和viewport大小同步的效果

IE10＋ 和现代浏览器都支持这两个单位

## vmin和vmax

这两个单位是针对vw和vh

* `vmin` vw和vh中比较 ** 小 ** 的值
* `vmax` vw和vh中比较 ** 大 ** 的值

这两个属性也会随着viewport变化

IE10+ 和现代浏览器都已经支持vmin

webkit浏览器之前不支持vmax，现在已经支持，所有现代浏览器已经支持，但是IE ** 全部 ** 不支持vmax

## ch和ex

这两个单位时根据 ** 当前`font-family` ** 的相对单位

* `ch` 字符`0`的宽度
* `ex` 小写字符`x`的高度

![image](http://lsly1989.qiniudn.com/xxxasddbgfbcss-units.jpg)


当`font-family`改变的时候这两个单位的值也会变化，不同字体表现的样式不一样

IE9+ 和现代浏览器都已经支持

## 浏览器兼容性

写的时候介绍了一些，大神写了测试页面可以帮我们直观的看到

[http://s.codepen.io/chriscoyier/fullgrid/CiwFD?type=embed&safe=true
](http://s.codepen.io/chriscoyier/fullgrid/CiwFD?type=embed&safe=true)

<iframe height="680" width="100%" src="http://s.codepen.io/chriscoyier/fullgrid/CiwFD?type=embed&safe=true"></iframe>

# 参考

[7 CSS Units You Might Not Know About](http://webdesign.tutsplus.com/articles/7-css-units-you-might-not-know-about--cms-22573)

[CSS的长度单位](http://www.w3cplus.com/css/the-lengths-of-css.html)

[你可能不知道的7个CSS单位](http://www.cnblogs.com/cuew1987/p/4094902.html)
