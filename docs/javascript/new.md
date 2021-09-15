#　实现　new 的过程

```js
function _new(fn, ...args) {  
    const obj = Object.create(fn.prototype)  
    const newObj = fn.call(obj, ...args)  
    return newObj instanceof Object ? newObj : obj 
}
```