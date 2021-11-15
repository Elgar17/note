# response

## 概述

response（响应）是服务器对浏览器请求的回复。

响应包括三个字段：

- Header，返回的请求头，map 类型
- Write，http 的响应内容，[]byte 类型
- WriteHeader，同时发送 Header 和 内容，接受一个状态码

可以直接使用 Write 返回字节数组。

```go
w.Write([]byte("Hello Go!"))
```

也可以返回 JSON 数据，具体使用如下，返回 JSON 数据是注意要设置Header，设置Header 告诉浏览器，当前发送的数据是JSON 格式的。

```go
user := &User{
    Name: "tom",
    Age:  12,
}
// 设置 Header
w.Header().Set("Content-Type", "application/json")
byteJson, _ := json.Marshal(&user) // 结构体转 JSON
w.Write(byteJson)
```
