# 会话处理

## 概述

在 http 请求中，为了区分一个请求来自同一个用户，也就是保存用户的身份，通常使用 Cookie 和 Session 来保存当前会话的一些状态，比如登录状态，购物车内容等。

整体流程：

- 浏览器访问一个网页
- 用户登录

下面详细介绍使用 GO 操作 Cookie 和 Session。

## Session

Session 是相当于用户的身份证，服务器通过 sessionId 识别用户的身份。

sessionId 首先在服务端生成，发送给用户，用户第二次请求时，会携带这个 sessionId。

## Cookie

Cookie 是保存在浏览器中的一串字符，用于保存服务器发来的 Session。

<comment-comment/> 
