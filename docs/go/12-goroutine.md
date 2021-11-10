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
	time.Sleep(2 * time.Second) // 等待三秒
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
    // 这是让 main 函数等待两秒
	time.Sleep(4 * time.Second)
}

func sync() {
	time.Sleep(2 * time.Second) // 等待三秒
	fmt.Println("sync func")
}
// 运行结果：两秒后同时打印两次 sync func
```

函数前添加 `go` 关键字之后，函数就变成了异步函数，也就是同时运行，结果是，两秒后同时打印 "sync func"。


## 2. 传递参数

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

上面函数运行了三次，每次传入 `i` 值，注意没有顺序。

## 3. channel 通道

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