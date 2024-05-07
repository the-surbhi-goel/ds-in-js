# Max Depth

Maximum depth of a tree is the number of nodes alongwith the longest path.
It can be find usinf depth-first traversal algorithm.


<p align="center">
  <img src="../images/tree.png" width="350" title="Tree">
</p>

Maximum depth is 4 (A -> B -> D -> H)


## Node Class

```
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
```