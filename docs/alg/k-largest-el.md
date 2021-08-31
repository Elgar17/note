# 第k个最大元素

> 来源：leetcode 215 题

## 1、✍描述
在未排序的数组中找出第k个最大元素（排序后的）。

**示例1：**

输入：[3,5,6,7,4] 2

输出: 4

**示例2：**

输入：[1,2,1,2,3] 2

输出: 2

## 2、💡解题思路

先进行降序排序，最后用选择数组中的第 k - 1 位。

## 3、实现

```js
var findKthLargest = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums[k - 1]
}

// 简化版
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a)
    return nums[k - 1]
}
```