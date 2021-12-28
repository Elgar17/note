# shell 入门

## 1. 概述

最近接触 vuepress 时发现一个 `.sh` 结尾的文件。

打开看了一下，里面有一些自己认识的命令，像这样。

```git
cd text

git init
git add -A
git commit -m 'deploy'
```

对于前端程序员来说，是很少接触 Liunx 的，我觉得前端程序员也有必要了解一下 shell 脚本，因为它可以提高开发效率 。

那么，什么是 shell 脚本呢？

> Shell 是一个用 C 语言编写的程序，它是用户使用 Linux 的桥梁。Shell 既是一种命令语言，又是一种程序设计语言。 - 菜鸟教程

这里只介绍 Bash 中的 shell 脚本， Bash 是一个命令处理器，windows 下的 Git Bash 就是运行 shell 的一个环境，也是这里要讲的。

## 2. hello shell

这里以 windows 下的 Git Bash 为例。

新建一个 `hello.sh` 的文件，并写入以下内容。

```shell
# 这是一行注释
# 此命令运行后，创建一个 foo.txt 的文件并里面写入 hello shell
echo "hello shell" > foot.txt
```

之后再此处打开 git bash ，输入以下内容，运行这个 shell 脚本, bash 后面跟一个文件路径。

```bash
bash hello.sh
```

![hello shell](hello-shell.gif)

`echo` 是向窗口输出文本的命令，输出的就是 “” 内的内容，这里是 "hello shell"。

`> foot.txt` 的作用是，将这个输出的文本写入到 `foot.txt` 的文件中，上面的图中也看到了，运行后，多了一个文件。

这样我们把一些重复执行的操作，写道 shell 中一次性执行，可以提高我们的效率。
比如，把代码提交给 github 是一个重复的过程。

<!-- ## 2、常用命令 -->

<comment-comment/> 
