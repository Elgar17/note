# request

## 概述

```text
   ┌────────┐   request      ┌────────┐
   │        │ ─────────────► │        │
   │ client │                │ server │
   │        │ ◄───────────── │        │
   └────────┘   responce     └────────┘
```

request 也叫请求，浏览器向服务器发送的消息，浏览器想获取一个数据，会向服务其发送一个请求。

```go
http.HandleFunc("/", func(w http.ResponseWriter,r *http.Request){
    w.Write([]byte("hello go"))
})
http.ListenAndServe("localhost:8080",nil)
```

上面的例子是之前介绍过的，下面我们具体分析， `HandleFunc` 方法有两个参数，第一个参数是响应（responce），第二个参数是请求（request），下面介绍请求中的结构体的各项。

- Method：请求使用的方法，比如，GET，POST等。
- URL：请求地址。
- Header：http 请求头，包含 accept-encoding 等信息。
- Body: 请求体，注意 GET 方法没有请求体。

## URL

GET 请求没有 Body，参数放在 URL 中，POST 请求中也可以放到参数中，下面介绍解析 URL 中的请求数据的方法。

```go
func(w http.ResponseWriter,r *http.Request){
    fmt.Println(r.URL.RawQuery) // name=tom
    fmt.Println(r.URL.Host) // " "
    fmt.Println(r.URL.Path) // /12
    w.Write([]byte("hello GO")
}
```

上面例子是 `HandleFunc` 函数的第二个参数，浏览器访问 `localhost:8080/get?name=tom` 时，获取书的结果是 `name=tom`，`Host` 时域名，这里 `localhost` 默认显示空，`Path` 表示路径。

`r.URL.RawQuery` 中的参数直接获取的，并没有解析，我们可使用 `net/url` 包中的 `ParseQuery` 方法解析。

```go
// 访问 localhost:8080/get?name=tom&age=15
str := r.URL.RawQuery
query, err := url.ParseQuery(str)
if(err == nil){
    fmt.Println(query) // map[age:[15] name:[tom]]
    fmt.Println(query.Get("name")) // tom
}
```

`ParseQuery` 方法返回一个 map 类型包含解析完成后的结果。map 中包含 Get，Set，Add 等方法，Set 是覆盖原始值，Add 是追加到后面，使用跟 Get 类似。

## 请求头

Header 是 http 头部信息，也是 map 结构，遍历后可得到所有项。

```go
for key := range r.Header {
    fmt.Println(key, r.Header[key])
}
```

请求一个 GET 请求，结果如下，我看到，如果有多个值，返回切片。

```text
User-Agent [PostmanRuntime/7.28.0]
Accept [*/*]
Postman-Token [1ec09123-33d8-4d74-9fd3-d6f3a93e4547]
Accept-Encoding [gzip, deflate, br]
Connection [keep-alive]
Content-Length [159]
...
```

## 请求体

POST 请求中的数据通常放在请求体（Body）中。

（1）获取请求体的数据

使用 request 中的 ContentLength 字段获取 Body 的长度，Body 是二进制数组。

```go
len := r.ContentLength // 获取 len
byts := make([]byte, len) // 创建 byte 数组
r.Body.Read(byts) // 读取 Body 中的数据
fmt.Println(string(byts))
```

下面是获取的数据。

```text
Content-Disposition: form-data; name="name"

Tom
```

（2）解析 Form/PostForm

GO 语言可以直接解析 Form 表单格式的数据。

```go
func(w http.ResponseWriter,r *http.Request){
    fmt.Println(r.PostForm) // POST 形式
    fmt.Println(r.Form) // GET 形式
    w.Write([]byte("hello GO")
}
```

启动项目后，浏览器访问 `http://127.0.0.1:8080/?name=tom` 可以获取以下结果。

```text
map[name:[tom]]
```

POST 方法也跟 GET 方法一样。

 
 <comment-comment/> 
 