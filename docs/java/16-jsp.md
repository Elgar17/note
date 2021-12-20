### JSP 入门



JSP全称Java Server Page，直译就是“运行在服务器端的页面”。 

降低网页开发难度。

创建一个 index.jsp 页面，并切添加以下内容：

```jsp
<body>
	<%
		String[] fruits = {"banana", "aplle", "limon"};
		for(int i = 0; i < fruits.length; i++) {
			out.println("<li>" + fruits[i] + "</li>");
		}
	%>
</body>
```

在浏览器访请求时，渲染完成后：

```html
<body>
    <li>banana</li>
    <li>aplle</li>
    <li>limon</li>
</body>
```

## 1、基本语法

上面例子中使用的 jsp 代码块，语法很简单：

```jsp
<%
	// java 代码逻辑
%>
```



声明构造模块，编写构造函数：

```jsp
<%!
	public int add(int a, int b){return a + b;}
%>
```



jsp 输出指令，例如：

```jsp
<%=
	"<b>" + name + "</b>"
%>
```



jsp 处理指令：

```jsp
<%@
	page import="java.util.*"  // 定义全局设置
	include file="head.jsp"  // 其他 jsp 页面与其他 jsp 页面合并
	taglib import="java.util.*"  // 引入标签库
%>
```



还有注释：

```jsp
<%-- 注释 --%> // 不做任何处理
// /* 注释 */  // jsp 中的 java 代码进行注释
<!-- html 注释 --> // 不会被浏览器执行
```



## 2、JSP内置对象

JSP 页面也是将运行 java 代码是，首先会创建一个 servlet 服务。

所以帮我们内置了一些对象，常用对象如下：

- request
- response
- out
- session



```jsp
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String url = request.getRequestURL().toString();
		response.getWriter().println(url);
	%>
	
	<%
		out.println("Hello JSP!");
		session.setAttribute("name", "Jerry");
		out.println(session.getAttribute("name"));
	%>
</body>
</html>
```


 
 <comment-comment/> 
 