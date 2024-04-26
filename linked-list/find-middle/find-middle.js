import { LinkedLst } from "../custom-linked-list/linked-list.js";

function findMiddle(list){
    let p1 = list.head;
    let p2 = list.head;
    let prev = p2;

    while(p1 !== null && p1.next !== null){
        p1 = p1.next.next;
        prev = p2;
        p2 = p2.next;
    }

    if(p1 === null){
        return prev.next;
    }

    return p2;
}

let list1 = new LinkedLst();
list1.add(1);
list1.add(2);
list1.add(3);

let result1 = findMiddle(list1);
console.log("Middle of the list1 ...1, 2, 3 = ", result1.data);


let list2 = new LinkedLst();
list2.add(1);
list2.add(2);
list2.add(3);
list2.add(4);

let result2 = findMiddle(list2);
console.log("Middle of the list1 ...1, 2, 3, 4 = ", result2.data);
