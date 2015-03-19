# meta

`<meta>` 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
`<meta>` 标签位于文档的头部，不包含任何内容。`<meta> `标签的属性定义了与文档相关联的名称/值对。

meta标签需要放置在`head`标签内部，一般在title标签之下

META标签可分为两大部分：HTTP-EQUIV和NAME变量

* Content-Type
	&nbsp;

		<meta http-equiv="Content-Type" content="text/html;charset=gb_2312-80">
		<meta http-equiv="Content-Language" content="zh-CN">
用以说明主页制作所使用的文字以及语言；又如英文是ISO-8859-1字符集，还有BIG5、utf-8、shift-Jis、Euc、Koi8-2等字符集；
* Refresh
&nbsp;

		<meta http-equiv="Refresh" content="n;url=http://yourlink">
定时让网页在指定的时间n内，跳转到你的页面；

* Expires
&nbsp;

		<meta http-equiv="Expires" content="Mon,12 May 2001 00:20:00 GMT">
可以用于设定网页的到期时间，一旦过期则必须到服务器上重新调用。需要注意的是必须使用GMT时间格式；
* Pragma
&nbsp;

		<meta http-equiv="Pragma" content="no-cache">
是用于设定禁止浏览器从本地机的缓存中调阅页面内容，设定后一旦离开网页就无法从Cache中再调出；

* set-cookie
&nbsp;

		<meta http-equiv="set-cookie" content="Mon,12 May 2001 00:20:00 GMT">
cookie设定，如果网页过期，存盘的cookie将被删除。需要注意的也是必须使用GMT时间格式；

* windows-Target
&nbsp;

		<meta http-equiv="windows-Target" content="_top">
强制页面在当前窗口中以独立页面显示，可以防止自己的网页被别人当作一个frame页调用；


		<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

HTTP-EQUIV用于向浏览器提供一些说明信息，从而可以根据这些说明做出反应。HTTP-EQUIV其实并不仅仅只有说明网页的字符编码这一个作用，常用的HTTP-EQUIV类型还包括：网页到期时间、默认的脚本语言、默认的风格页语言、网页自动刷新时间等。

## name、content

1.  keywords
2.  description

## 参考

[META标签](http://baike.baidu.com/view/740572.htm)
