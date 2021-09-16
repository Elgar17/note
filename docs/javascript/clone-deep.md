### 深拷贝

```js
function  cloneDeep(data) {
	let  dataType = Object.prototype.toString.call(data);
	let  newObject = null;
	// 判断是否是正则
    if (value instanceof RegExp) return new RegExp(value);
    // 判断是否是时间格式
    if (value instanceof Date) return new Date(value);

	if (dataType === '[Array array]') {
		newObject = [];
		for (let  i = 0, len = data.length; i < len; i++) {
			newObject.push(cloneDeep(data[i]));
		}
	} else  if (dataType === '[Object object]') {
		newObject = {};
		for (let  i  in  data) {
			newObject[i] = cloneDeep(data[i]);
		}
	} else {
		return  data;
	}
	return  newObject;
}
```
