# LRU 算法

## 1. 概述

> 最近最少使用，是一种常用的页面置换算法，选择最近最久未使用的页面予以淘汰。  - 百度

在这里举个例子来 `LUR` 算法，`LUR` 算法需要实现两个方法 `get` 和 `set`，下面分别说明。

## 2. 实现

```js
class LRUCache {
    constructor(n) {
        this.size = n
        this.data = new Map()
    }

    put(domain, info) {
        if (this.data.has(domain)) {
            this.data.delete(domain)
            this.data.set(domain, info)
            return
        }
        if (this.size <= this.data.length) {
            const firstKey = this.data.keys().next().value;
            this.data.delete(firstKey);
        }
        this.data.set(domain, info)
    }

    get() {
        if (!this.data.has(domain)) return false
        const info = this.data.get(domain); //获取结果
        this.data.delete(domain); // 移除数据
        this.data.set(domain, info); // 重新添加该数据
        return info
    }
}
```

参考链接：

- [十分钟用JS写出LRU Cache 算法](https://jishuin.proginn.com/p/763bfbd54255)
 
 <comment-comment/> 
 