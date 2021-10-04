# 对象结构转换成 Dom 树

## 1、✍描述

写一个 render 函数，传入 data 数据结构，生成对应的 Dom 树。

data 数据结构如下图所示：
```js
var data = [{
        name: 'div1',
        children: [{
                name: 'div12',
                children: null
            },
            {
                name: 'div13',
                children: null
            }
        ]
    },
    {
        name: 'div2',
        children: null
    }
]
```

转换后生成如下的 Dom 树：

```html
<div>
    div1
    <div>
        div12
    </div>
    <div>
        div13
    </div>
</div>
<div>
    div2
</div>
```


## 2、💡解题思路

我们不难发现，data 数据的嵌套结构我们并不知道的，所以需要用递归。步骤如下：
1. 循环数组中的每一个对象
2. 生成当前元素对应的 dom 节点并添加到传入的节点上
3. 判断有没有子节点，如果有使用递归（子节点上重复1）

## 3、实现

参数1：对应的 data 数据
参数2：需要传入一的 DOM 节点

```js
var body = document.body

function render(data, dom) {
    if (data.length == 0) return
    for (var i = 0; i < data.length; i++) {
        // 创建一个 div 节点
        let div = document.createElement('div')
        // 将内容添加到 div 上
        div.append(data[i].name)
        // 判断子节点
        if (data[i].children) {
            render(data[i].children, div)
        }
        // 将创建的 div 添加到传入的 dom 元素中
        dom.append(div)
    }
}
```