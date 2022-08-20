import TreeNode from "../common/BinaryTreeNode.js";

function setupArguments(stringNumber) {
    console.log("Terminal logs not implemented for BST, using default structure.");

    const nodeOne = new TreeNode(1);
    const nodeThree = new TreeNode(3);
    const nodeTwo = new TreeNode(2, nodeOne, nodeThree);

    const nodeSeven = new TreeNode(7);

    const newValue = parseInt(stringNumber);
    const root = new TreeNode(4, nodeTwo, nodeSeven);

    return insertIntoBST(root, newValue);
}

function insertIntoBST(root, newValue) {
    if(!root) {
        return new TreeNode(newValue);
    }

    let node = root;

    while(node) {
        if(node.val < newValue) {
            if(node.right) {
                node = node.right;
                continue;
            }

            node.right = new TreeNode(newValue);
            return root;
        }

        if(node.left) {
            node = node.left;
            continue;
        }

        node.left = new TreeNode(newValue);
        return root;
    }

    return null;
}

export default setupArguments;