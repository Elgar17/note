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

## 3. 练习

使用以上学的语句实现 9*9 乘法表。

```go
for i := 1; i < 10; i++ {
    for j := 1; j < i+1; j++ {
        fmt.Print(j, "*", i, "=", i*j, " ")
    }
    fmt.Println(" ")
}
```
