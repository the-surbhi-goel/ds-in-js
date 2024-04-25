# Custom Stack

## Class & Constructor

```
class Stack {
    constructor() {
        this.stack = [];
        this.maxSize = 100;
        this.top = -1;
    }
}
```


## push Function
You can create your own push function

```
    push(value) {
        if(this.top === this.maxSize){
            console.log("Stack is overflow");
            return false;
        }

        this.top++;
        this.stack[this.top] = value;
        return true;
    }
```


## pop Function
You can create your own pop function

```
    pop() {
    if (this.top === -1) {
      console.log("Stack is already empty");
      return null;
    }

    const item = this.stack[this.top];
    this.top--;
    const tempArr = [];

    for (let i = 0; i <= this.top; i++) {
      tempArr.push(this.stack[i]);
    }
    this.stack = tempArr;
    
    return item;
  }
```


## peek Function
You can create your own peek function

```
    peek() {
    if (this.top === -1) {
      console.log("Stack is already empty");
      return null;
    }

    return this.stack[this.top];
  }
```
