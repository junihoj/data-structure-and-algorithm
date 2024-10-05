class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}


function deleteNode(root, val){
    if (root === null) return null;

    // Use a queue to perform BFS
    let queue = [root];
    let target = null;

    while(queue.length > 0){
        let curr = queue.shift();

        if(curr.data == val){
            target= curr;
            break;
        }
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);

        
    }
    if(target==null) return root;

    // Find the deepest rightmost node and its parent
    let lastNode = null;
    let lastParent = null;
    queue = [{ node: root, parent: null }];

    while(queue.length > 0){
        const {node:curr, parent} = queue.shift();
        lastNode = curr;
        lastParent = parent;

        if(curr.left) queue.push({node:curr.left, parent:curr})
        if(curr.right) queue.push({node:curr.right, parent:curr})
    }

    // Replace target's value with the last node's value
    target.data = lastNode.data;
     // Remove the last node
     if (lastParent) {
        if (lastParent.left === lastNode) lastParent.left = null;
        else lastParent.right = null;
    } else {
        return null;
    }
    return root;
}