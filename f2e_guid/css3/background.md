# Background

在CSS3之前我们对背景图片的控制极为有限，只能决定其来源、位置、重复，CSS3开辟了一篇新天地

## background-size

在 CSS3中，可以规定背景图片的尺寸，这就允许我们在不同的环境中重复使用背景图片，以像素或百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度

1. length:设置背景图像的高度和宽度，第一个值设置宽度，第二个值设置高度，如果只设置一个值，则第二个值会被设置为`auto`

2. percentage: 以父元素的百分比来设置背景图像的宽度和高度，第一个值设置宽度，第二个值设置高度，如果只设置一个值，则第二个值会被设置为`auto`

3. cover: 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域，背景图像的某些部分也许无法显示在背景定位区域中

4. contain: 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域

## background-origin

`background-origin` 属性规定 **background-position** 属性相对于什么位置来定位

1. padding-box:	背景图像相对于内边距框来定位

2. border-box:	背景图像相对于边框盒来定位

3. content-box:	背景图像相对于内容框来定位

如果背景图像的 background-attachment 属性为`fixed`，则该属性没有效果

## background-clip

background-clip 属性规定背景的绘制区域

1. padding-box:	背景被裁剪到边框盒

2. border-box:	背景被裁剪到内边距框

3. content-box:	背景被裁剪到内容框

## 多背景

在之前的CSS中只能使用一张背景图片，CSS3可以使用多张背景图片

	background:url("haoroomsCSS1_s.jpg") 0 0 no-repeat,
             url("haoroomsCSS2_s.jpg") 200px 0 no-repeat,
             url("haorooms.jpg") 400px 201px no-repeat;
