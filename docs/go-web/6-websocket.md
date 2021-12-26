# websocket

## 概述

websocket 是在 http 协议的基础上扩展的协议，使用 websocket 协议，当服务端数据更新时，服务器将消息主动推送给用户，这个过程，用户不需要向服务器请求。

websocket 可以传输普通字符数据和二进制数据。

Go 语言提供了 websocket 的库，用户不需要自己封装，可以直接库安装和使用。

## 快速开始

websocket 的包需要单独下载，不像 http 库，Go 语言没有添加到官方库中。

```go
go get github.com/gorilla/websocket
```

先初始化一个 http 接口，因为 websocket 是 http 请求的升级。

```go
func main() {
    http.HandleFunc("/", WebSocket)
    http.ListenAndServe("localhost:8080", nil)
}
```

我们初始化了一个 http 请求，接下来编写 `WebSocket` 方法，使用前引入包。

```go
import (
    "net/http"
    "github.com/gorilla/websocket"
)
```

```go
var (
    upgrader = websocket.Upgrader{
        // 允许跨域
        CheckOrigin: func(r *http.Request) bool { return true },
    }
)
```

先使用 `Upgrader` 进行了从初始化，比如 `CheckOrigin` 是跨域规则，这里默认返回 `true`，所有域名都可以连接。

```go
func WebSocket(w http.ResponseWriter, r *http.Request) {
    var (
        conn    *websocket.Conn
        err     error
        data    []byte
    )

    if conn, err = upgrader.Upgrade(w, r, nil); err != nil {
        return
    }

    // websocket.Conn
    for {
        // Text, Binary
        if _, data, err = conn.ReadMessage(); err != nil {
            goto ERR
        }
        if err = conn.WriteMessage(websocket.TextMessage, data); err!= nil{
            goto ERR
        }
    }

    ERR:
        conn.Close() // 如果发生错误
}
```

上面函数中 `Upgrade` 是升级 websocekt 的方法，返回两个值，第一个是，当前连的用户集合，比如这个请求中，当五个用户连接时，获取的就是五个用户的集合，第二个参数是错误。

使用 `for` 循环，让连接一直监听用户发来的消息，使用 `ReadMessage` 方法读取了用户发来的消息，之后使用 `WriteMessage` 方法，将用户用户发来的数据，返回给用户。

<comment-comment/> 
