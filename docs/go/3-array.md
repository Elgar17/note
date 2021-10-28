# 数组

## 1. 基本使用

数组属于值类型，如果函数中数组作为参数，函数内得到的是复制数组，不会改变原数组。

（1）基本使用

```go
var arr = [3]int{1, 2, 3}
fmt.Println(arr) // [1 2 3]
// 大小未知
a1 := [...]int{1: 1, 3: 5}
fmt.Println(a1, len(a1)) // [0 1 0 5]
```

（2）遍历数组

```go
var a = [...]string{"北京", "上海", "深圳"}
// 方法1：for循环遍历
for i := 0; i < len(a); i++ {
    fmt.Println(a[i])
}

// 方法2：for range遍历
for index, value := range a {
    fmt.Println(index, value)
}
```

数组属于值类型，如果函数中数组作为参数，函数内得到的是复制数组，不会改变原数组。

```go
a := [2]int{1, 2}
b := [2]int{1, 2}
fmt.Println(a == b) // true
```

由于值类型，可以直接比较两个数组，要注意的是不能忽略长度，忽略数组长度就变成切片（Slice 类型）了，切片是引用类型，之后介绍。

```go
a := []int{1, 2}
b := []int{1, 2}
fmt.Println(a == b) // 报错
```

## 2. 二维数组

```go
arr2 := [3][2]string{
    {"北京", "上海"},
    {"广州", "深圳"},
    {"成都", "重庆"},
}
fmt.Println(arr2)       //[[北京 上海] [广州 深圳] [成都 重庆]]
fmt.Println(arr2[2][1]) //支持索引取值:重庆
```

## 3. 练习

一维数组，查找两个数和为特定值，返回两数的索引（leetcode 第一题）。

```go
func twoSum(nums []int, target int) []int {
    for i := 0; i < len(nums); i++{
        for j := i + 1; j <len(nums); j++{
            if nums[i] + nums[j] == target {
                return []int{i,j}
            } 
        }
    }
    return nil
}
```
