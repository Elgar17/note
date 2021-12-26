# map

## 1. 概述

`map` 是 `key-value` 形式的存储结构，一个键（key）对应一个值（value）。

```go
list := map[string]int{"Tom": 16, "Jerry": 15 }
```

上面实例中定义了一个 `list` 的 `map` 结构。

声明 `map` 结构时，先使用 `map` 关键字，之后中括号内部定义键的类型，这里键的类型是 `string`，之后定义值的类型，这里定义了 `int` 类型，最后是初始化，初始化了两个数据。

## 2. 使用

（1）创建
引用类型的数据声明时，不会分配内存空间，需要借助 make 函数，分配内存。

```go
myMap := make(map[int]int)
```

（2）添加元素

```go
myMap["Tom"] = 15
myMap["Jerry"] = 14
```

（3）访问

```go
myMap["Tom"] // 15
```

如果我们访问的值不存在，返回该类型的零值。

```go
myMap["Allex"] // 0
```

`myMap` 中并没有存入 Allex，键值类型是 int，所以返回 0。如果是 string 类型，会返回 ""。

## 3. 遍历

可借助 range 来遍历 map。

```go
for key, val := range myMap {
    fmt.Println(key, val)
}
// Jerry 14
// Tom 15
```

每次循环时，key 和 val 的值是 myMap 的一个键和值，这个 for 循环会循环两次，因为 myMap 的长度为 2。


<comment-comment/> 
