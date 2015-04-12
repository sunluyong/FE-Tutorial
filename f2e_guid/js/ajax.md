# Ajax

Ajax是Asynchronous JavaScript and XML的缩写，这一技术能够向服务器请求额外的数据而无需卸载整个页面，会带来良好的用户体验。传统的HTTP请求流程大概是这样的，

1. 浏览器向服务器发送请求
2. 服务器根据浏览器传来数据生成response
3. 服务器把response返回给浏览器
4. 浏览器刷新整个页面显示最新数据

这个过程是同步的，顺序执行

AJAX 在浏览器与 Web 服务器之间使用异步数据传输（HTTP 请求）从服务器获取数据

这里的异步是指脱离当前浏览器页面的请求、加载等单独执行，这意味着可以在不重新加载整个网页的情况下，通过JavaScript发送请求、接受服务器传来的数据，然后操作DOM将新数据对网页的某部分进行更新，使用Ajax最直观的感受是向服务器获取新数据不需要刷新页面等待了

## XMLHttpRequest 对象

Ajax的核心是JavaScript对象`XmlHttpRequest`，这个对象为向服务器发送请求和解析服务器响应提供了流畅的接口。XmlHttpRequest可以使用JavaScript向服务器提出请求并处理响应，而不阻塞用户。

XHR对象由IE5率先引入，在IE5中XHR对象是通过MSXML库中一个ActiveX对象实现的，根据IE版本不同可能会遇到不同版本XHR对象，而IE7+与其它现代浏览器均支持原生的XHR对象，在这些浏览器中我们只需使用XMLHttpRequest构造函数就可以构造XHR对象，因此一个浏览器兼容的创建XHR对象的函数写法大概是这个样子

	function createXHR(){
	    var xhr = null;
	    try {
	        // Firefox, Opera 8.0+, Safari，IE7+
	        xhr = new XMLHttpRequest();
	    }
	    catch (e) {
	        // Internet Explorer
	        try {
	            xhr = new ActiveXObject("Msxml2.XMLHTTP");
	        }
	        catch (e) {
	            try {
	                xhr = new ActiveXObject("Microsoft.XMLHTTP");
	            }
	            catch (e) {
	                xhr = null;
	            }
	        }
	    }
	    return xhr;
	}

## XHR对象用法

XHR对象有两个重要方法 open与send

![](http://images.cnitblog.com/blog/349217/201308/06224532-5ed0101b87944983816b4360db8321cf.png)

在使用XHR对象时要调用的第一个方法是open方法

	xhr.open('get', 'default.html', true)

这段代码会针对default.html页面发送get请求，关于这段代码有三点需要注意：

1. URL是相对于当前页面的路径，也可以使用绝对路径

2. 调用open方法并不会真正的发送请求，而是初始化一个请求准备发送

3. 只能向同一个域中使用相同协议和端口的URL发送请求，否则会因为安全原因报错（同源策略）

要想把请求发往服务器需要调用send方法，send方法接受一个参数，参数是请求主体要发送的数据，如果不需要发送数据则传入null，在调用send方法之后请求被发往服务器，如下

	xhr.send(null);

请求发往服务器，服务器根据请求生成响应（Response），传回给XHR对象，在收到响应后相应数据会填充到XHR对象的属性，有四个相关属性会被填充：

1. responseText：作为响应主体被返回的文本

2. responseXML：如果响应内容的类型是”text/xml”或”application/xml”，这个属性将保存包含着相应数据的XML文档

3. status：响应的HTTP状态（200,404,500等）

4. statusText：HTTP状态说明

在收到响应后第一步是检查响应状态，确保响应是否成功返回（状态为200），如果成功responseText和responseXML可以被访问，为了确保响应有效，我们可以这样检查状态码

	xhr.open('get', 'default.html, false'); //准备同步请求
	xhr.send();
	if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
	    //do something
	}else{
	    //error handler
	}

上面代码在发送同步请求的时候没问题，只有得到响应后才会执行检查status语句

但是在异步请求时，JavaScript会继续执行，不等生成响应就检查状态码，这样我们不能保证检查状态码语句是在得到响应后执行（实际上也几乎不可能，服务器再快一个HTTP请求也不会快过一条JavaScript执行速度）

这时候我们可以检查XHR对象的`readyState`属性，该属性表示请求/响应过程中的当前活动阶段，每当readyState值改变的时候都会触发一次`onreadystatechange`事件

![](http://images.cnitblog.com/blog/349217/201308/06224539-c298fb0d17a64abe96e3465549afb862.png)

我们可以利用这个事件检查每次readyState变化的值，当为4的时候表示所有数据准备就绪，有一点我们需要注意：**必须在open方法之前指定onreadtstatechange事件处理程序**

	var xhr =createXHR();
	xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        setContainer('Original Ajax: ' + xhr.responseText);
	    }
	}
	xhr.open('get', 'ajax.aspx?action=getTime', true);
	xhr.send();

我们可以在接受响应之前调用abort方法取消异步请求：

	xhr.abort();

## HTTP Header

每个HTTP请求都会带有Header信息，XHR对象也提供了操作这请求Header和响应Header信息的方法，在默认情况下，发送HTTP请求还会发送下列头部信息

1. Accept：浏览器能够处理的内容类型

2. Accept-Charset：浏览器能够处理的字符集

3. Accept-Encoding：浏览器能够处理的压缩编码

4. Accept-Language：浏览器当前设置的语言

5. Connection：浏览器与服务器的连接类型

6. Cookie：当前页面的cookie

7. Referer:发送请求的页面的URI

可以使用`setRequestHeader`方法设置自定义的请求Header信息，这个方法接受两个参数：

1. 头部字段的名称
2. 头部字段的值

要想成功发送头部信息，必须在**调用open方法之后**，**调用send方法之前**调用setRequestHeader方法。

	function getTime() {
	    var xhr = createXHR();
	    xhr.onreadystatechange = function () {
	        if (xhr.readyState == 4 && xhr.status == 200) {
	            setContainer('Original Ajax: ' + xhr.responseText);
	        }
	    }
	    xhr.open('get', 'ajax.aspx?action=getTime', true);
	    xhr.setRequestHeader(myHeader,myValue)
	    xhr.send();
	}

我们可以在服务器端接收自定义Header然后做响应操作。同时在服务器端也可以向浏览器发送额外的数据，在没有自定义信息的情况下我们可以得到默认`response header`

1. Date：响应时间

2. Server：服务器类型

3. Very：验证Encoding类型

4. X-Power-By：语言

## GET和POST请求

GET请求是最常见的请求类型，用于向服务器查询信息，必要时可以将查询字符串参数放在URL尾部发送给服务器，如果参数有特殊字符必须正确编码。我们上面使用的例子都是使用GET请求，非常简单，向服务器询问数据，然后处理数据。

POST请求用于把数据作为主体向服务器提交，POST请求主体可以包含多种格式数据，在open方法第一个参数传入”POST”就可以初始化一个POST请求。发送POST请求第二步就是向send方法传输数据参数，参数可以是xml或者字符串，json等。

## 最后

关于Ajax的总结就到这里，本文介绍的是纯JavaScript使用Ajax很是繁琐复杂，很多优秀JavaScript框架都对JavaScript操作Ajax做了很好封装处理，使用起来非常方便，最出名的是jQuery的ajax了，微软也对Ajax做了很好的封装处理，使其在ASP.NET页面中使用起来相当简单方便，相关知识可以看看[ASP.NET中使用Ajax](http://www.cnblogs.com/dolphinX/p/3242408.html)。
