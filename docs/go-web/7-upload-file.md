# 上传文件

## 概述

上传文件是日常开发中常见的需求，下面介绍上传文件的方法。

## 快速开始

先快速启动一个 web 接口，

```go
func main() {
    http.HandleFunc("/uplode", uplode)
    http.ListenAndServe("localhost:8080", nil)
}
```

下面实现 upload 方法。

```go
func uplode(w http.ResponseWriter, r *http.Request) {
    if r.Method != "POST" {
        return
    }
    r.ParseForm()
    imgFile, _, err := r.FormFile("userfile")
    if err != nil {
        return
    }
    defer imgFile.Close()
}
```
