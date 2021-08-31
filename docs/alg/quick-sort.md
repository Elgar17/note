# 快速排序

排序方法方法很多，使用什么排序看具体的使用场景，快速排序是几种排序中效率较高的。

## 1、💡解题思路

- 将数组分为两组，中间取一个值作为基准
- 小于基准的在左边，大于基准的在右边
- 使用递归调用每一个分的小组
- 最后拼接这些值


## 2、实现



```js
const quickSort = (arr) => {
    if (arr.length < 1) return arr;
    let pivotI = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotI, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

quickSort([1, 4, 3, 2]) // [ 1, 2, 3, 4 ]
```

算法复杂度：N * Log(N)
