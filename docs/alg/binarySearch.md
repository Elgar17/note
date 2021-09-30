## 二分法查找




```js
function binarySearch(arr, target, l, r) {
    if (l > r) return -1
    let index = -1
    let midIndex = Math.floor((r + l) / 2)
    let midVal = arr[midIndex]

    if (midVal > target) {
        index = binarySearch(arr, target, l, midIndex - 1)
    } else if (midVal < target) {
        index = binarySearch(arr, target, midIndex + 1, r)
    } else {
        return midIndex
    }
    return index
}
```