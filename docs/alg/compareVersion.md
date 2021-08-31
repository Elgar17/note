
# 版本号比较

```js
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let vearr1 = version1.split(".");
    let vearr2 = version2.split(".");

    let len = Math.max(vearr1.length, vearr2.length);

    for (let i = 0; i < len; i++) {
        let val1 = (vearr1[i] == undefined) ? 0 : parseInt(vearr1[i]);
        let val2 = (vearr2[i] == undefined) ? 0 : parseInt(vearr2[i]);
        if (val1 > val2) return 1;
        if (val1 < val2) return - 1;
    }

    return 0;
```