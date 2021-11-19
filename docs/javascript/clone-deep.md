# 深拷贝

## 1. 概述

JavaScript 中 Object 是引用类型，如果两个变量指向一个 Object，一个 Object 的值改变，另一个也会跟着改变。

```js
let obj1 = {
    name: "Tom"
}
let obj2 = obj1
obj2.name = "Jerry"
console.log(obj1.name) // Jerry
```

深拷贝是将一个对象复制一份，生成新的对象，之后，两个对象互不影响，指向不同的内存。

## 2. 实现

```js
function  cloneDeep(data) {
    let  dataType = Object.prototype.toString.call(data);
    let  newObject = null;
    if(data == null) return null
    // 判断是否是正则
    if (value instanceof RegExp) return new RegExp(value);
    // 判断是否是时间格式
    if (value instanceof Date) return new Date(value);

    if (dataType === '[object Array') {
        newObject = [];
        for (let  i = 0, len = data.length; i < len; i++) {
            newObject.push(cloneDeep(data[i]));
        }
    } else  if (dataType === '[object Object]') {
        newObject = {};
        for (let  i  in  data) {
            newObject[i] = cloneDeep(data[i]);
        }
    } else {
        return  data;
    }
    return  newObject;
}
```
