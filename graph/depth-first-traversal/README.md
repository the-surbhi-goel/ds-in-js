# Depth First Traversal

Write a function to traverse graph depth-wise


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
 function depthFirstTraversal(g, v) : any[]
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

 Visited Array
 [ 'A', 'C', 'E', 'F', 'D', 'B' ]

 Stack
 [ 'A' ] 
    -> pop 'A'
    -> push neighbours of 'A' i.e. 'B, C'
 [ 'B', 'C' ] 
    -> pop 'C'
    -> push neighbours of 'C' i.e. 'D, E'
 [ 'B', 'D', 'E' ]
    -> pop 'E'
    -> push neighbours of 'E' i.e. 'C, F' but C is already visited 
        therefore only push 'F'
 [ 'B', 'D', 'F' ]
    -> pop 'F'
    -> push neighbours of 'F' i.e. 'D, E' but both are already visited
        therefore no push
 [ 'B', 'D' ]
    -> pop 'D'
    -> push neighbours of 'D' i.e. 'B, C, F' but all are already visited
        therefore no push
 [ 'B' ]
    -> pop 'B'
    -> push neighbours of 'B' i.e. 'A, D' but all are already visited
        therefore no push

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
Returns [ 'A', 'C', 'E', 'F', 'D', 'B' ]
```


### Solution

<details>
<summary>Click Here for solution </summary>

```
function depthFirstTraversal(graph, vertex){
    if(!graph.adjList[vertex]) {
        return [];
    }

    const visitedVertices = {};
    const s = []; //will deal as stack
    const result = [];

    s.push(vertex);
    visitedVertices[vertex] = true;

    // until stack is empty
    while(s.length !== 0){
        const currentVertex = s.pop();
        result.push(currentVertex);

        //push all neighbours of currentVertex into stack
        graph.adjList[currentVertex]?.forEach(element => {
            // Check If vertex is visited or not
            // If not
            if(!visitedVertices[element]) {
                visitedVertices[element] = true;
                s.push(element);
            }
        });
    }

    return result;
}
```
</details>

