# Linux 安装常用软件

## 1. VScode

轻量编辑器，支持多种语言，包括 marckdown、JavaScript、Go、Java等。官网下载地址比较慢，推荐下载国内镜像，国内下载链接 [https://vscode.cdn.azure.cn](https://vscode.cdn.azure.cn/stable/92d25e35d9bf1a6b16f7d0758f25d48ace11e5b9/code_1.69.0-1657183742_amd64.deb)。

## 2. Nodejs

第一种方法，命令行安装，这样安装很方便不过，node 版本有点旧，推荐第二中方法。

```bash
sudo apt install nodejs
```

第二种方法是自己到官网下载对应的版本[http://nodejs.cn/](http://nodejs.cn/)。下载完毕后解压下载的文件，移动到 `/usr/local/nodejs` 目录下。

```bash
# 解压
tar -xzvf node-v16.16.0-linux-x64.tar.gz

# 重命名移动到 /usr/local/nodejs
mv node-v16.16.0-linux-x64 /usr/local/nodejs
```

这是安装成功，不过全局运行 `node` 命令会找不到，需要添加环境变量。

```bash
# 打开文件
sudo vim /etc/profile
```

文件末尾加入 node 环境变量，保存推出。

```bash
export NODE_HOME=/usr/local/nodejs
export PATH=$NODE_HOME/bin:$PATH
```

最后，检查是否安装成功。

```bash
node -v
```

## 3. Git

```bash
sudo apt install git
```

## 4. zsh

zsh 是终端美化工具。

```bash
apt install zsh #安装zsh
chsh -s /bin/zsh #将zsh设置成默认shell（不设置的话启动zsh只有直接zsh命令即可）
```

安装 zsh 的主题 oh-my-zsh，注意这是从 Github 下载，需要安装 Git.

```bash
wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh 
```

环境变量要存放到 `~./zshrc` 文件中。