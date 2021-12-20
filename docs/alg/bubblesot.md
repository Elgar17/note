# 冒泡排序

## 1. 概述

冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。

大致原理是，把一个长度为 n 的数组，每一个元素都进行一一比较，进行排序。

## 2. 实现

```js
function bubbleSort(arr) {
    var i = arr.length, j
    var temp
    while (i > 0) {
        for (j = 0 j < i - 1 j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        i--
    }
    return arr
}
```

 
 <comment-comment/> 
 