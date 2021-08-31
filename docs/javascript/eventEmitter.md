###  eventEmitter

```js
class  EventEmitter {
	constructor() {
	this.listener = {};
	}
	
	on(name, callback) {
		if (!(name  in  this.listener)) {
			this.listener[name] = [];
		}
		this.listener[name].push(callback);
	}

  

	off(name, callback) {
		if (!this.listener[name]) {
			return;
		}
		let  stack = this.listener[name];
		for (let  i = 0; i < (stack && stack.length); i++) {
			if (callback === stack[i]) {
				stack.splice(i, 1);
				return  this.off(name, callback)
			}
		}
	}

  

	emit(name, ...args){
		if (!this.listener[name]) {
			return;
		}
		this.listener[name].forEach(callbackFn  => {
			callbackFn.apply(null, args);
			});
		}
	}

  
const  e = new  EventEmitter()

function  say(name){
	console.log(name)
}

  

e.on('sayname', say)
console.log("say name!! ")
e.emit("sayname", "Jerry")
e.off('sayname', say)
e.emit("sayname", "Jerry223")
```
