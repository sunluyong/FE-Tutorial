# 多列布局

之前介绍过好几种布局方式，但是对于报纸、杂志这样的多列布局之前的技巧是不能满足的，我们没有办法做到内容溢出换到另外的列中

CSS3新增了多列布局特性，可以让浏览器确定何时结束一列和开始下一列

主要由几个属性

1. column-count: 列数
2. column-width: 每列宽度
3. column-gap: 列间距
4. column-rule: 列之间边框
5. column-span: 列之间跨度

## 语法

	.container{
		-webkit-column-count: 3;
		   -moz-column-count: 3;
		        column-count: 3;
		-webkit-column-width: auto;
		   -moz-column-width: auto;
		        column-width: auto;
		-webkit-column-gap: 50px;
		   -moz-column-gap: 50px;
		        column-gap: 50px;
		-webkit-column-rule: solid 2px orange;
		   -moz-column-rule: solid 2px orange;
		        column-rule: solid 2px orange;
	}

	.header{
		-webkit-column-span: all;
		   -moz-column-span: all;
		        column-span: all;
	}

## 注意点

1. `column-gap` 的间距只在列之间才有

2. `column-rule` 在间距中间显示

3. `column-width`和`column-count`是相互配合的，两个都设置，按照后者优先
