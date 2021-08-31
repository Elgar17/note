
描述：

1. 一个容器内很多元素，三个盒子为一排；
2. 三个盒子中间 8px 间距，两边贴边；

![css 布局](css-calc.png)


这里我们巧妙地使用 css3 中的 calc 函数，将多个不同单位的长度进行运算。


```html
<!DOCTYPE  html>

<html  lang="en">

<head>

<meta  charset="UTF-8">

<meta  http-equiv="X-UA-Compatible"  content="IE=edge">

<meta  name="viewport"  content="width=device-width, initial-scale=1.0">

<title>Document</title>

<style>

html, body{

margin: 0;

border: 0;

}

.father{

font-size: 0px;

}

.soon {

display: inline-block;

height: 20px;

width: calc((100% - 16px)/3);

margin-right: 8px;

font-size: 14px;

background-color: #1989fa;

margin-bottom: 8px;

}

.soon:nth-child(3n) {

margin: 0;

}

</style>

</head>

<body>

<div  class="father">

<div  class="soon">第1个div</div>

<div  class="soon">第2个div</div>

<div  class="soon">第3个div</div>

<div  class="soon">第4个div</div>

<div  class="soon">第5个div</div>

<div  class="soon">第6个div</div>

<div  class="soon">第7个div</div>

<div  class="soon">第8个div</div>

<div  class="soon">第9个div</div>

<div  class="soon">第10个div</div>

</div>

</body>

</html>
```
