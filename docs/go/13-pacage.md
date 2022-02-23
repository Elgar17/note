# 包

## 1. 概述

一个项目包含多个文件，把不同的功能放到不同的文件中，这样可提高项目的可阅读性，方便维护，下面介绍如何包的引入和导出。

之前使用 `fmt` 就是一个外部的文件，也就是 GO 语言中叫包，包其实就是一个文件夹。

每个包都有一个名字，通常写在第一行，`package` 关键字跟上包名。

```go
package main
```

上面是定义了一个包叫 `main`。

## 2. 导出

通常项目中包含一个 utils 的包（文件夹），里面存放 utils.go 的文件，专门定义一些工具函数。

```go
// util.go 文件
package utils

// 函数名首字母大写
func Add(x int, x1 int) int{
    return x + x1
}
```

为了让其他的包使用，函数名首字母大写，内部使用的函数用小写。

## 3. 引入

使用 `import` 关键字加包的路径，可以引入一个包。

```go
import "fmt"
```

这是一个包的引入，引入多个包使用括号。

```go
import (
    "fmt"
    "net"
)
```

默认的根路径是 `src` 目录，也就是 $GOPATH 里的 src 目录，需要从这个目录开始引入。

已知 `src/oa` 目录下有一个项目，有一个 `utils` 包存放在 `src/oa/utils/util.go` 目录下。

```go
// src/oa/main.go
package main

import (
    "fmt"
    "oa/utils"
)

func main() {
    fmt.Println(utils.Add(1,2)) // 3
}
```

这是 `oa/main.go` 文件中使用了 `utils` 包中的 `Add` 函数，使用包名 `.` 函数名。

注意，包对应的文件夹的名与包名（package）必须一致。

## 4. 别名

如果包名太长，可以为包取别名。

```go
import (
    "fmt"
    util "oa/utils" // 给包重命名
)
```

包只导入不使用

```go
import _ "surpass/dolphin"
```

上面例子是给 "oa/utils" 包取了 util 的别名，之后以 `util.Add(1,2)` 来使用。

<comment-comment/> 

## 5. go modules

Go 语言没有统一的包管理地址，比如像存放 node.js 包管理的 npm，所以大家都放在 github 上。

go module 是在 1.13 版本以后，Go 语言官方推荐的依赖管理解决方案。

module 是所有**包的集合**，使用 `init` 来初始化一个 module，这是在项目根目录下生成 `go.mod` 文件。

```bash
# 初始化一个库
go init github.com/EE/Hello
```

如果在一个项目中使用了多个包，那么这些信息存放在 `go.mod` 文件，我们启动这个项目时，需要先下载这些包的集合，使用 `tidy` 名下载，本项目所有的依赖包。

```bash
# 下载项目的依赖
go mod tidy
```