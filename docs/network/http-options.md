# http options 方法

## 1、概述

`http` 中的 `options` 方法也跟普通的 `get` 等请求一样，有两个作用，一个是检测服务器支持的请求，第二个是 `CORS` 中的预检请求。

下面我们分别介绍。

## 2、检测服务器所支持的请求方法

我们可以像服务器发送一个 `options` 请求，在返回的请求头 `Allow` 字段中，我们可以获取，服务器支持哪些方法。
这是一个例子，说明服务器支持一下方法。

```text
Allow: OPTIONS,GET,HEAD,POST
```

## 3、`CORS` 中的预检请求

`CORS` 是用于跨域的技术，我们使用 `options` 方法来检测该接口能否跨域请求。

<comment-comment/> 
