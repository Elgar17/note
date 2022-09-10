# Rollup

JavaScript 打包工具，默认支持 ES。

## 快速使用

```bash
npm i -g rollup
```

```js
// index.js
console.log("hello world");
```

通过下面的命令当前目录下的 index.js 文件，生成 dist.js。

```bash
rollup -i index.js --file dist.js
```

rollup 默认将多个文件合并到一个文件中，默认开去 treeshaking。

## 参数

(1) -- file

打包生成的文件名称，如果没有不会生成目录，转换结果会输出到控制台。

(2) --format

打包生成的规则，有以下

- umd
- cmd
- cjs
- iife
- ES

## 配置文件

rollup 相关的配置也可以放入单独文件 rollup.config.js 中，通过配置可以生成多种规则的文件。

```js
export default [
  {
    input: "index.js",
    output: {
      file: "dist/dist.umd.js",
      format: "umd",
      name: "index",
    },
  },
  {
    input: "index.js",
    output: {
      file: "dist/dist.es.js",
      format: "es",
    },
  },
];
```

rollup 中不打包 node_modules 中的文件，如果需要，要借助插件，压缩代码也是需要安装 rollup 插件。