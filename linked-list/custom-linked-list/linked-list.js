class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedLst {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  get(index) {
    let current = this.head;
    let i = 0;

    while (i < index) {
      if (current.next === null) {
        return false;
      }
      current = current.next;
      i++;
    }
    return current.data;
  }

  insertAtBeginning(data){
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  insert(index, data){
    if(index === 0){
       this.insertAtBeginning(data);
    }
    else{
        let current = this.head;
        let prev = null;
        let i = 0;

        while(i < index){
            prev = current;
            current = current.next;
            i++;
        }

        const node = new Node(data);
        node.next = current;
        prev.next = node;

    }
  }

  removeAt(index){
    if(index === 0){
       this.head = this.head.next;
    }
    else{
        let current = this.head;
        let prev = null;
        let i = 0;

        while(i < index){
            prev = current;
            current = current.next;
            i++;
        }
        prev.next = current.next;

    }
  }
}
