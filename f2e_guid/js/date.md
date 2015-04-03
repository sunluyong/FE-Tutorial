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

	Date.UTC(2015,0,1,2,3,4,567); //1420077784567


## Date()

Date函数可以直接调用，返回一个当前日期和时间的字符串，这时候是否有参数结果一样


	Date(); //  "Thu Apr 02 2015 19:20:29 GMT+0800 (CST)"

## new Date()

使用Date构造函数创建一个Date的实例

	new Date();

实例时间为当前时间，同时实例有些方法

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

* Date.prototype.setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳

* Date.prototype.setFullYear(year [, month, date])：设置四位年份
 
* Date.prototype.setHours(hour [, min, sec, ms])：设置小时（0-23）
 
* Date.prototype.setMilliseconds()：设置毫秒（0-999）
 
* Date.prototype.setMinutes(min [, sec, ms])：设置分钟（0-59）
 
* Date.prototype.setMonth(month [, date])：设置月份（0-11）
 
* Date.prototype.setSeconds(sec [, ms])：设置秒（0-59）
 
* Date.prototype.setTime(milliseconds)：设置毫秒时间戳

### Date.prototype.toString()

toString方法返回一个完整的时间字符串

	var today = new Date();
	today.toString(); // "Fri Apr 03 2015 11:17:29 GMT+0800 (CST)"

### Date.prototype.toUTCString()，Date.prototype.toISOString()

toUTCString方法返回对应的UTC时间，也就是比北京时间晚8个小时。toISOString方法返回对应时间的ISO8601写法。

	var today = new Date(1362790014000);

	today.toUTCString(); //

	today.toISOString(); //

### Date.prototype.toDateString()，Date.prototype.toTimeString()

toDateString方法返回日期的字符串形式，toTimeString方法返回时间的字符串形式。

	var today = new Date(1362790014000);
	
	today.toDateString(); // "Fri Apr 03 2015"
	
	today.toTimeString(); // "11:17:29 GMT+0800 (CST)"

### toLocalDateString, toLocalTimeString

toLocalDateString方法返回一个字符串，代表日期的当地写法

toLocalTimeString方法返回一个字符串，代表时间的当地写法

	var today = new Date(1362790014000);
	
	today.toLocaleDateString(); // "2015/4/3"
	
	today.toLocaleTimeString(); // "上午11:17:29"
	
## new Date(milliseconds)

Date对象接受从1970年1月1日00:00:00 UTC开始计算的毫秒数作为参数。这意味着如果将Unix时间戳作为参数，必须将Unix时间戳乘以1000。

	new Date(1378218728000); // Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

	// 1970年1月2日的零时
	var Jan02_1970 = new Date(3600*24*1000); // Fri Jan 02 1970 08:00:00 GMT+0800 (CST)


## new Date(datestring)

Date对象还接受一个日期字符串作为参数，返回所对应的时间。所有可以被Date.parse()方法解析的日期字符串，都可以当作Date对象的参数

	new Date("2013-02-15")
	new Date("2013-FEB-15")
	new Date("FEB, 15, 2013")
	new Date("FEB 15, 2013")
	new Date("Feberuary, 15, 2013")
	new Date("Feberuary 15, 2013")
	new Date("15, Feberuary, 2013")
	
## new Date(year, month [, day, hours, minutes, seconds, ms])

在多个参数的情况下，Date对象将其分别视作对应的年、月、日、小时、分钟、秒和毫秒。如果采用这种用法，最少需要指定两个参数（年和月），其他参数都是可选的，默认等于0。如果只使用年一个参数，Date对象会将其解释为毫秒数。

	new Date(2013) // Thu Jan 01 1970 08:00:02 GMT+0800 (CST)
	new Date(2013,0) // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
	new Date(2013,0,1) // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
	new Date(2013,0,1,0) // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
	new Date(2013,0,1,0,0,0,0) // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
	
上面代码（除了第一行）返回的是2013年1月1日零点的时间，可以看到月份从0开始计算，因此1月是0，12月是11。但是，月份里面的天数从1开始计算。

这些参数如果超出了正常范围，会被自动折算。比如，如果月设为15，就算折算为下一年的4月。参数还可以使用负数，表示扣去的时间。

	new Date(2013,0) // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
	new Date(2013,-1) // Sat Dec 01 2012 00:00:00 GMT+0800 (CST) 
	new Date(2013,0,1) // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
	new Date(2013,0,0) // Mon Dec 31 2012 00:00:00 GMT+0800 (CST)
	new Date(2013,0,-1) // Sun Dec 30 2012 00:00:00 GMT+0800 (CST)
	
## 日期运算

类型转换时，Date对象的实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期对象进行减法运算，返回的就是它们间隔的毫秒数；进行加法运算，返回的就是连接后的两个字符串。

	var then = new Date(2013,2,1);
	var now = new Date(2013,3,1);
	
	now - then
	// 2678400000
	
	now + then
	// "Mon Apr 01 2013 00:00:00 GMT+0800 (CST)Fri Mar 01 2013 00:00:00 GMT+0800 (CST)"	
