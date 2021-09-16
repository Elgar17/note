# 函数柯里化


## 1、概述
```
add(1,2,3)   // 6
add(1)(2)(3) // 6
```

函数柯里化就是高阶函数，可以实现函数延时执行，这个过程中使用闭包来保存函数的参数。

## 2、实现

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


