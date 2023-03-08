# 环境搭建

## 1. 概述

Go 语言环境搭建，相对其他语言有些不同，需要置定开发目录，之后更换可能会出现问题，所以安装时需要注意。

Go 语言中有两个重要的目录：

- GOROOT，安装 Go 语言编译器，官方包的目录，安装 Go 语言的目录。
- GOPATH，放置个人代码的目录，第三方代码等。

下面详细介绍环境的搭建。

## 2. 下载 Go 安装包

打开中文官网 [https://studygolang.com/dl](https://studygolang.com/dl) 下载 `Microsoft Windows` 字样的版本。

下载完成后，点击运行，选择一个 Go 语言安装目录，安装即可。

## 3. 添加环境变量

### windows 环境

我们现需要添加三个环境变量，一个是 Go 语言的安装目录 `GOROOT`，另一个是我们写程序的目录 `GOPATH`。

- `GOROOT`，Go 语言的安装目录
- `GOPATH`，存放代码的目录
- `GOBIN`，用于全局使用 Go 相关命令

![go-path](go-path.png)

检测 `GOROOT` 有没有添加成功，在 `path` 中还要添加 `GOBIN` 目录。

```bash
C:\Users\think>go version
go version go1.16 windows/amd64
```

接下来添加 `GOPATH`, 也被称为 Go 语言的的工作目录，Go 语言对可发目录有要求，不能在随意的地方开发，安装完成之后，我们需要制定开发目录 `GOPATH`。

```bash
go env
```

使用上面的命令查看 `GOPATH`，添加环境变量为 `GOPATH`, 我的目录为 `D:\go`，以后代码都写在这个目录下。

### Linux 环境

(1) 下载 Linux 包 [下载链接](https://golang.google.cn/dl/)。

(2) 下载完成后命令行进入下载的目录解压

```bash
tar -xzvf go1.18.4.linux-amd64.tar.gz
```

(3) 解压生成 go 的文件夹，go 文件夹移动到 /usr/local

```bash
mv go /usr/local/
```

(4) 创建三个目录，go 代码写在 /home/go/src 中。

```bash
mkdir -p /home/go/bin /home/go/pkg /home/go/src
```

（5）添加环境变量

下面的环境变量添加到 /etc/profile，如果安装了 zsh，要存放到 ~/.zshrc 中。

```bash
export GOROOT=/usr/local/go
export GOPATH=/home/go
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
```

打开新终端运行下面的命令，打印版本说明，安装成功。

```bash
go version
```

## 4. 关于 GO111MODULE

GO111MODULE 是一个环境变量，用于控制Go语言的模块行为。这个变量有三个可选值：

- off：表示禁用 Go modules，依赖包将会被下载到 `$GOPATH/src` 目录下；
- on：表示启用 Go modules，依赖包将会被下载到当前项目的 vendor 目录下，或者是 `go mod vendor` 命令指定的目录下；
- auto：表示开启 Go modules，并且按照项目的目录结构来决定是否启用模块。

如果环境变量 GO111MODULE 的值是 off，那么就会禁用 Go Modules，使用旧有的 GOPATH 和 vendor 目录来管理依赖。

如果环境变量 GO111MODULE 的值是 on，那么就会强制启用 Go Modules，即使当前项目并没有包含go.mod文件。

如果环境变量 GO111MODULE 的值是 auto，则会根据项目目录下是否存在go.mod文件来决定是否启用Go Modules。

使用 Go Modules 可以有效地管理项目依赖，使得开发者可以更加方便的管理和维护项目。

## 5. 安装插件与工具

vscode 下载 go 插件，我这里 vscode 作为开发工具。

完成后设置安装这些工具的地址，由于国内屏蔽了 go 官方网址，需要代理到国内。

```bash
# 使用 Go Modules 管理项目依赖
set GO111MODULE=on
# 设置国内的下载源
go env -w GOPROXY=https://goproxy.cn,direct
```

现在需要创建工作目录，`D:\go` 下创建 bin、pkg、src的三个目录，代码存放在 src 中。

```text
bin # 存放打包生成的可执行文件
pkg # 存放依赖包的目录
src # 存放项目代码
```

<comment-comment/> 
