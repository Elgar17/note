# 盛最大水的面积

## 1、描述

给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

```text
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```

## 2、实现

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let right = height.length - 1
    let left = 0
    let res = 0
    while (left <= right) {
        let temp = Math.min(height[right], height[left]) * (right - left)
        res = Math.max(res, temp)
        height[right] < height[left] ? right-- : left++
    }
    return res
}
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water
