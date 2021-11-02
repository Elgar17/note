# 数组

## 1. 简介

数组属于值类型，如果函数中数组作为参数，函数内得到的是复制数组，不会改变原数组。

（1）基本使用

```go
var arr = [3]int{1, 2, 3}
fmt.Println(arr) // [1 2 3]
```

数组的大小必须是数字，不能为变量。

数组如果没有赋值，那么对应变量的零值， `int` 数组的零值是 0，`string` 数组的零值是空字符串 `""`，`bool` 类型默认是 `false`。

```go
var arr [3]int // [0 0 0]

arr[1] == 0 // ture
```

数组越界编写报错，如果在运行时越界，会出现 `panic` 错误，程序会崩溃。

```go
var arr [3]int

arr[4] = 1 // 报错
```

如果数组中需要很多元素，不确定大小时，可以使用 `...`，程序帮我们计算大小。

```go
var arr [...]string{
    "Tom",
    "Jerry"
}
// 大小为 2
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

（3）数组的复制

数组赋值给新的变量，会产生这个数组的副本。

```go
arr := [3]int{1,2,3}
arr1 := arr
arr[1] = 3
fmt.Println(arr, arr1)
// [1 3 3] [1 2 3]
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
