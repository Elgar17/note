# 浏览器对象模型

目录

- location对象
- history对象
- navigetor对象



## 1、 location 对象

当前浏览器的url为 https://blog.harahozi.cn/docs/javascript/bom.html#_1%E3%80%81-location-%E5%AF%B9%E8%B1%A1

```js
location.href
// 返回页面的url
// "https://blog.harahozi.cn/docs/javascript/bom.html#_1%E3%80%81-location-%E5%AF%B9%E8%B1%A1"

location.host
// 返回域名
// "blog.harahozi.cn"

location.pathname
// 路径
// "/docs/javascript/bom.html"

location.hash 
// 问号后面的内容（包括?）
// "#_1%E3%80%81-location-%E5%AF%B9%E8%B1%A1"
```



## 2、history
缓存用户预览的网页记录

```js
history.go(n)
// 跳转特定记录页面 负值代表往后

history.back()
// 后腿一步

history.forword()
// 前进
```



## 3、navigetor对象

Navigator 包含有关浏览器的信息。