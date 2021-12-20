# 结构体的嵌套

## 1. 概述

组合是结构体的嵌套。

```go
type score struct {
    Math int
    English int
}

type student struct {
    Name string
    Age  int
    Score score
}
```

上面的例子中，`studen` 有一个 `score` 成员，一个结构体。

```go
s := score{56, 45}
s1 := student{"Jerry", 15, s}

fmt.Println(s1) // {Jerry 15 {56 45}}
```

如果我需要访问 `s1` 中的数学分数，可以使用一下方式访问。

```go
s1.Score.Math // 56
```

## 2. 方法转发

如果 `score` 结构体有一个方法，下面情况下不会在 student 的实例中使用。

```go
func (s score) prtnMath()  {
    fmt.Println(s.Math)
}
```

下面这种情况会报错。

```go
s := score{56, 45}
s1 := student{"Jerry", 15, s}

s1.Score.prtnMath() // 报错
```

我们可以修改一部分程序，可以将 `studen` 结构体继承 `score` 结构体的方法。

```go
type student struct {
    Name string
    Age  int
    score
}
```

`student` 中只写了 `score`，修改了以下，在使用方法就可以，这就是方法的继承。

```go
s1.score.prtnMath() // 56
```

 
 <comment-comment/> 
 