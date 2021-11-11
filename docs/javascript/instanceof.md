# 实现 instanceof 方法

- 功能 : instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链

- 原理 : 内部机制是通过原型链实现的

- 用途 :
- 检测数据类型
- 判断一个引用类型变量是否是一个类的实例

```js
function _instanceof(left, right){
    let L = left.__proto__
    let R = right.prototype
    while(true){
        if(L == null) return false;
        if(L == R) return true;
        L = L.__proto__
    }
}
let d = new Date()
console.log(_instanceof(d, Date)) // true
d = 123
console.log(_instanceof(d, Date)) // false
```
