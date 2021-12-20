# MongoDB

![mongo](mongodb.jpg)

MongoDB 是非关系型数据库（NoSQL）。


核心概念：

| Mysql         | MongoDB          | Mongoose                 |
| ------------- | ---------------- | ------------------------ |
| 数据库实例    | MongoDB实例      | Mongoose                 |
| 模式(schema)  | 数据库           | Mongoose                 |
| 表(table)     | 集合(collection) | 模板(schema)/模型(Model) |
| 行(row)       | 文档(document)   | 实例(instance)           |
| Primary key   | Object(_id)      | Object(_id)              |
| 表字段 column | Field            | Field                    |

推荐一个图形化工具：robo3t 

## 1、安装

在本教程中在 docker 安装，首先下载镜像。

```bash
docker pull mongo:4
```

安装 `docker-mongose` ，如果已经安装，不用重新安装，直接添加配置文件 `docker-compose.yml`。

```json
version: "3"
services:
  blog-db:		 # 容器名字
    image: mongo # 镜像名:版本
    ports:
      - "10050:27017" # 外部端口：docker 端口
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin   # 用户名
      MONGO_INITDB_ROOT_PASSWORD: 123456  # 密码
```

启动

```bash
docker-compose up -d
```

## 2、基本操作

找到收据库安装目录，使用终端进入 `bin` 目录，使用以下命令，启动交互式命令窗口。

```bash
mongo
```

进入之后，我们查看数据库。

**（1）查看**

```bash
show bds
```

会显示以下三个数据库：

```
admin
local
config
```

这是查看数据库列表的命令，默认有三个数据库。每一个叫做一个数据库(database)。

**（2）操作数据库**

下面我们操作数据库,使用`use` 命令。

```bash
# 切换到 blog 数据库
use blog
```

如果没有这个数据库，**会创建一个**。

到了一个重要的环节，那就是删除数据库，使用 `use` 命令，**先切换到对应的数据库**，适应以下命令：

```
db.dropDatabase()
```

**（3）集合的操作**

切换到数据库之后，创建**集合**。我们创建了 blog 的数据库，现在我们需要创建一个存放用户名和密码的一个集合。可能很抽象，举个例子：

```json
# 这个就是一个集合
{
    {
    	"name": "zhangsan",
    	"psd": 1234
    },
	{
    	"name": "lisi",
    	"psd": 12345
    }
}
```

使用以下命令创建集合和删除集合的命令，下面是创建了一个 `users` 的集合，因为我们在 `blog` 数据库中操作的，所以 `users` 集合属于 `blog` 数据库。

```bash
# 创建名字为 users 的集合
db.createCollection("users")

# 删除 users 集合
db.users.drop()

# 查看集合
show collections
```





## 3、数据库权限机制

开启权限机制之后，用户登录之后才可以读写数据。

**（1）添加超级管理员**

```js
use admin
db.createUser({ 
 "user" : "admin",//用户名
 "pwd": "admin",//密码
 "roles" : [{ 
     role: "root", //身份
     db: "admin"//所属数据库
 }] 
}
```





## 4、使用 Node.js 增删改查



安装数据库

```bash
npm i mongoose
```



快速开始

```js
// 1. 加载模块
const mongoose = require('mongoose');

// 2. 连接数据库
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true
});

// 3. 创建一个模型
//设计数据库
const Cat = mongoose.model('Cat', {
    name: String
});


// 3. 创建一个数据并保存
const miao = new Cat({
    name: '喵喵'
});

// 4. 持久化保存
kitty.save().then(() => console.log('保存成功过'));

```



增删改查

```javascript
//  使用uses的数据了, 新增数据
var jack = new User({
    name: 'jack',
    password: '123456',
    email: "elgar@163.com"
})

// **************
// #save/ 保存数据
// **************
jack.save(function (err, ret) {
    if (err) {
        console.log("保存失败")
    } else {
        console.log("保存成功")
        console.log(ret)
    }
})

// **************
// #region/ 查询数据
// **************

User.find(function (err, ret) {
    if (err) {
        console.log("查询失败")
    } else {
        console.log("查询成功")
        console.log(ret)
    }
})

// #region/ 条件查询数据
User.find({
    username: "elgar"
}, function (err, ret) {
    if (err) {
        console.log("查询失败")
    } else {
        console.log("查询成功")
        console.log(ret)
    }
})

// **************
// Removing/删除数据
// **************
User.remove({
    username: 'jack' 
},function(err){
    if (err) {
        console.log("删除失败")
    } else {
        console.log("删除成功")
    }
})

// **************
// Updating/更新数据
// **************
User.findByIdAndUpdate('5e133352576f301ab06d0f5d', {
    password: '654123'
}, function (err) {
    if (err) {
        console.log("更新失败")
    } else {
        console.log("更新成功")
    }
})
```




 
 <comment-comment/> 
 