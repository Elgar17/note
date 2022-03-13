# 在 npm 上发布包

## 1. 概述

这篇文章介绍，将自己的 JavaScript 包发布到 npm 网上。

## 2. 开发包

创建一个 `uutool` 目录，这个目录名就是包的名字，以后别人使用这个名来下载我们的包，终端进入这个目录，使用下面的命令，先初始化一个项目。

```bash
npm init -y
```

这里我们假设要发布一个 JavaScript 的工具库，所以取了这样的名字。生成的 `package.json` 惊醒如下的配置。

```json
{
  "name": "uutool",      // 项目名
  "version": "1.0.0",    // 版本
  "description": "",     // 描述
  "main": "index.js",    // 项目入口
  "scripts": {
    // 运行的指令
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],   // 关键字，用于用户搜索包
  "author": "elgar",     // 作者
  "license": "ISC"  // 开源协议
}
```

我们在创建项目的入口文件 `index.js`，写入以下内容：

```js
/** 
* 判断数据类型
* @param obj {Any} 传入名称
* @return {String} 返回数据的类型
*/
const  type = obj => {
    let  string = Object.prototype.toString
    var  map = {
        '[object Boolean]':  'boolean',
        '[object Number]':  'number',
        '[object String]':  'string',
        '[object Function]':  'function',
        '[object Array]':  'array',
        '[object Date]':  'date',
        '[object RegExp]':  'regExp',
        '[object Undefined]':  'undefined',
        '[object Null]':  'null',
        '[object Object]':  'object'
    }
    return  map[string.call(obj)]
}

export {
    type
}
```

之后运行以下命令：

```bash
npm install -g # 验证代码是否由错误
npm link       # 生成 pakage-look.json
```

在我们可以在项目目录下创建 `README.md` 的文件，用于介绍自己包，使用说明等内容，这个文件会解析成html 展示到我们包的首页。

## 3. 发布包

先在本地登录 `npm` 账号，注意，你 npm 源指向其他地址，可能会登录失败，比如使用淘宝的 npm 源，或使用 nrm 的话，需要切换到 npm 的官网。

```bash
PS D:\uutool> npm login
Username: elgara
Password:
Email: (this IS public) 1653794708@qq.com
npm notice Please check your email for a one-time password (OTP)
Enter one-time password from your authenticator app: 09970089
Logged in as elgara on https://registry.npmjs.org/.
```

登录时，要求填写用户名，密码，邮箱验证等，登录成功时，显示上面的内容。

```bash
npm publish # 发布包
```

发布包前，到 npm 官网查询一下，有没有同名的包，重名会导致包发布失败。

使用一下命令删除 npm 上传的包。

```bash
npm unpublish --force       # 强制删除
npm unpublish uutool@1.0.0  # 删除 uutool 包的 1.0.0 版本
```

使用下面的命令，增加一个小版本，这个命令更改本地的版本，不会给给远程，所以更改版本后，需要重新提交一次。

```bash
npm version patch
```

::: tip
这里讲解了一个完整的 npm 包发布的过程，不过这里要注意的是，这个包是使用 ES6 规范去发布的，所以在 Node.js 中无法直接使用，如果需要在 Node.js 中使用，需要 webpack 进行打包。
:::
