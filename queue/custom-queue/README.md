# Custom Queue

## Class & Constructor

```
export class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
    }
}
```


## enqueue Function
To insert item in queue.

```
  enqueue(value) {
      if(this.isFull()){
          return false;
      }

      this.queue[this.tail] = value;
      this.tail++;
      return true;
  }
```


## dequeue Function
To remove first item from the queue

```
  dequeue() {
    if(this.isEmpty()){
      return false;
    }

    // Built-in method
    // shift()

    const item = this.queue[this.head];

    for (let i = this.head + 1; i < this.tail; i++) {
      this.queue[i - 1] = this.queue[i];
    }

    this.queue.length--;
    this.tail--;

    return item;
  }
```


## getQueueLength Function
To get queue length

```
  getQueueLength(){
      return this.tail - this.head;
  }
```


## isFull Function
To Check Queue is full or not

```
  isFull() {
      return this.getQueueLength() === this.maxSize;
  }
```


## isEmpty Function
To Check Queue is empty or not

```
  isEmpty() {
      return this.getQueueLength() === 0;
  }
```
