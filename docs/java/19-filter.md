# 过滤器



处理请求之前拦截**浏览器的请求**，处理拦截**服务器发送给浏览器**的请求。



## 1、快速开始

开发步骤如下：

- 实现` java.servlet.Filter` 接口
- 编写 `doFilter` 方法
- `web.xml` 中添加配置

实现顶级接口，并编写 `doFilter` 方法，chain 函数的 `dofilter` 必须执行，否则请求无法往下传递。

```java
public class FirstFilter implements Filter {

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		System.out.println("过滤器！！");
		// 过滤链向后传递
		chain.doFilter(req, res);
	}
}
```

`web.xml` 中添加配置，路径中 `/*`表示所有路径：

```xml
  <filter>
  	<filter-name>firstFilter</filter-name>
  	<filter-class>com.filter.FirstFilter</filter-class>
  </filter>
  <filter-mapping>
  	<filter-name>firstFilter</filter-name>
  	<url-pattern>/*</url-pattern>
  </filter-mapping>
```



## 2、声明周期

- 初始化 -> `Filter.init()`
- 提供服务 -> `Filter.doFile()`
- 销毁 -> `Filter.distroy()`

```
 ┌──────────────────────────────────────┐
 │                                      │
 │ init() ───► doFilter() ──► distroy() │
 │                                      │
 └──────────────────────────────────────┘
```



```java
@Override
public void init(FilterConfig filterConfig) throws ServletException {
    System.out.println("初始化！");
}

@Override
public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
    throws IOException, ServletException {
    System.out.println("过滤器！！");
    // 过滤链向后传递
    chain.doFilter(req, res);
}

@Override
public void destroy() {
    System.out.println("销毁！");
}
```



过滤器在一个项目中是唯一的。对于多个请求，采用单例 “多线程” 服务。

为每一个请求创建一个新的线程处理，线程之间相互独立的。



## 3、注解

使用注解可以提高开发效率。

```java
@WebFilter(FilterName="MyFilter", urlPatterns="/*")
public class FirstFilter implements Filter {
    // do somthing
}
```



## 4、过滤链

每个过滤器将具有单独的功能，这样有利于维护，这样就形成了，过滤链。

那么过滤器的顺序是怎样的呢？顺序由 `filter-mapping` 为准，越靠前，先执行。

如果学过 node 的，这一块不难理解，这个很像 `koa` 框架中的洋葱模型。



# Freemarker



Freemarker 是一个模板引擎技术，Freemarker 的作用是将分开的 html 页面与 java 数据整合到一起。

<comment-comment/>
