# 简介

![java](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=875933571,2598587787&fm=26&gp=0.jpg)

## 1、Java 程序的执行过程

```
project.java --> project.class --> program
```

java 程序的执行大致时这样的，首先写好的 `.java` 结尾的程序，通过**编译器** 编译成字节码文件(`.class`)。生成这个字节文件通过**解释器**，将这个字节文件转化成机器指令。

## 2、 JVM

JVM(Java Virtual Machine)，JAVA虚拟机，在不同平台运行(Linux，Windows) java 程序的容器。

上面提到的，解释器就是 JVM。

## 3、JDK

JDK（Java Development Kit），Java 语言的软件开发包。

里面包含相关命令，由组件构成，介绍一下两个主要组件（命令）：

- `javac` : 编译器，将源程序转化成字节码；
- `java`：运行编译后生成的 java 程序（ `.class` 后缀）。

## 4、JRE

JRE（Java Runtime Environment），由两部分组成：

- JVM
- Java 的核心库

![jvm](jvm.png)

## 5、Java平台

- Java SE：开发桌面程序，便准版
- Java EE：开发网络，企业版，应用于开发网站
- Java ME：用于开发移动设备

<comment-comment/>