# promise

## 1. 概述

promise 是解决回调地狱的函数。

状态：

Pending：进行中
Resolve：完成
Reject：失败
语法：

```js
var p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let num = Math.random()
        if(num>0.5){
            resolve();
        }else{
            reject();
        }
    },1000)
})

p.then(()=>{
    console.log("大大大")
}).catch(()=>{
    console.log("小小小")
})
```

## 2. promise.all

promise.all方法返回一个promise。需要传入几个promise，在then中获取到传入 promise 全部返回的结果。

promise all 是面试中经常被问到的题，也需要我们手写出来。

```js
promise.all = Promise.all || function(...pArr){
    var arrResult = [];
    return new Promise((resove,reject)=>{
        var len = 0;
        next();
        function next(){
            pArr[i].then((res)=>{
                arrResult.push(res);
                len++;
                if(len == pArr.length){
                    resove(arrResult);
                }else{
                    next();
                }
            })
        }
    })
}
```

## 3. promise rase

```js
function myPrase(...pArr){
    return new Promise((resove,reject)=>{
        for(var i = 0; i < pArr.length;  i++){
            pArr.then(res=>{
                resove(res)
            })
        }  
    })
}
```

 
 <comment-comment/> 
 