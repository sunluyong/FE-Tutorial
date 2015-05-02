# Ajax

## jQuery.ajax( [settings ] )

先看个例子

	$.ajax({
		url: 'xxx.php',
		method: 'GET',
		data: {
			name: 'Byron',
			age: 24,
			sex: 'Male'
		}
	}).done(function(result){

		console.log(result);

	}).fail(function(jqXHR, textStatus){

		consloe.log(textStatus);

	});

这样我们就发送了一个get请求

方法提供了几个常用的setting

1. async：默认设置下，所有请求均为异步请求（也就是说这是默认设置为 true ）。如果需要发送同步请求，请将此选项设置为 false

2. beforeSend：请求发送前的回调函数，用来修改请求发送前jqXHR对象，此功能用来设置自定义 HTTP 头信息，等等。该jqXHR和设置对象作为参数传递

3. cache：如果设置为 false ，浏览器将不缓存此页面。注意: 设置cache为 false将在 HEAD和GET请求中正常工作。它的工作原理是在GET请求参数中附加"_={timestamp}"

4. context：这个对象用于设置Ajax相关回调函数的上下文。 默认情况下，这个上下文是一个ajax请求使用的参数设置对象

5. data：发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后面，POST请求作为表单数据

6. headers：一个额外的`{键:值}`对映射到请求一起发送。此设置会在beforeSend 函数调用之前被设置 ;因此，请求头中的设置值，会被beforeSend 函数内的设置覆盖

7. method：HTTP 请求方法 (比如："POST", "GET ", "PUT"，1.9之前使用“type”)

了解了这些参数，使用jQuery处理ajax请求就简单了

	$.ajax({
	  method: "POST",
	  url: "some.php",
	  data: { name: "John", location: "Boston" }
	}).done(function( msg ) {
	  alert( "Data Saved: " + msg );
	});

除了这个方法，jQuery还提供了一些额外的方法

## jQuery.get( [settings] ) / jQuery.post( [settings ] )

这两个方法专门用来处理`get`和`post`请求

	$.ajax({
	  url: url,
	  data: data,
	  success: success,
	  dataType: dataType
	});

	$.ajax({
	  type: "POST",
	  url: url,
	  data: data,
	  success: success,
	  dataType: dataType
	});

dataType：从服务器返回的预期的数据类型。默认：智能猜测（xml, json, script, 或 html）

## jQuery.getJSON( url [, data ] [, success(data, textStatus, jqXHR) ] )

使用一个HTTP GET请求从服务器加载JSON编码的数据，这是一个Ajax函数的缩写，这相当于:

	$.ajax({
	  dataType: "json",
	  url: url,
	  data: data,
	  success: success
	});

## .load( url [, data ] [, complete(responseText, textStatus, XMLHttpRequest) ] )

从服务器载入数据并且将返回的 HTML 代码并插入至 匹配的元素中

	$('#result').load('ajax/test.html')

## .serialize() / serializeArray()

将用作提交的表单元素的值编译成字符串，方法没有参数，使用标准的 URL-encoded 符号上建立一个文本字符串. 它可以对一个代表一组表单元素的 jQuery 对象进行操作，比如`<input>`, `<textarea>`, 和 `<select>`:

	<form id="holder">
	  <input type="text" name="a" value="1"/>
	  <div>
	    <input type="text" name="b" value="2" id="b" />
	  </div>
	  <input type="hidden" name="c" value="3" id="c" />
	  <div>
	    <input type="checkbox" name="f" value="8" checked="true"/>
	    <input type="checkbox" name="f" value="9" checked="true"/>
	  </div>
	</form>

	$("#holder").serialize(); //a=1&b=2&c=3&f=8&f=9

	$("#holder").serializeArray();
	/*
		[
		  {name: 'a', value: '1'},
		  {name: 'b', value: '2'},
		  {name: 'c', value: '3'},
		  {name: 'f', value: '8'},
		  {name: 'f', value: '9'}
		]
	*/

serialize和serializeArray都是针对JQuery对象(选中的FORM元素)进行操作，只是返回值格式不同而已。这里特别要注意：这2个API只能操作form，如果将holder改成div，会发现不起作用
