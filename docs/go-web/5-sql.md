# 数据库

## 概述

## 安装 Xorm

```bash
go get github.com/go-xorm/xorm
go get github.com/go-sql-driver/mysql
```

## Xrom 的初始化

包安装之后，我们进行初始化，`init` 函数是 Go 语言自带的函数，在 `main` 函数之前调用，我们通常初始化数据库在 `init` 函数中

```go
var DbEngin *xorm.Engine
func init(){
    drivenName := "mysql"
    DsName := "root:root@(127.0.0.0:3306)/chat?charset=utf8"
    DbEngin,err := xorm.NewEngine(drivenName,DsName)
    if err != err{
        log.Fatal(err.Error())
    }
    // 显示 SQL 语句
    DbEngin.ShowSQL(true)
    // 数据库链接最大的连接
    DbEngin.SetMaxOpenConns(2)
    // 自动 user
    // DbEngin.Sync2(new(User))
    fmt.Println("init Data Base OK!")
}
```

上述实例中我们连接了 MySQL。  

## 用 Xorm 增删改查
