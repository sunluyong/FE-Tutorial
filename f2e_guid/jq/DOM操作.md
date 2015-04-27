# jQuery DOM操作

使用jQuery修改DOM相当简单

## 创建元素

只需要把DOM字符串传入`$`方法即可返回一个jQuery对象

	var obj = $('<div class="test"><p><span>Done</span></p></div>');

## 添加元素

### .append(content[,content]) / .append(function(index,html))

Insert content, specified by the parameter, to the end of each element in the set of matched elements.

1. 可以一次添加多个内容，内容可以是`DOM对象`、`HTML string`、 `jQuery对象`

2. 如果参数是`function`，function可以返回DOM对象、HTML string、 jQuery对象，参数是集合中的元素位置与原来的html值

看几个例子

	$( ".inner" ).append( "<p>Test</p>" );
	$( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );
	$( "p" ).append( "<strong>Hello</strong>" );
	$( "p" ).append( $( "strong" ) );
	$( "p" ).append( document.createTextNode( "Hello" ) );

### .appendTo(target)

把对象插入到目标元素尾部，目标元素可以是`selector`, `DOM对象`, `HTML string`, `元素集合`, `jQuery对象`;

Insert every element in the set of matched elements to the end of the target.

	$( "h2" ).appendTo( $( ".container" ) );
	$( "<p>Test</p>" ).appendTo( ".inner" );

### .prepend(content[,content]) / .prepend(function(index,html))

向对象头部追加内容，用法和append类似，内容添加到最开始

Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

	$( ".inner" ).prepend( "<p>Test</p>" );

### .prependTo(target)

把对象插入到目标元素头部，用法和prepend类似

Insert every element in the set of matched elements to the beginning of the target.

	$( "<p>Test</p>" ).prependTo( ".inner" );

### .before([content][,content]) / .before(function)

在对象前面(不是头部，而是外面，和对象并列同级)插入内容，参数和append类似

Insert content, specified by the parameter, before each element in the set of matched elements.

	$( ".inner" ).before( "<p>Test</p>" );
	$( ".container" ).before( $( "h2" ) );
	$( "p" ).first().before( newdiv1, [ newdiv2, existingdiv1 ] );
	$( "p" ).before( "<b>Hello</b>" );
	$( "p" ).before( document.createTextNode( "Hello" ) );


### .insertBefore(target)

把对象插入到target之前（同样不是头部，是同级）

Insert every element in the set of matched elements before the target.

	$( "h2" ).insertBefore( $( ".container" ) );

### .after([content][,content]) / .after(function（index）)

和before相反，在对象后面(不是尾部，而是外面，和对象并列同级)插入内容，参数和append类似

Insert content, specified by the parameter, after each element in the set of matched elements.

	$( ".inner" ).after( "<p>Test</p>" );
	$( "p" ).after( document.createTextNode( "Hello" ) );

### .insertAfter(target)

和insertBefore相反，把对象插入到target之后（同样不是尾部，是同级）

Insert every element in the set of matched elements after the target.

	$( "<p>Test</p>" ).insertAfter( ".inner" );
	$( "p" ).insertAfter( "#foo" );

## 删除元素

### .remove([selector])

删除被选元素（及其子元素）

 	$("#div1").remove();

我们也可以添加一个可选的选择器参数来过滤匹配的元素

	$('div').remove('.test');

### .empty()

清空被选择元素内所有子元素

Remove all child nodes of the set of matched elements from the DOM.

	$('body').empty();

### .detach()

.detach() 方法和.remove()一样, 除了 .detach()保存所有jQuery数据和被移走的元素相关联。当需要移走一个元素，不久又将该元素插入DOM时，这种方法很有用。

## 包裹元素

### wrap(wrappingElement) / .wrap(function(index))

为每个对象包裹一层HTML结构，可以是selector, element, HTML string, jQuery object

Wrap an HTML structure around each element in the set of matched elements.

	<div class="container">
	  <div class="inner">Hello</div>
	  <div class="inner">Goodbye</div>
	</div>

包裹元素

	$( ".inner" ).wrap( "<div class='new'></div>" );

看看结果

	<div class="container">
	  <div class="new">
	    <div class="inner">Hello</div>
	  </div>
	  <div class="new">
	    <div class="inner">Goodbye</div>
	  </div>
	</div>

### .wrapAll(wrappingElement)

把所有匹配对象包裹在同一个HTML结构中

Wrap an HTML structure around all elements in the set of matched elements.

	<div class="container">
	  <div class="inner">Hello</div>
	  <div class="inner">Goodbye</div>
	</div>

包裹元素

	$( ".inner" ).wrapAll( "<div class='new' />");

看看结果

		<div class="container">
		  <div class="new">
		    <div class="inner">Hello</div>
		    <div class="inner">Goodbye</div>
		  </div>
		</div>

### .wrapInner(wrappingElement) / .wrapInner(function(index))

包裹匹配元素内容，这个不好描述，一看例子就懂

Wrap an HTML structure around the content of each element in the set of matched elements.

	<div class="container">
	  <div class="inner">Hello</div>
	  <div class="inner">Goodbye</div>
	</div>

包裹元素

	$( ".inner" ).wrapInner( "<div class='new'></div>");

看卡结果

	<div class="container">
	  <div class="inner">
	    <div class="new">Hello</div>
	  </div>
	  <div class="inner">
	    <div class="new">Goodbye</div>
	  </div>
	</div>

### .unwap()

把DOM元素的parent移除

Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.

	pTags = $( "p" ).unwrap();

## html([string])

这是一个读写两用的方法，用于获取/修改元素的`innerHTML`

1. 当没有传递参数的时候，返回元素的`innerHTML`
2. 当传递了一个string参数的时候，修改元素的innerHTML为参数值

看个例子

	$('div').html()

	$('div').html('123')

后续这种读写两用的方法很多，原理都类似

1. 如果结果是多个进行赋值操作的时候会给每个结果都赋值
2. 如果结果多个，获取值的时候，返回结果集中的第一个对象的相应值

## text()

和`html`方法类似，操作的是DOM的`innerText`值
