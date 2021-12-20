# 错误处理

Go 语言中函数和方法可以有多个返回值，通常一个函数和方法中的最后的返回值是错误。

```go
files, err := ioutil.ReadDir(".")
if err != nil{
    // 这里处理错误
}
```

上面例子是读取当前目录，使用 `err` 接受发生的错误，没有错误返回 `nil`。

 
 <comment-comment/> 
 