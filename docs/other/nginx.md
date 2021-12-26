# Nginx 基本使用

高性能的[HTTP](https://baike.baidu.com/item/HTTP)和[反向代理](https://baike.baidu.com/item/反向代理/7793488)web服务器。

![nginx教程](nginx.png)

## 1、安装

到[官网](http://nginx.org/en/download.html)下载对应的版本后回得到这样一个文件目录。

![目录](path-nginx.png)

使用cmd 进入次目录（不要用PowerShell）运行一下命令检查版本，返回版本信息，说明安装完成。

```bash
nginx -v
```



在次目录下使用下面的命令启动 nginx 服务。

```bash
nginx
```



不要关闭 cmd 窗口浏览器打开 `127.0.0.1:80`可以看到运行的服务

## 2、Nginx 反向代理

什么是反向代理？

反向代理就代理接口，这图中的 nginx 就是做的反向代理服务。

用访问一台服务器的 80 端口， 将这些请求中的不同请求代理到不同端口，比如用户访问80端口的 `api/list`  

接口这是数据部分代理到，3000端口上的 `api/list` 服务。用户访问 80端口，代理5000端口上的静态资源。



![niginx](pro.png)



介绍一下如何配置，nginx 的配置文件在安装的目录下 `conf/nginx.conf` 文件中。

在默认情况下，nginx 输出 `www`目录下的内容，默认监听端口是80。

```
#	location / {
#		root   html;
#       index  index.html index.htm;
#	}
```

我们将上面的内容删除（或注释用 # 号），默认代理 `/` 目录，并添加配置：

```
// 第一条配置
location / {
	proxy_pass http://localhost:5500;
}

// 第二条配置
location /api/ {
	proxy_pass http://localhost:8088;
	proxy_set_header Host $host;
}
```

如果请求用户请求的 80 端口中的请求以 `/api/` 开头那么代理端口：8088， 其他请求代理 5500 端口。


 
 <comment-comment/> 
 
 
 <comment-comment/> 
 
 
 <comment-comment/> 
 