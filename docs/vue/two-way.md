# vue 双向绑定

vue中双向绑定指的是**数据**和**视图**的相互绑定，当数据改变时，视图也一起改变，视图变化时，数据也跟着改变。这种绑定大大提高了开发效率，开发人员只关注视图和数据。

![双向绑定](two-way.gif)

## defineProperty

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
