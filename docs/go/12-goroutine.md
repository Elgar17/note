# goroutine

## 1. 概述

goroutine 是同时处理多任务用的，在其他语言中线程类似，但是 goroutine 与他们不太一样，他的效率很高。

goroutine 写并发很简单，在任何代码前添加 `go` 关键字就可以创建。

```go
func main() {
    sync()
    sync()
}

func sync() {
    time.Sleep(2 * time.Second) // 等待 2 秒
    fmt.Println("sync func")
}
// 运行结果：间隔两秒打印两次 sync func
```

上面例子中 `sync` 函数执行两次，函数中需要等待 2s，整个执行过程是这样的，第一次 `sync` 函数两秒后打印 "sync func"，执行第二个 `sync` 函数两秒后打印 "sync func"，总共四秒。

有没有什么办法让两个函数同时执行呢，答案是有的。

```go
func main() {
    go sync()
    go sync()
    // 让 main 函数等待 4 秒
    time.Sleep(4 * time.Second)
}

func sync() {
    time.Sleep(2 * time.Second) // 等待 2 秒
    fmt.Println("sync func")
}
// 运行结果：两秒后同时打印两次 sync func
```

函数前添加 `go` 关键字之后，函数就变成了异步函数，也就是同时运行，结果是，两秒后同时打印 "sync func"。

这里要注意的是，主线程不会等待协程，所以在 `main` 函数的最后添加了延时 4s。

在真实项目不能这样做的，不过 Go 语言提供了解决办法，WaitGroup 可以解决这个问题。

## 2. WaitGroup

WaitGroup 是可以同步协程的方法，`sync` 包提供的，使用前需要引入 `sync`。

```go
var wg = sync.WaitGroup{}

func main() {
    wg.Add(1)
    go syncfunc("异步线程")
    println("主线程")
    wg.Wait()
    println("主线程结束")
}

func syncfunc(s string) {
    println(s)
    wg.Done()
}
```

运行结果:

```text
主线程
异步线程
主线程结束
```

上面实例中，使用 `sync.WaitGroup` 初始化了一个实例 `wg`，主线程中我使用 `Add` 方法添加了一个线程，也就是告诉主线程，有一个其他线程，之后执行异步线程和主线程，直到遇到 `Wait` 方法，`Wait` 方法会等待其他线程的执行完成，当 `Done` 方法执行时，说明异步代码执行完成， 相当于 `wg.Add(-1)`。

```go
func main() {
    wg.Add(3)
    for i := 0; i < 3; i++ {
        go syncfunc("异步线程")
    }
    println("wait 前主线程")
    wg.Wait()
    println("主线程结束")
}

func syncfunc(s string) {
    println(s)
    time.Sleep(1 * time.Second)
    wg.Done()
}
```

运行结果：

```text
wait 前主线程
异步线程
异步线程
异步线程
主线程结束
```

`wg` 中添加的函数都执行完成后，`Wait` 方法之后的代码才执行。

## 3. 传递参数

异步函数的参数也跟普通函数一样传入，

```go
func main() {
    for i := 0; i < 3; i++{
        go sync(i)
    }
    time.Sleep(4 * time.Second)
}

func sync(i int) {
    time.Sleep(2 * time.Second) // 等待三秒
    fmt.Println("sync func", i)
}
// sync func 1
// sync func 0
// sync func 2
```

上面函数运行了三次，每次传入 `i` 的值，注意没有顺序。

## 4. channel 通道

通过（channel）用于多个 `goroutine` 之间安全传值。

使用 `make` 函数创建通道，并制定传输数据据的类型。

```go
c := make(chan int)
```

数据的发送和接受

发送

```go
c <- 99
```

从事通道接受值

```go
c := <- 99
```

<comment-comment/> 
