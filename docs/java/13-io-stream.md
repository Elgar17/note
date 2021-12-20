# 输入输出流

输入输出流是指，读写文件等操作。还可以是远程的，比如修改微信头像，就是操作微信服务器上的文件。



## 1、操作文件

`java.io.File` 类进行完成，文件的读写操作。

```java
File myFile = new File("d:\\work\\zoom\\name.txt");
		
// 是否为文件夹
System.out.println(myFile.isDirectory());

// 是否为文件 
System.out.println(myFile.isFile());

// 创建文件目录
File makeFile = new File("d:\\work\\zoom", "hello");
// 判断文件是否存在
if(!makeFile.exists()) {
    makeFile.mkdir();
}

// 创建文件
File makeFile1 = new File("d:\\work\\zoom", "hello.txt");
// 判断文件是否存在
if(!makeFile1.exists()) {
    try {
        makeFile1.createNewFile();
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```





## 2、字节流

- `InputStream` ：字节输入流，如何读取文件
- `OutputStream` ：字节输出流



**（1）InputStream**

这是读取 `hello.txt` 文件的内容，每一次只能读取一个字符，转成 char 类型的数据。最后打印到屏幕。

当 n 等于 -1 时，说明到了文件末尾，close 方法是读取完毕之后执行的，告诉系统读取完毕，释放临时资源。

 ```java
try {
    FileInputStream myFile = new FileInputStream("hello.txt");
    int n = myFile.read();
    while(n != -1) {
        System.out.print((char)n);
        n = myFile.read();
    }
    myFile.close();
} catch (FileNotFoundException e) {
    e.printStackTrace();
} catch (IOException e) {
    e.printStackTrace();
} 
 ```

还可以将读取的数据，一次性保存到一个二进制数组中，最后使用 String 构造函数转换成字符输出。

```java
 FileInputStream myFile = new FileInputStream("hello.txt");
byte[] b = new byte[100];
myFile.read(b);
System.out.print(new String(b));
myFile.close();
myFile.close();	
```

**（2）OutputStream**

 将字符 a 写入到文件中，`write`方法可以传入第二个参数，类型为布尔值，如果为 `true` 追加到文件后面，否则覆盖文件。

```java
try {
    FileOutputStream myFile = new FileOutputStream("hello.txt");
    myFile.write('a');
    myFile.close();
} catch (FileNotFoundException e) {
    e.printStackTrace();
} catch (IOException e) {
    e.printStackTrace();
}
```



## 3、字符流

- `Reader`：字符输入流
- `Writer`：字符输出流
 
 <comment-comment/> 
 