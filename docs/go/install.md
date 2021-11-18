# windows 环境搭建

## 1. 下载 GO　安装包

打开中文官网 [https://studygolang.com/dl](https://studygolang.com/dl) 下载 `Microsoft Windows` 字样的版本。

下载完成后，点击运行，选择一个 GO语言安装目录，我这里选择 `D:\soft\go`。

## 2. 添加环境变量

我们现需要添加两个环境变量，一个是 GO 语言的安装目录 `GOROOT`。另一个是我们写程序的目录 `GOPATH`。

添加 `GOROOT` 的环境变量，目录是安装 GO 安装包下的 `bin` 目录, ``。

检测 `GOROOT` 有没有添加成功。

```text
C:\Users\think>go version
go version go1.16 windows/amd64
```

接下来添加 `GOPATH`, 也被称为 GO 语言的的工作目录，GO 语言对可发目录有要求，不能在随意的地方开发，安装完成之后，我们需要制定开发目录 `GOPATH`。

```bash
go env
```

使用上面的命令查看 `GOPATH`，添加环境变量为 `GOPATH`, 我的目录为 `D:\go`，以后代码都写在这个目录下。

## 3. 安装插件与工具

vscode 下载 go 插件。

完成后设置安装这些工具的地址，由于国内屏蔽了 go 官方网址，需要代理到国内。

```bash
go env -w GO111MODULE=auto

go env -w GOPROXY=https://goproxy.cn,direct
```

现在需要创建工作目录，`D:\go` 下创建 bin、pkg、src的三个目录，代码存放在 src 中。

```text
bin
pkg # 一些依赖包
src # 存放项目代码
```

## 4. 测试
