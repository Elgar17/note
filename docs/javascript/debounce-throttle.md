# js 防抖节流函数

## 1、防抖

防止一个函数在短时间内多次触发。如果在短时间多次触发，只执行一次。

举个例子，百度的搜索框，当用户输入内容时会发送 AJAX 请求，如果输入一个字发送一次请求，那么显然对服务器时不友好的，所以我们需要等待用户输入完内容时发送请求。

还有那些地方用到防抖？ 鼠标移动，页面滚动等



 极简版：

```javascript
const debounce = (func, wait)=>{
    let time;
    return ()=>{
    	if(time) cleartTimeout(time);
        time = setTimeout(func, wait);
    }
}
```

```js
const dbounce = (func, wait)=>{
    let time;
    return ()=>{
        if(time) clearsetTimeout(time);
        time = setTimeout(func, wait)
    }
}
```





带参数版本：

```js
function debounce(func,wait){
    var time;
    return ()=>{
        // 如果定时器存在，需要清除定时器，重新定义
        if(time) clearTimeout(time);	
		time = setTimeou(()={
            func.apply(this,arguments);
        	time = null
        },wait)
    }
}
```



## 2、节流

防止一个函数在短时间内多次触发。如果在短时间多次触发，指定时间内触发多次。

极简版本：

```js
const throttle = (func,wait)=>{
    let time;
    return ()=>{
        if(!time) time = setTimeout(func,wait);
    }
}
```


带参数版本：

```js
function throttle(func,wait){
    let time;
    return ()=>{
        if(!time){
           time = setTimeout(()=>{
               clearTimeout(time);
               func.apply(this,arguments)
           }) 
        }
    }
}
```



