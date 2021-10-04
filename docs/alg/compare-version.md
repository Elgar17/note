
# 165. 版本号比较

## 1、描述
输入两个版本号，返回的规则如下
- 如果 version1 > version2 返回 1，
- 如果 version1 < version2 返回 -1，
- 除此之外返回 0。

## 2、实现

将版本以 `.` 进行拆分，之后一个一个比较，长度不一样使用 0 进行补位。

```js
var compareVersion = function (version1, version2) {
    let vearr1 = version1.split(".")
    let vearr2 = version2.split(".")

    let len = Math.max(vearr1.length, vearr2.length)

    for (let i = 0; i < len; i++) {
        let val1 = (vearr1[i] == undefined) ? 0 : parseInt(vearr1[i])
        let val2 = (vearr2[i] == undefined) ? 0 : parseInt(vearr2[i])
        if (val1 > val2) return 1
        if (val1 < val2) return - 1
    }

    return 0
}
```

复杂度
- 复杂度为 O(max(n,m))
- 空间复杂度：O(n+m)

链接：https://leetcode-cn.com/problems/compare-version-numbers/
来源：力扣（LeetCode）
