# 方法

也叫函数，用于解决一系列问题的，共同解决方案。

格式：

```
访问修饰符 返回类型 方法名(参数){
    返回列表
}
```

## 1、方法的使用


这是一个显示你自己名字的方法，输入一个字符串，就返回字符串。

```java 
package com.mypor1;

public class Hello {
    public void sayName(String str) {
        System.out.print("my name is "str);
    }
    public static void main(String[] args) {
        Hello h = new Hello(); // 实例化
        h.sayName("Jerry"); 
    }
}
```

也可以传入其他值，需要在入参时，声明变量类型，函数名前需要声明函数的返回类型。

```java 
package com.mypor1;

public class Hello {
    public int add(int num1, int num2) {
       return num1 + num2;
    }
    public static void main(String[] args) {
        Hello math = new Hello(); // 实例化
        System.out.print(math.add(2, 4)); // 6
    }
}
```

## 2、方法重载

有多个方法名字相同，参数类型不同的方法。

那上面的例子举例，写了两个方法一个是整型数据，一个是 double 类型数据，返回的数据类型相同，参数相同，类型不同。

```java

public int add(int num1, int num2) {
   return num1 + num2;
}
public int add(double num1, double num2) {
    return (int)(num1 + num2);
}
```

## 3、传值问题

写一个函数，交换两个变量的值。

```java 
public void swap(int a, int b)　{
    int temp = a;
    a = b;
    b = temp;
}
```

使用该方法交换两个变量的值，我们发现变量的值还是没变，这是因为传入参数时，只传了变量中存放的值，没有传入变量的地址，所以导致原始值没有交换。

```java
int m = 12;
int n = 13;
swap(m, n)
System.out.println(m, n); // 12 13
```

传入数组会发生什么呢?

```java
    int[] arr  = {1,2};
    public void update(int a[]) {
        a[0] = 5;
    }
    math.update(arr);
    System.out.print(arr[0]); // 5
```

传入数组会改变传入的数组，因为数组传递的时数组的首地址，也就是arr[0]。

## 4、可变参数列表

给方法传入的值为不确定的话，可以使用可变参数列表。例：

```java
public void main(int... n){
    for(int i : n){
        System.out.println(i);
    }
}
```

这里传入的参数都被 n 接受，n 是一个数组。

:::warning 注意
有多个参数时，可变参数列表必须放到最后。下面的用法是错误的：
`main(int... n, int m)` ×
:::

<comment-comment/> 
