# What's this?

由于运行期绑定的特性，JavaScript 中的 `this` 含义非常多，它可以是全局对象、当前对象或者任意对象，这完全取决于函数的调用方式

随着函数使用场合的不同，this的值会发生变化。但是有一个总的原则，那就是this指的是，调用函数的那个对象

## 作为函数调用

在函数被直接调用时`this`绑定到全局对象。在浏览器中，`window` 就是该全局对象

	console.log(this);

	function fn1(){
		console.log(this);
	}

	fn1();

### 内部函数

函数嵌套产生的内部函数的`this`不是其父函数，仍然是全局变量

	function fn0(){
		function fn(){
			console.log(this);
		}
		fn();
	}

	fn0();

### setTimeout、setInterval

这两个方法执行的函数this也是全局对象

	document.addEventListener('click', function(e){
		console.log(this);
		setTimeout(function(){
			console.log(this);
		}, 200);
	}, false);


## 作为构造函数调用

所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象

new 运算符接受一个函数 F 及其参数：new F(arguments...)。这一过程分为三步：

1. 创建类的实例。这步是把一个空的对象的 `__proto__` 属性设置为 F.prototype 。
2. 初始化实例。函数 F 被传入参数并调用，关键字 this 被设定为该实例。
3. 返回实例。

看例子

	function Person(name){
		this.name = name;
	}
	Person.prototype.printName = function(){
		console.log(this.name);
	};

	var p1 = new Person('Byron');
	var p2 = new Person('Casper');
	var p3 = new Person('Vincent');

	p1.printName();
	p2.printName();
	p3.printName();


## 作为对象方法调用

在 JavaScript 中，函数也是对象，因此函数可以作为一个对象的属性，此时该函数被称为该对象的方法，在使用这种调用方式时，this 被自然绑定到该对象

	var obj1 = {
		name: 'Byron',
		fn : function(){
			console.log(this);
		}
	};

	obj1.fn();

### 小陷阱

	var fn2 = obj1.fn;

	fn2();

## DOM对象绑定事件

在事件处理程序中`this`代表事件源DOM对象（低版本IE有bug，指向了window）

	document.addEventListener('click', function(e){
		console.log(this);
		var _document = this;
		setTimeout(function(){
			console.log(this);
			console.log(_document);
		}, 200);
	}, false);


## Function.prototype.bind

bind，返回一个新函数，并且使函数内部的this为传入的第一个参数

	var fn3 = obj1.fn.bind(obj1);
	fn3();


## 使用call和apply设置this

call apply，调用一个函数，传入函数执行上下文及参数

	fn.call(context, param1, param2...)

	fn.apply(context, paramArray)


语法很简单，第一个参数都是希望设置的`this`对象，不同之处在于`call`方法接收参数列表，而`apply`接收参数数组

	fn2.call(obj1);
	fn2.apply(obj1);

## caller

在函数`A`调用函数`B`时，被调用函数`B`会自动生成一个`caller`属性，指向调用它的函数对象，如果函数当前未被调用，或并非被其他函数调用，则caller为null

	function fn4(){
		console.log(fn4.caller);
		function fn(){
			console.log(fn.caller);
		}
		fn();
	}

	fn4();

## arguments

1. 在函数调用时，会自动在该函数内部生成一个名为 arguments的隐藏对象

2. 该对象类似于数组，可以使用[]运算符获取函数调用时传递的实参

3. 只有函数被调用时，arguments对象才会创建，未调用时其值为null

        function fn5(name, age){
		    console.log(arguments);
		    name = 'XXX';
		    console.log(arguments);
		    arguments[1] = 30;
		    console.log(arguments);
	    }
        fn5('Byron', 20);

## callee

当函数被调用时，它的arguments.callee对象就会指向自身，也就是一个对自己的引用

由于arguments在函数被调用时才有效，因此arguments.callee在函数未调用时是不存在的（即null.callee），且引用它会产生异常

	function fn6(){
		console.log(arguments.callee);
	}
	fn6();

匿名函数特好用

	var i =0;
	window.onclick = function(){
		console.log(i);
		if(i<5){
			i++;
			setTimeout(arguments.callee, 200);
		}
	}


## 函数的执行环境

JavaScript中的函数既可以被当作普通函数执行，也可以作为对象的方法执行，这是导致 this 含义如此丰富的主要原因

一个函数被执行时，会创建一个执行环境（ExecutionContext），函数的所有的行为均发生在此执行环境中，构建该执行环境时，JavaScript 首先会创建 `arguments`变量，其中包含调用函数时传入的参数

接下来创建作用域链，然后初始化变量。首先初始化函数的形参表，值为 arguments变量中对应的值，如果 arguments变量中没有对应值，则该形参初始化为 undefined。

如果该函数中含有内部函数，则初始化这些内部函数。如果没有，继续初始化该函数内定义的局部变量，需要注意的是此时这些变量初始化为 `undefined`，其赋值操作在执行环境（ExecutionContext）创建成功后，函数执行时才会执行，这点对于我们理解JavaScript中的变量作用域非常重要，最后为`this`变量赋值，会根据函数调用方式的不同，赋给`this`全局对象，当前对象等

至此函数的执行环境（ExecutionContext）创建成功，函数开始逐行执行，所需变量均从之前构建好的执行环境（ExecutionContext）中读取

## 三种变量

* 实例变量：（this）类的实例才能访问到的变量

* 静态变量：（属性）直接类型对象能访问到的变量

* 私有变量：（局部变量）当前作用域内有效的变量

看个例子

	function ClassA(){
		var a = 1; //私有变量，只有函数内部可以访问
		this.b = 2; //实例变量，只有实例可以访问
	}

	ClassA.c = 3; // 静态变量，也就是属性，类型访问

	console.log(a); // error
	console.log(ClassA.b) // undefined
	console.log(ClassA.c) //3

	var classa = new ClassA();
	console.log(classa.a);//undefined
	console.log(classa.b);// 2
	console.log(classa.c);//undefined
