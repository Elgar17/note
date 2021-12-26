# 704. 二分查找

## 1. 描述

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

示例：

```text
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

## 2. 实现

（1）递归版

```js
function binarySearch(arr, target, l, r) {
    if (l > r) return -1
    let index = -1
    let midIndex = Math.floor((r + l) / 2)
    let midVal = arr[midIndex]

    if (midVal > target) {
        index = binarySearch(arr, target, l, midIndex - 1)
    } else if (midVal < target) {
        index = binarySearch(arr, target, midIndex + 1, r)
    } else {
        return midIndex
    }
    return index
}
```

（2）非递归

```js
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    while (r >= l) {
        let mid = l + Math.floor((r - l) / 2)
        if (nums[mid] === target) {
            return mid
            r = --mid
        } else if (nums[mid] < target) {
            l = ++mid
        } else {
            r = --mid
        }
    }
    return -1
}
```

Go 语言实现：

```go
func BinarySearch(arr []int, target int, left int, right int) int {
    l := left
    r := right
    for {
        if l > r {
            return -1
        }
        mid := (l + r) / 2
        midNum := arr[mid]
        if midNum == target {
            return mid
        } else if target > midNum {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
}
```

复杂度

- 时间复杂度：O(logn)。
- 空间复杂度：O(1)。

作者：LeetCode-Solution
链接：[leetcode-cn.com](https://leetcode-cn.com/problems/binary-search/)
来源：力扣（LeetCode）

<comment-comment/> 

 