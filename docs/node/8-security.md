# security(安全)

## 1. SQL注入

窃取数据库内容，而应而该

输入 SQL 代码，在服务器上运行

```mysql
select username, realname from users 
where username='${name}' and password='${password}'
```

比如上面的 SQL 语句是凭借组成的，name 是用户输入的 如果用过户输入以下字段

会发生什么:

```mysql
zhangsan' --

// 把用户名改为以上内容
select username, realname from users 
where username='zhangsan' -- ' and password='123456'
```

我们发现密码被注释了，这样不用密码就可以登陆了。

解决方案：

mysql.escape 函数过滤

## 2. xss

窃取 cookie 内容

比如，网页嵌入提交标题时，设置标题为以下内容：

```html
<script>alert(document.cookie)</script>
```

解决防范：

通过转移字符解决此类问题。

安装第三方工具：

```bash
npm i xss --save
```

使用：

```bash
const xss = require('xss')
// 一个函数，把发来的数据抱起来就可以
const title = xss(req.title)
```

## 3. 密码加密

在数据库存放的是加密后的密码。

实现思路：

用户输入密码之后，通过md5 加密生成一个32位的字符串，nodejs提供了crypto模块。

crypto.createHash是一个哈希函数，你输入一个数字或字符串，函数会生成一个特定的字符串。

只有你输入同样的字符串才能输出同样的结果。

Nodejs提供了一个库 crypto

```js
const crypto = require('crypto')
// 秘钥
const CECRET_KEY = 'JF_dfdfj2#'

// md5 加密
function md5(content){
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password){
    const str = `password=${password}&key=${CECRET_KEY}`
    return md5(str)
}
```
