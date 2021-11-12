# 结构体 struct

## 1. 简介

结构体是将多个数据组成一个整体的结构。

```go
type student struct {
    name string
    age int
}
```

使用 `type` 关键字声明一个 struct 结构，名字叫 `student`, 这个结构包含两个属性，名字（name）和年龄（age）。

```go
s1 := student{"Jerry", 15}
```

上面实例中，初始化了一个 `s1` 结构体，基于 `student`，初始化了属性，`Jerry` 赋给属性 `name`，15 赋给属性 `age`。

```go
s1.name // Jerry
s1.age // 15
```

访问结构体的属性时，用名字加 `.` 加属性名进行访问，也可以直接打印结构体。

```go
fmt.Println(s1)
// {Jerry 15}
```

结构体也可以作为函数的参数，下面实例中，结构体作为函数的参数。

```go
func printStu(s student) {
    fmt.Println(s.name)
    fmt.Println(s.age)
}
```

也可以作为函数的返回值。

```go
func printStu(s student) {
    fmt.Println(s.name)
    fmt.Println(s.age)
}
```

## struct 的复制

struct 结构算是基础类型，我们将一个 struct 赋值给另一个 struct 时，会产生独立的变量，两个 struct 互不影响。

```go
s1 := student{"Jerry", 15}

s2 := s1
s1.Name = "Tom"

fmt.Println(s1.Name) // Jerry
fmt.Println(s2.Name) // Tom
```

struct 作为函数的参数传入，函数内部获取复制的另一份。

## struct 指针

## struct 的嵌套

## struct 转换其他类型

struct 可以转化为其他类型，可以转为以下类型。

- JSON
- 二进制数组

（1）struct 转 JSON

`encoding/json` 包中提供了 struct 转 JSON 函数，使用前需要引入。

```go
import "encoding/json"
```

使用 `json` 中的 `Marshal` 函数完成转换，该函数返回两个变量，第一个是数据，二进制数组，第二个变量是发生的错误，转换成功，返回 `nil`。

```go
s1 := student{"Jerry", 15}
bytes, e := json.Marshal(s1)

if e == nil {
    fmt.Println(string(bytes))
    // {"name":"Jerry","age":15}
}
```

## 方法

方法也是一个函数，跟函数的区别是，方法可以跟结构体关联。

```go
func (s student) printStu(){
    fmt.Println(s)
}
```

上面实例是给 `student` 结构体绑定了一个方法，`func` 关键字后面填写绑定的结构体。

```go
s1 := student{"Jerry", 15}

s1.printStu() // {Jerry 15}
```

使用是结构体 `.` 方法名来访问。

在方法中可以访问结构体的每个成员，下面实例中分别打印了结构体的成员。

```go
func (s student) printStu(){
    fmt.Println(s.Name)
    fmt.Println(s.Age)
}
```

方法也可以有参数和返回值，这些跟普通函数一样。

## go 语言中的 class

```go

```
