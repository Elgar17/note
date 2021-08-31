## vue3 使用



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
import { ref, computed, reactive, toRefs } from 'vue'
interface DateProps {
    count: number;
    double1: number;
    increase: () => void;
}
export default {
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
}
</script>
```





声明周期



```
beforeCreate
```

| vue2          | vue3             | 触发时机 |
| ------------- | ---------------- | -------- |
| beforeCreate  | use setup        |          |
| created       | use setup        |          |
| beforeMount   | onBeforeMount    |          |
| mounted       | onMounted        |          |
| beforeUpdate  | onBeforeUpdate   |          |
| update        | onUpdate         |          |
| beforeDestroy | onBeforeDestroy  |          |
| destroyed     | onUnmounted      |          |
| activated     | onActivated      |          |
| deactivated   | onDeactivated    |          |
| errorCapture  | onErrorCapture   |          |
| 无            | onRenderTracked  |          |
| 无            | onRenderTriggerd |          |

