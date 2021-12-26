# http 模块

http模块是 node 自带的所以我们为您不需要下载其他依赖，直接是要弄即可。

```js
// 引入http模块
const http = require('http')

// 创建一个服务 req 用户发送的请求， res 是服务器发给用户的响应
const server = http.createServer((req,res)=>{
    res.end('hello')
})

// 服务监听 8000端口
server.listen(8000)
```

访问 [http://localhost:8000](http://localhost:8000/) 可以获得 hello 的字符串。

## 1. get 请求

当服务端发来请求以后，我们可通过 req 来获取具体的请求内容。

req 有以下常用属性：

req.method：请求方法（GET/POST等）

req.url：请求路径（如：index.html?name=tom&age=18）

这里用到 querystring 模块，下面有介绍，先看一下。

```js
const http = require('http')
const querystring = require('querystring')

// 创建一个服务 req 用户发送的请求， res 是服务器发给用户的响应
const server = http.createServer((req,res)=>{
    const url = req.url
    req.query = querystring.parse(url.split('?')[1])
    // 将 url 中参数部分转成对象
    res.end('hello')
})

// 服务监听 8000端口
server.listen(8000)
```

## 2. post 请求

```js
const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        // 显示发来的数据格式
        console.log(req.header['content-type'])
        // 监听data 
        let data = ''
        // 监听发来的post数据 写入data中
        // chunk是二进制数据
        res.on('data', chunk => {
            data += chunk.toString();
        })
        // end事件在post完成之后出发
        res.on('end', () => {
            console.log(data);
        })
    }
})
```

## 3. 路由的处理

```js
const server = http.createServer((req, res) => {
    var path = req.url.split("?")[0];
    console.log(path)
})
```

## 4. querystring 模块

这里会使用一个 querystring 的模块来处理 get 请求的参数。

querystring.parse(str)方法

传入字符串，返回一个对象。

```js
// 加载模块
const querystring = require('querystring')

console.log(querystring.parse('name=tom&age=18'))
// 返回对象： {name: "tom", age: '18'}
```

<comment-comment/> 
