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

## struct 转换其他类型

struct 可以转化为其他类型，可以转为以下类型。

- JSON
- 二进制数组

（1）struct 转 JSON

`encoding/json` 包中提供了 struct 转 JSON 函数，使用前需要引入。

```go
import "encoding/json"
```

使用 `json` 中的 `Marshal` 函数完成转换，该函数返回两个变量。

```go
s1 := student{"Jerry", 15}
data, e := json.Marshal(s1)

if e == nil {
    fmt.Println(string(data))
    // {"name":"Jerry","age":15}
}
```
