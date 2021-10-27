# 运算符与控制语句

## 1. 运算符



## 2. 控制语句

**（1）if else**

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

**（2）for**

```go
for i := 0; i < 3; i++ {
    fmt.Println(i)
}
```