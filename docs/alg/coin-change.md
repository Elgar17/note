# 最少硬币组合

## 1. 描述

现有2元，5元，7元的三种硬币，需要购买x 元的商品，使用最少的硬币组合付钱？

```bash
输入：2
输出：1 
```

## 2. 实现

(1) 递归

```js
function coinmin(x) {
    if(x === 0) return 0
    let res = 1000
    if(x >= 2) res = Math.min(coinmin(x - 2) + 1, res)
    if(x >= 5) res = Math.min(coinmin(x - 5) + 1, res)
    if(x >= 7) res = Math.min(coinmin(x - 7) + 1, res)
    return res;
}
```

(2) 非递归

对于本题，这种写法可能容易理解一点。

```js
function coinmin(x) {
    let f = [0];
    for (let i = 1; i < x + 1; i++) {
        f[i] = 10000
        if (f[i - 2] != null) f[i] = Math.min(f[i - 2] + 1, f[i])
        if (f[i - 5] != null) f[i] = Math.min(f[i - 5] + 1, f[i])
        if (f[i - 7] != null) f[i] = Math.min(f[i - 7] + 1, f[i])
    }
    let res = f.pop()
    return res === 10000 ? -1 : res
}
```

这是一个通用的解法，理解起来可能会难一点。

```js
function coinChange(x, coins) {
    let f = [0];
    for (let i = 1; i < x + 1; i++) {
        f[i] = 10000
        for (let j = 0; j < coins.length; j++) {
            if (f[i - coins[j]] != null) {
                f[i] = Math.min(f[i - coins[j]] + 1, f[i])
            }
        }
    }
    let res = f.pop()
    return res === 10000 ? -1 : res
}
```
<comment-comment/> 
