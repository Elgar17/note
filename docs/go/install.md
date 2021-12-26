# 环境搭建

## 1. 概述

Go 语言环境搭建，相对其他语言有些不同，需要置定开发目录，之后更换可能会出现问题，所以安装时需要注意。

Go 语言中有两个重要的目录：

- GOROOT，安装 Go 语言编译器，官方包的目录，安装 Go 语言的目录
- GOPATH，放置个人代码的目录，第三方代码等

下面详细介绍环境的搭建。

## 2. 下载 Go 安装包

打开中文官网 [https://studygolang.com/dl](https://studygolang.com/dl) 下载 `Microsoft Windows` 字样的版本。

下载完成后，点击运行，选择一个 Go 语言安装目录，安装即可。

## 3. 添加环境变量

我们现需要添加三个环境变量，一个是 Go 语言的安装目录 `GOROOT`，另一个是我们写程序的目录 `GOPATH`。

- `GOROOT`，Go 语言的安装目录
- `GOPATH`，存放代码的目录
- `GOBIN`，用于全局使用 Go 相关命令

![go-path](go-path.png)

检测 `GOROOT` 有没有添加成功，在 `path` 中还要添加 `GOBIN` 目录。

```text
C:\Users\think>go version
go version go1.16 windows/amd64
```

接下来添加 `GOPATH`, 也被称为 Go 语言的的工作目录，Go 语言对可发目录有要求，不能在随意的地方开发，安装完成之后，我们需要制定开发目录 `GOPATH`。

```bash
go env
```

使用上面的命令查看 `GOPATH`，添加环境变量为 `GOPATH`, 我的目录为 `D:\go`，以后代码都写在这个目录下。

## 4. 安装插件与工具

vscode 下载 go 插件，我这里 vscode 作为开发工具。

完成后设置安装这些工具的地址，由于国内屏蔽了 go 官方网址，需要代理到国内。

```bash
go env -w GO111MODULE=auto

go env -w GOPROXY=https://goproxy.cn,direct
```

现在需要创建工作目录，`D:\go` 下创建 bin、pkg、src的三个目录，代码存放在 src 中。

```text
bin # 存放打包生成的可执行文件
pkg # 存放依赖包的目录
src # 存放项目代码
```

<comment-comment/> 
