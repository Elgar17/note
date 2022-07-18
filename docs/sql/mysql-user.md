# 数据库的管理

## 用户管理

用户可以设置很多权限，比如只能操作某个数据表，只能读取某个数据表，不能删除数据表。在 SQLyong 中点击小人图标可以管理用户。

数据的量大概是，一千万数据大概是 1GB，用户的数据也是一个数据库表，存放在 `mysql/user` 表中，用户管理的本质是，对这个 user 表进行操作。

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

## 数据备份

保证数据不丢失，需要隔一段时间备份数据库。有以下方法：

- 拷贝物理文件；
- 使用可视化工具导入导出；
  - 在数据表右击后，点击备份；
  - 使用时，直接引入数据。
- 使用命令行（mysqldumpm命令）导出。

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
