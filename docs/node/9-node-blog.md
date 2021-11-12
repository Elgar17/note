# 博客项目

基于 Nodejs 的个人博客系统的后端。

[点击进入github地址]()

## 功能：

###  简介:

这是一个完整的博客系统，可以做成个人或多人博客系统。

这里主要实现核心功能，其他功能按自己需求添加即可。

主页、博客详情页
登录页
管理中心、新建页、编辑页

###  你将学到什么?

使用到的技术：

- 处理 http 接口（http,nodejs处理http,处理路由）
- 连接数据库（mysql,redis）
- 实现登录(redis,session,cookie)
- nginx 反向代理
- 安全（防SQL注入，XSS攻击，密码加密处理）
- 日志 （stream,文件操作）


### 需要知识?

看这篇文章之前你需要了解以下知识点:

1. HTML, CSS, JavaScript(ES6)
2. 网络

### 开发步骤

这是项目的的简约树结构，有利于开发

这里放置了项目的文件目录, 读者应从 `bin/www.js` 文件开始阅读

```
├─app.js			// 2. 路由的分离与请求参数的处理
├─package.json
├─src	
|  ├─util
|  |  └log.js		// 记录日志的实现
|  ├─router
|  |   ├─blog.js	// 3. blog路由处理
|  |   └user.js		// 3. user路由的处理
|  ├─model
|  |   └resModel.js	// 包装返回的数据
|  ├─db
|  | ├─mysql.js		// 数据库造作函数封装
|  | └redis.js		// redis造作函数封装
|  ├─controller
|  |     ├─blog.js	// 4. user路由的数据请求函数
|  |     └user.js	// 4. user路由的数据请求函数
|  ├─conf
|  |  └db.js
├─logs				// 生成日志目录
|  ├─access.log
|  ├─error.log
|  └event.log
├─bin
|  └www.js			// 1. 项目的入口文件,服务在这里监听
```



### 技术方案：



## 数据存储：mysql

存储博客(blog)：

id	title	content	createtime	author
1	标题	内容	123465464845	Tom
存储用户(user)：

id	name	password	realname
1	Tom	123456	张三
接口设计:

描述	接口	方法	参数	备注
获取博客列表	/api/blog/list	get	author 作者，keyword 关键字	
获取第一篇博客内容	/api/blog/detail	get	id	
新增博客	/api/blog/new	post		新增数据
更新博客	/api/blog/update	post	id	更新内容
删除博客	/api/blog/del	post	id	
登录	/api/user/login	post		用户名和密码

## 不使用框架创建的项目回顾

使用到的技术点：

处理 http 接口（http,nodejs处理http,处理路由）

连接数据库（mysql,redis）

实现登录(redis,session,cookie)

nginx 反向代理

安全（防SQL注入，XSS攻击，密码加密处理）

日志 （stream,文件操作）