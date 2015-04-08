# ES5 数组拓展

ES5为Array对象做了大幅拓展

## Array.isArray(obj)

这是Array对象的一个静态函数，用来判断一个对象是不是数组

	var a = new Array(123);
	var b = new Date();
	console.log(Array.isArray(a)); //true
	console.log(Array.isArray(b)); //false

## .indexOf(element) / .lastIndexOf(element)

盼了好久的indexOf也来了

顾名思义，这两个方法用于查找数组内指定元素位置，查找到第一个后返回其索引，没有查找到返回-1，indexOf从头至尾搜索，lastIndexOf反向搜索。

	var a = new Array(1,2,3,3,2,1);
	console.log(a.indexOf(2)); //1
	console.log(a.lastIndexOf(2)); //4

## .forEach(element, index, array)

遍历数组，参数为一个回调函数，回调函数有三个参数：

1. 当前元素
2. 当前元素索引值
3. 整个数组

&nbsp;

	var a = new Array(1,2,3,4,5,6);

	a.forEach(function(e,i,array){
		array[i]= e + 1;
	});

	console.log(a); //[2, 3, 4, 5, 6, 7]

## .every(function(element, index, array)) / .some(function(element, index, array))

这两个函数类似于离散数学中的逻辑判定，回调函数返回一个**布尔值**

1. every是`所有`函数的每个回调函数都返回true的时候才会返回true，当遇到false的时候终止执行，返回false

2. some函数是“存在”有一个回调函数返回true的时候终止执行并返回true，否则返回false

在空数组上调用every返回true，some返回false

	var a=new Array(1,2,3,4,5,6);

	console.log(a.every(function(e, i, arr){
    return e < 5;
	}));

	console.log(a.some(function(e,i,arr){
  	return e > 4;
  }));

 ## .map(function(element))

 与forEach类似，遍历数组，回调函数返回值组成一个新数组返回，新数组索引结构和原数组一致，原数组不变

	var a = new Array(1,2,3,4,5,6);

	console.log(a.map(function(e){
	  return e * e;
	}));  // [1, 4, 9, 16, 25, 36]

	console.log(a); //[1, 2, 3, 4, 5, 6]

## .filter(function(element))

返回数组的一个子集，回调函数用于逻辑判断是否返回，返回true则把当前元素加入到返回数组中，false则不加

新数组只包含返回true的值，索引缺失的不包括，原数组保持不变

	var a = new Array(1,2,3,4,5,6);

	console.log(a.filter(function(e){
	  return e % 2 == 0;
	})); // [2, 4, 6]

	console.log(a); //[1, 2, 3, 4, 5, 6]

## .reduce(function(v1, v2), value) / .reduceRight(function(v1, v2), value)

遍历数组，调用回调函数，将数组元素组合成一个值，reduce从索引最小值开始，reduceRight反向，方法有两个参数

1. 回调函数：把两个值合为一个，返回结果

2. value，一个初始值,可选

&nbsp;

	var a = new Array(1,2,3,4,5,6);

	console.log(a.reduce(function(v1, v2){
		return v1 + v2;
	})); // 21

	console.log(a.reduceRight(function(v1, v2){
		return v1 - v2;
	}, 100)); // 79
