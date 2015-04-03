# JSON

>JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它基于JavaScript（Standard ECMA-262 3rd Edition - December 1999）的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。这些特性使JSON成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成(网络传输速度)。

## 语法

JSON 语法是 JavaScript 对象表示语法的子集。
1. 数据在名称/值对中
2. 数据由逗号分隔
3. 花括号保存对象
4. 方括号保存数组

JSON 数据的书写格式是：名称/值对，名称/值对组合中的名称写在前面（在双引号中），值对写在后面(同样在双引号中)，中间用冒号隔开：

	var json1 = {"name": "Byron", "age": "24"}
	
	var json2 = [
		{"name": "Byron", "age": "24"}, 
		{"name": "Byron2", "age": "25"}
	]

## 形式

对象是一个无序的“名称/值对”集合。一个对象以“{”（左括号）开始，“}”（右括号）结束。每个“名称”后跟一个“:”（冒号）；“名称/值对”之间使用“,”（逗号）分隔。

![](http://www.json.org/object.gif)


数组是值（value）的有序集合。一个数组以“[”（左中括号）开始，“]”（右中括号）结束。值之间使用“,”（逗号）分隔。


![](http://www.json.org/array.gif)


值（value）可以是双引号括起来的字符串（string）、数值(number)、true、false、 null、对象（object）或者数组（array）。这些结构可以嵌套。

![](http://www.json.org/value.gif)

## demo

	{
	     "firstName": "John",
	     "lastName": "Smith",
	     "sex": "third",
	     "age": 25,
	     "address": 
	     {
	         "streetAddress": "21 2nd Street",
	         "city": "New York",
	         "state": "NY",
	         "postalCode": "10021"
	     },
	     "phoneNumber": 
	     [
	         {
	           "type": "home",
	           "number": "212 555-1234"
	         },
	         {
	           "type": "fax",
	           "number": "646 555-4567"
	         }
	     ]
	 }
	 
## json和字符串转化

### 原生支持

IE以上浏览器都支持了一个对象`JSON`，JSON对象主要有两个『静态』函数

1. parse：把字符串转化为JSON对象
2. stringify：把JSON对象转化为字符串（出人意料的不叫toString，因为不是实例方法）

&nbsp;


	var json = {
	  "name": "Byron",
	  "age": 24
	};
	
	var json_str = JSON.stringify(json);
	console.log(json_str);
	console.log(JSON.parse(json_str));


### eval

邪恶的eval出现了，以前很多人图省事用eval把字符串转为json

	var json_str = '{"name": "Byron", "age": 24}';
	
	var json = eval('(' + json_str + ')');
	
	console.log(json);

### json2 

业界有了个兼容低版本IE的JSON解决方案，对浏览器有要求的可以尝试

[json2](https://github.com/douglascrockford/JSON-js)