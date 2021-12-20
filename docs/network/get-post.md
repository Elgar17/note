# GET 请求与 POST 请求

详细介绍 `GET` `POST` 请求。

## 1. 概述

HTTP 中的 GET 请求和 POST 请求时最为常用的方法，在使用上和发送请求的过程中有一些差别，下面结合实例，进行

## 2. GET

```HTTP
GET /login?name=Tom HTTP/1.1
Accept: */*
Host: localhost:3000
Connection: keep-alive
```

## 3. POST

```HTTP
POST /login? HTTP/1.1
Content-Type: application/json
User-Agent: PostmanRuntime/7.28.3
Accept: */*
Postman-Token: 334396c3-9dff-4401-9f3f-0497f75ecf66
Host: 192.168.3.68:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 23

{
    "name": "Tom"
}
```

## 4. 区别

GET 请求和 POST 请求的有一下

（1）参数长度
`GET` 请求在 `URL` 中传送的参数是有长度限制的，而`POST`没有。

（2）浏览器前进后退
 浏览器回退时，`GET` 请求是无害的，而 `POST` 会再次提交请求。

（3）POST 书签不可加到书签

`GET` 请求可以添加到书签，而`POST`不可以，由于 `POST` 请求的参数存放在 `body` 中，不能存放参数。

（4）编码格式

对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
`GET` 请求只能进行 `url` 编码，而 `POST` 支持多种编码方式。

（5）请求次数

GET 产生一个 TCP 数据包，POST 产生两个 TCP 数据包。

GET 请求的参数在URL 中，没有 Body，一次能发送出去，对于POST，浏览器先发送 header ，服务器响应100 continue，在发送参数。
 
 <comment-comment/> 
 