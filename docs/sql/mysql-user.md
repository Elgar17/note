# 数据库的管理

## 用户管理

数据库中的用户表存放在 `mysql/user` 表中，在 SQLyong 中点击小人图标可以管理用户。

用户可以设置很多权限，比如只能操作某个数据表，只能读取某个数据表，不能删除数据表。

数据的量大概是，一千万数据大概是 1GB。

## 数据备份

保证数据不丢失，需要隔一段时间备份数据库。有以下方法：

- 拷贝物理文件
- 使用可视化工具导入导出
  - 在数据表右击后，点击备份
  - 使用时，直接引入数据
- 使用命令行（mysqldumpm命令）导出
    ```bash
    # student 表备份到 D:/a.sql
    mysqldump -hlocalhost -uroot -p123456 student >D:/a.sql
    ```
    导入数据库（控制台登录）。
    ```sql
    source d:/a.sql
    ```