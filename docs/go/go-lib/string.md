# strings

## 概述

strings 是提供了操作字符串相关的操作。

## Split

拆分字符串，按照某个字符，将字符串拆分成多个字符串切片。

```go
str := "hello world"
strArr := strings.Split(str, " ")
// [hello world]
```

上面的例子是，将字符串按照空格分成切片，第一个参数是操作的字符串，第二个参数是分割的字符，如果为空，将字符一个一个进行拆解。

## Trim

移除字符串首尾字符，接受两个参数，参数一是操作的字符串，参数二是，前后移除的字符。

如果需要去掉单词前后的空格，可以传入一个空格。

```go
str := " hello world "
strArr := strings.Trim(str, " ")
fmt.Println(strArr) // "hello world"
```
