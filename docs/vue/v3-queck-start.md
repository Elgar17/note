## vue3 快速使用

最近使用体验了一下vue3，改动的接口还挺多的，这里介绍一下我目前使用到的一些 API。

### 1、setup 函数

vue3 提出了 `setup` 函数，主要是为了解决，vue2 中一个逻辑的代码在不同的地方实现，很难编写和维护。

`setup` 函数主要是解决这个问题，setup 有两个参数，一是 `props`，参数二是 `context`，也就是 `this`。

```js
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup(porps, ctx){
      // 此处写处理逻辑
  }
})
```

**（1）数据定义**

定义数据是在 `setup` 函数定义，最后导出即可，不过**直接定义无效**，静态数据使用 `ref` API。

```html
<template>
	{{ count }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup(porps, ctx){
      const count = ref(0); // 初始化一个变量 0
      return { count }
  }
})
</script>
```

如果要用引用类型的数据，需要使用 `reactive`。

```html	
<template>
	{{ person.name }}
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'App',
  setup(porps, ctx){
      const person = reactive({
          name: 'Jerry',
          age: 18
      });
      return { person }
  }
})
</script>
```

下面是一个完整的例子。

介绍了使用计算属性，如何定义方法，还有 `toRefs` 解决响应式数据失效的问题。 

```html
<template>
	<div>
        {{count}}
        {{double}}
        <button @click="increase">
     		👍+1
        </button>
    </div>
    <div>
        {{count1}}
        {{double1}}
        <button @click="increase1">
     		👍+2
        </button>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent, computed, reactive, toRefs } from 'vue'
interface DateProps {
    count: number;
    double1: number;
    increase: () => void;
}
export default defineComponent({
    setup() {
        // 1、静态数据
		const count = ref(0);
        const double = computed(()=>{
            return count.value * 2
        })
        const increase = () =>{
            count.value++; // 注意
        }
        // 2、动态数据
        const data: DateProps = reactive({
            count1: 0,
            increase1: () =>{ count++; },
            double1：computed(() => data.count * 2)
        })
    	// 注意：直接返回不会响应式
    	const refData = toRefs(data) 
        return {
            count,
            double,
            increase,
    		...refData
        }
    }
})
</script>
```



**（2）声明周期**

vue3 生命周期跟 vue2 没有太大的变化，名字更语义化。

| vue2          | vue3             | 触发时机                                       |
| ------------- | ---------------- | ---------------------------------------------- |
| beforeCreate  | setup            | 创建实例前，**无 date，$el**                   |
| created       | setup            | 创建实例后，**有date，无$el**                  |
| beforeMount   | onBeforeMount    | 创建完实例，**有date，有虚拟$el**              |
| mounted       | onMounted        | 页面渲染完成，**有date，有真实$el**            |
| beforeUpdate  | onBeforeUpdate   | 更新数据前                                     |
| update        | onUpdate         | 更新数据后                                     |
| beforeDestroy | onBeforeDestroy  | 销毁组件前                                     |
| destroyed     | onUnmounted      | 销毁组建后                                     |
| activated     | onActivated      | 是在被包裹组建被激活的状态下使用的生命周期钩子 |
| deactivated   | onDeactivated    | 在被包裹组件停止使用时调用                     |
| errorCapture  | onErrorCapture   | 异常捕捉                                       |
| 无            | onRenderTracked  |                                                |
| 无            | onRenderTriggerd |                                                |

### 2、watch 的使用

`watch` 可以用在 `setup` 函数中。

参数说明：

- 参数一：要监听属性的名字
- 参数二：函数，函数右两个参数，旧的值和新的值。

```html
<script lang="ts">
import { ref, defineComponent, watch } from 'vue'

export default defineComponent({
  setup() {
    const greetings = ref('')
    watch(greetings, (newVal, oldVal) => {
      document.title = 'update' + greetings.value
    })
    return { greetings }
  }
})
</script>

```

一个 `watch` 可以监听多个值，参数一中以数组的形式传入值。回调函数中的新值和旧值，也是数组。

```js
  setup() {
    const greetings = ref('')
    const count = ref(0)
    watch([greetings, count], (newVal, oldVal) => {
      console.log(newVal) // ['', 0]
    })
    return { greetings, count }
  }
```

### 3、模块化

将一些通用方法提取成一个模块，比如实现一个功能，当用户点击页面某一个位置时，获取当前位置的坐标信息。

```javascript
import { ref, onMounted, onUnMonted } from 'vue'

function useMousePositin() {
    const x = ref(0)
    const y = ref(0)
    const updateMose = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
      }
      onMounted(() => {
        document.addEventListener('click', updateMose)
      })
      onUnMounted(() => {
        document.removeEventListener('click', updateMose)
      })
  
      return { x, y }       
}
export default useMousePositin
```

可以将通用的方法提取出来。这个应该叫 hooks ，创建一个hooks 文件放入即可。

再写一个hooks，数据加载时用到的 loading。

```javascript
import { ref } from 'vue'
import axios from 'axios'
function useUrlLoader<T>(url) {
    const result = ref<T | null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    axios.get(url).then((rawData) => {
        loading.value = false
        loaded.value = true
        result.value = rawData.data
    }).catch(e => {
        error.value = e
        loading.value = false
    })

    return {
        result,
        loading,
        loaded,
        error
    }
}
export default useUrlLoader
```



### 4、Suspense

异步数据展示之前，通常我们处理方式是，使用 loading，，suspense就是解决这个问题。

 Async.vue 的异步组件：

```html 
<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          msg: 'hello'
        })
      }, 3000)
    })
  }
})
</script>
```

以下是在 App 中使用，当异步数据没有加载完时，会显示 fallback中的内容， 数据加载完毕之后，显示 default 中的内容。

```html
<template>
  <div>
    <Suspense>
      <template #default>
        <Async />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Async from './Async.vue'
export default defineComponent({
  name: 'App',
  component: {
    Async
  }
})
</script>
```

 vue3 用起来还挺好的，也优化了不少地方，比如按需加载可以减少打包体积，使用 proxy 监听数据等等，当然，这些并不是 vue3 更新的所有东西，继续期待更多文章。

<comment-comment/> 
