# 设计模式

简单地说，设计模式是通用问题的解决方案。

## 1、单列模式

单列模式满足三个要点：
- 创建私有构造
- 创建私有静态实例
- 创建静态方法  


饿汉式模式，使用之前已经实例化的。 

```java
package com.object;

// 饿汉式：创建时初始化
public class Singlepro {
    int num = 1;
    // 1、创建私有构造
    private  Singlepro() {
        
    }

    // 2、创建实例
    private static Singlepro instance = new Singlepro();

    // 3、创建静态方法
    public static Singlepro getInstance() {
        return instance;
    }
}

```

使用：

```java
public static void main(String[] args) {
    Singlepro one = Singlepro.getInstance();
    System.out.print(one.num);
}
```

懒汉式模式，使用时经实例化的，当第一次调用 getInstance 方法时才初始化。

```java
// 饿汉式：创建时初始化
public class Singlepro {
    int num = 1;
    // 1、创建私有构造
    private  Singlepro() {
        
    }

    // 2、创建实例
    private static Singlepro instance = null;

    // 3、创建静态方法
    public static Singlepro getInstance() {
        if(instance == null)
            instance = new Singlepro();
        return instance;
    }
}
```

优点：

- 只创建一个实例对象，大大节省内存空间
- 避免频繁创建对象和销毁对象
- 避免对共享资源的多重占用

缺点：
- 很难扩展
- 未使用可能被回收，丢失状态
 
 <comment-comment/> 
 