# 条件注释与CSS hack

## 条件注释

条件注释 (conditional comment) 是于HTML源码中被IE有条件解释的语句。条件注释可被用来向IE提供及隐藏代码。


		<!--[if IE 6]>
		<p>You are using Internet Explorer 6.</p>
		<![endif]-->
		<!--[if !IE]><!-->
		<script>alert(1);</script>
		<!--<![endif]-->
		<!--[if IE 8]>
		<link href="ie8only.css" rel="stylesheet">
		<![endif]-->

>为了提高与 HTML5 的可互操作性和兼容性，Internet Explorer 10 标准模式和 Quirks 模式中删除了对条件注释的支持。 这意味着，与在其他浏览器中相同，条件注释将被视作一般注释。 使用了条件注释的页面在 Windows Internet Explorer 9 中可正常工作，但在 Internet Explorer 10 中无法正常工作。 [不再支持条件注释](https://msdn.microsoft.com/zh-cn/library/ie/hh801214(v=vs.85).aspx)


<table style="width: 98%;" border="2" align="center">
<tbody>
<tr><th width="50">项目</th><th width="150">范例</th><th>说明</th></tr>
<tr>
<td align="middle">!</td>
<td>[if !IE]</td>
<td>The NOT operator. This is placed immediately in front of the&nbsp;<em>feature</em>,&nbsp;<em>operator</em>, or&nbsp;<em>subexpression</em>&nbsp;to reverse the Boolean meaning of the expression.<br>NOT运算符。这是摆立即在前面的<em>功能</em>，<em>操作员</em>，或<em>子表达式</em>扭转布尔表达式的意义。</td>
</tr>
<tr>
<td align="middle">lt</td>
<td>[if lt IE 5.5]</td>
<td>The less-than operator. Returns true if the first argument is less than the second argument.<br>小于运算符。如果第一个参数小于第二个参数，则返回true。</td>
</tr>
<tr>
<td align="middle">lte</td>
<td>[if lte IE 6]</td>
<td>The less-than or equal operator. Returns true if the first argument is less than or equal to the second argument.<br>小于或等于运算。如果第一个参数是小于或等于第二个参数，则返回true。</td>
</tr>
<tr>
<td align="middle">gt</td>
<td>[if gt IE 5]</td>
<td>The greater-than operator. Returns true if the first argument is greater than the second argument.<br>大于运算符。如果第一个参数大于第二个参数，则返回true。</td>
</tr>
<tr>
<td align="middle">gte</td>
<td>[if gte IE 7]</td>
<td>The greater-than or equal operator. Returns true if the first argument is greater than or equal to the second argument.<br>大于或等于运算。如果第一个参数是大于或等于第二个参数，则返回true。</td>
</tr>
<tr>
<td align="middle">( )</td>
<td>[if !(IE 7)]</td>
<td>Subexpression operators. Used in conjunction with boolean operators to create more complex expressions.<br>子表达式运营商。在与布尔运算符用于创建更复杂的表达式。</td>
</tr>
<tr>
<td align="middle">&amp;</td>
<td>[if (gt IE 5)&amp;(lt IE 7)]</td>
<td>The AND operator. Returns true if all subexpressions evaluate to true<br>AND运算符。如果所有的子表达式计算结果为true，返回true</td>
</tr>
<tr>
<td align="middle">|</td>
<td>[if (IE 6)|(IE 7)]</td>
<td>The OR operator. Returns true if any of the subexpressions evaluates to true.<br>OR运算符。返回true，如果子表达式计算结果为true。</td>
</tr>
</tbody>
</table>


## CSS hack

CSS hack由于不同厂商的浏览器，比如Internet Explorer,Safari,Mozilla Firefox,Chrome等，或者是同一厂商的浏览器的不同版本，如IE6和IE7，对CSS的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。

这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。
简单的说，CSS hack的目的就是使你的CSS代码兼容不同的浏览器。当然，我们也可以反过来利用CSS hack为不同版本的浏览器定制编写不同的CSS效果。

### CSS hack分类

CSS Hack大致有3种表现形式，`CSS属性前缀法`、`选择器前缀法`以及`IE条件注释法`（即HTML头部引用if IE）Hack，实际项目中CSS Hack大部分是针对IE浏览器不同版本之间的表现差异而引入的。

1. 属性前缀法(即类内部Hack)：例如 IE6能识别下划线"_"和星号" * "，IE7能识别星号" * "，但不能识别下划线"_"，IE6~IE10都认识"\9"，但firefox前述三个都不能认识

2. 选择器前缀法(即选择器Hack)：例如 IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}

3. IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： <!--[if IE]>IE浏览器显示的内容 <![endif]-->，针对IE6及以下版本： <!--[if lt IE 6]>只在IE6-显示的内容 <![endif]-->。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效

死活记不住？

[browserhacks](http://browserhacks.com/)

## 参考

[条件注释](http://zh.wikipedia.org/wiki/%E6%9D%A1%E4%BB%B6%E6%B3%A8%E9%87%8A)
[史上最全的CSS hack方式一览](http://blog.csdn.net/freshlover/article/details/12132801)
