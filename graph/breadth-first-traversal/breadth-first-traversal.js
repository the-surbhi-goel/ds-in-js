
import { Graph } from '../graph/graph.js';

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



// Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

const g = new Graph();

// Add Vertex
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

// Add Edges
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// to print graph adjancey list
g.print();

const result = breadthFirstTraversal(g, 'A');
console.log("\n Traversal is ", result);
