# 最长回文子串

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```


## 实现

**（2）、动态规划**

状态转移方程如下， i 表示字串开始位置，j 表示字串结束位置

```
dp[i][j] = (s[i] == s[j]) and (dp[i + 1][j - 1]) || j - i < 3
```

```js
function maxStr(s) {
    if (s.length <= 1) return s
    let dp = []
    let begin = 0;
    let max = 1;
    for (let i = 0; i < s.length; i++) {
        dp[i] = []
        dp[i][i] = true
    }

    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] != s[j]) {
                dp[i][j] = false
            } else {
                if (j - i + 1 < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            if (dp[i][j] && (j - i + 1) > max) {
                max = j - i + 1
                begin = i
            }
        }
    }
    return s.substring(begin, begin + max)
}

```