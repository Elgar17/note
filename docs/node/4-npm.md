# Node 包管理工具

Node.js 是由很多模块组成的，比如http，fs 等，http 模块提供了了网络有关的接口，fs 模块提供了操作文件的接口，开发者也可以将自己写一个模块（包）。

于是有了一个 npm 的网站，将这些包都放在npm 服务器上，开发者需要哪个包，通过 npm 命令来下载到本地使用。

## 1. npm

npm 是 Node.js 的包管理工具。

如果开发者写了一个模块，可以发布到 npm 服务器中，用户用 npm 命令来下载。

![npm-install](npm-i.png)

``` bash
npm install "模块名"
// 也可以简写
npm i "模块名"
```

上图所示，上图是将安装一个 koa 框架（库）。

下载之后，再项目目录多出 `node_modules` 的文件夹。这些第三方库都存放在这里。

`npm install` 还有一些参数

```bash
npm install koa -g   # 将 koa 安装到全局
```

## 2. nrm

由于 npm 服务器在国外，导致下载包的速度很慢，于是有了 npm 。

nrm 是切换包下载源的工具。

首先安装到全局：

```bash
npm i nrm -g
```

使用下面的命令可以**查看列表**，这是 nrm 安装的时候自带的一些源，前面的 `*` 号表示当前使用的源，也就是当你使用 `npm i koa` 的时候，从 `*` 对用的网址下载包。

```bash
nrm ls
```

使用下面的命令可以**切换源**，下面的名是将下载源切换到 `taobao`，淘宝团队维护的 npm 包。

```bash
# nrm use [name]
nrm use taobao 
```

还以添加一些其他的源，比如你们公司有自己搭建的 npm 源，名字可以自己取。

```bash
# npm add [name] [网址]
nrm add mypm www.mypm.com/mypm 
```

 
 <comment-comment/> 
 