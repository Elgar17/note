### 欢迎使用坚果云Markdown

```js
function  cloneDeep(data) {
	let  dataType = type(data);
	let  newObject = null;
	if (dataType === 'array') {
		newObject = [];
	} else  if (dataType === 'object') {
		newObject = {};
	} else {
		return  data;
	}
	if (dataType === 'array') {
		for (let  i = 0, len = data.length; i < len; i++) {
			newObject.push(cloneDeep(data[i]));
		}
		return  newObject;
	} else  if (dataType === 'object') {
		for (let  i  in  data) {
			newObject[i] = cloneDeep(data[i]);
		}
		return  newObject;
	}
}
```
