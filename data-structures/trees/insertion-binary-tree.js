class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

// Function to insert a new node in the binary tree
function insert(root, key) {
    if (root === null) {
        return new Node(key);
    }

    // Create a queue for level order traversal
    let queue = [root];

    while (queue.length > 0) {
        let temp = queue.shift();

        // If left child is empty, insert the new node here
        if (temp.left === null) {
            temp.left = new Node(key);
            break;
        } else {
            queue.push(temp.left);
        }

        // If right child is empty, insert the new node here
        if (temp.right === null) {
            temp.right = new Node(key);
            break;
        } else {
            queue.push(temp.right);
        }
    }

    return root;
}

// In-order traversal
function inorder(root) {
    if (root === null) return;
    inorder(root.left);
    process.stdout.write(root.data + " ");
    inorder(root.right);
}

let root = new Node(2);
root.left = new Node(3);
root.right = new Node(4);
root.left.left = new Node(5);

console.log("Inorder traversal before insertion: ");
inorder(root);
console.log();

let key = 6;
root = insert(root, key);

console.log("Inorder traversal after insertion: ");
inorder(root);
console.log();
