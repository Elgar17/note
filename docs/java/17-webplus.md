# web 进阶



- java web 核心特性
- java web 核心对象
- JSP 九大内置对象



## 1、请求转发重定向

在 JSP 页面开发中，如果需要重定向或转发，使用以下方法：

- `req.getRequestDispatcher().forward()`： 请求转发
- `res.sendRedirect()`： 响应重定向

请求转发是将，浏览器发来的请求第一个 `servlet1` 接受以后，转发给另一个 `servlet2` ，不会对发来的请求做任何修改，最后 `servlet2` 返回了浏览器响应。

```java
req.getRequestDispatcher("/index").forward(req, res);
```

响应重定向是，从浏览器端跳转，跟请求转发的区别是，产生两次请求，跳转在浏览器端完成。

```java
res.sendRedirect("/index");
```

::: tip

这里在程序中指的 res 和 req 是，在请求中的 request 和 response 对象。

:::

## 2、自定义属性

在请求象上，我们可以自定义属性，可以使用：

- `req.setAttribuet`：设置属性
- `req.getAttribute`：获取属性

自定义属性一般用于，请求转发中：

```java
req.setAttribuet("username", "admin");

// 跳转到另一个 servlet
String name = (String)req.getAttribute("username");
```



## 3、Cookie

保存在浏览器本地的文本内容。通常，cookie 中存放用户登录状态，用户资料等信息。

通常存放在以下目录中：

`C:\Users\think\AppData\Local\Google\Chrome\User Data\Default`

这个目录下有 cookies 的文件，我们使用记事本打开之后，会出现乱码，这是因为 cookie 时，会尽心加密存储的。

这是存放 cookie 的方法：

```java
// 创建一个 cookie
Cookie cookie = new Cookie("user", "admin");
// 保存到浏览器的 cookie 中
resp.addCookie(cookie);
```



如果我们要读取浏览器发来请求中的 cookie 方法，读取方法如下：

```java
Cookie[] cs = req.getCookies();
for(Cookie c : cs){
    System.out.println(c.getName() + ":" + c.getValue());
}
```



## 4、Session

Session（用户会话）用于保存 Cookie 对应的数据。Session 存放在 Tomcat 的内存中，具有时效性，默认存放 30 分钟。

存放在服务器中，相对与 cookie 比较安全，通常存放用户信息。

那么，保存在服务器的数据是如何辨别用户的呢？

Session 是通过浏览器 cookie 的 seessionId 值获取用户数据，这里还需要依赖用户。

```java
// 获取用户session 
HttpSession ses = req.getSession();
// 设置
ses.setAttribute("name", "Tom");

// 获取
String name = (String)ses.getAttribute("name");
System.out.println(name);
```

Tomcat 对每一个浏览器会话，都生成一个 sessionId。

原理：

SessionId 是保存在 Cookie 中，当第一次新请求发来时被创建一个唯一的sessionId，并且存放在 cookie 中。

我们打开浏览器控制面板，在 cookie 中可能会看到，类似这样的字符串：

```
JSESSIONID=4C870A60AF0EE7E8BED71D2628CC0081
```



## 5、servletContext

servletContext（servlet上下文对象），web 应用的全局对象。

一个 web 应用指挥创建一个 servletContext 对象。

```java
// servletContext
ServletContext ctx = req.getServletContext();
//　设置属性
ctx.setAttribute("name", "app1");
// 获取
String ctxName = (String)ctx.getAttribute("name");
```



## 6、设置字符集

**（1）解决post 请求乱码**

防止出现乱码，我们在请求和响应中都使用 `UTF-8` 字符集，可以解决乱码问题。

 tomcat 默认是使用 `iso-8859-1` 字符集来解析的，所以当我们使用 post 提交表单时，如果表单中包含中文，会乱码显示的。那么如何解决呢？

如果是在 post 请求中：

```java
String ename = req.getParameter("");
String utf8Ename = new String(ename.getBytes("iso-8859-1"),"utf-8");
```

这样转换会很麻烦，当有很多参数时，可能不好处理。我们可以设置**请求体的字符集**：

```java
req.setCharacterEncoding("UTF-8");
```

::: tip 提示

需要写在 post 请求的第一行。

:::

**（2）解决get 请求乱码**

当使用 get 请求处理汉字时，我们发现并不会产生乱码，这是因为 tomcat 8.x 以上的版本默认使用 UTF-8 字符集解析，所以无需转换。

如果的 8.x 以下的版本，我们需要修改配置文件，配置文件在 tomcat 安装目录中的 `conf/server.xml`

文件中。

这个文件是 tomcat 的核心配置文件。

我们需要添加 `URIEncoding="UTF-8"` 的配置：

```xml
<Connector connectionTimeout="20000" port="8080" protocol="HTTP/1.1" redirectPort="8443" URIEncoding="UTF-8"/>
```



**（2）解决响应乱码**

返回给浏览器的响应的数据，也可能会出现乱码，我们设置一个请求头，告诉浏览器使用什么方式，解析字符。

```
res.setContentType("text/html;cha")
```



## 7、发布



java web 应用采用 war 包进行发布，发布路径为：{TOMCAT_HOME}/webapps。

在 eclipse 中点击【导出】按钮选择 war 进行打包




 
 <comment-comment/> 
 