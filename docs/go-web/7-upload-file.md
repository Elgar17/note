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

大概分几部分：

- 获取前端发来的文件
- 在本都创建文件
- 将文件保存到本地

```go
func upload(w http.ResponseWriter, r *http.Request) {
    // 获取文件
    srcfile, head, err := r.FormFile("file")
    if err != nil {
        log.Println(err.Error())
        util.RespFild(w, err.Error())
        return
    }

    // 创建文件
    suffix := ".png"
    ofilename := head.Filename
    temp := strings.Split(ofilename, ".")
    if len(temp) > 0 {
        suffix = "." + temp[len(temp)-1]
    }
    // 如果置定类型
    filetype := r.FormValue("filetype")
    if len(filetype) > 0 {
        suffix = filetype
    }
    // 生成文件名
    filename := fmt.Sprintf("%d%d%s",
        time.Now().Unix(),
        rand.Int31(),
        suffix)

    dstfile, err := os.Create("./mnt/" + filename)
    if err != nil {
        log.Println(err.Error())
        return
    }
    // 复制文件
    _, err = io.Copy(dstfile, srcfile)
    if err != nil {
        log.Println(err.Error())
        return
    }

    // 返回类型
    url := "/mnt/" + filename
    util.RespOkList(w, url, "")
}
```

 
 <comment-comment/> 
 