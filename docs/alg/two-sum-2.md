# 167. 两数之和2

## 概述

给定一个数组（numbers）和目标值（target），数组中找到两个值和等于目标值，返回这两个指的索引。

仅存在一个有效答案，下标从 1 开始。

```text
输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
```

## 实现

```go
func twoSum(numbers []int, target int) []int {
    l := 0
    r := len(numbers) - 1
    sum := 0
    for l < r {
        sum = numbers[l] + numbers[r]
        if sum == target {
            return []int{l + 1, r + 1}
        }
        if sum > target {
            r--
        } else {
            l++
        }
    }
    return nil
}
```

来源：力扣（LeetCode）

<comment-comment/> 
