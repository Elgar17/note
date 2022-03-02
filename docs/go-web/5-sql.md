# 数据库

## 概述

数据库也是后端中很重要的部分，下面介绍使用 Go 语言操作数据库的。

Xorm 是操作 MySQL 的一个库。

## 安装 Xorm

```bash
go get github.com/go-xorm/xorm
go get github.com/go-sql-driver/mysql
```

## Xrom 的初始化

包安装之后，我们进行初始化，`init` 函数是 Go 语言自带的函数，在 `main` 函数之前调用，我们通常初始化数据库在 `init` 函数中。

```go
var DbEngin *xorm.Engine
func init(){
    drivenName := "mysql"
    // 格式：用户名:密码@(ip:port)/数据库/编码格式
    DsName := "root:123456@(127.0.0.0:3306)/chat?charset=utf8"
    var err errors
    DbEngin,err = xorm.NewEngine(drivenName,DsName)
    if err != err{
        log.Fatal(err.Error())
    }
    // 显示 SQL 语句
    DbEngin.ShowSQL(true)
    // 数据库链接最大的连接
    DbEngin.SetMaxOpenConns(2)
    // 自动创建 user 表
    DbEngin.Sync2(new(User))
    fmt.Println("init Data Base OK!")
}
```

上述实例中我们连接了 MySQL，需要特别注意 `DsName` 的拼接。  

## 用 Xorm 增删改查

操作数据之前我们定义一个用户模型，在 mian.go 中添加用户模型。

```go
type User struct {
    User_id    int64   `xorm:"pk autoincr"` // 自增主键
    Name       string  `xorm:"unique"`      // 用户名
}
```

（1）增加数据

下面的例子是增加一条用户名为鹅鹅的用户。

```go
func Insert(name string) (int64, bool) {
    user := new(User)
    user.Name = name
    affected, err := DbEngin.Insert(user)
    if err != nil {
        return affected, false
    }
    return affected, true
}
func main() {
    res, err := Insert("鹅鹅")
    if err != nil {
        fmt.Println(err.Error())
    }
}
```

（2）删除数据

下面这例子是删除 ID 为 1 的用户。

```go
func Del(id int64) {
    user := new(User)
    DbEngin.Id(id).Delete(user)
}

func main() {
    Del(1)
}
```

（3）更新

```go
func update(id int64, user *User) bool {
    affected, err := DbEngin.ID(id).Update(user)
    if err != nil {
        log.Fatal("错误:", err)
    }
    if affected == 0 {
        return false
    }
    return true
}

func main() {
    user := new(User)
    user.Name = "鹅鹅鹅"
    isOk := update(1, user)
    fmt.Println(isOk) // true
}
```

（4）查询

```go
func getinfo(id int64) *User {
    user := &User{User_id: id}
    is, _ := DbEngin.Get(user)
    if !is {
        log.Fatal("用户不存在!")
    }
    return user
}

func main() {
    user := getinfo(1)
    fmt.Println(user) // {1 鹅鹅鹅}
}
```

<comment-comment/> 
