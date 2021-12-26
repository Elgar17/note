# 接口(interface)

通过接口定义某一批类所需要遵守的规范。



## 1、方法的定义

下面是定义接口：

```java
public interface Iphone {
    public void photo();
}
```

如何使用接口呢？使用 `implements` 关键字，可以使用接口。接口中定义的方法必须要实现。

```java
public class camera implements Iphone {

	// 自动生成的方法存根
	@Override
	public void photo() {
		System.out.print("拍照");
	}
	
}
```

::: tip
接口通常以大写的 I 字母开头，这是书写的习惯，没有强制要求。

接口的修饰符通常是 `public`。
:::



## 2、常量的定义

在接口中也可以定义常量。

```java
public interface Iphone {
    public int num = 10;
}
```

使用时，直接使用使用即可。

```java

public class camera implements Iphone {

	@Override
	public void photo() {
		System.out.print(Iphone.num);
        Iphone.num = 10; // ❌ 错误：不允许修改
	}
}
```



## 3、default方法

 提供默认方法， 使用 `default` 之后，也可以不写实现。

```java
interface Person {
    String getName();
    // 默认方法
    default void run() {
        System.out.println(getName() + " run");
    }
}
```

<comment-comment/> 
