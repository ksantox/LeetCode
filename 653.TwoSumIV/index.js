import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments(stringNumber) {
    console.log("Terminal logs not implemented for BST, using default structure of 3 with left: 9, right: 20 with left: 15, right: 7");

    const nodeSeven = new BinaryTreeNode(7);
    const nodeSix = new BinaryTreeNode(6, null, nodeSeven);
    
    const nodeTwo = new BinaryTreeNode(2);
    const nodeFour = new BinaryTreeNode(4);
    const nodeThree = new BinaryTreeNode(3, nodeTwo, nodeFour);

    const root = new BinaryTreeNode(5, nodeThree, nodeSix);
    const target = parseInt(stringNumber);

    return findTarget(root, target);
}

function findTarget(root, target) {
    const map = {};
    const nodesToTraverse = [root];

    while(nodesToTraverse.length) {
        const node = nodesToTraverse.shift();

        if(map[node.val] !== undefined) {
            return true;
        }

        if(node.left) {
            nodesToTraverse.unshift(node.left);
        }

        if(node.right) {
            nodesToTraverse.unshift(node.right);
        }

        map[target - node.val] = node.val;
    }

    return false;
}

export default setupArguments;