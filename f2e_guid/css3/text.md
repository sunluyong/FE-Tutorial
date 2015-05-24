# 文本

## text-overflow

1. clip: 隐藏超出文本

2. ellipsis: 超出部分使用省略号

看个例子

	overflow:hidden;
	text-overflow:clip;

对于省略号效果还需要其它属性配合

	overflow:hidden;
	text-overflow:ellipsis;
	white-space: nowrap;

## 文本换行

### word-wrap

word-wrap 属性允许长单词或 URL 地址换行到下一行

1. normal: 只在允许的断字点换行

2. break-word: 在长单词或 URL 地址内部进行换行

## word-break

word-break 属性规定自动换行的处理方法

1. normal	使用浏览器默认的换行规则。
2. break-all	允许在单词内换行
3. keep-all	只能在半角空格或连字符处换行

## white-space

white-space 属性设置如何处理元素内的空白

1. normal	默认。连续空白会被浏览器忽略

2. pre	空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签

3. nowrap	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止

4. pre-wrap	保留空白符序列，但是正常地进行换行

5. pre-line	合并空白符序列，但是保留换行符

6. inherit	规定应该从父元素继承 white-space 属性的值

## text-shadow

	text-shadow: 颜色(Color)  x轴(X Offset) y轴(Y Offset) 模糊半径(Blur)
	text-shadow: x轴(X Offset) y轴(Y Offset)  模糊半径(Blur)  颜色(Color)

和box-shdow很像

可以设置偏移、颜色、阴影大小

	text-shdow: 2px 2px 3px #333;

可以写多个，`,`隔开

	 text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de;

结合背景颜色，通过偏移距离负数或者颜色，可以做出各种效果

	color: #ccc;
  text-shadow: -1px -1px 0 #fff,1px 1px 0 #333,1px 1px 0 #444;

  color: #fff;
  text-shadow: 1px 1px rgba(197, 223, 248,0.8),2px 2px rgba(197, 223, 248,0.8),3px 3px rgba(197, 223, 248,0.8),4px 4px rgba(197, 223, 248,0.8),5px 5px rgba(197, 223, 248,0.8),6px 6px rgba(197, 223, 248,0.8);


