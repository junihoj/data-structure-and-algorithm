class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// Note that it is not a generic inorder successor
// function. It mainly works when the right child 
// is not empty, which is  the case we need in BST
// delete.


function getSuccessor(curr){
    curr = curr.right;
    while(curr !=null && curr.left !=null){
        curr = curr.left;
    }
    return curr;
}

// This function deletes a given key x from the
// given BST and returns the modified root of the
// BST (if it is modified).
function deleteNode(root,x){
    if(root.key == null){
        return root;
    }

    if(root.key > x){
        root.left = deleteNode(root.left, x);
    }else if(root.key < x){
        root.right = deleteNode(root.right, x);
    }else{
        // If root matches with the given key

        // Cases when root has 0 children or 
        // only right child

        if (root.left === null) 
            return root.right;

        // When root has only left child
        if (root.right === null) 
            return root.left;
        // When both children are present
        let succ = getSuccessor(root);
        root.key = succ.key;
        root.right = deleteNode(root.right, succ.key);
    }
    return root;
}


// Utility function to do inorder traversal
function inorder(root) {
    if (root !== null) {
        inorder(root.left);
        console.log(root.key + " ");
        inorder(root.right);
    }
}

// Driver code
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.left = new Node(12);
root.right.right = new Node(18);
let x = 15;

root = delNode(root, x);
inorder(root);
console.log();