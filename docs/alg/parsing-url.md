# 解析URL

写一个函数， 返回一个对象，解析url中参数。

**示例：**

```
输入：https://www.baidu.com?&ie=utf-8&wd=vue

输出：{ie: "utf-8", wd: "vue"}
```

**解题思路：**

1. 以 `?` 号为基准拆开，获取参数部分
2. 将每一个键值对拆成一个数组中（每一组 `valve=key` 形式）
3. 遍历整个数组，每一次循环时，将 `valve=key` 分开以后，保存到 object 中
4. 返回 object

```js
function parseUrl(url){
    var params = {};
    var str = url.split("?")[1];
    var items = str.split("&");
    for(let i = 0; i < items.length; i++){
        let arr = items[i].split("=");
        params[arr[0]] = arr[1];
    }
    return params;
}
```

