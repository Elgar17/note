# 53. 最大子序和

## 1. 描述

输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

示例1:

```bash
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

## 2. 思路

本题可以使用**动态规划**来求解，将本题中的数组分为若干个子数组，遍历过程中求出子数组的最大和，先写出状态转移方程：

```bash
dp[i] = max{dp[i - 1] + nums[i], nums[i]}
```

使用一个 max 变量保存最大连续和，确定初始条件：

```bash
dp[0] = array[0]
max = array[0]
```

## 3. 实现

```js
var maxSubArray = function (nums) {
    if (nums.length <= 1) return nums
    let dp = [nums[0]]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        max = Math.max(dp[i], max)
    }
    return max
}
```

- 链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
- 来源：力扣（LeetCode）

<comment-comment/> 
