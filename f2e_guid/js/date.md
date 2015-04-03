# Date

Date对象是JavaScript提供的日期和时间的操作接口

Date对象有几个**静态方法**

### Date.now()

now方法返回当前距离`1970年1月1日00:00:00`的毫秒数

	Date.now(); // 1427974222853

### Date.parse()

parse方法用来解析日期字符串，返回距离`1970年1月1日 00:00:00`的毫秒数

日期字符串的格式应该完全或者部分符合`YYYY-MM-DDTHH:mm:ss.sssZ`格式，Z表示时区，是可选的

如果解析失败，返回`NaN`
	
	Date.parse("January 26, 2011 13:51:50")
	Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
	Date.parse("Mon, 25 Dec 1995 13:30:00 +0430")
	Date.parse("2011-10-10")
	Date.parse("2011-10-10T14:48:00")
	
### Date.UTC()

默认情况下，Date对象返回的都是当前时区的时间

`Date.UTC`方法可以返回UTC时间。该方法接受年、月、日等变量作为参数，返回当前距离1970年1月1日 00:00:00 UTC的毫秒数

	Date.UTC(2011,0,1,2,3,4,567)


## Date()

Date函数可以直接调用，返回一个当前日期和时间的字符串，这时候是否有参数结果一样


	Date(); //  "Thu Apr 02 2015 19:20:29 GMT+0800 (CST)"

## new Date()

使用Date构造函数创建一个Date的实例

	new Date();
	
实例时间位当前时间，同时实例有些方法

### get

* Date.prototype.getTime()：返回实例对象距离1970年1月1日00:00:00对应的毫秒数，等同于valueOf方法

* Date.prototype.getDate()：返回实例对象对应每个月的几号（从1开始）

* Date.prototype.getDay()：返回星期，星期日为0，星期一为1，以此类推

* Date.prototype.getFullYear()：返回四位的年份

* Date.prototype.getMonth()：返回月份（0表示1月，11表示12月）

* Date.prototype.getHours()：返回小时（0-23）

* Date.prototype.getMilliseconds()：返回毫秒（0-999）

* Date.prototype.getMinutes()：返回分钟（0-59）

* Date.prototype.getSeconds()：返回秒（0-59）

* Date.prototype.getTimezoneOffset()：返回当前时间与UTC的时区差异，以分钟表示，返回结果考虑到了夏令时因素

### set

