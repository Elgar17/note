# 事务

事务可以理解为多个操作多个表，比如同时修改两个数据表，如果一个表修改成功，另一个表修改失败，则放弃本次修改（两张表都不修改）。两个都成功修，则本册修改有效。

## 事务的特性

事务有四个特性，叫 ACDI 原则

- 原子性：一个事务多个事件，要么都成功，要么都失败
- 持久性：事务不随外界而导致数据丢失
- 一致性：一个事务前后状态一致，比如一个两个人交易，两人用友的钱的总和不变。
- 隔离性：多个用户同时操作，排除其他事件对本次事务的影响

## 隔离导致的问题

- 脏读：一个事物读到了另一个事务未提交的数据
- 部可重复读：事务多次读取某一行，结果不同
- 虚读（幻读）：一个事务内读取到了别人新插入的数据，导致前后不一致

## 执行事务

MySQL 默认开启了事务的提交，下面例子是一个完整的事务的过程。

```sql
-- 手动处理事务
SET autocommit = 0 -- 关闭

-- 开启事务
START TRANSACTION -- 标记一个事务开始

-- 这里会做一些 CRUD 等操作

-- 提交：提交本次修改（会改变数据库）
COMMIT 

-- 回滚：放弃本次事务（放弃本次修改）
ROLLBACK

-- 事务结束
SET autocommit = 1 -- 开启，默认值
```

一个完整的转账例子。

```sql
-- 创建数据库
CREATE DATABASE shop CHARACTER SET utf8 COLLATE utf8_general_ci
USE shop

-- 创建表
CREATE TABLE `acount` (
    `id` INT(3) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `mony` DECIMAL(9,2) NOT NULL,
    PRIMARY KEY(`id`)
)ENGINE=INNODB DEFAULT CHARSET=utf8

-- 插入数据
INSERT INTO account(`name`, `mony`) VALUES ("Tom","1000"), ("Jerry","2000")

-- 模拟转账
SET autocommit = 0; -- 关闭自动提交
START TRANSACTION

UPDATE account SET mony=mony-500 WHERE `name` = "Tom"
UPDATE account SET mony=mony+500 WHERE `name` = "Jerry"

COMMIT; -- 提交
ROLLBACK; -- 回滚

SET autocommit = 1;
```

<comment-comment/>