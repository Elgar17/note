# 网络编程

## 概述

GO 语言提供了 http 包，已经实现了 http 请求的处理逻辑。

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
