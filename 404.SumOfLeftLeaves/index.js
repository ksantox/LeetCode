import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for BST, using default structure of 3 with left: 9, right: 20 with left: 15, right: 7");

    const nodeSeven = new BinaryTreeNode(7);
    const nodeFifteen = new BinaryTreeNode(15);
    const nodeTwenty = new BinaryTreeNode(20, nodeFifteen, nodeSeven);

    const nodeNine = new BinaryTreeNode(9);
    const root = new BinaryTreeNode(3, nodeNine, nodeTwenty);

    return sumOfLeftLeaves(root);
}

function sumOfLeftLeaves(root) {
    let sum = 0;
    const nodesToTraverse = [root];

    while(nodesToTraverse.length) {
        const node = nodesToTraverse.pop();

        if(node?.left) {
            if(!node.left.left && !node.left.right) {
                sum += node.left.val;
            } else {
                nodesToTraverse.push(node.left);
            }
        }

        if(node?.right) {
            nodesToTraverse.push(node.right);
        }
    }

    return sum;
}

export default setupArguments;