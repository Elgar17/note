# 错误处理

Go 语言中函数和方法可以有多个返回值，通常一个函数和方法中的最后的返回值是错误。

错误处理是通过返回 error 类型的值来完成的。错误处理的代码通常有以下几种方式：

1. 使用 if 语句进行判断

```go
if err != nil {
    // 错误处理代码
}
```

这种方式是最常见的一种错误处理方式，当发生错误时，程序会直接进入错误处理代码段。

2. 使用 panic 函数抛出异常

```go
if err != nil {
    panic(err)
}
```

在出现致命错误时，可以使用 panic 函数抛出一个异常，这会中断程序的执行，并在异常被抛出的位置打印出错误信息，与此同时也会执行 defer 语句。

3. 使用 defer 语句处理一些清理工作

```go
defer func() {
    if err != nil {
        // 错误处理代码
    }
}()

// 业务代码
```

当使用 defer 语句定义一些需要在函数退出时执行的代码时，可以在 defer 语句中判断 error 是否为空，如果不为空，则进行错误处理。

4. 使用自定义错误类型

```go
type customError struct {
    code int
    msg  string
}

func (e customError) Error() string {
    return fmt.Sprintf("error: code=%d, msg=%s", e.code, e.msg)
}

func foo() error {
    return customError{code: 100, msg: "custom error message"}
}

func main() {
    err := foo()
    if err != nil {
        fmt.Println(err)
    }
}
```

通过实现 `error` 接口可以自定义错误类型，并且在错误发生时通过返回该类型的对象来进行错误处理。

总的来说，Go 语言通过返回 `error` 类型的值来进行错误处理，结合 if 语句、panic 函数、defer 语句以及自定义错误类型等方式，可以有效地处理错误。

<comment-comment/>
