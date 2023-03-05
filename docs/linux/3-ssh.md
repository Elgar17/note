# Linux 配置SSH

这篇文章介绍 Linux 如何配置 SSH。

使用下面的命令查看有没有密钥。

```bash
ls -a ~/.ssh
```

使用下面的命令生成 SSH 密钥，点击回车直到结束。

```bash
ssh-keygen -t rsa -C "email@gmail.com"
```

查看 SSH key 复制到 Github 中添加。

```bash
cat ~/.ssh/id_rsa.pub
```

最后设置用户名和邮箱即可使用。

```bash
git config --global user.email "email@gmail.com"
git config --global user.name "userName"
```