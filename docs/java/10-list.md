# 集合

- Collection：类的对象，分为List，Queue，Set
- Map：键值对，HashMap是实现



## 1、List

**重复有序**的集合，可以精确控制每个元素的插入，删除位置。

List 有两个实现类：

- ArrayList：长度可变，很想数组；
- LinkedList：链表。

```java
List arr = new ArrayList();

// 添加类型
arr.add("JavaScript");
arr.add("Java"); 
arr.add("Go");

// 移除
arr.remove("Java");
arr.remove(2);

System.out.println(arr.size());

// 遍历
for(int i = 0; i < arr.size(); i++) {
    System.out.println(arr.get(i));
}
```



## 2、Set

**不重复**的元素集。这里介绍 HashSet ，HashSet 的查找和存取性能优越。

```java
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

// 实例化
Set word = new HashSet();

// 添加元素
word.add("red");
word.add("black");
word.add("blue");

// 遍历迭代器显示元素
Iterator it = word.iterator();
while(it.hasNext()) {
    System.out.println(it.next());
}

// 查找
if(word.contains("red")){
    
}
```

## 3、Map

Map 是一个键值对的结构，以 key-value 形式存储的。key 的值不能重复 。

```java
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class GoodsTest {
	
	public static void main(String[] args) {
		Map<String, String> goods = new HashMap<String, String>();
		
		// 添加信息
		goods.put("apple", "苹果");
		goods.put("banana", "香蕉");
		
		// 遍历输出
		Iterator<String> it = goods.values().iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
		// 香蕉
		// 苹果
	}
}
```



## 4、Collections

内部提供的一个工具类，可以将数字进行排序，等操作。

```java
List<Integer> list = new ArrayList<Integer>();
list.add(123);
list.add(12);

// 排序数组
Collections.sort(list);
for(int n:list) {
    System.out.println(n);
}
```

排序数字是从小大的顺序进行排序。 如果是字符串的话，是按照阿斯克码进行排序的。

<comment-comment/> 
