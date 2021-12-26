# servlet

servlet 是开发动态网页的技术。

![tomcat](tomcat.png)

## 1、Tomcat

Tomcat 是一款当前最流行，免费的 web服务器。

servlet 是服务器小程序，用于生成动态  web。



**(1)安装 Tomcat**

首先需要安装 JDK。

安装按 JDK 之后，到 Tomcat 官网[下载](https://tomcat.apache.org/)需要的版本，进行解压。

使用终端进入刚进行解压的 tomcat 目录下的 bin 目录，使用以下命令启动 tomcat:

```bash
startup.bat
```

出现新的命令行窗口，说明安装成功，浏览器访问: http://localhost:8080/ 就可以看到启动的页面。

如果有错误提示，可能没有添加 JAVA_HOME 系统路径，路径地址为安装 JDK 的路径。

最后关联 eclipse 就可以使用了，这里没有详细介绍。



在这里我围绕一件事讨论：

浏览器输入网址按下回车发生了什么？

1. 检查本地配置文件 `C:\Windows\System32\drivers\ect\host` 有没有，这个域名映射 ip 地址。
   - 有： 给这个 ip 对应的服务器，发送一个 http 请求
   - 没有： 给dns发送请求，获取域名对应的 ip 地址 ， 给这个 ip 对应的服务器，发送一个 http 请求
2. 浏览器收到服务器的响应



**(2)Servlet 开发步骤**

- 创建 servlet 类，继承HttpServlet
- 重写 service 方法，编写逻辑
- 配置 web.xml，配置路径

这是创建的一个类，继承 `HttpServlet`，重写了 service 方法，该方法有两个参数，一个是请求，一个是响应。

```java
package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Simple extends HttpServlet {
	public void service(HttpServletRequest req,  HttpServletResponse res) throws IOException {
		PrintWriter out = res.getWriter(); // 响应
		out.println("hello Tomcat");
	}
}
```

前两部都完成了，我们将给这个路径绑定 URL 。 

在web.xml 文件中添加配置

```xml
<!-- simple -->
<servlet>
  	<servlet-name>simple</servlet-name>
  	<servlet-class>servlet.Simple</servlet-class>
  </servlet>
  <servlet-mapping>
  	<servlet-name>simple</servlet-name>
  	<url-pattern>/simple</url-pattern> // 这是访问的地址
  </servlet-mapping>
```

配置好之后，启动 tomcat 服务器，访问 http://localhost:8080/Test/simple 就可以看到响应。

地址中的 Test 是项目名，simple 是 web.xml 文件中配置的 `url-pattern` 一致。

## 2、Servlet 请求参数

我们在处理发来的请求时，可以通过 `req.getMethod()` 方法获取到当前请求的方法。

这里介绍最常用的方法:

- get
- post

 

**（1）get 请求的处理**

在 Servlet 中我们通过，以下两种方法获取到 get 请求中的请求参数。

两个方法都需要传入字符串，

```java
req.getParatmeter(); // 单个参数
req.getParatmeterValues(); // 多个参数
```

参数说明：

需要传入一个字符串，需要获取的参数的名字。

getParatmeter 方法返回 `String`类型的数据，getParatmeterValues 方法返回 `String[]` 类型的数据。

下面是一个完整的例子：

这是我们写好的默认页面，提交一个 get 请求的表单。

```html
<form action="/Test/simple" method="get">
	姓名：
	<input name="name">
	<br/>
	爱好：
	<br>
	<input type="checkbox" name="hobbies" value="football" checked>⚽
	<br>
	<input type="checkbox" name="hobbies" value="pingpang">🏀
	<br/>
	<input type="checkbox" name="hobbies" value="music">🎵
	<br/>
	<input type="submit" value="提交">
</form>
```
这是对应的类文件：

```java
String name = req.getParameter("name");
String[] values = req.getParameterValues("hobbies");

PrintWriter out = res.getWriter(); // 响应
for(int i = 0; i < values.length; i++) {
    out.println(values[i]); 
}

out.println(name);
```



**（2）Post 请求的处理**

关于 get 请求和 post 请求这里不做过多的介绍了。

接受 post 请求的方法还是一样，我们在上面的基础上修改一下，表单中的 method 属性为 post 即可。

post 方法的参数是在请求体中传输的，所以当我们使用 post 传输数据时，url 中看不到数据。

```html
<form action="/Test/simple" method="post">
</form>
```



上面的情况是一起处理 get 和 post 请求，通常在开发过程中我们想要分别处理 get 请求和 post 请求。

servlet 也提供了，分别处理不同请求的方法，下面就是一个例子：

```java
public class ReqMess extends HttpServlet{
	
	// 处理 get 请求
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		String name = req.getParameter("name");
		res.getWriter().println("<h1 style='color:green;'>" + name +"</h1>");
	}
	
	// 处理 Post 请求
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
		String name = req.getParameter("name");
		res.getWriter().println("<h1 style='color:red;'>" + name +"</h1>");
	}
}
```

## 3、Servlet 声明周期



- 装在 - web.xml
- 创建 - 构造函数
- 初始化 - init()
- 提供服务 - service()
- 销毁 - distory()

这些方法都在 构造函数中，可以重写



## 4、注解



可以使用注解，可以简化 web 程序的的配置，不需要各个页面之间跳过来，跳过去。

核心注解：

```java
@WebServlet
```



```java
@WebServlet("/anno")
public class Annotaition extends HttpServlet{

	@Override
	protected void service(HttpServletRequest arg0, HttpServletResponse arg1) throws ServletException, IOException {
		arg1.getWriter().println("annotation!");
	}
	
}
```



## 5、启动时加载



`web.xml` 文件使用 `<load-on-startup>` 设置启动加载。

启动时加载有 0 ~ 9999 的优先级，启动时加载通常用于系统的预处理。

```xml
  <servlet>
  	<servlet-name>init</servlet-name>
  	<servlet-class>servlet.InitServlet</servlet-class>
  	<load-on-startup>0</load-on-startup>
  </servlet>
```



```java
public class InitServlet extends HttpServlet {

	@Override
	public void init() throws ServletException {
		System.out.println("正在初始化！！");
	}
	
}
```



也可以使用注解来配置，使用注解配置时，需要绑定一个url。

```java
@WebServlet(urlPatterns = "/unused", loadOnStartup = 2)
public class InitServlet extends HttpServlet {

	@Override
	public void init() throws ServletException {
		System.out.println("正在初始化！！");
	}
	
}
```



::: tip 注意

不写 url 会导致配置失败。

:::



## 6、web.xml

项目中的 web.xml 是配置文件，也可以设置以下内容：

- 修改默认首页
- Servlet 通配符映射及初始化参数
- 设置404，500 等状态码默认页面



**（1）默认首页**

welcome-file 是设置默认首页的，这里默认首页是 `index.html`，可以设置多个默认首页，排在前的优先展示

```xml
<welcome-file>index.html</welcome-file>
```



**（2）url 路径**

url 通常使用注解(@webServlet)或 web.xml 中配置。

```java
@webServlet("/cookies")   // 匹配/cookies
@webServlet("/cookies/*") // 匹配/cookies下的所有路径
```



```java
String url = req.getRequestURL().toString();
String id = url.subString(url.lastIndexOf("/") + 1);
System.out.println(id);
```

**（3）设置404，500**

404 ，500等页面是，tomcat 默认生成的，我们可以自定义这些页面：

```xml
<error-page>
	<error-code>404</error-code>
    <location>/erorr/404.html</location>
</error-page>
```

<comment-comment/> 
