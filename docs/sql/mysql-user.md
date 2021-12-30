# 用户管理与备份

## 用户管理

用户的数据也是一个数据库表，mysql/user 表，用户管理的本质是，对这个 user 表进行操作。

```sql
-- 创建一个 Tom 的用户
CREAE USER Tom IDENTIFIED BY '123456'

-- 修改 ROOT 密码
SET PASSWORD = PASSWORD('123456')

-- 修改密码
SET PASSWORD FOR Tom = PASSWORD('123456')

-- 重命名
RENAME USER Tom To Jerry

-- 查看用户权限
SHOW GRANTS FOR Tom
```

## 数据库备份

- 数据不丢失
- 数据转移

MySQL 备份：

- 直接复制 data 文件
- 使用可视化工具导出
- 使用命令行

（1）使用命令行导出

```bash
# mysqldump -h地址 -u用户 -p密码 数据库 表名 >导出位置
mysqldump -hlocalhost -uroot -p123456 school student >D:/a.sql

# mysqldump -h地址 -u用户 -p密码 数据库 表名1  表名1 >导出位置
mysqldump -hlocalhost -uroot -p123456 school student teacher >D:/a.sql
```

（2）导入数据

```bash
mysql -uroot -p123456
```

先登录数据库，使用下面的命令。

```sql
-- source 目录
source D:/a.sql
```

<comment-comment/>