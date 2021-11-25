# 高性能 JavaScript 代码

这里会介绍一些 javascript 中的一些最佳实践，之前看《高性能JavaScript 代码》这本书时记录的，这本书写的比较早，有些内容现在使用可能不适合，我就把最有用的记录了一下。

## 1. javascript 放在 body 的最后

放在前面会阻塞页面的渲染，不过添加 defer 属性可以一步加载，这样不会阻塞页面。

要注意的是，默认情况下 js 文件加载后会立即执行，添加 defer 属性后等到页面加载完毕（onload 事件被触发）时，执行。

## 2. 尽可能减少 http 请求的数量

http 头部也是需要一定的开销，所以 下载一个 100KB 的文件比下载 4 个250KB 快。

css 使用雪碧图是这个原理

## 3. 使用 AJAX 加载脚本

AJAX 我们都知道是异步请求，我们通过一步请求脚本之后动态添加 js 脚本即可。

我们也可以使用 AJAX 请求传输多个图片，CSS，JS和HTML等资源文件，将多个资源合并到一个请求中会减少页面请求次数来提高页面性能，需要注意的是 AJAX 不能直接传输这些文件，而是将这些文件转换成 base64 编码转换后进行传输，资源文件不能被缓存。

## 4. 使用 DOM 选择器

这里比较 `querySlectorAll` 和 `getElementById`, `getElementByTagName` 方法比较。需要组合查询使用 `querySlectorAll`。

```js
// 选择 id 为 menu 的 a 元素
let  menu = documnet.getElementById("menu").getElementByTagName('a')

// 效率会高一些
// 选择 class 为 btn 和 bg-red 的 div 元素
let  btn = documnet.querySlectorAll('div.btn,div.bg-red')
```

## 5. 重绘与重排

浏览器下载完页面之后，会解析成两个内部结构：

- DOM树：表示页面结构
- 渲染树：表示 DOM 节点如何显示

渲染树包含元素的宽高，位置等信息，生成渲染树之后，浏览器开始渲染页面，这个过程中先触发“重排（reflow）”，重排后浏览器重新绘制收影响的部分到屏幕中，这过程成为“重绘（repaint）”。

所以说，触发重排必须触发重绘，重排在重绘前面。重绘不触发重排。

重排和重绘都是消耗性能的操作，所以尽量避免页面重排和重绘。能重绘完成的操作不要触发重绘。

以下情况下会重排

- 可见 DOM 元素的增删
- 改变位置
- 改变尺寸
- 页面处渲染
- 窗口尺寸改变
- offsetTop
- scrolTop
- clientTop

## 6. 浏览器缓存

在服务端设置 HTTP 头信息，可以将资源缓存到本地，可以使用 expires 请求头设置过期时间。也可以使用本地缓存 LocalStorage 和 cookie 等存储机制在前端也可以进行存储。

## 7. eval 双重运算

尽量不要使用 eval 函数运行 JS 代码，eval 是代价昂贵的操作，而且存在安全隐患（XSS）。

## 8. 使用位操作符

位操作是跟接近底层的，在其他语言中也一样，运行效率都很高效，有些场景可以适当使用位操作符来提高运算效率。

参考：

- [高性能 javascript](https://book.douban.com/subject/5362856/)
