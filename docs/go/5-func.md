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

函数也可以没有返回值，没有返回值时，不用写返回类型。Go 语言入口函数 `mian` 就是没有返回值的函数。

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

```go
func twoSum(x int, y int)
```

上面的 `twoSum` 函数定义了两个参数，用户使用函数时，需要传入两个 `int` 型变量。

```go
twoSum(1, 2) // 正确
twoSum("1", 2) // 错误：必须是 int 类型
```

可变参数，比如说一个函数传入的参数不确定，那么可以在类型前加 `...` 表示可以接受多个参数。

```go
func sum(x ...int) int {
    fmt.Println(x) // [1 2 3]
    res := 0
    for _, val := range x {
        res += val
    }
    return res
}
```

`sum` 函数可以接受很多参数，在函数内部可以获取到一个 `x` 的切片，这个切片包含用户输入的所有参数。

```go
sum(1, 2) // 正确
sum(1, 2, 3) // 正确
sum(1, 2, 3, 4) // 正确
sum(1, 2, 3, "3") // 错误
```

要注意的是，这些参数的类型必须相同。

我们有这样一个请求，用户输入一些参数，我们返回这些参数的和,那么可以这样写。

```go
func sum(x ...int) int {
    res := 0
    for _, val := range x {
        res += val
    }
    return res
}
```

可变参数通常写在最后，这样前面可以写其他类型的参数。

```go
func sum(s string, x ...int) // 正确

func sum(x ...int, s string) 
// 错误：可变参数不能在前面
```

## 3. 返回值

返回值是函数运行完成后，返回的结果。

返回值可以是任意类型，返回写在 `return` 语句的后面，`return` 语句一般在函数的最后，也可以写在其他位置。

返回值的类型写在参数后面。

```go
func add(x int) int {
    return x + 1
}
```

add 函数运行后，返回一个 `int` 类型的值。

```go
add(2) // 3
```

函数也可以返回多个值，

```go
func plus_one(x int, y int) (int, int) {
    x = x + 1
    y = y + 1
    return x, y
}
```

`plus_one` 函数接受两个 `int` 变量，返回两个 `int` 变量。

```go
one, two := plus_one(2, 3) 
// one 的值 3
// two 的值 4
```

这里使用两个变量接受了函数返回的两个变量。

## 4. 立即执行函数

立即执行函数是，声明函数同时执行，因为没有函数名，也叫匿名函数。

```go
func main() {
    func(){
        fmt.Println("hi") // hi
    }()
}
```

也可以传入参数

```go
func main() {
    func(i int){
        fmt.Println(i) // 1
    }(1)
}
```

## 5. defer

defer 在英文叫延迟的意思，功能是让函数延迟执行。

```go
fmt.Println("start")
defer fmt.Println(1)
defer fmt.Println(2)
defer fmt.Println(3)
fmt.Println("end")
```

执行结果是如下，添加 `defer` 语句的函数延迟执行了。

```text
start
end
3
2
1
```

`defer` 后面的语句会添加到一个栈中，先进的后执行，从栈的最顶部开始执行。
