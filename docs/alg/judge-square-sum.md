# 平方数之和



## 概述

给定一个数（c），判断这个数是否满足 c = a<sup>2</sup> + b<sup>2</sup>。

```bash
输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
```

## 实现

```go
func judgeSquareSum(c int) bool {
    l := 0
    r := int(math.Sqrt(float64(c)))
    sum := 0
    for l <= r {
        sum = l*l + r*r
        if sum == c {
            return true
        } else if sum > c {
            r--
        } else {
            l++
        }
    }
    return false
}
```

来源：力扣第 633 题（LeetCode）

<comment-comment/> 
