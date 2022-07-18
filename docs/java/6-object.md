# Object 类

Object 类是所有类的根，我们创建的类都继承自 Object。
如果了解 JavaScript 语言了解，JavaScript 也是这样的设计。

## 1、方法重写


通用的 `toString` 方法，但因的结果为什么不同呢？

```java
Animal cat = new Animal("cat");
String name = new String("hello");

System.out.println(cat.toString());
// com.animal.Animal@4926097b

System.out.println(name.toString());
// hello
```

这是因为 `String` 类实现的时候，重写了 `toString`
 方法。`toString` 方法是，继承 Object 类的，在`String` 中覆盖了。
 同样的 `equals` 方法也是一样。


## 2、final 关键字

如果编写的类，不希望被其他类继承，使用 final 关键字可以禁止继承这个类。

```java
public final class Car {}

// × 报错：Car 类不允许继承
public class Benz extends Car{} 
```

final 关键字还可以用于方法，变量。

```java
public final void sayHi(){
    System.out.println("Hi!");  
}
// 变量使用 final
public void sayNum(){
    final int num = 10;
    num = 12; // × 报错
    System.out.println(num);
}

```

final 还可以修饰引用类型的数据，比如创建的一个类。
要注意的是，修饰后，不能改变修饰类的地址，可以更改属性。

```java

final Car benz = new Car("benz", "black");
benz.name = "benz_g500" // 可以修改属性
benz = new String("benz"); // × 报错：不可以修改
```

::: warning 注意
不能修饰构造方法。
:::



## 3、abstract 关键字

abstract 关键字修饰的类叫**抽象类**。

```java
  public abstract class Animal{}
```

抽象类不能直接实例化，也就是不能使用 `new` 关键字创建一个实例。

```java
Animal cat = new Animal(); //  ✖ 错误
```

abstract 关键字也可以修饰**叫抽象方法**，修饰的方法必须在字类中重写。不能继承父类的方法。

```java
public abstract class Animal {
	public String name;
	public Animal(String name) {
		this.name = name;
	}
	public abstract void run();
}
```

在创建子类的时候，必须重写 `run` 方法，否则会报错。不过将子类也修饰为 `abstract` ，可以解决这个报错。	

::: warning 注意

1、抽象方法在父类中只能定义，不能写实现；

2、修饰方法必须在抽象类中；

3、abstract不能与 static, final, private 共同使用。

:::



## 4、内部类

一个类里面可以包含另一个类，这种类叫做内部类。

```java
// 外部类
public class Person {
    int age;
    // 内部类
    public Heart {
        public void beat() {
            return "心脏跳动~~";        
        }
    }
}
```

内部类分四种：

- 成员内部类
- 静态内部类
- 方法内部类
- 匿名内部类



**（1）成员内部类**

```java
// 外部类
public class Person {
    int age;
    public Heart getHeart() {
        return new Heart();
    }
    // 成员内部类
    public Heart {
        public String beat() {
            return "心脏跳动~~";        
        }
    }
}
```

由于 `Heart` 在 `Person` 内部的类，实例化时，不能够直接访问的。实例化内部类，首先实例化外部的类。

```java
Person.Heart myHeart = new Person().new Heart();
myHeart.beat();
```

不过这种实例化方法，看起来很不友好，通常的编程习惯是，创建一个实例化内部类的方法。我们写一个，像 `getHeart` 这样的方法。

 ```java
// 外部类
public class Person {
    int age;
    public Heart getHeart() {
        return new Heart();
    }
    // 成员内部类
    public Heart {
        public String beat() {
            return "心脏跳动~~";        
        }
    }
}
 ```

之后实例化时，看起来更加语义化，更容易读懂。

```java
Person xiaoMing = new Person();
Person.Hearrt myHeart = xiaoming.getHeart();
myHeart.beat(); // "心脏跳动~~"
```

<comment-comment/> 
