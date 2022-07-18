# inheritAttrs

举个例子，假如有一个input组件。

```html
// MyInput.vue 组件
<template>
    <div class="container">
        <input />
    </div>
</template>
```

我们使用这个组件用于一个输入用户名和密码框。这是我们分别给两个组件需要设置 input 的属性。 设置输入框的 input属性为 text,密码框的 input属性为 password。

```html
// App.vue 页面
<template>
    <div class="app">
        <MyInput type="text" />
        <MyInput type="password" />
    </div>
</template>
```

但是这样设置后，这些属性不会绑定到Myinput组件中的input元素，而是绑定到父容器元素 div 身上了。最后渲染结果是这样：

```html
<div class="container" type="text">
    <input />
</div>
<div class="container" type="password">
    <input />
</div>
```

解决这个问题我们要用到 attrs 和 inheritAttrs。

首先在组件中设置 inheritAttrs 为 false; 然后你要告诉它要绑定到那个元素上，用 v-bind 指令绑定$attrs

```html
// MyInput.vue 组件
<template>
    <div class="container">
        // 父组件传来的属性绑定到 input 身上
        <input v-bind="$attrs" />
    </div>
</template>
<script>
export default{
    // 这样就不会绑定到父容器div上
    inheritAttrs: false,
}
</script>
```

这就可以实现我们想要的效果了：

```html
<div class="container">
    <input  type="text" />
</div>
<div class="container" >
    <input type="password" />
</div>
```

<comment-comment/>
