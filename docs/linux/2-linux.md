# Linux 入门教程

## 1. 概述

Linux 是像 windows 一样的系统。因为它对硬件的要求很低，开源免费，收到很多人的喜欢。

![Linux教程](linux.png)

下面介绍一下内容:

- 介绍 Linux 目录结构
- 文件的创建，修改，移动等操作
- 文件的 下载/压缩/解压
- 进程管理
- 防火墙

## 2. Linux 目录结构

Linux 没有盘的概念，只有一个跟目录，根目录 `/`，所有的文件都存放在这里。

```bash
cd / # 进入根目录
ls / # 查看根目录
```

查看根目录，会显示以下文件目录，Linux 没有盘的概念，一切文件都在一个区域。

- **home： 个人目录**
- **etc：** **软件配置文件**
- sys：系统目录
- bin：存放常用命令
- boot ：Linux 核心文件
- dev ：外部设备，比如U盘等
- lib ：共享库文件
- lost+found  ：存放突然关机的文件
- mnt ：临时存放的文件，光驱等
- **opt ：存放用户安装的软件，默认是空的**
- **root  ：系统管理员目录**
- sbin ：超级管理员
- srv : 存放启动之后需要提取的数据
- **tmp : 存放一些临时的文件，比如安装包等**
- **usr          --> 用户存放可执行文件（里面的 sbin 目录存放超级管理员）**
- **var          --> 日志文件**
- **usr/src：存放内核源代码**

- **www：存放服务器相关的资源，环境，项目等**

::: tip 注意

当终端显示当前目录为 `~`是，表示当前用户的主目录。比如说，用root 用户登陆后，用 `cd /home` 就会显示`~`。

普通用户的目录文件夹在 `/user` 目录下。

:::

## 3. 文件操作

（1）常用查看硬件参数的命令：

```bash
# 查看内核
uname -a

# 查看磁盘空间
df -Th

# 查看运行的进程（相当于win10的资源管理器）
top
```

（2）创建目录，文件

``` bash
# 创建目录
mkdir [name]

# 创建文件
touch [name]
# 创建并且打开文件
vim [name]
# 如果 a 文件存在，会覆盖文件
echo 'hello world' > [name]
# 文件中添加一行（追加）
echo 'hello' >> text.txt
```

（3）删除目录，文件

```bash
# 删除目录 testdir
rm -r [name]
rmdir -p [name]

# 彻底删除
rm -rf [name]

# 删除文件 text.txt
rm [name]
```

（4）查看命令

``` bash
# 查看目录
ls
# 包括隐藏目录
ls -a
# 带有操作的权限，文件的信息
ls -la
# 查看当前的路径
pwd
```

（5）移动，重命名，复制文件

```bash
# 文件 foo 重命名为 bar
mv foo.txt bar.txt

# 移动文件到 home 目录下
mv foo.txt /home

# 复制文件到 home 目录下
cp foo.txt /home
```

（6） 切换用户

安装程序时，切换到 root 用户会方便一点。

```bash
# 切换到 root
su root

# 切换到 eli
su eli
```

## 4. 下载/压缩/解压

```bash
# 下载 
wget [下载地址]
yum -y install [包名]

# 解压
tar zxvf [文件名]

# 压缩 
tar zcvf [压缩生成的文件名]  [压缩的文件名]

# 上传文件: 使用 xshell 等工具，输入此命令选择文件上传到所在目录
rz
```

## 5. 进程管理

```bash
# 查看进程
ps
```

参数：

- `-a` ： 显示当前用户的运行的所有进程
- `-u` ： 以用户进程运行的信息

## 6. 防火墙

```bash
# 查看状态
systemctl status firewalld

# 重启
servise firewalld start

# 停止
servise firewalld stop 

# 开启端口
firewall-cmd --zone=public --add--port=8080/tcp --permanent

# 重启
systemctl restart firewalld.servise

# 参数说明
--zone # 作用域
--add-port=80/tcp # 添加的端口
--permanent # 永久生效
```

<comment-comment/>
