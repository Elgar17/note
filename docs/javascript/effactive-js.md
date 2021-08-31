
# 编写高质量 JavaScript 代码

![effactive-js](effactive-js.jpg)

1. 判断 NaN

`NaN` 不等于本身，提供的 `isNaN` 方法无法判断是否为 `NaN`，需要我们重写。


```js

isNaN(NaN);     // true
isNaN("foo");   // true
isNaN({});      // true

// 重写
const  isNaN = (v) =>  v !== v;

```


2. 关于 `toString` 方法

```js
Math.toSring(); // [object Math]
JSON.toSring(); // [object JSON]

"Java" + {toString:  function() {return  "Script"}} // JavaScript
const o = {
    toSting: function () {
        return "[object MyObject]";
    },
    valueOf: function () {
        return "Script";
    }
}

"Java" + o // JavaScript
```

  

由此可以看出，先调用 `toStirng` 方法，之后调用 `valueOf` 方法。


3. 基本类型优于对象


```js
let  s = new  String("hello");

typeof  s        // object
typrof  "hello"  // string
s == "hello"     // false
```


4. 不要使用 `==` 运算符

首先要知道， `==` 存在隐式类型转换， `===` 不存在隐式类型转换。

```js
null == undefined;  // true
null === undefined; // false
```


5. 适当使用 || 和 &&

```js

function foo(x, y) {
    x = x || 0;
    y = y || 0;
}

let foo = null;

// bad
let name = foo.name;                    // 报错

// good
let name = foo && foo.name;             // undefinde

// bast
let name = (foo && foo.name) || "bar";  // bar

```

  

6. 对于编码

为了在计算机中显示世界上所有的文字，为每一个字符分配了一个唯一整数，介于 0 ~ 1114111 之间，这就是 `Unicode。`

`Unicode` 编码中，16 位二进制数表示一个字符，JavaScript 字符串也是 16 位的二进制数，这就是变量可以取中文名的原因。

```
"h"
0x0068
```

7. 闭包

关于闭包记住三点：


（1） JavaScript 允许访问当前函数以外的变量；


```js
function foo() {
    let count = 2;

    function add(n) {
        return n + count;
    }
    return add(2);
}

foo(); // 4
```

（2） 即使已经运行结束，可以保存局部变量，在外部可以访问。

```js
function foo(init) {
    let count = init;

    function add(n) {
        count += n;
        return n + count;
    }
    return add;
}

let bar = foo(5);
console.log(bar(2)); // 7
console.log(bar(2)); // 9
console.log(bar(2)); // 11

```

  

（3） 可更新外部变量的值

```js
function foo() {
    let num = undefined;
    return {
        set: (val) => (num = val),
        get: () => count,
    };
}
let bar = foo(5);
console.log(bar.get());    // undefined
console.log(bar.set(123)); // 123
console.log(bar.get());    // 123
```

8. 不要修改 `arguments` 对象

```js
function foo(name, method) {
    let shift = [].shift
    shift.call(arguments)
    shift.call(arguments)
    console.log(name, method) // 1 2
}

foo('bar', 'add', 1, 2)
```

这是由于 `name` 保存的是 `arguments[0]`，我们修改了 `arguments[0]` 之后， `name` 也跟随变化，它是 `arguments[0]` 的引用。


参考资料：
- [Effective JavaScript](https://book.douban.com/subject/10494340/)