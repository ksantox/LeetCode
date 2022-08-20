import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments(stringNumber) {
    console.log("Terminal logs not implemented for BST, using default structure.");

    const nodeOne = new BinaryTreeNode(1);
    const nodeThree = new BinaryTreeNode(3);
    const nodeTwo = new BinaryTreeNode(2, nodeOne, nodeThree);

    const nodeSeven = new BinaryTreeNode(7);

    const target = parseInt(stringNumber);
    const root = new BinaryTreeNode(4, nodeTwo, nodeSeven);

    return searchBST(root, target);
}

function searchBST(root, target) {
    let node = root;

    while(node) {
        if(node.val === target) {
            return node;
        }

        node = node.val > target ? node.left : node.right;
    }

    return null;
}

export default setupArguments;