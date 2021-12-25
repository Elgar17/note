# 数据库查询语句

## 查询语句完整语法

这里是一个完整的查询语句的模板，先不用看。

```sql
SELECT[ALL|DISTINCT|DISTINCTROW|TOP]
{*|talbe.*|[table.]field1[AS alias1][,[table.]field2[AS alias2][,…]]}
FROM tableexpression[,…][IN externaldatabase]
[WHERE…]
[GROUP BY…]
[HAVING…]
[ORDER BY…]
```

## 概述

查询语句（DQL）是数据库的最重要的部分，数据库的核心。

```sql
-- 查询 student 表中 stu_no 和 name 字段
SELECT `stu_no`,`name` FROM student
```

还可以查询 MySQL 版本

```sql
SELECT VERSION() -- 8.0.5
```

## 去重

按照够一个字段去掉重复的字段，使用 `DISTINCT` 关键字。

```sql
-- 获取 result 表中不重复的 stu_no 字段
SELECT DISTINCT `stu_no`  FROM `result`
```

## Where 条件字句

通过 Where 语句可以筛选符合我们条件的数据。

（1）逻辑

- and 或 &&：两个为真
- or 或 ||：一个为真
- Not 或 !：非

（2）运算符

- IS NULL：操作符为 NULL，结果为真
- IS NOT NULL：操作符不为 NULL，结果为真
- BETWEEN：在某一个区间，`num` BETWEEN 55 AND 60
- LIKE：a 匹配 b，`address` LIKE "T%"
- in：在某一个集合里里面，`num` in(a1,a2,a3)

（3）模糊查询

使用 like、in 关键字实现模糊查询，下面介绍 like 关键字的使用。

```sql
-- 匹配 address 字段开头是T
WHERE address LIKE "T%"
```

`%` 匹配一个或多个字符，To 和 Took 头符合条件。

`%` 可以放在任意位置，"%T%"表示中间包含 T 字符的。

```sql
-- 匹配 address 字段开头是T
WHERE address LIKE "T_"
```

`_` 只能匹配任意一个字符，比如，To 符合条件，Took 就不符合。

如果要模糊查询两个字符，那么包含两个 `T__`, Too 就满足条件了，多个模糊查询也一样。

下面介绍 in 字段的使用

## 联表查询

联表查询是指从多个表中查询需要的信息，比如一个学生的姓名存放在一个表中，成绩存放在一个表中，查询分数和姓名需要查询两个表。

![sql join](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fresource.shangmayuan.com%2Fdroxy-blog%2F2019%2F11%2F18%2F27f7d58bf4274d5ebf6bf2c524f56c6c-2.JPEG&refer=http%3A%2F%2Fresource.shangmayuan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643009202&t=27affb5be2188a8e379fa899bb4ba8f5)

（1）INNER JOIN

选择两个表的交集。

```sql
SELECT stu.`studentno`, `studentname`,`studentresult`
FROM `student` AS stu
INNER JOIN `result` AS res
ON res.`studentno`=stu.`studentno`
```

上面的例子是选择了两个表 `student` 和 `result` 中 `studentno`、`studentname`、`studentresult`的三个字段，依据是聊表表中的 `studentno` 相互对应。

（2）LEFT JOIN

以据左边的表作为主表，查询一些字段。

如果一些学生信息只有 LEFT 表中，那么这个用户的一些信息会显示为NULL。

（3）RIGHT JOIN

以右边的表作为主表，查询需要的字段。

如果一些学生信息只有 LEFT 表中，那么这个用户的一些信息会显示为NULL。

## 自连接

将一张表拆分为两张表。

## 排序

使用 `ORDER BY` 字段可以对数据进行排序，可以升序和降序。

```sql
-- 降序
SELECT * FROM `user` ORDER BY id DESC

-- 升序
SELECT * FROM `user` ORDER BY id ASC
```

## 分页

分页将多条数据进行分页返回给前端，目的是缓解数据库的压力，提升用户体验。

语法格式如下：

```text
limit '起始下标' '数据大小'
```

```sql
SELECT * FROM `user` ORDER BY id ASC LIMIT 0,5
```

这个例子是，从下标 0 位置起，返回 5 条数据。

那么分页的逻辑如下：

- 第一页：limit 0, 5
- 第二页：limit 5, 5
- 第三页：limit 10, 5
- 第N页：limit pegeSize*(N-1), pegeSize

其中 pegeSize 是每一页中数据的大小，那么，总页数 = 数据总数/pegeSize。

## 子查询

在之前讲的 where 语句的条件按是固定的，在子查询中，where 语句的条件是计算出来的，语法像这样。

```sql
where( select * from)
```
