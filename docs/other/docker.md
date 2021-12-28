# docker 教程

是一个容器化技术， 相当于一个虚拟机，比虚拟机清凉高效，可以秒启动。

可以理解为简易的系统。

![docker教程](docker.png)

官方文档：[https://docs.docker.com/](https://docs.docker.com/)

镜像下载网站：[https://hub.docker.com/](https://hub.docker.com/)

**docker 能做什么？**

- 对文件、资源、网络隔离
- 变更管理、日志记录
- 写时复制

## 1. 基本组成

（1）image（镜像）

mysql 安装包相当于一个镜像，还可以安装一个 Linux 系统。

（2）container（容器）

通过镜像运行的服务，一个镜像可以运行**多个服务**。

（3）repository（仓库）

存放镜像文件，分为私有和共有，docker hub 等。

## 2. linux 安装 docker

环境：CentOS 7 Linux

一键安装，这是官方提供的脚本，第一行命令是，当前文件夹下载脚本，第二行是运行。

```bash
# 这样下载也可以（推荐，一键安装）
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh  

# 启动
systemctl start docker
```

可以跳过下面的（1 - 6）。

```bash
# 1、查看运行状态
systemctl status docker
```

如果之前安装过docker，先需要卸载旧的版本。

```bash
# 2、卸载旧版本
yum remove docker \
            docker-client \
            docker-client-latest \
            docker-common \
            docker-latest \
            docker-latest-logrotate \
            docker-logrotate \
            docker-engine
```

安装 `yum-utils` 包，设置下载镜像源

```bash
# 3、安装 yum 工具包
sudo yum install -y yum-utils

# 4、设置阿里云镜像源
yum-config-manager \
    --add-repo \
  http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 5、安装 docker
yum install docker-ce docker-ce-cli containerd.io

# 6、启动 docker 
systemctl start docker
```

启动之后，我们通过以下命令来查看运行状态，如果返回下面的内容说明安装成功：

```bash
# 查看运行状态
systemctl status docker

# 启动成功会显示以下的内容
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; vendor preset: disabled)
   Active: active (running) since Tue 2021-02-16 11:43:42 CST; 17min ago
     Docs: https://docs.docker.com
 Main PID: 17592 (dockerd)
    Tasks: 8
   Memory: 40.9M
   CGroup: /system.slice/docker.service
           └─17592 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

配置镜像加速，打开下面的文件，如果没有创建文件：

```bash
# 打开文件
vi /etc/docker/daemon.json
```

填写一些内容

```bash
{
    "registry-mirrors" : [
    "https://registry.docker-cn.com",
    "https://docker.mirrors.ustc.edu.cn",
    "http://hub-mirror.c.163.com",
    "https://cr.console.aliyun.com/"
  ]
}
# 重启docker服务使配置生效
systemctl restart docker.service
```

## 3. 镜像命令

官方给了一个 `hello-wrld` 镜像，通过下面的名来安装 `hello-world` 镜像：

```bash
docker run hello-world
```

运行此命令后，系统从本地查找 `hello-world`  镜像文件，我们这里之前没有，所以从远程仓库去下载`hello-world` 镜像，并执行这个镜像文件。

`hello-world` 竟像在命令窗口显示 'Hello from Docker!' 字样。

那么我们怎么查看我们安装的镜像呢？

```bash
# 查看本地安装的镜像文件
docker images
```

以下的我们安装完 `hello-world` 后，查询镜像的结果，会显示包名，ID，大小等信息。

```text
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    bf756fb1ae65   13 months ago   13.3kB
```

我们也可以先下载镜像，之后在使用：

```bash
# 下载 mysql 镜像
docker pull mysql

# 指定版本下载
docker pull mysql:5.7
```

删除镜像需要 id，id 通过 `docker images` 命令来查看 。

```bash
# 要删除镜像的 id
docker rmi -f [id]
# 删除所有的镜像
docker rmi -f $(docker images -aq)
```

## 4. 容器命令

（1）启动/停止/运行

```bash
# docker run [可选参数] [镜像名]
docker run -d mysql
```

参数说明：

```bash
--name="Name"         # 容器名字，比如sql1，sql2
-d                    # 后台方式运行
-it                   # 交互方式运行，比如运行一个 linux 系统，使用此命令进入
-p ip:主机端口:容器端口  # 设置端口
```

启动是创建一个容器并且运行，运行是运行已经创建了的容器

```bash
# 停止
docker stop [容器id]

# 运行 
docker start [容器id] 

# 重启
docker restart [容器id] 
```

（2）查看当前运行的容器：

```bash
docker ps
```

（3）删除容器

容器和镜像的概念一定要分清楚，一个容器就是运行的一个服务，一个镜像可以运行多个容器。比如安装一个 mysql 镜像，可以启动两个 mysql 容器，两个单独运行。

```bash
# 删除一个容器
# 不带 -f 参数，不能删除正在运行的容器
docker rm -f [容器id] 

# 删除所有容器
docker rmi -f $(docker images -aq)
```

## 5. 数据卷

**（1）什么是数据卷？**

当我们在 docker 中安装数据库之后，删除了容器数据也就没了，这不是卫门想要的。

数据卷就是解决这个问题的，数据卷是将 docker 容器中的数据映射到我们真实的环境当中。

比如我们删除了一个 mysql 容器之后 ，数据中的数据不会一起丢失。

这样还可以多个容器可以**共享数据**。

```bash
# 使用
docker run -d -v [主机目录]:[容器目录] -p 10050:8088 mysql
```

通过 `-v` 参数来设置数据共享，**容器目录里创建的文件会同步到主机目录中**。

这个很有用，比如我们需要配置 `nignx`  的文件的话。就映射到主机中，直接添加配置就可以了，容器内自动同步。

（2）匿名挂载，具名挂载

通过 `-v [主机目录]:[容器目录]` 格式挂载的文件叫匿名挂载

```bash
# 查看卷的对应文件:
docker volume ls
```

会显示对应是 hash

```bash
DRIVER    VOLUME NAME
local     sdfakldsjflajsdlkfjlajsdflkk
```

具名挂载的格式如下：

```bash
docker run [名字]:[容器目录]

# 挂载 mysql
docker run -d -v blogSqlData:/etc/nginx

# 查看具名挂载的文件
docker volume ls

# 会显示对应是自己设置的名字
DRIVER    VOLUME NAME
local     blogSqlData

# 通过名字可以找到存放位置
docker volume inspect blogSqlData
```

## 6. docker-compose

实现 docker 集群的快速编排。

可以管理多个容器的配置，运行循序等。

（1）安装

```bash
# 安装 docker compose
curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 打开权限
chmod +x /usr/local/bin/docker-compose

# 查看版本
docker-compose -v
```

`curl` 参数说明:

- `-L` : 下载地址(url)
- `-o`: 把输出写到该文件中，必须输入保存文件名

（2）配置文件

通过 docker-compose 控制多个服务，首先需要配置 一个 `yml` 文件。

进入 `/home` 目录

```bash
vi docker-compose.yml
```

`docker-compose.yml`文件放在那个目录都可以，最好把一个项目中所有的配置都放到一个文件中。

添加一些配置：
这是添加一个启动 `mongo` 的命令

```yml
version: '3'
services:
  mongo1:               # 容器的名字
    image: mongo:4      # 使用的镜像
    ports:              # 映射端口
      -10050:27017
    environment:        # 设置用户名密码    
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: 981102
```

（3）启动

**先切换到 存放`docker-compose.yml` 文件的目录，**然后使用此命令，启动

```bash
# 启动
docker-compose up -d

# 停止
docker-compose up -d

# 删除
docker-compose rm

# 查看运行的容器
docker-compose ps
````

## 7. 进入容器，拷贝文件

（1）进入容器

进入 docker 容器就是，比如我们安装一个 MongoDB 数据库容器，用命令行进入容器内，进行**查看数据，查看文件存放那根目录，修改配置**等操作。

 先使用 `docker ps`  查看要进入的容器的id 。

```bash
# 进入容器(打开新窗口)
docker exec -it [容器id] bash

# 打开正在后台运行的端口 
docker attach [容器id]

# 退出容器
exit
```

参数说明：

- `-it` ：使用交互模式
- `bash`：使用终端打开

（2）拷贝文件

拷贝文件是，将 docker **容器中的文件拷贝到主机上**

```bash
# 在容器外部操作
docker cp 容器id:容器内路径 目的主机路径
```

## 8. docker 仓库

先到 docker hub 注册账号之后，安装docker 的服务器上登录：

```bash
# 登录
docker login

# 提交本地本地文件
docker commit [comtainer id] lw96/msql:1.0
```

## 9、卸载 docker 容器

```bash
# 卸载安装包
yum remove docker-ce docker-ce-cli containerd.io

# 删除资源
rm -rf /var/lib/docker

# 资源放置目录 /var/lib/docker
```

<comment-comment/>
