# MySQL

## 概述

上一篇文章快速介绍了数据库的增删改查功功能，这一篇更深入介绍，每个模块。

## 表的操作

（1）创建表

创建完整表的格式如下：

```sql
CREATE TABLE IF NOT EXISTS `表名` (
    `字段名` 类型 [属性] [索引] [描述],
    `字段名` 类型 [属性] [索引] [描述]
)[表类型][字符集]
```

下面创建了一个学生表的例子。

```sql
CREATE TABLE IF NOT EXISTS `student` (
    `id` INT(4) NOT NULL AUTO_INCREMENT COMMENT '学号',
    `name` VARCHAR(50) NOT NULL DEFAULT '匿名' COMMENT '姓名',
    `passqord` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',
    `sex` VARCHAR(2) NOT NULL DEFAULT '男' COMMENT '性别',
    `bir` DATETIME DEFAULT NULL COMMENT '生日',
    PRIMARY KEY(`id`)
)ENGINE=INNODB DEFAULT CHARSET=utf8
```

如果数据表已经存在，想查看创建的命令，可以使用以下命令查看创建表的命令。

```sql
SHOW CREATE TABLE `user` -- 查看 user 表创建的命令
DESC `student` -- 查看表的结构
```

（2）修改表

修改表使用 `ALTER` 关键字

```sql
-- student 重命名为 stu
ALTER TABLE student RENAME AS stu

-- 添加一个字段
ALTER TABLE stu ADD age INT(11)

-- 修改字段类型
ALTER TABLE stu MODIFY age VARCHAR(11)

-- 字段重命名
ALTER TABLE stu MODIFY age VARCHAR(11)

-- 删除 age 字段
ALTER TABLE stu DROP age
```

在已经有的表上，增加一个字段。

```sql
ALTER TABLE `teacher` ADD 
```

（3）删除表

删除一个数据表，在下面例子中，删除 `stu` 表。

```sql
DROP TABLE IF EXISTS stu
```

## 外键

外键可以将两个表关联起来，关联的表叫做主表，被关联的表叫做从表。

关联两个表，在每个表的索引选项中设置和查看。

在正常开发中，很少这样关联数据，使用程序去关联多个表。

## DML 语言

DML 是操作表中的数据的语言。比如给表添加，删除，更新数据等。

（1） 添加

这里列举了一些例子，向 `user` 表中插入数据的几种方式。

```sql
INSERT INTO `user` (`name`) VALUES('Tom')
```

上面例子是向 `user` 表中插入一条 `name` 等于 `Tom` 的数据。

也可以同时插入多个值。

```sql
INSERT INTO `user` (`name`) VALUES('Thomas'), ('Jerry')
```

如果要插入多个属性，写法如下。

```sql
INSERT INTO `user` (`name`, `age`) VALUES('Tuffy', 18)
```

获取当前时间

```sql
INSERT INTO `stu` (`name`,`bir`) VALUES ('小江', CURRENT_TIME)
```

（2） 修改

如果有一个表的数据有错误，我们去更改这个字段，这个过程属于表的更新。

下面例子是，将操作 user 表，user_id 为 1 的用户的 `name` 为改为 Tom。

```sql
UPDATE `user` SET `name`='Tom' WHERE user_id=1
```

注意，这里不写 `WHERE` 及以后的条件的话，会修改整个表中的所有的 `user` 值改为 Tom。

`WHEWRE` 后面的条件语句中间，不能有空格。

```sql
-- 正确
WHERE user_id=1

-- 错误
WHERE user_id=1
```

也可以修该多个属性。

```sql
UPDATE `user` SET `name`='Tom', `email`="ee@qq.com" WHERE user_id=1
```

下面介绍以下 `WHERE` 语句后面的筛选条件。

- `=`：等于某个值，如，`user_id=1`
- `>`：大于某个值，如，`user_id>1`
- `<`：小于某个值，如，`user_id<1`
- `!=`：不等于某个值，如，`user_id!=1`
- `BETWEEN`：某个区间内的，如，`WHERE user_id BETWEEN 3 AND 5`，包含3，5
- `AND`: 多个判断条件，如，`WHERE user_id>5 AND user_id<7`
- `OR`: 满足一个条件即可，如，`WHERE user_id>5 OR sex=2`

（3）删除

删除用户某个表中的一条数据。

```sql
DELETE FROM `user` WHERE user_id=10
```

注意，不写 `WHERE` 条件语句，会清空数据表，也可以使用清空语句清空数据。

```sql
TRUNCATE `user`
```

不同点，TRUNCATE 会清零自增，       

## 数据表示的类型

- INNODB，节约空间，速度快
- MYSISANM，安全性高，事务的处理，多表多用户操作

|          | INNODB | MYSISANM    |
|----------|--------|-------------|
| 事务     | YES    | NO          |
| 数据行锁 | YES    | NO          |
| 外键约束 | NO     | YES         |
| 全文搜索 | NO     | YES         |
| 占用空间 | 较小   | 较大，约2倍 |

所有数据库存在 data 文件中。

## 参考链接

- [为什么需要数据库](https://www.zhihu.com/question/24088008)
