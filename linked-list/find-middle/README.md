# Middle node of the linked-list

Write a function to find the middle node of the linked list.

### Requirements

```
/**
    * Function must accept a linked-list
    * Function must return node if their is atleast one node in linked-list otherwise null
*/
```

### Function Signature

```
/**
 * @param {LinkedList} 
 * @returns {Node|null}
 */
 function findMiddle(LinkedList): Node;
```

### Example

```
 let list = new LinkedLst();
 list.add(1);
 list.add(2);
 list.add(3);

 findMiddle(list); // return 2

```

### Solution

<details>
<summary>Click Here for solution 1</summary>

```
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


Here LinkedLst is custom-created LinkedLst
```

</details>

