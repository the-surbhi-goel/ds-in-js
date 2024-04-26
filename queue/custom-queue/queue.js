export class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
    }

    getQueueLength(){
        return this.tail - this.head;
    }

    isFull() {
        return this.getQueueLength() === this.maxSize;
    }

    isEmpty() {
        return this.getQueueLength() === 0;
    }

    enqueue(value) {
        if(this.isFull()){
            return false;
        }

        this.queue[this.tail] = value;
        this.tail++;
        return true;
    }

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
}