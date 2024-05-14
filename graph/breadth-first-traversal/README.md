# Breadth First Traversal

Write a function to traverse graph breadth-wise


### Requirements
```
/**
    * Function must accept graph
    * Function must accept starting vertex
    * Function must return an array of all vertices of graph
*/
```


### Function Signature
```
/**
 * @param {Graph} g
 * @param {vertex} v
 * @returns {vertex} arr
 */
 function breadthFirstTraversal(g, v) : any[]
 ```

 ### Graphical Representation

 ```
 Graph
 A --- B
 |     |
 |     |
 C --- D
 |     |
 |     |
 E --- F

 Resulted Array
 [ 'A', 'B', 'C', 'D', 'E', 'F' ]

 Queue  
 [ 'A' ]
    -> remove 'A' and mark visited
    -> push neighbours of 'A' i.e. 'B, C'
 [ 'B', 'C' ] 
    -> remove 'B' and mark visited
    -> push neighbours of 'B' i.e. 'A, D' but A is already visited
        therefore push 'D' only
 [ 'C', 'D' ]
    -> remove 'C' and mark visited
    -> push neighbours of 'C' i.e. 'A, D, E' but A and D are already visited
        therefore push 'E' only
 [ 'D', 'E' ]
    -> remove 'D' and mark visited
    -> push neighbours of 'D' i.e. 'B, C, F' but B and C are already visited
        therefore push 'F' only
 [ 'E', 'F' ]
    -> remove 'E' and mark visited
    -> push neighbours of 'E' i.e. 'C, F' but both are already visited
        therefore no push
Queue  [ 'F' ]
    -> remove 'F' and mark visited


 ```


### Example
```
 Graph
 A --- B
 |     |
 |     |
 C --- D
 |     |
 |     |
 E --- F

function depthFirstTraversal(graph, 'A'); // 
Returns  [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```


### Solution

<details>
<summary>Click Here for solution </summary>

```
function breadthFirstTraversal(graph, vertex){
    if(!graph.adjList[vertex]) {
        return [];
    }

    const visitedVertices = {};
    const q = []; //will deal as queue
    const result = [];

    q.push(vertex);
    visitedVertices[vertex] = true;

    // until queue is empty
    while(q.length !== 0){
        const currentVertex = q.shift();
        result.push(currentVertex);

        //push all neighbours of currentVertex into stack
        graph.adjList[currentVertex]?.forEach(element => {
            // Check If vertex is visited or not
            // If not
            if(!visitedVertices[element]) {
                visitedVertices[element] = true;
                q.push(element);
            }
        });
    }

    return result;
}
```
</details>

