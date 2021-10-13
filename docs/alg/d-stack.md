# Stack(栈)

## 1、概述

什么是栈？有什么用？ 在javascript中刚开始学习起来觉得栈没什么用！其实并不是。如果学过 C/C++ 语言的话就发现站的用处，栈和队列在树结构和图结构上很有用。

栈是最简单的一种数据结构，

![Stack(栈)](https://img0.baidu.com/it/u=476133369,3631744743&fm=26&fmt=auto&gp=0.jpg)




## 2、实现

基于数组的实现

```js
function Stack() {
    //创建
    this.items = [];
    // 1.添加
    Stack.prototype.push = function (elment) {
        this.items[this.items.length] elment;
    }
    // 2.删除
    Stack.prototype.pop = function () {
        this.items.pop();
    }
    // 3.栈顶元素
    Stack.prototype.topElment = function () {
        return this.items[this.items.length 1];
    }
    // 4.判断是否空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    }
    // 5.大小
    Stack.prototype.length = function () {
        return this.items.length;
    }
    // 6.将栈结构以字符串返回
    Stack.prototype.toString = function () {
        return  this.items.join("");
    }
}
```

## 应用

```js
var s = new Stack();             // 初始化
// 添加元素
s.push(26)
s.push(37)
s.push(28)
s.push(28)
s.push(25)

s.items           // [26, 37, 28, 28, 25]

s.pop();          // 出栈 25

s.items           // [26, 37, 28, 28]

s.topElment();    // 28

s.isEmpty()       // false

s.length()        // 4

s.toString()      // 26372828
```