###  判断数据类型

```js
function  type(obj) {
	let  string = Object.prototype.toString;
	var  map = {
		'[object Boolean]':  'boolean',
		'[object Number]':  'number',
		'[object String]':  'string',
		'[object Function]':  'function',
		'[object Array]':  'array',
		'[object Date]':  'date',
		'[object RegExp]':  'regExp',
		'[object Undefined]':  'undefined',
		'[object Null]':  'null',
		'[object Object]':  'object'
	};
	if (obj  instanceof  Element) {
	return  'element';
	}
	return  map[string.call(obj)];
}
```
