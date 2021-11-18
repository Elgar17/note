# GO 语言

GO 语言开源于 2009 年，为了解决分布式开发服务的问题，很适合作为后端语言，很多大型互联网公司正在用 GO 代替 Java。

## 目录

1. [win10 环境搭建](./install.md)
1. [基本数据类型](./1-base.md)
1. [运算符与控制语句](./2-operator-and-loops.md)
1. [数组](./3-array.md)
1. [指针](./4-slice.md)
1. [函数](./5-func.md)
1. [指针](./6-point.md)
1. [map 类型](./7-map.md)
1. [结构体类型](./8-struct.md)
1. [结构体的组合](./9-compsition.md)
1. [接口](./10-interface.md)
1. [错误处理](./11-erorr.md)

## 特点

简单高效，被称为 21 世纪的 C 语言。

[标准中文文档](https://studygolang.com/pkgdoc)

## 基本结构

```go
// 程序必有的包
package main

// I/O 模块
import "fmt"

// 程序开始的函数
func main() {
    fmt.Println("Hello, World!") // 输出
}
```

## 常用命令

```bash
# 编译，生成可执行文件
go build hello.go

# 查看 go 环境变量
go env

# 运行
go run hello.go
```
