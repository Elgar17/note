# 实现一些数组常用的方法

这里实现数组中常用的一些方法，主要是用于学习和面试准备。

## 1. map 的实现

先介绍以下使用，`map` 方法需要传入一个函数，返回一个新数组，对数组的每一项运行我们传入的函数。

```js
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
// 输出: Array [2, 8, 18, 32]
```

```js
Array.prototype.myMap = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res[i] = cb(this[i], i, this)
    }
    return res;
}
const array1 = [1, 4, 9, 16];
console.log(array1.myMap(x => x * 2));
// [ 2, 8, 18, 32 ]
```

## 2. reduce 的实现

先介绍以下 `Array.reduce` 的使用方法。

```js
a = [1,2,3];
a.reduce((sum,val)=> sum + val); // 6
```

- 参数1：一个 sum 值
- 参数2：遍历数组时的当前值
- 参数3：索引 index
- 参数4：整个数组

具体实现

```js
Array.prototype.myReduce = function (cb) {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = cb(sum, this[i], i, this);
    }
    return sum;
}
```

 
 <comment-comment/> 
 