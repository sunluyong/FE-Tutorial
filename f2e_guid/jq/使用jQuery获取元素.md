# 使用jQuery获取元素

我们可以通过`document.getElementById`等方法获取DOM对象，但是方法名称长，使用不方便，而且功能有限，不能想CSS选择器那样灵活

jQuery定义了一套选择器规则，和CSS选择器目的一样，都是为了选择出符合特定规则的元素。讲jQuery不得不提到其选择器，这是jQuery能够快速流行的非常重要的原因，为了方便使用者jQuery刻意和CSS选择器使用相同的语法，几乎支持所有类型的CSS3选择器，当然也有一些其特定的选择器

## 选择器

<table style="width: 1028px;" border="1" cellspacing="0" cellpadding="2">
<tbody>
<tr>
<td style="background-color: #808080;" valign="top" width="254"><strong>基本选择器</strong></td>
<td style="background-color: #808080;" valign="top" >&nbsp;</td>
</tr>
<tr>
<td valign="top" width="254">$(‘*’)</td>
<td valign="top" >匹配页面所有元素</td>
</tr>
<tr>
<td valign="top" width="254">$(‘#id’)</td>
<td valign="top" >id选择器</td>
</tr>
<tr>
<td valign="top" width="254">$(‘.class’)</td>
<td valign="top" >类选择器</td>
</tr>
<tr>
<td valign="top" width="254">$(‘element’)</td>
<td valign="top" >标签选择器</td>
</tr>
<tr>
<td valign="top" width="254">&nbsp;</td>
<td valign="top" >&nbsp;</td>
</tr>
<tr>
<td style="background-color: #808080;" valign="top" width="254"><strong>组合/层次选择器</strong></td>
<td style="background-color: #808080;" valign="top" >&nbsp;</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E,F’)</td>
<td valign="top" >多元素选择器，用”,分隔，同时匹配元素E或元素F</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E F’)</td>
<td valign="top" >后代选择器，用空格分隔，匹配E元素所有的<strong>后代（不只是子元素、子元素向下递归）</strong>元素F</td>
</tr>
<tr>
<td valign="top" width="254">$(E&gt;F)</td>
<td valign="top" >子元素选择器，用”&gt;”分隔，匹配E元素的所有直接子元素</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E+F’)</td>
<td valign="top" >直接相邻选择器，匹配E元素<strong>之后</strong>的<strong>相邻</strong>的<strong>同级</strong>元素F</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E~F’)</td>
<td valign="top" >普通相邻选择器（弟弟选择器），匹配E元素<strong>之后</strong>的<strong>同级</strong>元素F（无论直接相邻与否）</td>
</tr>
<tr>
<td valign="top" width="254">$(‘.class1.class2’)</td>
<td valign="top" >匹配类名中既包含class1又包含class2的元素</td>
</tr>
<tr>
<td style="background-color: #808080;" valign="top" width="254"><strong>基本过滤选择器</strong></td>
<td style="background-color: #808080;" valign="top" >&nbsp;</td>
</tr>
<tr>
<td valign="top" width="254">$("E:first")</td>
<td valign="top" >所有E中的第一个</td>
</tr>
<tr>
<td valign="top" width="254">$("E:last")</td>
<td valign="top" >所有E中的最后一个</td>
</tr>
<tr>
<td valign="top" width="254">$("E:not(selector)")</td>
<td valign="top" >按照selector过滤E</td>
</tr>
<tr>
<td valign="top" width="254">$("E:even")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
<td valign="top" >所有E中index是偶数</td>
</tr>
<tr>
<td valign="top" width="254">$("E:odd")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
<td valign="top" >所有E中index是奇数</td>
</tr>
<tr>
<td valign="top" width="254">$("E:eq(n)")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
<td valign="top" >所有E中index为n的元素</td>
</tr>
<tr>
<td valign="top" width="254">$("E:gt(n)")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
<td valign="top" >所有E中index大于n的元素</td>
</tr>
<tr>
<td valign="top" width="254">$("E:ll(n)")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
<td valign="top" >所有E中index小于n的元素</td>
</tr>
<tr>
<td valign="top" width="254">$(":header")</td>
<td valign="top" >选择h1~h7 元素</td>
</tr>
<tr>
<td valign="top" width="254">$("div:animated")</td>
<td valign="top" >选择正在执行动画效果的元素</td>
</tr>
<tr>
<td style="background-color: #808080;" valign="top" width="254"><strong>内容过滤器</strong></td>
<td style="background-color: #808080;" valign="top" >&nbsp;</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:contains(value)’)</td>
<td valign="top" >内容中包含value值的元素</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:empty’)</td>
<td valign="top" >内容为空的元素</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:has(F)’)</td>
<td valign="top" >子元素中有F的元素，$(‘div:has(a)’):包含a标签的div</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E: parent’)</td>
<td valign="top" >父元素是E的元素，$(‘td: parent’):父元素是td的元素</td>
</tr>
<tr>
<td style="background-color: #808080;" valign="top" width="254"><strong>可视化选择器</strong></td>
<td style="background-color: #808080;" valign="top" >&nbsp;</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:hidden’)</td>
<td valign="top" >所有被隐藏的E</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:visible’)</td>
<td valign="top" >所有可见的E</td>
</tr>
<tr>
<td style="background-color: #808080;" valign="top" width="254"><strong>属性过滤选择器</strong></td>
<td style="background-color: #808080;" valign="top" >&nbsp;</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E[attr]’)</td>
<td valign="top" >含有属性attr的E</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E[attr=value]’)</td>
<td valign="top" >属性attr=value的E</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E[attr !=value]’)</td>
<td valign="top" >属性attr！=value的E</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E[attr ^=value]’)</td>
<td valign="top" >属性attr以value开头的E</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E[attr $=value]’)</td>
<td valign="top" >属性attr以value结尾的E</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E[attr *=value]’)</td>
<td valign="top" >属性attr包含value的E</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E[attr][attr *=value]’)</td>
<td valign="top" >可以连用</td>
</tr>
<tr>
<td style="background-color: #808080;" valign="top" width="254"><strong>子元素过滤器</strong></td>
<td style="background-color: #808080;" valign="top" >&nbsp;</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:nth-child(n)’)</td>
<td valign="top" >E的第n个子节点</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:nth-child(3n+1)’)</td>
<td valign="top" >E的index符合3n+1表达式的子节点</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:nth-child(even)’)</td>
<td valign="top" >E的index为偶数的子节点</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:nth-child(odd)’)</td>
<td valign="top" >E的index为奇数的子节点</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:first-clild’)</td>
<td valign="top" >所有E的第一个子节点</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:last-clild’)</td>
<td valign="top" >所有E的最后一个子节点</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:only-clild’)</td>
<td valign="top" >只有唯一子节点的E的子节点</td>
</tr>
<tr>
<td style="background-color: #808080;" valign="top" width="254"><strong>表单元素选择器</strong></td>
<td style="background-color: #808080;" valign="top" >&nbsp;</td>
</tr>
<tr>
<td valign="top" width="254">$(‘E:type’)</td>
<td valign="top" >特定类型的input</td>
</tr>
<tr>
<td valign="top" width="254">$(‘:checked’)</td>
<td valign="top" >被选中的checkbox或radio</td>
</tr>
<tr>
<td valign="top" width="254">$(‘option: selected’)</td>
<td valign="top" >被选中的option</td>
</tr>
</tbody>
</table>

简直就是复习CSS选择器有木有，正是得益于此，开发者在众多js库中迅速青睐于jQuery

## jQuery对象与DOM对象

通过jQuery获取出来的对象有三个特点

1. 永远不可能为空对象，判断是否没有结果需要判断其`length`属性

2. 即使是结果仅有一个，获取出的对象内组织仍为数组

3. 使用jQuery获取的对象并不是DOM对象，而是对DOM对象的一层封装，并为其添加了jQuery的一些属性和方法，方便操作，我们称为jQuery对象


## 二次筛选

