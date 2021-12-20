# response

## 概述

response（响应）是服务器对浏览器请求的回复。

响应包括三个字段：

- Header，返回的请求头，map 类型
- Write，http 的响应内容，[]byte 类型
- WriteHeader，同时发送 Header 和 内容，接受一个状态码

## 返回 JSON 数据

```go
user := &User{
    Name: "tom",
    Age:  12,
}
w.Header().Set("Content-Type", "application/json") // 设置请求头
byteJson, _ := json.Marshal(&user)  // 转为 JSON
w.WriteHeader(200) // 状态码
w.Write(byteJson)
```

 
 <comment-comment/> 
 