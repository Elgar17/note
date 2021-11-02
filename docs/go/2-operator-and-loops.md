# 运算符与控制语句

## 1. 运算符

运算符跟其他语言类似，常见下面是常见的运算符。

- `+`: 加两个数，合并两个字符串
- `-`: 减号运算符

## 2. 控制语句

（1）if else

直接在 if 后面写条件，不用写括号，但是执行语句的括号不能省略。

```go
// 不能省略括号
if false {
    fmt.Println("true")
} else {
    fmt.Println("false")
}

// 报错
if false 
    fmt.Println("true")
```

（2）for

基本使用，`for` 循环可以实现所有循环流程，不需要使用 `while`。

```go
for i := 0; i < 3; i++ {
    fmt.Println(i)
}
```

死循环

```go
for {
    // 语句
}
```

## 3. 类型转换

不同类型之间不存在自动转换，用户需要自己转换。

（1） int，float

`int` 与 `float` 类型的相互转换转换

```go
n := 106
f := float64(n)

f1 := 106.5
n1 := int(f1) // 106
```

`float` 转 `int` 类型是，小数点会忽略，不会四舍五入。

（2）string

```go
var s rune = 1576
fmt.Println(string(s)) // ب
```

（3）bool

## 4. 练习

使用以上学的语句实现 9*9 乘法表。

```go
for i := 1; i < 10; i++ {
    for j := 1; j < i+1; j++ {
        fmt.Print(j, "*", i, "=", i*j, " ")
    }
    fmt.Println(" ")
}
```
