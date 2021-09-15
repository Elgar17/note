# 实现 instanceof 方法

```js
function newInstanceof(left, right) {
    let proto = left.__proto__
    let prototype = right.prototype   
    while (true) {  
        if (prototype === proto) return true  
        if (proto === null) return false
        proto = proto.__proto__  
    } 
}
```