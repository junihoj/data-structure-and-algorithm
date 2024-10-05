class Node {
    constructor(k) {
        this.data = k;
        this.left = null;
        this.right = null;
    }
}

// Function to search for a value in the binary tree using DFS
function searchDFS(root, value) {
    // Base case: If the tree is empty or we've reached a leaf node
    if (root === null) {
        return false;
    }
    // If the node's data is equal to the value we are searching for
    if (root.data === value) {
        return true;
    }
    // Recursively search in the left and right subtrees
    const left_res = searchDFS(root.left, value);
    const right_res = searchDFS(root.right, value);

    return left_res || right_res;
}

// Creating the binary tree
const root = new Node(2);
root.left = new Node(3);
root.right = new Node(4);
root.left.left = new Node(5);
root.left.right = new Node(6);

const value = 6;
if (searchDFS(root, value)) {
    console.log(`${value} is found in the binary tree`);
} else {
    console.log(`${value} is not found in the binary tree`);
}
