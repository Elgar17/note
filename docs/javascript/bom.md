# 浏览器对象模型

目录

- location对象
- history对象
- navigetor对象

## 1. location 对象

当前浏览器的url为 "https://blog.cn/docs/bom.html#head"

```js
location.href
// https://blog.cn/docs/bom.html#head

location.host // 域名
// blog.cn

location.pathname
// 路径
// /docs/bom.html

location.hash 
// 哈希
// head
```

## 2. history

history 缓存了用户预览的网页记录，比如用户在当前窗口访问了两个网页，这些记录会保存到 history 中。

```js
history.go(n)
// 跳转特定记录页面 负值代表往后

history.back()
// 后腿一步

history.forword()
// 前进
```

## 3. navigetor对象

Navigator 对象包含有关浏览器的信息。

<comment-comment/>
