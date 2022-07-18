# 数据类型

在 Ts 中，定义数据类型之前需要，确定好数据的类型，这样有利于大型项目的维护，可以避免一些类型转换的时候，出现的一些错误。

在 js 基础上也增加了一些数据类型，原有类型：string, number, boolean, null, undefied, Symbol, Object, Array。

ts 新增的类型：tuple（元组）, enum（枚举）, any（任意类型）, never, void。

## 1、基本数据类型

js 定义变量：

```js
let age = 18;
```

ts 需要带上**变量类型**，定义好类型之后这个变量不能赋其它类型的值。

```ts
let age: number = 18;

age = "16"  // 报错 类型不匹配
```

（1）字符串类型

```ts
let name: string = "Tom"
```

（2）数值类型

```ts
let age: number = 18;
age = null;         // 正确
age = undefined;    // 正确
```

（3）布尔值

```ts
let boo: boolean = true;
boo = null;     // 正确
boo = undefined // 正确
```

（4）undefined,null

```ts
let n: null = null; // 只能写 null

n = undefined    // 报错

let unde: undefined = undefined; // 只能是 undefined

unde = "hi"     // 报错
```

（5）数组

数组也一样，元素类型固定，赋其它类型的值会报错，不会限制长度，语法：

方式一：let 数组名: 类型[] = [值1,值2];

```ts
let arr: string[] = ["apple","banana","pear"];
arr = [1,3,5];  // 报错
```

方式二：ler 数组名: Array<类型> = [值1,值2];

```ts
let arr: Array<string> = ["apple","banana","pear"]
arr = [1,3,5];  // 报错
```

**（6）元组**
在数组中无法定义数组值为不同的类型数据，这就是元组能解决的。

在数组中想保存不同类型的值怎么办？为了解决这个问题 ts 提供了元组的概念,特点：
- 指定元素个数
- 声明时，为每个元素定义类型

语法：let 元组名: [类型1,类型2,类型3] = [值1,值2,值3]

```ts
let car: [string,number,boolean] = ["BMW",2018,true]

car = ["BMW",2018,true,12]  // 报错 长度不能超过
```



**（7）any**

比如我们不知道后端返回的数据类型是什么，这时候可以用 any 类型。

```ts
let text: any = "hello"
console.log(text)   // "hello"

text = 123;         // 正确
console.log(text)   // 123
```



**（8）void**

像 C/C++ 一样代表没有类型，比如函数没有返回值，那么可以用 void。

语法：

```ts
function sayHi(): void{
    console.log("hi!")
}

function sayHi(): void{  // 报错 返回类型(string)与声明类型(void)不一致
    return "sayhi"
}
```

**(9) never**

never 代表不存在值的类型，常用于抛出异常或无心啊循环的函数返回值。
语法：

```ts
function text(): never{
    throw new Error("异常")
}
```



**（10）联合类型**

一个变量可以是多个类型
语法：
let 变量名： 类型1 | 类型2 = 值；

```ts
let num: number | string = "10";
num = 10;		// 正确
num = "abc"		// 正确
```



## 2、对象类型

对象类型我们先需要定义好结构最后在使用。

```ts
// 定义了一个对象类型
interface IPerson {
  name: string,
  age: number
}

// 使用
let p1: IPerson = {
  name: "Tom",
  age: 10
}
```



## 3、函数

ts 中函数的返回值也需要声明，没有返回值定义为 void 语法如下：



```ts
function sayHi(): string{
  return "Hi!"
}
```

函数的形参也需要指定类型，比如：

```ts
function person(name: string, age: number): void{
    console.log(name,age)
}

person("Tom",12)
```

::: tip 
实参和形参**类型**要保持一致
实参和形参**数量**要保持一致
:::

有时候我们有一些可选参数，这个参数可以不赋值，在变量后面加个问好就可以了，可以有默认值，如果有默认值可以不写后面的问号：

```ts
function person(name: string, sex?:string, address: string = "earth"): void{
    console.log(name,sex,address)
}
person("Tom")        	 // Tom undefined earth
person("jerry","female") // jerry female earth

```

::: warning  注意
可选参数必须写在最后
:::

