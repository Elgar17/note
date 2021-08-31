# 环境搭建

## 1、安装 JDK 

[下载安装 JDK8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)，下载对应的版本。
需要创建一个账户，下载完成后，双击安装即可。

如何安正安装成功呢？ 打开命令行窗口输入 `java -version` ，返回 Java 版本说明安装成功。返回格式如下：

```bash
C:\Users\think>java -version
java version "1.8.0_191"
Java(TM) SE Runtime Environment (build 1.8.0_191-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.191-b12, mixed mode)
```



## 2、Hello World

**（1）配置环境变量**

为了在任何地方运行 java 程序。
找到安装 JDK 目录路里的，bin 文件夹，将这个文件路径添加到环境变量中，路径像这样：
```
C:\Program Files\Java\jdk1.8.0_191\bin
```

:::warning 注意
添加变量后，点击确认，并重新打开 cmd。
:::

**（2）hello world**
新建一个 Hello.java 的文件，写入以下内容:

```java
public class Hello{
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```
:::warning 注意
class 名和文件名必须保持一致，区分大小写。不然编译不通过。
:::

第一步，使用命令行进入**文件所在**的目录，使用 `javac Hello.java` 命令，将文件编译成二进制文件。之后，文件目录下会生成 Hello.class 的二进制文件。

第二步，使用 `java Hello` 命令运行刚生成的二年进制文件。命令行会输出 Hello World！

## 3、开发工具 Eclipse 的使用

