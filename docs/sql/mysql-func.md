# MySQL 函数

## 常用函数

```sql
SELECT ABS(-8)      -- 8 绝对值
SELECT CEILING(1.2) -- 2 向上取整
SELECT FLOOR(1.2)   -- 1 向上取整

SELECT RAND() -- 随机数 0 ~ 1

-- 判断数的符号
SELECT SIGN(0)  -- 0
SELECT SIGN(5)  -- 1
SELECT SIGN(-5) -- -1

-- 字符串长度
SELECT CHAR_LENGTH("hello world") -- 11

-- 合并
SELECT CONCAT("hello","world") -- helloworld

-- 获取当前日期
SELECT CURRENT_DATE() -- 2021-12-26
SELECT CURDATE()      -- 2021-12-26
SELECT NOW()          -- 2021-12-26 18:56:55
SELECT LOCALTIME()    -- 2021-12-26 18:57:36

SELECT USER()    -- root@localhost 当前登录用户
SELECT VERSION() -- 8.0.25 版本
```

## 聚合函数

```sql
SELECT  COUNT(`name`) FROM `user` -- 数据总数，忽略 null
SELECT COUNT(*) FROM `user`       -- 数据总数，不忽略 null
SELECT COUNT(1) FROM `user`       -- 数据总数，不忽略所有 null

SELECT SUM(`studentresult`) AS 总分 FROM result
SELECT AVG(`studentresult`) AS 平均值 FROM result
SELECT MAX(`studentresult`) AS 最大值 FROM result
SELECT MIN(`studentresult`) AS 最小值 FROM result
```

## md5加密

```sql
-- 加密
UPDATE `md5test` SET pwd=MD5(pwd)

-- 插入数据时加密
INSERT INTO `user` VALUES('Jerry', MD5('123456'))
```

<comment-comment/>
