# 类

类是面向对象语言的核心。

类相当于一个工厂，可以比作为汽车制造工厂，你创建工厂之后，需要定制自己想要的汽车。

工厂只要建一次，就可以造很多车。

![工厂](car.jpg)

类也是这个道理，只不过类是程序的制造工厂。

## 1、创建

这是创建了汽车的工厂，不过还没有，制作具体零件的机器，制作的零件的机器相当于方法。
汽车还应该有一些属性，比如颜色，牌子等等。

```java
public class AutomobileFactory {}
```

下面创建属性，属性需要我们定制的。

```java
public class AutomobileFactory {
    String make;  // 牌子
    String color; // 颜色
    public AutomobileFactory(String make, String color) {
        this.make = make;
        this.color = color;
    }
}
```
make, color 这些都是类的属性。创建的每一个实例都有自己独有的属性。

`AutomobileFactory` 叫构造函数，当使用 `new` 关键字创建类的时候被执行。
如果不写这个方法，系统默认会创建一个空的方法，并且会执行它。



现在可以用工厂（类）制造汽车了。

```java
AutomobileFactory benz = new AutomobileFactory("Benz", "black");
AutomobileFactory bmw = new AutomobileFactory("BMW", "red");

System.out.println(benz.color); // black
System.out.println(bmw.color);  // red
```

制造了两台车，一辆黑色奔驰，一辆红色宝马。

现在可以上路了，我们写一个上路的方法，记录上路的时间。

```java
public class AutomobileFactory {
    String make;  // 牌子
    String color; // 颜色
    int kilometer; // 跑的路程
    public AutomobileFactory(String make, String color) {
        this.make = make;
        this.color = color;
    }
    
    public void run(int number) {
        this.kilometer += number;  // 每一次上路都会记录
    }
}
```

写好了之后试一下，

```java
AutomobileFactory benz = new AutomobileFactory("Benz", "black");
AutomobileFactory bmw = new AutomobileFactory("BMW", "red");

benz.run(5); // 奔驰跑了5公里
bmw.run(3);  // 宝马跑了3公里

System.out.println(benz.kilometer); // 5
System.out.println(bmw.kilometer); // 3
```

这个就是类的基本使用。

## 2、继承类

现在我们想造一个只生产奔驰的工厂，我们发现，有一些方法我们可以用 `AutomobileFactory` 工厂的机器，比如颜色，`run` 方法等。
那么我们可以继承 `AutomobileFactory`。

```java
public class Benz extends AutomobileFactory {}
```

`extends` 的意思就是 `Benz` 类继承 `AutomobileFactory`类。


```java
public class Benz extends AutomobileFactory {
    String model;
    public Benz(String make, String color, String model){
        super(make, color);
        this.model = model;
    }
}
```
使用 `super` 关键字，可以把参数传递给父类（这里是 AutomobileFactory）, `super` 关键字还可以访问父类中的任何成员。比如：

```java
super.run(10);
```

::: warning 注意
不能同时使用 this 和 super 关键字。
:::

如何使用的，看一下面的使用：

```java
Benz benz = new Benz("Benz", "black", "G500");

System.out.println(benz.model); // G500
System.out.println(benz.make);  // Benz
```


## 3、执行顺序


这是父类代码块：

```java
public class AutomobileFactory {
	static String  id = "FACTORY_001";
    String make;  // 牌子
    
    // 静态代码块
    static {
    	System.out.println("父类静态代码块");
    }
    {
        System.out.println("父类代码块");
    }

    public AutomobileFactory(String make, String color) {
        System.out.println("父类构造");
        this.make = make;
        this.color = color;
    }
}
```

字类代码块：

```java
public class Benz extends AutomobileFactory {
    String model;
    static String  name = "BENZ_001";
    // 静态代码块
    static {
        System.out.println("子类静态代码块");
    }
    
    {
        System.out.println("子类代码块");
    }
    static String  id = "ANIMAL_001";
    public Benz(String make, String color, String model){
    	super(make, color);
        this.model = model;
        System.out.println("子类构造");
    }
}

```

执行顺序如下：
```
父类静态代码块
子类静态代码块
父类代码块
父类构造
子类代码块
子类构造
```



## 4、toString 方法

Car 是一个创建的类，我们实例化之后打印输出看一下，实例会打印什么？

```java
public class Car {
	public String name;
	public String color;
	public Car(String name, String color) {
		super();
		this.name = name;
		this.color = color;
	}
}

Car benz = new Car("G500", "black");
System.out.println(benz);
// com.Car@26f0a63f
```

我们发现会打印内存中的地址。

我们重写 `toString` 方法看一下，会发生什么？

```java
// Car 类中添加
@Override
public String toString() {
    return "Car [name=" + name + ", color=" + color + "]";
}
```

之后实例化，打印以下结果：

```java
Car benz = new Car("G500", "black");
System.out.println(benz);
// Car [name=G500, color=black]
```

不难发现，打印时调用了 toString 方法。

<comment-comment/> 
