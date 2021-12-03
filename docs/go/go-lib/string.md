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

上面的例子是将字符串分成
