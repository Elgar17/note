## css 中一些常用开发技巧


### 1、巧妙使用 salc 函数

这是 css3 中的一个函数，不常见，但是很常用。
用于不同尺寸之间的运算，看下面的例子。

```
100% - 50px
```

下面介绍使用这个函数，开发的一些技巧。


这是一个常见的需求，头部有一个 header, 有高度，下面有一个区域，高度为屏幕高度减去 header 的高度， 这是因为我们不想要滚动条出现，横向也是一样可以使用此方法。
```html
<div  class="wrapper">
	<div  class="header">
		这是头部
	</div>
	<div  class="main">
		100%高度
	</div>
</div>
```
```css
.wrapper{
	height: 100%;
}
.header{
	height: 64px;
}
.main{
	height: calc(100% - 64px);
}
```



水平垂直居中是在开发中，还是在面试中也是很常见的问题，这种方法也可以实现。
```css
.foo {
	position: absolute;
	top: calc(50% - 150px);
	left: calc(50% - 150px);
}
```

还可以实现字体的栅格系统，较大的屏幕显示较大的字体。

```css
html {
	font-size: calc(100vw / 30);
}
```
