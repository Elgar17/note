# 全栈项目



| 开发日志                                              | 时间       |
| ----------------------------------------------------- | ---------- |
| 1. 需求分析                                           | 2021.02.12 |
| 2. 购买服务器                                         | 2021.02.12 |
| 3. 安装 docker && docker-compose                      | 2021.02.12 |
| 4. 安装 mongoDB 数据库                                | 2021.02.13 |
| 5. Mock服务 DOClever && Mock.js                       | 2021.02.13 |
| 6. 开发前后端注册，登陆，重置密码页面，发送邮件服务等 | 2021.02.14 |
| 7. 学习 Linux 系统，文件目录，                        | 2021.02.15 |
| 8. 学习docker && docker-compose                       | 2021.02.16 |
| 9. 学习 MongoDB 数据库                                | 2021.02.17 |
| 10. 学习，安装 redis                                  | 2021.02.22 |
| 11. 配置 数据库                                       | 2021.02.27 |
| 12. 完成登录操作                                      | 2021.02.28 |



##  1、需求分析



- 全栈思维，需求分析重难点
- 案例项目需求分析，业务拆解，功能拆解
- 工具使用及场景




工作流：

- 有了想法后，到客户确定需求
- 分析，画出流程图，原型图
- 评估项目时间，投入成本，质量
- 跟踪项目，反馈，更变




设计网站：

- 酷站
- 蓝色理想
-  花瓣


pc端需求分析：

- 内容展示
- 点赞回复
- 积分与用户体系  




服务端需求分析：

- 用户，权限管理
- 内容管理，首页管理
- 其他功能



移动端需求分析：

- 主题功能
- 技术实现/交互体样
- 用户数据/流量入口


文档产出：

- 重要页面原型图
- 主题页面流程图与跳转逻辑


## 2、 搭建环境


搭建测试环境 

### 服务器安装 Docker



安装：

```bash

curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```



安装 docker compose 



Compose 是 docker 提供的一个命令行工具，用来定义和运行由多个容器组成的应用。


```bash

sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

给执行权限

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

切换下载源（默认是国外的）,没有 docker 目录需要创建一个。

```bash
cd etc

mkdir docker

vi /etc/docker/daemon.json
```
添加如下配置：
```json
{
    "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
```
重启docker

```bash
service docker restart
```

查看版本

```bash
docker-compose --version
```



### 安装MongoDB 服务器



到docker hub 安装

```docker
docker pull mongo:4
```

查看本地下载的镜像

```docker
docker images
```

docker 运行 mongo 服务

```
docker run -d --name some-mongo -p 10050:27017 mongo:4
```

查看运行的服务：

```docker
docker ps
```


开放端口：

```bash
# 开放mongo 运行的服务端口（10050）
firewall-cmd --zone=public --add-port=10050/tcp --permanent

# 开启防火墙
systemctl start firewalld

# 重启防火墙
firewall-cmd --reload

# 查看firewall状态
fire-wall --state
```

下载 mongo 远程图形化工具。

[点击下载](https://robomongo.org/download)

之后，腾讯云开启防火墙记录，开放对应的端口（这里实用10050）

实用robo 3t 登录，ip 实用服务器公网ip



## 3、鉴权

 