class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}

export class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {

        const searchResult = this.search(data);

        if(searchResult){
            // data is already exist
            console.log("Item is already exist");
            return false;
        }

        const newNode = new Node(data);

        if(!this.root){
            this.root = newNode;
            return;
        }

        let current = this.root;

        while(current) {
            //insertion in left-subtree
            if(data < current.data){

                // If there is no left node, we can create left-node
                if(!current.left) {
                    current.left = newNode;
                    return;
                }
                else{
                    // Repeat steps in left-subtree
                    current = current.left;
                }
            }
            else { //insertion in right-subtree

                // If there is no right node, we can create right-node
                if(!current.right) {
                    current.right = newNode;
                    return;
                }
                else{
                    // Repeat steps in right-subtree
                    current = current.right;
                }
            }
        }
    }

    print(){
        const printNode = function(node) {
            if(node === null) {
                return;
            }

            printNode(node.left);
            console.log(node.data);
            printNode(node.right);
        }

        printNode(this.root);
    }

    search(data) {

        if(!this.root){
            return false;
        }

        let current = this.root;

        while(current) {
            if(data === current.data){
                return current;
            }
            else if(data < current.data){
                current = current.left;
            }
            else if(data > current.data){
                current = current.right;
            }
        }

        return false;
    }

    remove(data) {
        const removeNode = (node, data) => {
            if(node === null){
                return null;
            }

            if(data === node.data) {
                //If node has only right child
                if(node.left === null){
                    return node.right;
                }
                //If node has only left child
                else if(node.right === null){
                    return node.left;
                }
                //node has both child
                let temp = node.right;

                while(temp.left !== null){
                    temp = temp.left;
                }

                //update deleted-node value with its successer
                node.data = temp.data;
                node.right = removeNode(node.right, temp.data);
                return node;
            }
            else if(data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            else if(data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            }
        };

        this.root = removeNode(this.root, data);
    }
}