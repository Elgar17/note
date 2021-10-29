# 函数

## 1. 简介

函数是一个可以重复执行的代码块，接受不同的输入，完成相应的操作。

下面例子是一个简单的函数，函数像一个数学方程，给它一个输入，会得到一个输出，也可以没有输出。

```go
func add(x int, y int) int {
    return x + y
}
```

上面是一个 `add` 函数的声明，下面是使用了 `add` 函数。

```go
sum := add(1,2)
// sum 等于 3 
```

函数以 `func` 开头，后面跟随函数名、参数、返回值、实现逻辑，下面具体介绍。

（1）函数名。每个函数都有自己的名字，使用时，用字调用，上面例子中 `add` 是一个函数名。

（2）参数。函数名之后括号里，函数接受的变量，需要填入类型和变量名，上面的例子中，`add` 函数接受了两个整型参数 `x` 和 `y`。

（3）返回类型。函数返回值的类型。上面例子中参数后面（小括号后面）的 `int` 是 `add` 函数的返回值类型，运行函数 `add` 后，`add` 会返回一个 `int` 类型。

（4）实现。函数内部（大括号内）完成的一些操作，在上面的例子中，函数内部我们将参数 `x` 相加了。

（5）返回值。执行函数后输出的结果，函数内部 `return` 语句后的变量的结果，上面例子中 `add` 函数返回了 `x` 和 `y` 的和，也就是 3。

函数也可以没有返回值，没有返回值时，不用写返回类型。GO 语言入口函数 `mian` 就是没有返回值的函数。

```go
func main() {
    // ...
}
```

函数可以自己调用自己，也叫递归函数。使用递归函数可以解决看起来很难的一些问题，比如求一个数的阶乘。

```go
func Factorial(n int) int {
    if n == 1 {
        return 1
    } else {
        return n * Factorial(n-1)
    }
}
```

## 2. 参数