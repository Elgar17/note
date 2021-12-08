# 网络编程

## 概述

Go 语言提供了 http 包，已经实现了 http 请求的处理逻辑，所以使用 Go 语言编写 Web 服务很方便。

```go
package main

import "net/http"

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter,r *http.Request){
        w.Write([]byte("hello go"))
    })
    http.ListenAndServe("localhost:8080",nil)
}
```

`http` 中使用 `HandleFunc` 方法设置一个路由，方法有两个参数，参数一是路由的地址，路由二是处理的具体逻辑。

最后启动这服务，使用 `ListenAndServe` 方法，有两个参数，参数一，启动服务的地址，参数二是启动成功后执行的函数。
