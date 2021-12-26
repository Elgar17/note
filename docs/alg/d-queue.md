# Queue(队列)

## 1. 概述

应用：打印队列，如打印五分文档每一个文档都会发送到打印队列。从第一个文档开始排队，先进来的先打印。

![队列](https://img0.baidu.com/it/u=166153677,4283731372&fm=26&fmt=auto&gp=0.jpg)

## 2. 实现

下面基于类的实现。

```js
function Queue() {
            // 创建
            this.items = {};
            this.count = 0;         // 队列大小
            this.lowestCount = 0;   // 第一个元素的位置
            // 方法
            // 1. 添加(enQueue)
            Queue.prototype.enQueue = function(elment) {
                //注意一下， this.items[this.count]相当于this.items.0 现在的items = {0: elment}
                this.items[this.count] = elment;
                this.count++;  
            }
            // 2. 移除(deQueue)
            Queue.prototype.deQueue = function() {
                if((this.count - this.lowestCount) === 0){
                    return undefined;
                }
                var result = this.items[this.lowestCount];
                delete this.items[this.lowestCount];
                this.lowestCount++;
                return result;
            }
        }
```

### 3. 使用

```js
let queue = new Queue();
queue.enQueue("hi");      // 入队列
queue.enQueue("hello");   // 入队列
queue.deQueue();          // 出队列：hi
queue.deQueue();          // 出队列：hello
```

 
<comment-comment/> 
 