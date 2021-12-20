# vue 生命周期钩子

## 1、概述

生命周期钩子指的是，Vue 将渲染页面过程中触发的一些函数。

比如说，我们想在视图更新前需要做一件事，那么直接使用 `beforeUpdate` 函数即可，像这种很多函数钩子，下面会具体介绍。

## 2、实例

生命周期钩子：

- beforeCreate: `new Vue` 之后，没有绑定数据 **el、data 都 undefined**
- created：绑定了数据，数据监听，没有生成虚拟 Dom，**el 为undefined，data 可访问**
- beforeMount：生成了`HTML` 页面，没有渲染页面，**el 为虚拟dom**
- mouted：页面更新完毕，**el 为真实 DOM**
- beforeUpdate：跟新数据前
- update：更新数据后
- beforeDistroy：实例销毁前
- distroy：实例销毁



 
 <comment-comment/> 
 