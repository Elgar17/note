# 无重复字符的最长子串

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

## 实现

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let window = new Set()
    let right = 0 // 窗口右侧
    let left = 0  // 窗口左侧
    let max = 0   // 保存数据结构
    
    while(right < s.length){
        // 存在重复的元素
        if(window.has(s[right])){
            window.delete(s[left])
            left++
        }else{
            max = Math.max(max, right - left + 1)
            window.add(s[right++])
        }
    }
    return max
}
```

<comment-comment/> 
 