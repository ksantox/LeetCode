import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for BST, using default structure.");

    const nodeSeven = new BinaryTreeNode(7);
    const nodeFifteen = new BinaryTreeNode(15);
    const nodeTwenty = new BinaryTreeNode(20, nodeFifteen, nodeSeven);

    const nodeNine = new BinaryTreeNode(9);
    const root = new BinaryTreeNode(3, nodeNine, nodeTwenty);

    return invertTree(root);
}

function invertTree(root) {
    if(!root) {
        return null;
    }

    const nodesToTraverse = [root];

    while(nodesToTraverse.length) {
        const node = nodesToTraverse.pop();
        
        const temp = node?.left;
        node.left = node.right;
        node.right = temp;

        if(node.left) {
            nodesToTraverse.push(node.left);
        }

        if(node.right) {
            nodesToTraverse.push(node.right);
        }
    }

    return root;
}

export default setupArguments;