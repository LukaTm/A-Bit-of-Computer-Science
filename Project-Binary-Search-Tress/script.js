class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
  
class Tree {
    constructor(arr) {
        const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
        this.root = buildTree(sortedArr, 0, sortedArr.length - 1);
    }
}
  
function buildTree(arr, start, end) {
    if (start > end) {
        return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);
    return node;
}

function height(node) {
    if (node === null) {
        return -1;
    }
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function getRandomArray(length, min, max) {
    return Array.from({ length }, () => getRandomInt(min, max));
}
  
const arr = getRandomArray(15, 1, 100);
const tree = new Tree(arr);

function isBalanced(node) {
    if (node === null) {
        return true;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    if (Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(node.left) && isBalanced(node.right)) {
        return true;
    }
    return false;
}

function levelOrder(node, fn) {
    if (node === null) {
        return [];
    }
    const queue = [node];
    const values = [];
    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (fn) {
            fn(currentNode);
        } else {
            values.push(currentNode.data);
        }
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return values;
}
  
function inorder(node, fn) {
    if (node === null) {
        return [];
    }
    const values = [];
    function traverse(node) {
        if (node.left) {
            traverse(node.left);
        }
        if (fn) {
            fn(node);
        } else {
            values.push(node.data);
        } 
        if (node.right) {
            traverse(node.right);
        }
    }
    traverse(node);
    return values;
}
  
function preorder(node, fn) {
    if (node === null) {
        return [];
    }
    const values = [];
    function traverse(node) {
        if (fn) {
            fn(node);
        } else {
            values.push(node.data);
        }
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }
    }
    traverse(node);
    return values;
}
  

function postorder(node, fn) {
    if (node === null) {
        return [];
    }
    const values = [];
    function traverse(node) {
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }

        values.push(node.data);
        if (fn) {
            fn(node);
        }
    }
        traverse(node);
        return fn ? null : values;
}
     
console.log(isBalanced(tree.root)); // true
  


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}
let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
// const haha = prettyPrint(buildTree(array,0,14))
// console.log(haha)
