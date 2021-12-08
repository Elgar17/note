# 用户鉴权 JWT 与 session

## 1、JWT 鉴权

![jwt教程](jwt.png)

从名字上不难看出，就是在网络中使用 JSON 格式的令牌。

全称 JSON Web Token , 有以下三部分构成：

```text
Header
playload
signature
```

JWT 可以防止 CSRF 攻击，适合移动应用，不像 session，不用在服务器端保存数据，加密传输安全性高。

[jwt.io](jwt.io) 是一个在线解析 jwt 的网站，  

（1）header

header 中有两个字段

typ: token的类型，固定为JWT

alg: 使用的 hash 算法，HMAC　SHA256

（2）playload

playload 中存放需要传输的信息，用户ID，用户名，过期时间等，playload可以加密。

（3）signature

签名是对header和payload部分进行签名，保证传输过程中没有被串改。

（4）Node 中使用JWT

安装 jsonwebtoken:

```bash
npm install jsonwebtoken --save
```

```js
const jwt = require("jsonwebtoken")

// 参数一：需要传输的内容
// 参数二：密钥
const token = jwt.sign({ name: "Tom" }, "hIKT") 

// 解码(base64)
jwt.decode(token)

// 检查是否被串改
// 参数二：密钥
jwt.verify(token, "hIKT")
```

## 2. Session 鉴权

## 3. 比较

（1）session

优势：

1. session 主要存放在服务器端

2. cookie 存放在浏览器

劣势：

1. 跨域访问，不会携带cookie
2. 分布式部署时，需要共享 session 机制
3. 安全性较低 csrf(跨站请求网站)
4. 每次请求认证需要查询数据库

（2）JWT

- 可拓展性好，跟 session 相比，容易拓展
- 安全性相对高，不存在 csrf，需要防范XSS
- 性能：传输性能比session 低，到服务器是不用查询数据库
- 时效性：没有比session 好，服务器端不能清楚，只能等到过期时间