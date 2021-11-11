# javascript中的 in 和 of 的区别

## 1. for...in

使用 `for...in` 可以遍历数组和对象。

```js
 for...in

let obj = {
    a: 1,
    b: 2,
    c: 3
}
let arr = [1, 2, 3];

for(let key in obj){
    console.log(obj[key]); // 1 2 3
}

for(let i in arr){
    console.log(arr[i]) // 1 2 3
}
```

要注意的是，如果属性的对象名为 `symbol` 类型会，忽略这一项属性。

```js
let obj = {
    a: "1",
    b: "2",
    [Symbol(3)]: "symbol"
}
for(let key in obj){
    console.log(obj[key]); // 1 2
}
```

## 2. for...of

使用 for...of 可以遍历数组

```js
let arr = [1, 2, 3];
for(let i of arr){
    console.log(i); // 1 2 3
}
```
