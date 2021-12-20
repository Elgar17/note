# vue 双向绑定



vue中双向绑定指的是数据和视图的相互绑定。

数据改变，视图也一起改变，视图变化，数据也跟着改变。

![双向绑定](two-way.gif)



## 1、defineProperty

理解数据绑定前，先了解一下 `Object.defineProperty()` 。这是对象的一个方法，可以监听对象。



```js
var obj = {
    p1: 123
}

Object.defineproperty(obj,'p1',{
    // 当 obj.p1 被访问是触发 get 函数
    get: functin(){
    	console.log('p1被访问了')
	}
    set name(val){
        input.value = val;
        text.innerHTML = val;
    }
})

obj.p1
// p1被访问了
```





## 2、实现



```js
var input = document.getElementById("input")
var text = document.getElementById("text")

var person = {}

// 监听 person.name 对象
person = {
    set name(val){
        input.value = val;
        text.innerHTML = val;
    }
}

input.addEventListener("keyup",function(){
    person.name = input.value
    console.log(input.value)
});
```

当然这是 vue2 中监听数据变化的方法，vue3 中使用 `proxy`，比 `defineproperty` 更好，可以监听到数组的变化 。


 
 <comment-comment/> 
 