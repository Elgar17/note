# 版本号排序

## 1. 概述

这是一道与之前介绍的版本号比较的题相似，按照版本号大小进行排序。

```bash
输入：[ "1.03", "1.5", "5", "2.0", "0.4"]
输出：[ "0.4", "1.03", "1.5", "2.0", "5"]
```

## 2. 思路

先写比较两个版本号的方法，之后使用这个规则进行冒泡排序。

## 3. 实现

```js
function sortVersion( versions ) {
    return versions.sort((v1,v2)=>{
        let i = 0
        const a1 = v1.split(".")
        const a2 = v2.split(".")

        while(true){
            const s1 = a1[i] ? a1[i] : 0
            const s2 = a2[i] ? a2[i] : 0
            i++
            if(s1 === s2) continue
            return s1 - s2
        }
    })
}
```

<comment-comment/> 
