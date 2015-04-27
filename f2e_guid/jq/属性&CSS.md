# 属性&CSS操作

## 属性相关

### .val([value])

这是一个读写双用的方法，用来处理input的value，当方法没有参数的时候返回input的value值，当传递了一个参数的时候，方法修改input的value值为参数值

	$('input').val()

	$('input').val('newValue');

### .attr()

#### .attr(attributeName)

获取元素特定属性的值

Get the value of an attribute for the first element in the set of matched elements.

	var title = $( "em" ).attr( "title" );

#### .attr(attributeName,value) / .attr(attributesJson) / .attr( attributeName, function(index, attr) )

为元素属性赋值

Set one or more attributes for the set of matched elements.

	$( "#greatphoto" ).attr( "alt", "Beijing Brush Seller" );

	$( "#greatphoto" ).attr({
	  alt: "Beijing Brush Seller",
	  title: "photo by Kelly Clark"
	});

	$( "#greatphoto" ).attr( "title", function( i, val ) {
	  return val + " - photo by Kelly Clark";
	});//这里用id选择符举例是不是function永远最多迭代一次？用类选择符是不是更好些？

### .removeAttr()

为匹配的元素集合中的每个元素中移除一个属性（attribute）

.removeAttr() 方法使用原生的 JavaScript removeAttribute() 函数,但是它的优点是可以直接在一个 jQuery 对象上调用该方法，并且它解决了跨浏览器的属性名不同的问题。

	$('div').removeAttr('id');

### .prop()/.removeProp()

这两个方法是用来操作元素的`property`的，property和attibute是非常相似的概念，感兴趣的同学可以看看[jQuery的attr与prop](http://www.cnblogs.com/dolphinX/p/3348582.html)

## CSS相关

### .css()

这是个和`attr`非常相似的方法，用来处理元素的css

#### .css(propertyName) / .css(propertyNames)

获取元素style特定property的值

Get the value of style properties for the first element in the set of matched elements.

	var color = $( this ).css( "background-color" );

	var styleProps = $( this ).css([
	  "width",
	  "height",
	  "color",
	  "background-color"
	]);

#### .css(propertyName,value) / .css( propertyName, function(index, value) ) / .css( propertiesJson )

设置元素style特定property的值

Set one or more CSS properties for the set of matched elements.

	$( "div.example" ).css( "width", function( index ) {
	  return index * 50;
	});

	$( this ).css( "width", "+=200" );

	$( this ).css( "background-color", "yellow" );

	$( this ).css({
	  "background-color": "yellow",
	  "font-weight": "bolder"
	});

### .addClass(className) / .removeClass(className)

#### .addClass(className) / .addClass(function(index,currentClass))

为元素添加class，不是覆盖原class，是追加，也不会检查重复

Adds the specified class(es) to each of the set of matched elements.

	$( "p" ).addClass( "myClass yourClass" );

	$( "ul li" ).addClass(function( index ) {
	  return "item-" + index;
	});

#### removeClass([className]) / ,removeClass(function(index,class))

移除元素单个/多个/所有class

Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

	$( "p" ).removeClass( "myClass yourClass" );

	$( "li:last" ).removeClass(function() {
	  return $( this ).prev().attr( "class" );
	});

### .hasClass(className)

检查元素是否包含某个class，返回true/false

Determine whether any of the matched elements are assigned the given class.

	$( "#mydiv" ).hasClass( "foo" )

### .toggleClass(className)

toggle是切换的意思，方法用于切换，switch是个bool类型值，这个看例子就明白

	<div class="tumble">Some text.</div>

第一次执行

	$( "div.tumble" ).toggleClass( "bounce" )

	<div class="tumble bounce">Some text.</div>

第二次执行

	$( "div.tumble" ).toggleClass( "bounce" )

	<div class="tumble">Some text.</div>
