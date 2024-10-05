class Node {
    constructor(key)
    {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}


function searchBST(root, key){
    if(root==null || root.key == key) return root;
    
    if(root.key > key){
        return searchBST(root.left, key);
    }
    

    return searchBST(root.right, key);
}


// Creating a hard coded tree for keeping 
// the length of the code small. We need 
// to make sure that BST properties are 
// maintained if we try some other cases.
let root = new Node(50);
root.left = new Node(30);
root.right = new Node(70);
root.left.left = new Node(20);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);

// Searching for keys in the BST
console.log(search(root, 19) !== null ? "Found"
                                      : "Not Found");
console.log(search(root, 80) !== null ? "Found"
                                      : "Not Found");