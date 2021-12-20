### xml基础

文件格式存储文档，可用于网络中数据传输。

  ## 1、文档结构

- 有声明
- 有一个根节点



声明包括：

- 版本号
- 字符集

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!--人力资源管理系统  -->
<hr>
	<employee no="1102">
		<name>张三</name>
		<age>18</age>
	</employee>
</hr>
```

跟 HTML 没有太多的区别，如果需要显示特殊文本，使用 `CDATA` 标签，包裹即可。

文本中含有 HTML 内容，或包含特殊字符：

```xml
<hr>
	<![CDATA[
	这是特殊文本显示
	 <h1>Hello World</h1>
	]]>
</hr>
```



## 2、DTD

DTD是约束 XML 文档格式的文件，以 `.dtd` 结尾。

这是一个简单的规则，定义 hr 节点下，只允许出现一个 employee 子节点。

```dtd
<!ELEMENT hr (employee)>
```

下面介绍一些常用的规则：

employee 必须包含两个节点，顺序不能换。

```dtd
<!ELEMENT employee (name,age)>
```



```dtd
employee 至少出现一次
<!ELEMENT hr (employee+)>

0个或多个节点
<!ELEMENT hr (employee*)>

最多出现一个节点
<!ELEMENT hr (employee*)>
```

文本属性。

```dtd
<!ELEMENT name (#PCDATA)>
```

规则写好了，如何在 xml 文件中使用这个规则呢？

我们需要造 xml 文件中使用 `DOCTYPOE` 引入规则文件即可。实例如下：

```xml
<!DOCTYPE hr SYSTEM "hr.dtd">
```

hr 是根节点，"hr.dtd"  是文件路径。



下面是一个完整的例子：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hr SYSTEM "hr.dtd">

<hr>
	<employee no="001">
		<name>张三</name>
		<age>16</age>
	</employee>
</hr>
```

对用的 dtd 文件如下：

```dtd
<?xml version="1.0" encoding="UTF-8"?>

<!ELEMENT hr (employee)>

<!ELEMENT employee (name, age)>
<!ATTLIST employee no CDATA "">

<!ELEMENT name (#PCDATA)>
<!ELEMENT age (#PCDATA)>
```



## 3、XML Schema

XML Schema 也是是约束 XML 文档格式的文件，以 `.xsd` 结尾。





## 4、DOM4j

解析 XML 文件的 java 库由于 dom4j 是第三方包，我们需要下载，提前[下载](https://dom4j.github.io/)。

将下载好的包，放入到项目中，引入对应的构造函数。

下面是一个宽恕开始例子。

```java
package com.dom4j;

import java.util.List;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;


public class HrReader {
	public void readXml() {

		String file = "D:\\7-java\\xml\\src\\hr.xml";
		// 读取 XML 文件的核心类，用于解析 XML ,以树的形式保存在内存中
		SAXReader reader = new SAXReader();
		try {
			Document document = reader.read(file);
			
			// 获取根节点
			Element root = document.getRootElement();
			
			// 获取指定的集合
			List<Element> employees = root.elements("employee");
			// 获取集合
			for(Element employee : employees ) {
				// Element方法获取为子结点的对象
				Element name = employee.element("name");
				String txt = name.getText();
				System.out.println(txt);
				System.out.println(employee.elementText("age"));
				
				// 获取属性
				Attribute att =  employee.attribute("no");

				System.out.println(att.getText());
			}

		} catch (DocumentException e) {
			e.printStackTrace();
		}
		
	}
	
	
	public static void main(String[] args) {
		HrReader hr = new HrReader();
		hr.readXml();
	}
}
```



以上是读取读取，遍历操作，下面介绍跟新 dom 的操作。



```java
 package com.dom4j;

import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

public class HrWriter {
	public void writeXml() {
		String file = "D:\\7-java\\xml\\src\\hr.xml";
		
		SAXReader reader = new SAXReader();
		
		try {
			// 1、 获取DOM
			Document dom = reader.read(file);
			Element root = dom.getRootElement();
			// 2、 添加信息
			Element employee = root.addElement("employee");
			employee.addAttribute("no", "002");
			Element name = employee.addElement("name");
			name.setText("Tom");
			Element age = employee.addElement("age");
			age.setText("20");
			
			// 3、 写入到文件中去
			Writer writer = new OutputStreamWriter(new FileOutputStream(file), "UTF-8");
			dom.write(writer);
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		HrWriter hrWriter = new HrWriter();
		hrWriter.writeXml();
	}
}
```



## 5、XPath 表达式

XPath 是 XML 文档中查找数据的语言。

下面是常用的基本表达式：

| 表达式   | 描述                     |
| -------- | ------------------------ |
| nodename | 选取此节点所有子节点     |
| /        | 从根节点选取             |
| //       | 全文查找，符合条件的节点 |
| .        | 选取当前节点             |
| ..       | 当前节点的父节点         |
| @        | 选取属性                 |

再介绍个，XPath表达式的基本案例：

| 路径表达式      | 结果                                                         |
| --------------- | ------------------------------------------------------------ |
| bookstore       | 选取 bookstore 元素的所有子节点                              |
| /bookstore      | 选取根元素 bookstore                                         |
| bookstore/book  | 选取属于 bookstore 的子元素的所有 book 元素                  |
| //book          | 选取所有 book 子元素，而不管它们在文档中的位置               |
| bookstore//book | 选择属于 bookstore 元素的后代的所有 book 元素，而不管它们位于 bookstore 之下的什么位置 |
| //@lang         | 选取名为 lang 的所有属性。                                   |

下面是谓语表达式，需要写在 `[]` 中间。

| 路径表达式              | 结果                   |
| ----------------------- | ---------------------- |
| /bookstore/book[1]      | 第一个 book 元素       |
| /bookstore/book[last()] | 最后一个 book 元素     |
| /bookstore/book[@lang]  | 用于 lang 的 book 元素 |



## 6、Jaxen 介绍

java 编写的 XPath 库。

jaxen 也是第三方库，所以现需要引入到项目中，这是阿里云[下载地址](https://maven.aliyun.com/mvn/search)

这是一个完整的例子。

```java
package com.dom4j;

import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

public class XPath {
	public void xpath(String xpath) {
		String file = "D:\\7-java\\xml\\src\\hr.xml";
		SAXReader reader = new SAXReader();
		try {	
			Document dom = reader.read(file);
			List<Node> nodes = dom.selectNodes(xpath);
			
			for(Node node: nodes) {
				Element emp = (Element)node;
				System.out.println(emp.elementText("name"));
				System.out.println(emp.elementText("age"));
			}
		} catch (DocumentException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		XPath tst = new XPath();
        
        // 获取/hr/employee下的信息
		tst.xpath("/hr/employee");  
        
        // 筛选 age 大于18的
        tst.xpath("/hr/employee[age>18]");
        
        // 获取名字等于张三的员工的信息
        tst.xpath("/hr/employee[name='张三']");

        // 获取属性名为的信息
        tst.xpath("/hr/employee[@no='002']");
        
        // employee 的第一个子节点 
        tst.xpath("//employee[1]");
        
        // employee 的最后一个子节点 
        tst.xpath("//employee[last()]");
        
        // employee 的前两个子节点 
        tst.xpath("//employee[position<2]");
        
        // 组合， 1，3 位置的子节点
        tst.xpath("//employee[1] | //employee[3]");
	}
}
```


 
 <comment-comment/> 
 