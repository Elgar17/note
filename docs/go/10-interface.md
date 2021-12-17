# interface

Inteface 叫接口，Go 语言中的一个数据类型，它定义结构体中的共性方法。

几个例子，如果两个结构体有共同的一个 Say 方法，那可可以定义一个 Say 的接口，这两个结构体继承这个方法就行，这样做的目的是面向对象编程。

```go
type Sayer interface {
    Say()
}
```

上面这例子，定义了一个 Sayer 的接口。

```go
type sheep struce {}
type dog struce {}
```

这里定义了两个结构体，下面我们让这两个结构体继承 Sayer 接口。

```go
// sheep 实现了接口 Sayer
func (s sheep) Say() {
    fmt.Println("maaa")
}
// dog 实现了接口 Sayer
func (d dog) Say() {
    fmt.Println("wang")
}
```

使用时，直接 `.方法名` 使用。

```go
d := dog{}
d.Say() // wang
```
