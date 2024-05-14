//Example Adjancency List
// {
//     'A': ['B', 'C'],
//     'B': ['A', 'D'],
//     'C': ['A', 'D'],
//     'D': ['B', 'C']
// }

export class Graph {
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex) {
        this.adjList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    print(){
        for(const v in this.adjList) {
            console.log(`${v} -> ${this.adjList[v]}`);
        }
    }

    removeEdge(v1, v2) {
        //Filter out the vertex
        this.adjList[v1] = this.adjList[v1].filter((v)=> v != v2);
        this.adjList[v2] = this.adjList[v2].filter((v)=> v != v1);
    }

    removeVertex(v) {
        let len = this.adjList[v].length;
        while(len){
            const currentVertex = this.adjList[v].pop();
            //Remove edge between them;
            this.removeEdge(v, currentVertex);
            len = len-1;
        }
        
        delete this.adjList[v];
    }
}

// Example
//      A
//     / \
//    B - C

// Uncommented it to run
// const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'C');

// graph.print();

// console.log("\nRemove Edge between A and B");
// graph.removeEdge('A', 'B');
// graph.print();

// console.log("\nRemove Vertex A");
// graph.removeVertex('A');
// graph.print();