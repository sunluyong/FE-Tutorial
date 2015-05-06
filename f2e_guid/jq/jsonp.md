# jsonp

jsonp 全称是JSON with Padding，是为了解决跨域请求资源而产生的解决方案。很多时候我们需要在客户端获取服务器数据进行操作，一般我们会使用ajax+webservice做此事，但是如果我们希望获取的数据和当前页面并不是一个域，著名的同源策略（不同域的客户端脚本在没明确授权的情况下，不能读写对方的资源）会因为安全原因决绝请求，也就是我们不能向其它域直接发送请求以获取资源。

在localhot域上有一个books.php，里面包含脚本对test.com域的books.php发送get请求，希望获取其book列表资源，这就是一个跨域请求资源

	$.ajax({
    type:'get',
    url:'http://test.com/books.php'
  });

页面会报一个这样的错误：XMLHttpRequest cannot load http://test.com/books.php. Origin http://localhost is not allowed by Access-Control-Allow-Origin.

jsonp是为了解决这个问题出现的。

## jsonp原理

虽然有同源策略的限制，但是并不是HTML上所有资源都必须是同一个域的，我们常见的页面为了节省流量或加载速度采用Google或微软的 jQuery CDN，在页面上我们可以这样写就可以引用jQuery了

	<script  type="text/javascript"
	    src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js">
	</script>

iframe、img、style、script等元素的src属性可以直接向不同域请求资源，jsonp正式利用script标签跨域请求资源的

## 简单实现

localhost的books.php希望获得域test.com的books列表，在域test.com内book列表存储在books.xml中

*test.com/books.xml*

	<?xml version="1.0"?>
	<books>
	    <book name="JavaScript: The Defiitive Guide" publisher="O'Reilly Media, Inc.">
	        <author>David Flanagan</author>
	    </book>
	    <book name="PHP anf MySQL Web Development" publisher="Perason Education">
	        <author>Luke Welling</author>
	        <author>Laura Thomson</author>
	    </book>
	    <book name="HTTP: The Defiitive Guide" publisher="O'Reilly Media, Inc.">
	        <author>David Courley</author>
	        <author>Brian Totty</author>
	    </book>
	</books>

明显JavaScript不能直接获取books.xml，在test.com中需要有一个机制将xml转化为json（这也就是为什么叫jsonp，其实和ajax一样，返回的数据不一定是json格式，只是json很好用），并动态拼接一条javascript调用语句返回，这个例子中直接使用php页面拼接

*test.com/bookservice.php*

	<?php
	    $path=$_SERVER["DOCUMENT_ROOT"].'/books.xml';
	    $json=json_encode(simplexml_load_file($path));

	    $callbackFn=$_GET['callback'];
	    echo "$callbackFn($json);";
	?>

这样首先把xml文件内容转换成一个json对象

	{"book":[
		{"@attributes":{"name":"JavaScript: The Defiitive Guide","publisher":"O'Reilly Media, Inc."},"author":"David Flanagan"},
		{"@attributes":{"name":"PHP anf MySQL Web Development","publisher":"Perason Education"},"author":["Luke Welling","Laura Thomson"]},
		{"@attributes":{"name":"HTTP: The Defiitive Guide","publisher":"O'Reilly Media, Inc."},"author":["David Courley","Brian Totty"]}
	]}

然后拼接为一条javascript语句交给localhost去处理，当然test.com并不知道应该拼接的方法名叫什么，需要localhost在发送请求的时候在url中传入一个叫callback（这个也随便，两边同步就行）的参数指明。看看localhost怎么发送请求吧

*localhost/books.php*

	<!DOCTYPE html>
	<html>
	<head>
	    <title>Books</title>
	    <?php include('/components/headerinclude.php');?></head>
	    <style type="text/css">
	        .book-title
	        {
	            font-size: 15px;
	            font-weight:bold;
	            margin-top:6px;
	        }

	        .book-info
	        {
	            color:#ccc;
	            font-style:italic;
	            border-bottom:dashed 1px #ccc;
	        }
	    </style>
	</head>
	<body>
	    <div style="margin:20px;">
	        <div style="font-size:16px;font-weight:bold;">Books</div>
	        <div id="books">

	        </div>
	    </div>
	</body>
	</html>

我们希望在id为books的div中展示所有book，先添加一个用以显示book的javascript函数，也就是获取到数据后的回调函数，结合上面拼接的json格式可以这么写

	function displayBooks(books){
	    var books=books.book;
	    var booksContainer=document.getElementById('books');
	    for(var i=0;i<books.length;i++){
	        var tmp=Array();
	        tmp.push('<div class="book-title">'+books[i]['@attributes'].name+'</div>');
	        tmp.push('<div class="book-info">');
	        tmp.push('<div>Publisher: '+books[i]['@attributes'].publisher+'</div>');
	        tmp.push('<div>Author(s): ');
	        if(typeof books[i].author=='string'){
	            tmp.push(books[i].author);
	        }else{
	            var authors=books[i].author;
	            for(var j=0;j<authors.length;j++){
	                tmp.push(authors[j]+'&emsp;');
	            }
	        }
	        tmp.push('</div>'); //end of author
	        tmp.push('</div>'); //end of book info
	        booksContainer.innerHTML+=tmp.join('');
	    }
	}

然后是关键的jsonp请求的方法了

	function getBooks(){
	    var script=document.createElement('script');
	    script.setAttribute('type','text/javascript');
	    script.setAttribute('src','http://test.com/bookservice.php?callback=displayBooks');
	    document.body.appendChild(script);
	}

	getBooks();

在getbooks()方法中动态创建了一个script标签，设置其src为test.com提供的获取数据的service接口并传入回调函数，这样我们可以看看页面的反应，在Chrome控制台下可以看到这条请求

![](http://images.cnitblog.com/blog/349217/201310/27190321-146cad497f354f5788e3aa72e6d7f199.png)

这样我们就可以在localhost下获取test.com的books了

![](http://images.cnitblog.com/blog/349217/201310/27193335-e0c0af45bb7844cf8addf19f5d194d5a.png)

## jquery实现

在jquery中也有对jsonp的封装，不过jquery把其放到了ajax中，不明白为什么，毕竟这东西和ajax不太一样。写一个jQuery版的


	function getBooks(){
	    $.ajax({
	        type:'get',
	        url:'http://test.com/bookservice.php',
	        dataType:'jsonp',
	        jsonp:'callback',
	        jsonpCallback:'displayBooks'
	    });
	}


看起来完全一样，不过方便了很多，不用自己创建script标签神马的了，指明dataType为jsonp，回调函数不放在url内了，而是使用两个参数分别指明。

## 安全性问题

当然使用jsonp会在一定程度上造成安全性问题，如果请求的站点不是信任站点，那么可能会在返回的方法调用中包含一些恶意代码。所以尽量向信任的站点发送请求。另外xss也经常会利用jsonp向站点注入恶意代码。

