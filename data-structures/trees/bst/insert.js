class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}



function insertBST(root, key){
    if(root== null){
        return new Node(key)
    }
    //duplicate not allowed
    if(root.key == key){
        return root;
    }
    if(key < root.key){
        root.left = insertBST(root.left, key);
    }else if(key > root.key){
        root.right = insertBST(root.right, key);
    }

    return  root;
}


// A utility function to do inorder
// tree traversal
function inorder(root) {
    if (root !== null) {
        inorder(root.left);
        console.log(root.key + " ");
        inorder(root.right);
    }
}

// Creating the following BST
//      50
//     /  \
//    30   70
//   / \   / \
//  20 40 60 80

let root = new Node(50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

// Print inorder traversal of the BST
inorder(root);
