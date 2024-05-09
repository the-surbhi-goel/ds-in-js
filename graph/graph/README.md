# Graph

Graphs are like trees.
Graph have nodes(or vertices) and edges(link or path).


## Class & Constructor

```
class Graph {
    constructor(){
        this.adjList = {};
    }
}
```


## Add Vertex

```
  addVertex(vertex) {
        this.adjList[vertex] = [];
    }
```


## Add Edge

```
  addEdge(v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }
```


## Print Adjacency List

```
    print(){
        for(const v in this.adjList) {
            console.log(`${v} -> ${this.adjList[v]}`);
        }
    }
```


## Remove Edge

```
    removeEdge(v1, v2) {
        //Filter out the vertex
        this.adjList[v1] = this.adjList[v1].filter((v)=> v != v2);
        this.adjList[v2] = this.adjList[v2].filter((v)=> v != v1);
    }
```


## Remove Vertex

```
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
```
