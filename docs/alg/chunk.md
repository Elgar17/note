# 切分数组

## 1. 描述

将数组产分成特定长度的很多个数组。

```js
chunk([1, 2, 3, 4, 5, 6, 7], 3)
// [[1, 2, 3], [4, 5, 6], [7]]
```

## 2. 实现

```js
function chunk(arr,size){
    if(arr.length <= 0 || size <= 0){
        return arr
    }
    let item = [];
    for(let i = 0; i < arr.length; i += size){
        item.push(arr.slice(i,i + size))
    }
    return item
}
```

<comment-comment/>
 