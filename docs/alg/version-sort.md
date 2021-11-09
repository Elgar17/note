# 版本号排序

## 1. 概述

这是一道与之前介绍的版本号比较的题相似，按照版本号大小进行排序。

```text
输入：[ 1.03, 1.5, 5, 2.0, 0.4]
输出：[ 0.4, 1.03, 1.5, 2.0, 5]
```

## 2. 思路

先写比较两个版本号的方法，之后使用这个规则进行冒泡排序。

## 3. 实现

```js
function sortVersion(versions) {
    for(let i = 0; i < versions.length; i++){
        for(let j = 0; j < versions.length; j++){
            if(!banben(versions[i], versions[j])){
                let temp = versions[i]
                versions[i] = versions[j]
                versions[j] = temp
            }
        }
    }
    return versions
    function banben(v1, v2) {
        let v1Arr = v1.split(".")
        let v2Arr = v2.split(".")
        let len = Math.max(v1Arr.length, v2Arr.length)
        for (let i = 0; i < len; i++) {
            let n1 = v1Arr[i] != null ? v1Arr[i] : 0
            let n2 = v2Arr[i] != null ? v2Arr[i] : 0
            if (n1 > n2) return true
            if (n1 < n2) return false
        }
        return 0;
    }
}
```
