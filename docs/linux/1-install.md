# Linux 系统

这里介绍安装 Linux 系统（ubuntu 22.04）和基础的一些设置。

## 1. 系统安装

1. 制作U盘镜像
2. 安装系统

## 2. 基础设置

（1） 切换系统的源

源是下载系统更新包，下载软件的地址，设置到国内下载会快一点。

“软件和更新” -> “ubuntu软件” -> “下载自” 选择阿里云或自主选择最佳。之后使用下面的命令更新一下系统。

```bash
# 更新
sudo apt upgrade
```

（2） 设置 root 用户密码

```bash
sudo apt passwd
```

## 常用命令

（1） 切换用户，安装程序时，切换到 root 用户会方便一点。

```bash
# 切换到 root
su root

# 切换到 eli
su eli
```

（2） 配置 SSH

使用下面的命令查看有没有密钥。

```bash
ls -a ~/.ssh
```

使用下面的命令生成 SSH 密钥，点击回车直到结束。

```bash
ssh-keygen -t rsa -C "email@gmail.com"
```

查看 SSH key 复制到 Github 中添加。

```bash
cat ~/.ssh/id_rsa.pub
```

最后设置用户名和邮箱即可使用。

```bash
git config --global user.email "eail@gmail.com"
git config --global user.name "userName"
```
