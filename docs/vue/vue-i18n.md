# vue-i18n

这里介绍一个 vue-i18n 包，这个包可以开发多语言网站。

![i18n kaz](vue-i18n.gif)

## 1、在全局安装：


```bash
npm i vue-i18n
```

## 2、引入插件：


```js
// main.js 文件中
import Vue from 'vue'
import vueI18n from 'vue-i18n'

Vue.use(vueI18n)
```



## 3、配置文件 && 挂载

```js
// main.js 文件中
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: {
      name: '姓名',
      plaseEnter: '请输入',
      login: '登录',
      pwd: '密码',
      zh: '中文',
      kaz: '哈萨克语'
    },
    kaz: {
      name: 'ءاتى-جونى',
      plaseEnter: 'وسى اراعا جازىڭىز ',
      login: 'تىركەلۋ ',
      pwd: 'قۇپيا سيفر',
      zh: 'حانزۋ ءتىلى',
      kaz: 'قازاقشا '
    }
  }
})
new Vue({
  // 4. 挂载
  i18n,
  render: h => h(App)
}).$mount('#app')
```



## 4、使用

有一些语言读写方向是从右向左的，比如哈萨克语。我们可以设置 `body` 的 `direction` 属性来设配。

```html
<template>
    <div id="app">
        <button @click="changeKza">{{ $t("kaz") }}</button>
        <button @click="changeZh">{{ $t("zh") }}</button>
    </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    changeZh () {
      this.$i18n.locale = 'zh' // 设为中文
      document.body.style.direction = 'ltr' // 文字对齐方向
    },
    changeKza () {
      this.$i18n.locale = 'kaz'
      document.body.style.direction = 'rtl'
    }
  }
}
</script>
```


查看完整[demo](https://github.com/Elgar17/web-demos)。