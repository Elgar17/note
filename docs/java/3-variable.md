# 基础语法



## 1、变量

- 整型：byte, short, int, long
- 浮点型：float, double 
- 布尔类型：true, false
- 数组

如何使用？

**（1）整型**

整型数据有四种，数据类型相同，只是占用的内存空间不同，所以存储的范围也不一样。

```java
byte num = 125; // 1个字节，范围：-128 ~ 127 

short shortNum = 123; // 2个字节，范围：-2^16/2 ~ 2^16/2 - 1

int intNum = 123; // 4个字节，范围：-2^32/2 ~ 2^32/2 - 1

long longNum = 123; // 8个字节，范围：-2^64/2 ~ 2^64/2 - 1
```

**（2）浮点型**
浮点型数据有两种，float 占用4字节，double 占用 8 字节。

```java

float fNum = 123.45f; // float 类型后面带上f

double dNum = 123.45;
```

**（3）布尔值**
以下是布尔类型的使用：

```java
boolean flage = true;
```

**（4）数组**

数组是有序的基本类型的集合。数组有一个 length的属性，通过这个属性获取长度，每个位置都有自己的索引，使用索引获取具体位置的数据。


```java
int[] arr = {1, 2, 3, 4}; // 创建一个长度位4 的数组，并给了初始值

System.out.print(arr.length) // 4 获取长度

System.out.print(arr[0]) // 1 获取第一位的数据，索引从0开始
```

**（4）字符串**

- char: 只能存放一个字符，可以是 ASIII码对应的数字
- String： 存放一多个字符


```java
char ch = 'h';

char ch1 = 65;
System.out.print(ch1); // A ASIII码对应的数字

String str = "Hello World!"
```

类型之间转换规则如下：

![类型之间转换规则](tran-type.png)


## 2、语句


**（1）if else**
`if else `语句跟其他语言一样。

```java
int score = 58;

if(score < 60){
    System.out.print("不及格");
} else {
    System.out.print("及格");
}
```

<comment-comment/> 
