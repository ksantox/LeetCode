import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for BST, using default structure of 5 with left: 1, right: 4 with left: 3, right: 6");

    const nodeSix = new BinaryTreeNode(6);
    const nodeThree = new BinaryTreeNode(3);
    const nodeFour = new BinaryTreeNode(4, nodeThree, nodeSix);

    const nodeOne = new BinaryTreeNode(1);
    const root = new BinaryTreeNode(5, nodeOne, nodeFour);

    return isValidBST(root);
};

function isValidBST(node, min = null, max = null) {
    if(max !== null && node.val >= max) {
        return false;
    }

    if(min !== null && node.val <= min) {
        return false;
    }

    if(node.left && !isValidBST(node.left, min, node.val)) {
        return false;
    }

    if(node.right && !isValidBST(node.right, node.val, max)) {
        return false;
    }

    return true;
}

export default setupArguments;