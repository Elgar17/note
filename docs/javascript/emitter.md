# js设计模式

我觉得要想深入学习 javascript，需要学习框架的源码。

了解源码之前需要知道 javascript 设计模式。

## 1、发布订阅模式

发布订阅模式叫观察者模式。

举一个生活中的例子，很多了订阅了一个博客，相当于触发了一个 `on` 事件（下面会介绍），当博客的发件人发布一篇博客时，会通知每一个订阅博客的人，相当于触发了 `emit`事件。

实际应用有 Vue 中的 `$on` 和 `$emit` 方法。

（1）介绍

这样说可能难理解，简单的说，写一个构造函数，像这样：

```js
function EventEmitter(){
}
```

现在我们要订阅一件事，就是给构造函数添加一个方法，像这样：

```js
EventEmitter.prototype.on = function(name, cb){
}
// 参数1：函数名
// 参数2：要执行的函数
```

事件订阅好了，该发布了，这样：

```js
EventEmitter.prototype.emit = function(name,...args){
}
// 参数1： 要触发的函数名
// 参数2： 需要给函数传入的参数
```

当时机到时，你通过 emit 传入一个函数名来执行自己定义好的函数。

如果我们以后不用一个事件，那么应该把他移除掉对吧。

```js
EventEmitter.prototype.off = function(name){
}
```

骨架搭建好了，先模拟用一下，不着急实现，首先要知道怎么用对吧。

```js
// 创建实例
var emitter = new EventEmitter();

// 订阅一个事件
emitter.on("sayHi", function(data){
    console.log(data)
})

// 发布一个消息
emitter.emit("sayHi","Hi") // 执行sayHi函数，应该打印 Hi
```

这个就是大概的流程，下面我们开始实现。

（2）实现

我们看到，在 on 里有一个回调函数，在emit 的时候执行，所以我们在构造函数中添加一个对象，保存这些函数。

```js
function EventEmitter(){
    this.list = {}
}
```

现在可以实现 `on` 方法了，第一个参数函数名，第二个参数为函数。

```js
EventEmitter.prototype.on = function (name, cb) {
    if (this.list[name]) {
        this.list[name].push(cb) // 追加方法
    } else {
        this.list[name] = [cb]; // 创建一个name事件
    }
}
```

我们先应该判断一下是否有这个方法，要不然会覆盖之前写的方法，如果存在我们追加这个函数即可。

不存在这个方法，我们以 name 为名字创建一个数组，把函数添加即可。

现在实现 `emit` 方法，当触发 `emit` 我们应该执行对应的函数。

```js
EventEmitter.prototype.emit = function (name, ...args) {
    let _this = this;
    // 如果事件不存在返回 false
    if (!this.list[name]) return false;

    // 遍历 this.list[name] 中的每一个函数并执行
    this.list[name].forEach(fn => {
        fn.apply(this, args);
    })
    return true;
}
```

还有一个 `off` 方法，取消订阅。

```js
EventEmitter.prototype.off = function (name, fn) {
    // 如果事件不存在返回 false
    if (!this.list[name]) return false;

    // 循环数组找到该函数并移除
    for (let i = 0; i < this.list[name].length; i++) {
        if (this.list[name][i] == fn) {
            this.list[name].splice(i, 1);
        }
    }
    return true
}
```

基本功能实现了，使用试一下：

```js
var emitter = new EventEmitter();

// 用户1 添加订阅
function sayHi1(data) {
    console.log(data, "user1")
}
emitter.on("sayHi", sayHi1)

// 用户2 添加订阅
function sayHi2(data) {
    console.log(data, "user2")
}
emitter.on("sayHi", sayHi2)

// 取消 user1 的订阅
emitter.off("sayHi", sayHi1)

// 发布
emitter.emit("sayHi", "订阅者")

// 打印
// 订阅者 user2
```

用 class 语法重写了一下完整的。

```js
class EventEmitter {
    constructor() {
        this.list = {}
    }
    on(name, cb) {
        if (this.list[name]) {
            this.list[name].push(cb) // 追加方法
        } else {
            this.list[name] = [cb]; // 创建一个name事件
        }
    }
    emit(name, ...args) {
        let _this = this;
        // 如果事件不存在返回 false
        if (!this.list[name]) return false;

        // 遍历 this.list[name] 中的每一个函数并执行
        this.list[name].forEach(fn => {
            fn.apply(_this, args);
        })
        return true;
    }
    off(name, fn) {
        // 如果事件不存在返回 false
        if (!this.list[name]) return false;

        // 循环数组找到该函数并移除
        for (let i = 0; i < this.list[name].length; i++) {
            if (this.list[name][i] == fn) {
                this.list[name].splice(i, 1);
            }
        }
        return true
    }
}
```

<!-- ## 2、单列模式

单例模式的核心是：**确保只有一个实例，并且提供全局访问**。

```js
class 
``` -->

<comment-comment/> 
