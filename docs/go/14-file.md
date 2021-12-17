# 文件操作

## 概述

读写文件是编程语言中常见的功能，这章节我们介绍使用 GO 语言读写文件。

读写文件是一一读取文件中的字符的，会把这些放到内存中，这会导致一个问题，如果文件内容过，可能溢出内存，为了解决这个问题引入了流的概念。

## 读取文件

这里使用 `io/ioutil`、`os` 包进行文件的读取和显示。

```go
// 打开文件
file, _ := os.Open("./notes.txt")
// 读取全部内容
byte, _ := ioutil.ReadAll(file)

fmt.Println(string(byte)) // Hello Go!
```

## 写入文件

这里使用 `io/ioutil` 包进行文件的写入。

```go
content := []byte("Hello\nGo!")
// 将字节数组写入文件中
err := ioutil.WriteFile("test.txt", content, 0644)
if err != nil {
    panic(err)
}
```

如果有这个文件，会覆盖之前的文件，没有这个文件会创建一个文件。
