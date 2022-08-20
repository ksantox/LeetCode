import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for BST, using default structure of 3 with left: 9, right: 20 with left: 15, right: 7");

    const nodeSeven = new BinaryTreeNode(7);
    const nodeFifteen = new BinaryTreeNode(15);
    const nodeTwenty = new BinaryTreeNode(20, nodeFifteen, nodeSeven);

    const nodeNine = new BinaryTreeNode(9);
    const root = new BinaryTreeNode(3, nodeNine, nodeTwenty);

    return maxDepth(root);
}

function maxDepth(root) {
    let maximumDepth = 0;
    const nodesToTraverse = [[root, 1]];

    while(nodesToTraverse.length) {
        const [node, depth] = nodesToTraverse.pop();

        if(!node) {
            continue;
        }

        maximumDepth = Math.max(maximumDepth, depth);
        nodesToTraverse.push([node.left, depth + 1]);
        nodesToTraverse.push([node.right, depth + 1]);
    }

    return maximumDepth;
}

export default setupArguments;