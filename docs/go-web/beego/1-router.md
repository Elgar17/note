# 路由

## 概述

Beego 中有两种方式创建路由。

（1）直接配置

```go
// router.go 的 init 函数中
beego.Router("/hello", &controllers.MainController{}, "get:GetHello")
```

在函数 init 函数中添加一个路由，第三个参数中的 `GetHello` 是该路由触发的函数。

在 `default.go` 中添加一个方法

```go
func (c *MainController) GetHello() {
    c.Ctx.WriteString("Hello World!")
}
```

最后访问 `/hello` 路由可以显示字符串 "Hello World!"。

（2）函数中配置

在 controller 目录下新建文件内容为如下:

```go
// todo.go
package controllers

import (
    "github.com/astaxie/beego"
)

type TodoController struct {
    beego.Controller
}

// @router /todo/list [get]
func (c *TodoController) GetList() {
    c.Ctx.WriteString("get todo list api")
}
```

`GetList` 方法对应一个路由，注释的格式要注意。

最后在 router 中需要引入。

```go
// init 方法中
beego.Include(&controllers.TodoController{})
```

 
 <comment-comment/> 
 