有时候还会有剩余参数情况，如果后一些不确定的参数，就可以用剩余参数：

```ts
function personName(name: string, ...names: string[]): void{
    console.log(name,names)
} 

personName("jeck","Tom","jerry")    // jeck [ 'Tom', 'jerry' ]
```



**函数声明**

interface 也可以声明函数。

```ts
interface Isum {
    (x: number, y: number, z?: number): number 
}

const add = (x: number, y: number, z?: number): number =>{
    if(typeof z === "number"){
        return x + y + z
    }else{
        return x + y
    }
} 

let sum: Isum = add 
```



## 4、类

面向对象的三大特性：封装、多态、继承。

在 ES5 中像面向对象编程需要 prototype 来完成，比如像这样：

```js
function Person(name, age){
    this.name = name;
    this.age = age;
}
person.prototype.sayname = function(){
    console.log(this.name)
}
```

在 ts 中提供了类的概念，上面的代码可以这样写，这与上面写的程序没什么区别，转换成 js 是跟上面的程序一样了，就是不同的写法而已。

```ts
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(this.name)
    }
}

let pr = new Person("tom",16)
console.log(pr) // Person { name: 'tom', age: 16 }
pr.sayName()    // 输出 tom 不是返回

```



## 5、枚举类型

表示固定的一些值，比如性别，男、女、未知。
枚举项一般是英文字母或数字，枚举值一般是数字。语法：

```ts
enum 枚举名{
     枚举项1 = 枚举值1,
     枚举项2 = 枚举值2,
}
```

举个例子：

```ts
enum sex{
    male = 1,
    female = 2,
    unknown = 3
}
console.log(sex.male)  // 0
console.log(sex[1])    // fmale

// 这样写也是合法的
enum sex{
    male,   // 默认值 0
    female, // 默认值 1
    unknown // 默认值 2
}
```

 ## 6、interface 接口

简单地说，提前定义对象的类型。比如有一个 `Pesson` 对象，我们提前约定好都有哪些属性，首先必须有 `name` 属性，而且必须是字符串类型。

接口定义使用 `interface` 关键字，接口的应用在于，协助我们日常开发，比如下面的例子，约定 `name` 为字符串之后，不能赋予其他值。

```typescript
// 定义了一个 Person 接口
interface Person {
	name: string;
    age?: number; // 创建对象时， 此属性可有可无
    readonly id: number; // 只读属性
}

// 使用接口初始化对象
let child: Person = {
    name: "Tom",
    age: 16,
    id: 123,
}

// 报错 id 必须是 number 类型
let child: Person = {
    name: "Tom",
    id: "123"
}
```



## 7、函数高级用法

之前介绍过一点联合类型，这里介绍一下，联合类型与函数的结合使用。

```typescript
function getLength(input: string | number): number {
	const str = input as string; // 断言成 string 类型
    if(str.length){
        return str.length;
    } else {
        const number = input as number; // 断言成 number 类型
        return number.toString().length; 
    }
}
```



## 8、泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。



```javascript
function echo(arg) {
  return arg
}
const result = echo(123)
```

我们传入了数字，但是返回了 any。

为了解决这个问题，我们使用泛型来解决。

```ts
function echo<T>(arg: T): T {
  return arg
}
const result = echo(123)

// 泛型也可以传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result = swap(['string', 123])
```



## 9、type 字面量



当有一些生命的类型比较长的时候，使用 `type` 可以简化代码。

两个变量的取值范围，限制在上面的四种字符串。

```typescript
type Derections = 'up' | 'dowm' | 'left' | 'right'

const de1: Derections = 'down'
const de2: Derections = 'up'
```

也可以代替一些联合类型。

```typescript
const StrOrNum = string | number

const str: StrOrNum = 'hello'
const num: StrOrNum = 123
```

## 10、声明文件

在 ts 文件中使用 js 写的库等工具时，可能会报错。为了解决这个问题，我们需要创建一个声明文件。

通常的格式为：`xxx.d.ts`。比如使用 JQuery。

新建一个 `jQuery.d.ts` 的文件，写入以下内容：

```typescript
declare var jQuery: (selector: string) => any
```

完成之后不会报错了。

<comment-comment/> 
