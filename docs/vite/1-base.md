# vite 基础配置

## eslint

首先在 VScode 安装 ESLint 插件，在根目录运行以下命令初始化 eslint，最后根目录下生成 .eslintrc.cjs 的文件。

```bash
npx eslint --init
```

初始化完毕后，应如插件并添加配置，这里是 vue 项目的配置。

```js
// ...
import eslintPlugin from "vite-plugin-eslint"; // 引入

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...
    eslintPlugin({
      cache: false,
      include: /\.(js?|ts?|vue|svelte)$/,
    }),
  ],
});
```

可以 package.json 中添加一个校验代码的命令，检查 src 目录下的 js 代码。

```json
// ....
"scripts": {
  // ..
  "lint": "eslint --ext js src/"
}
```

## prettier

Prettier 是代码自动格式化插件，使用前安装插件，项目根目录添加 .prettierrc 文件，这个文件中告诉格式化的风格，比如使用单引号等等。

```json
// .prettierrc
{
  "semi": false, // 禁用分号
  "singleQuote": true // 使用单引号
}
```

最后设置 VScode 自动保存和保存时自动格式化功能。使用过程中 prettier 跟 eslint 可能发生冲突，可以通过 .prettierrc 文件添加规来解决冲突，或更改 .eslintrc 规则也可以。

## 静态文件

在 vite 中可以引入以下静态文件：

- 图片：返回路径
- url： 返回文件 url
- raw: 文件内容转为字符串返回
- worker：运行 worker 线程
- json： 家在 json
- wasm: 运行 web assmbliy

```js
// test.js
const a = 123;
export default {
  a,
};
```

这是一个文件，通过不同方式来引入。

```js
// 返回 test.js 的路径
import url from "./test.js?url";
// /src/test.js

// 将 test.js 的内容转为字符串返回
import str from "./test.js?raw";
// const a = 123; export default { a }
```

worker 是一个新的线程，为了不影响页面加载速度，将一些内容运行在 worker 线程中。

## 环境变量

vite 中有默认的 4 个环境变量

- MODE
- BASE_URL
- PROD
- DEV

在项目中通过 import 来获取环境变量。

```js
// 包含上面的四个变量
import.mata.env
```

也可以自定义变量，在根目录中创建 .env 的文件。

```text
VITE_Title=Hello
```

在项目中获取时使用，下面的方法，注意的是变量必须 VITE_ 开头。

```js
import.mata.env.VITE_Title
```

## 创建 Vue3 项目

执行下面的命令，选择 vue 进行安装。最近 vite3 发布了，vite2 官网中的命令无法使用。

```bash
npm init vite@2
```

vite 的项目入口是 index.html， vite.config.js 文件是 vite 的配置文件。介绍一下里面的内容：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 添加了 Vue 框架的配置
export default defineConfig({
  plugins: [vue()]
})
```

这是 Vue 的插件，使用次插件后可使用 vue 框架。

配置配置别名：

```bash
export default defineConfig({
  // ...
  resolve: { 
    alias: {
      "@": "/src/"
    }
  }
})
```

创建其他框架都类似。
