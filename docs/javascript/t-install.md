# 安装 Typescript

在看 typescript 之前你需要了解 Node.js, npm（nodejs内置的软件包管理器） 等知识，如果没有你需要安装一下 [Node.js](https://nodejs.org/en/)（是一个 JavaScript 运行环境）。

## 1. 安装

在全局安装：

- `i`：install 的简写
- `-g`：安装在全局

```shell
npm i -g typescript
```

安装完成后创建一个 `.ts` 结尾的文件，在***\*此目录下\**** 运行以下命令后，在次目录下生成与 `.ts` 文件相同名字的 `.js` 的文件，说明安装成功。

```shell
tsc "文件名"

node "文件名" // 生成的 js 文件名
```

## 2、实时编译 TS 文件

这样有点麻烦，每次运行两次命令，为了简化这一步，有两种方案，一是 ts 提供了一个 tsconfig.json 文件在在里可以配置自动编译，（另一个是安装 tsc-node 插件，后面有介绍）。首先用以下命令初始换和创建文件：

```shell
tsc --init
```

之后再次目录下会生成 `tsconfig.json` 的文件，打开 `outDir` 的注释，后面写保存 js 文件的路径，默认是当前目录。

```json
"compilerOptions": {
    "outDir": "./js/"  // 创建 js 的文件夹平在次目录先生成js文件 
}
```

之后点击 vscode —— 终端 —— 运行任务 —— 选择 tsconfige.json 文件，之后修改 ts 文件自动生成 js 文件，随时监听 ts 文件的变化。

## 3. 编译插件(tc-node)

上面的步骤有点繁琐，先要生成 js 文件再执行 js 文件，为了简化这一步我们可以安装 ts-node 简化步骤，首先在全局安装：

```bash
npm i -g ts-node
```

要注意的是 ts-node 不会生成 js 文件，用 ts-node 后运行 ts 文件后直接在控制台看到结果。

比如，我新建一个 hello.ts 的文件 填写以下内容：

```ts
let num: number = 10;
console.log(num)
```

保存后，在终端打开次目录（比如 hello.ts 文件在 demo 目录下，D:\note\demo），之后运行此命令：

```bash
ts-node .\hello.ts
```

控制台会输出 10，此目录下并不会生成 js 文件。
