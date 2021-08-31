# Event loop

Event loop 也叫事件循环，Node.js 是基于 chrome V8 引擎的所以，Node 也是单线程的，事件循环跟浏览器一样，这里不多介绍，之前也介绍过。

建议先了解浏览器的时间循环机制，要知道这些函数的执行循序

- setTimeout
- setImmediate
- process.nextTick
- Promise





比如要知道下面例子的执行循序

```js
setTimeout(()=>{
    console.log('定时器')
},0)

setImmediate(() => {
    console.log('这是 setImmediate')
})

process.nextTick(()=>{
    console.log('nextTick')
})

var p = new Promise((reseve,reject)=>{
    console.log('promise')
    reseve()
})

p.then(()=>{
    console.log('promise then')
})

console.log('开始')

// promise
// 开始
// nextTick
// promise then     
// 定时器
// 这是 setImmediate
```

