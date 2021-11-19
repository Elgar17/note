# 函数柯里化

## 1. 概述

函数柯里化也叫 currying，函数式编程的一个重要特性，在 JavaScript 中也常见，比如 Node.js 框架 Koa 的中间件机制就是使用的 currying 函数。

```js
add(1)(2)(3)
add() // 6
```

函数柯里化可以理解成高阶函数，可以实现函数延时执行，执行过程中使用闭包来保存函数的参数。

## 2. 实现

下面我们实现 add 函数的，当没有参数时，结束函数的运行，返回具体的值，如果有参数，那么把参数保存在闭包中，返回新的 add 函数。

```js
const add = (function () {
    let arg = [];  // 闭包，保存函数的参数
    return function () {
        if (arguments.length == 0) {
            return arg.reduce((sum, val) => sum + val)
        } else {
            [].push.apply(arg, arguments)
            return arguments.callee
        }
    }
})()

add(1,2,3)(4)
console.log(add()) // 10
```

上面例子中我们发现，函数的返回值也是函数，不过我们还需要设置结束的条件，这个函数没有设置结束条件的话，你得不到返回值。
