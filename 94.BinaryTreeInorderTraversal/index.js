import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for BST, using default structure of 5 with left: 1, right: 4 with left: 3, right: 6");

    const nodeSix = new BinaryTreeNode(6);
    const nodeThree = new BinaryTreeNode(3);
    const nodeFour = new BinaryTreeNode(4, nodeThree, nodeSix);

    const nodeOne = new BinaryTreeNode(1);
    const root = new BinaryTreeNode(5, nodeOne, nodeFour);

    return inorderTraversal(root);
};

function inorderTraversal(root) {
    if(!root) {
        return [];
    }

    const result = [];
    const nodesToTraverse = [];

    let currentNode = root;

    while(nodesToTraverse.length || currentNode) {
        while(currentNode) {
            nodesToTraverse.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = nodesToTraverse.pop();
        result.push(currentNode.val);
        currentNode = currentNode.right;
    }

    return result;
}

export default setupArguments;