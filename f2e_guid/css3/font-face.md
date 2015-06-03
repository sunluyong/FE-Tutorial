# font-face

我们在CSS中经常指定字体

	font-family: '微软雅黑', '宋体', Arial;

这里用的字体是用户计算机本地字体，如果找不到声明的字体就会使用相应语言默认的字体，比如Mac下没有`微软雅黑`，如果没有声明其它的字体就会使用`华文黑体`

很多时候出于美观原因我们希望使用一些不是所有客户端都有的字体，甚至一些版权字体(方正系列)时，为了用户体验一致不得不用图片

## CSS3 @font-face

CSS3赋予了我们使用自定义字体的能力，我们可以把字体文件像图片一样放在服务器或者CDN，然后在页面通过CSS指定下载到客户端，这样客户端就可以使用了

使用`@font-face`即可，和`keyframes`、`media`一样，font-face需要`@`

	@font-face {
    font-family: <YourWebFontName>;
    src: <source> [<format>][,<source> [<format>]]*;
    [font-weight: <weight>];
    [font-style: <style>];
  }

让人吃惊的是连IE5.5都支持这一属性，因为这是CSS2引入的属性，但是在CSS2.1中被移除，CSS3又被加了回来


## 字体文件格式

不幸的是各个浏览器支持的字体格式并不统一

### WOFF

WOFF是**Web Open Font Format**简写。这种字体格式专门用于网上，由Mozilla联合其它几大组织共同开发。WOFF字体通常比其它字体加载的要快些，因为使用了OpenType (OTF)和TrueType (TTF)字体里的存储结构和压缩算法。这种字体格式还可以加入元信息和授权信息。

这种字体格式有君临天下的趋势，因为所有的现代浏览器都开始支持这种字体格式。

支持这种字体的浏览器有【IE9+,Firefox3.5+,Chrome6+,Safari3.6+,Opera11.1+】

### SVG / SVGZ

**Scalable Vector Graphics (Font)**. SVG是一种用矢量图格式改进的字体格式，体积上比矢量图更小，适合在手机设备上使用。只有iPhone上的Safari(4.1)之前的版本支持它。目前火狐、IE都不支持SVG字体格式。火狐推迟对SVG字体的支持，重点放在WOFF格式上。SVGZ是压缩版的SVG。

支持这种字体的浏览器有【Chrome4+,Safari3.1+,Opera10.0+,iOS Mobile Safari3.2+】

### EOT

**Embedded Open Type**。这是微软创造的字体格式(是微软在15年前发明了网络字体@font-face)。这种格式只在IE6/IE8里使用。

### OTF / TTF

**OpenType Font** 和 **TrueType Font**。这种格式容易被复制(非法的)，这才催生了WOFF字体格式。

.ttf字体是Windows和Mac的最常见的字体，是一种RAW格式，因此他不为网站优化,支持这种字体的浏览器有

【IE9+,Firefox3.5+,Chrome4+,Safari3+,Opera10+,iOS Mobile Safari4.2+】

.otf字体被认为是一种原始的字体格式，其内置在TureType的基础上，所以也提供了更多的功能,支持这种字体的浏览器有

【Firefox3.5+,Chrome4.0+,Safari3.1+,Opera10.0+,iOS Mobile Safari4.2+】；

## 书写

为了让各多的浏览器支持

	@font-face {
		font-family: 'YourWebFontName';
		src: url('YourWebFontName.eot'); /* IE9 Compat Modes */
		src: url('YourWebFontName.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
	             url('YourWebFontName.woff') format('woff'), /* Modern Browsers */
	             url('YourWebFontName.ttf')  format('truetype'), /* Safari, Android, iOS */
	             url('YourWebFontName.svg#YourWebFontName') format('svg'); /* Legacy iOS */
	}

	body{
		font-family: 'YourWebFontName';
	}

## 字体源

1. bootstrap自带

2. [Google Web Fonts](https://www.google.com/fonts/)

3. [Dafont.com](http://www.dafont.com/)

有了字体文件自己转换一下就可以了，[fontsquirrel](http://www.fontsquirrel.com/tools/webfont-generator)
