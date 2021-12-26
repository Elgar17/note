# 实现 new 的过程

- 创建一个空对象，将它的引用赋给 this，继承函数的原型。
- 通过 this 将属性和方法添加至这个对象
- 最后返回 this 指向的新对象，也就是实例（如果没有手动返回其他的对象）

```js
function _new(fn, ...args) {  
    const obj = Object.create(fn.prototype)  
    const newObj = fn.call(obj, ...args)  
    return newObj instanceof Object ? newObj : obj 
}
```

<comment-comment/> 
 