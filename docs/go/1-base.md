# 基本数据类型

数据类型是每个语言必有的内容，而且每个语言的数据类型大致相同。

## 1. 布尔

布尔类型，跟其他语言相同，可取 `ture` 和 `false`。

```go
var b bool = true
```

每个变量前面都包含一个 `var`。

## 2. 数字

按照类型分为整型和浮点型。

（1） 整型

```go
var num int = 16
// 或
n := 123 // 将 n 自动推导为 int
// 或
var n = 1 // 将 n 自动推导为 int
```

int 类型的数据会占用长度不确定，32 为电脑中占 4 字节，64 为电脑中占 8 字节。

```go
// 引入多个模块的写法
import (
    "fmt"
    "unsafe"
)

fmt.Println(unsafe.Sizeof(b)) // 4 或 8
```

为了与其他语言统一类型，还有一些整数类型，下面具体介绍。

这是整数简单的应用，正数可细分为以下几个，使用都一样，存储的大小不同。

- int8：有符号整数，一个字节，可存储 -128 ~ 127(-2^7 ~ 2^7 - 1)
- int16: 有符号整数，两个字节，可存储 -2^15 ~ 2^15 - 1
- int32: 有符号整数，四个字节，可存储 -2^31 ~ 2^31 - 1
- int64: 有符号整数，八个字节，可存储 -2^63 ~ 2^63 - 1
- uint8：无符号整数，一个字节，可存储 0 ~ 255(0 ~ 2^8 - 1)
- uint16：无符号整数，一个字节，可存储 0 ~ 2^16 - 1
- uint32：无符号整数，一个字节，可存储 0 ~ 2^32 - 1
- uint64：无符号整数，一个字节，可存储 0 ~ 2^64 - 1

可以使用 `Sizeof` 方法查看大小。

```go
import (
    "fmt"
    "math"
)

fmt.Println("int8:", math.MinInt8, "~", math.MaxInt8) 
// int8-128 ~ 127
```

如果赋值的数溢出会报错：

```go
var num int8 = 166 // 报错
```

（2）浮点型

go 语言中没有 `double`，只有 `float`.

- float32：32位浮点型数
- float64：64位浮点型数

```go
var f float32 = 3.14
var f1 float64 = 3.1415
```

（3）其他类型

- byte：uint8 类似
- rune：int32 类似
- uint：32 或 64 位
- int：与 uint 一样大小
- uintptr：无符号整型，用于存放一个指针

（3）iota

iota 是 GO 语言中的一个计数器。

```go
const (
    n1 = iota // 0
    n2        // 1
    n3        // 2
    n4        // 3
)
```

这里会介绍一些常用技巧。

```go
var i, j int
i, j = 2, 3
fmt.Println(i, j) // 2 3
```

## 3. 字符串

字符串就是一串固定长度的字符连接起来的字符序列。Go 的字符串是由单个字节连接起来的。Go 语言的字符串的字节使用 UTF-8 编码标识 Unicode 文本。

```go
var s string = "Hello GO!" // 显示定义
// 或
var s = "Hello GO!" // 隐式定义
// 或
s := "Hello GO!" 
```

原始字符串，有些字符串中包含计算机指令，比如 `\n`，在字符串中有 `\n` 是换行。

```go
fmt.Println("hello \n GO!")
```

显示结果如下， `\n` 换成了换行。

```text
hello 
 GO!
```

如果我们想显示 `\n` 把字符串使用 `` 括起来，这个叫原始字符串。

```go
fmt.Println(`hello \n GO!`)
// hello \n GO!
```

字符串的每个位置对应一个索引，像数组一样获取每一个字符，打印字符的 ASCII 码。

```go
s := "hello"
fmt.Printf("%c", s[1]) // e
```

rune 是 int32 的别名，可以存放 utf-8 中的所有字符,字符串使用单引号（\`） 阔的，默认推断为 `rune` 类型。

```go
s := 'A' // s 的类型是 rune

s := 'ب'
fmt.Printf("%c", s) // ب
```

字符串可以加减操作。

```go
s := 'a'
s = s + 1
fmt.Printf("%c",s) // b
```

字符串和字符串可以相加，不过多个字符串和数字不能相加。

```go
s := "hello" + " Go"
// hello Go

s := "hello" + 10
// 报错
```

byte 是 int8 的别名.

字符串的长度可以使用，内置函数 `len` 来获取。

```go
s := "hello"
fmt.Println(len(s)) // 5
```

需要注意的是 `len` 函数按照字节长度计算的。

```go
s := "ب"
fmt.Println(len(s)) // 2
```

字符串可以用 `range` 进行遍历.

```go
s := "hello Ǵo"
for i, c := range s {
    fmt.Printf("%v %c ", i, c)
}
// 0 h 1 e 2 l 3 l 4 o 5   6 Ǵ 8 o
```

## 4. nil

go 语言中 `nil` 表示零值或无。

go 语言中声明了一个引用类型，比如，数组，map等。没有赋给初始值的时候，就会 `nil`。

```go
var s string
s == nil // true
```

## 5. 派生类

由于派生类内容很多，在这里不会详细介绍，之后具体介绍每一数据类型。

包括：

- 指针类型（Pointer）
- 数组类型
- 结构化类型（struct）
- Channel 类型
- 函数类型
- 切片类型
- 接口类型（interface）
- Map 类型
