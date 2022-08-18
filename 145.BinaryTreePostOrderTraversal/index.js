import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for BST, using default structure of 5 with left: 1, right: 4 with left: 3, right: 6");

    const nodeSix = new BinaryTreeNode(6);
    const nodeThree = new BinaryTreeNode(3);
    const nodeFour = new BinaryTreeNode(4, nodeThree, nodeSix);

    const nodeOne = new BinaryTreeNode(1);
    const root = new BinaryTreeNode(5, nodeOne, nodeFour);

    return postorderTraversal(root);
};

function postorderTraversal(root) {
    if(!root) {
        return [];
    }

    const result = [];
    const nodeToTraverse = [root];

    while(nodeToTraverse.length) {
        const currentNode = nodeToTraverse.pop();
        result.unshift(currentNode.val);

        if(currentNode.left) {
            nodeToTraverse.push(currentNode.left);
        }

        if(currentNode.right) {
            nodeToTraverse.push(currentNode.right);
        }
    }

    return result;
}

export default setupArguments;