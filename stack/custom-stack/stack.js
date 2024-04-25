export class Stack {
    constructor() {
      this.stack = [];
      this.maxSize = 100;
      this.top = -1;
    }
  
    isFull(){
      if (this.top === this.maxSize) {
        console.log("Stack is overflow");
        return true;
      }
      return false;
    }
  
    push(value) {
      if (this.isFull()) {
        return false;
      }
  
      this.top++;
      this.stack[this.top] = value;
      return true;
    }
  
    isEmpty(){
      if (this.top === -1) {
        console.log("Stack is already empty");
        return true;
      }
      return false;
    }
  
    pop() {
      if (this.isEmpty()) {
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
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
  
      return this.stack[this.top];
    }
  }