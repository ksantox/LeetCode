import TreeNode from "../common/TreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for Trees, using default structure.");

    const nodeSix = new TreeNode(6);
    const nodeFive = new TreeNode(5);
    const nodeThree = new TreeNode(3, [nodeFive, nodeSix]);

    const nodeTwo = new TreeNode(2);
    const nodeFour = new TreeNode(4);
    const root = new TreeNode(1, [nodeThree, nodeTwo, nodeFour]);

    return preorder(root);
};

function preorder(root) {
    if(!root) {
        return [];
    }

    const capturedNodes = [];
    const nodesToTraverse = [root];

    while(nodesToTraverse.length) {
        const node = nodesToTraverse.shift();
        capturedNodes.push(node.val);

        nodesToTraverse.unshift(...node.children);
    }

    return capturedNodes;
}

export default setupArguments;