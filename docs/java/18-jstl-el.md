# JSTL 与 EL 表达式



## 1、EL 表达式

EL 表达式主要用于，简化 JSP 的输出语句，使用 EL 表达式，程序更具有可读性。

这是一个 servlet 服务，stu 是一个学生的数据，我们将数据发送给 `el.jsp` 然后渲染到页面。

```java
Student stu = new Student("Jerry", "16");
req.setAttribute("stu", stu);
req.getRequestDispatcher("/el.jsp").forward(req, resp);
```

在 `el.jsp` 中使用el 表达式可以获取数据了：

```xml
<body>
    <!-- el 内容渲染为 Jerry -->
	<h2>${requestScope.stu.name}</h2>
    <!-- el 内容渲染为 16 -->
	<h2>${requestScope.stu.age}</h2>
    
    <!-- 获取前端传入的参数: 获取 name -->
	<h2>${param.name}</h2>
</body>
```



EL 表达式中，有四种作用域对象：

- pageScope：从当前页面取值
- requestScope：从当前请求中获取属性值
- sessionScope：从当前会话中获取属性值
- applicationScope：从当前全局应用中获取属性值

也可以忽略作用域对象，忽略时，从作用域小到大的顺序去查找获取。



## 2、JSTL 标签库

JSP 标准标签库，用于简化 JSP 开发。

JSTE 需要我们[下载安装](https://tomcat.apache.org/)的到工程中，下载后放入工程的 `WEB-INF/lib`目录中即可。

jstl 按照功能分为 5 类标签库：

- 核心标签库：core
- 格式化标签输出：fml
- SQL操作标签库：sql
- xml标签库：xml
- 函数标签库：function



这里介绍一些前两种，其他不是很常用。

使用时 JSP 中添加一个 taglib:

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

属性说明：

url: 引入标签库的路径

prefix: 标签库的前缀

判断标签的介绍与使用:

- `<c:if>`：单分支
- `<c:choose>`、`<c:when>`、`<c:otherwise>`：多分枝



## 3、json 与 java 



java 对象也可与 json 互相转换。

这里介绍 FsatJson ，FsatJson 是阿里巴巴开源的项目工具库。

导入库之后，这是一个简单的例子：

```json
// 这是创建的一个类
public class Employee {
	private String name;
	private Integer empno;
	@JSONField(format = "yyyy-MM-dd HH:ss SSS")
	private Date cdate;
}

Employee e1 = new Employee("tom", 001, new Date());
// 将对象转化成 JSON 字符串
String json = JSON.toJSONString(e1);
System.out.print(json);

// 将 JSON 字符串转对象
Employee e2 = JSON.parseObject(json, Employee.class);
System.out.print(e2);
```



## 4、正则表达式



正则表达式是匹配字符串中某个字符。

**（1）单个字符**

下面是匹配单个字符：

| 正则   | 说明                 | ✔    | ❌    |
| ------ | -------------------- | ---- | ---- |
| A      | 精准匹配             | A    | a    |
| x\|y   | 允许出现以下两个字符 | y    | z    |
| [xyz]  | 字符集               | z    | a    |
| [a-z]  | 范围                 | g    | Z    |
| [^xyz] | 不允许出现           | a    | z    |



**（2）元字符**

| 正则 | 说明                     | ✔    | ❌    |
| ---- | ------------------------ | ---- | ---- |
| \d   | 单个数字                 | 1    | a    |
| \D   | 匹配数字以外的单个字符   | y    | 2    |
| \w   | 字母数字下划线           | Y    | ￥   |
| \W   | 字母数字下划线以外的字符 | @    | Z    |
| .    | 任意字符                 | a    | z    |



**（3）多次重复匹配**

| 正则    | 说明          | ✔    | ❌    |
| ------- | ------------- | ---- | ---- |
| A{3}    | N个字母       | AAA  | AA   |
| A{3,}   | 至少出现n次   | AAA  | AA   |
| \d{3,5} | 约定出现长度  | 1234 | 12   |
| \d*     | 相当于\d{0,}  | 123  | --   |
| \d+     | 相当于\d{1,}  | 12   |      |
| \d?     | 相当于\d{0,1} | 1    | 22   |



**（4）定位匹配**

| 正则    | 说明          | ✔    | ❌    |
| ------- | ------------- | ---- | ---- |
| ^A.* | 开头  | ABC | BCA |
| .*A$ | 结尾 | CBA | ABC |
| ^A.*A$ | 开头结尾 | ACCA | CAAC |



**（5）贪婪模式与非贪婪模式**



**贪婪模式:**

在满足条件的情况系下，尽可能多匹配。

比如，`\d{1,3}` 传入 123 时，可以匹配1个，2个或3个，如果是贪婪模式，结果为 123。

**非贪婪模式：**

满足条件的情况系下，尽可能少匹配。

`\d{1,3}?` ，后面添加问号，说明非贪婪模式，那么结果为 1。



案例：

`<a herf="www.baidu.com">百度</a><a herf="www.sina.com">新浪</a>`
假设获取这个字符串中的两个网址
正则为 `".*"` ，匹配的结果为 ：

```
"www.baidu.com">百度</a><a herf="www.sina.com"
```

使用贪婪模式匹配的结果如下：

```
 "www.baidu.com"
 "www.sina.com"
```



**（6）表达式分组**

加入要匹配以下字符串：`abababcdcdcd`

```
(ab){3}(cd){3}
```

使用小括号将表达式进行分组。
 
 <comment-comment/> 
 