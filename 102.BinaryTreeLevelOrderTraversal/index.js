import TreeNode from "../common/TreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for BST, using default structure of 3 with left: 9, right: 20 with left: 15, right: 7");

    const nodeSeven = new TreeNode(7);
    const nodeFifteen = new TreeNode(15);
    const nodeTwenty = new TreeNode(20, nodeFifteen, nodeSeven);

    const nodeNine = new TreeNode(9);
    const root = new TreeNode(3, nodeNine, nodeTwenty);

    return levelOrder(root);
};

function levelOrder(root) {
    if(!root) {
        return [];
    }

    const capturedNodes = [];
    const nodesToTraverse = [root];

    while(nodesToTraverse.length) {
        const currLevelNodes = nodesToTraverse.length;
        const level = [];
        
        for (let i = 0; i < currLevelNodes; i++) {
            const node = nodesToTraverse.shift();
            level.push(node.val);
            
            if(node.left) {
                nodesToTraverse.push(node.left);
            }
    
            if(node.right) {
                nodesToTraverse.push(node.right);
            }
        }

        capturedNodes.push(level);
    }

    return capturedNodes;
}

export default setupArguments;