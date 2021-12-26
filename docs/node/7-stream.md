# stream (流)

## 1. 概述

先举个例子，假如我们要读取一个文件，把文件的内容输出出来，也就是说把文件所有的内容放入内存中。

如果这个文件的内容大于内存大小会发生什么？因为我们电脑内存并不大，只有几个GB（4 G，8 G，16 G等）,（给变量分的内存更少）。

这就有了流的概念，因为大的文件不能一次行放入内存中，我们可以放入我们需要的一部分放入内存即可。

那么读取大文件的时候，把文件拆成很多个块，然后取一小块放入内存读取完毕后释放。

stram 在文件操作，网络数据的传输都有使用。node 中 post 请求的获取也是这样的，先监听一个函数（data）获取数据，最后监听 end 函数里获取完整的请求，这是因为post请求在请求体中，我们不知道请求体的大小（请求体没有限制）。

## 2. 操作文件

```js
// prosess.stdin.pipe 输入流
// prosess.stdout 输出流
prosess.stdin.pipe(prosess.stdout)
```

用 node 运行以下命令后，你输入完按回车以后，他会输出一输入的内容

```js
const fs = require('fs')
const path = require('path')

// 文件路径
const foo = path.resove(__dirname,'foo.txt')
const bar = path.resove(__dirname,'bar.txt')

// 读取 stram 对象
var redStream = fs.createReadStream(foo)
// 写入 stream 对象
var writeStream = fs.createWriteStream(foo)
// 将读取的redStream对象 写入writeStream对象 相当于复制
redStream.pipe(writeStream)

// readStream.on('data',(data)=>{
    console.log(data.toString())
}) 

// 拷贝完成触发
redStream.on('end',()=>{
    console.log('复制完成')
})
```

网络请求读取一个文件也是一样

```js
const http = require('http')
const path = require('path')

const bar = path.resove(__dirname,'bar.txt')

const server = http.createServer((req.res)=>{
    if(req.method == 'GET'){
        let file = fs.createReadStream(bar)
        file.pipe(res)
    }
})
```

## 3. 服务器日志（server log）

服务器自动创建的文件，记录网站的网文过程，通过日志可以统计网站的访问量，发生的错误等等信息。

本项目中 日志存放在 logs 目录下，写日志的函数在 `src/utils/log.js` 目录中。

<comment-comment/> 
