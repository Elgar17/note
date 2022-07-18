# Beego

## 概述

Beego 框架使用教程。

Beego 是 Go 语言 Web 框架，[官网](beego.vip)。

## 安装 Beego

先安装 Beego 框架。

```bash
go get github.com/astaxie/beego
```

bee 是 Beego 工具包，用于创建 Beego 项目，热驱动项目等功能的工具。

```bash
go get github.com/beego/bee
```

::: tip 注意
注意，安装框架前必须设置国内代理，否则会安装失败。
:::

## 安装 bee

bee 是 Beego 框架的脚手架工具，使用 bee 工具的命令，可以快速生成 Beego 框架的项目模板。

bee 是一个可执行文件（exe 结尾），存放在 `$GOPATH/bin` 目录中，需要先把 `$GOPATH/bin` 添加到环境变量中。

如果遇到安装失败：

```text
fatal: unable to access 'https://github.com/beego/beego/': OpenSSL SSL_read: Connection was reset, errno 10054
```

如果有这样报错，执行以下命令

```bash
git config --global http.sslVerify false
```

安装完成后，使用以下命令查看是否安装成功

```bash
bee version
```

## 创建项目

Bee 工具提供了创建项目命令，下面具体介绍。

（1）bee new

创建项目模板，带有前端代码。

```bash
bee new demo1
```

在当前目录下，创建了项目名为 demo1 的项目。

（2）bee api

在当前目录下，生成 RESTFUL API 形式的项目模板。

```bash
bee api projectName
```

（3）bee run

启动项目命令。

注意，如果启动项目失败,需要使用以下命令下载需要的安装包。

```bash
go mod tidy
```

（3）bee pack

打包项目

注意在 Linux 下打包需要传入参数

```bash
bee pack -be GOOS=linux
```

## 目录介绍

- go.mod，存放项目依赖包的文件。
- go.sum，项目依赖的下载地址。

<comment-comment/> 
