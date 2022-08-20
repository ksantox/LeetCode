import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments() {
    console.log("Terminal logs not implemented for BST, using default structure of 1 with left: 2 with a left: 3, right: 2 with right:3");

    const nodeFourRight = new BinaryTreeNode(4);
    const nodeThreeRight = new BinaryTreeNode(3);
    const nodeTwoRight = new BinaryTreeNode(2, null, nodeThreeRight);
    
    const nodeFourLeft = new BinaryTreeNode(4);
    const nodeThreeLeft = new BinaryTreeNode(3);
    const nodeTwoLeft = new BinaryTreeNode(2, nodeThreeLeft, null);

    const root = new BinaryTreeNode(1, nodeTwoLeft, nodeTwoRight);

    return isSymmetric(root);
}

function isSymmetric(root) {
    const nodesToTraverse = [root];

    while(nodesToTraverse.length) {
        const level = [];
        const symmetryStack = [];
        const childrenCount = nodesToTraverse.length;
        
        for(let i = 0; i < childrenCount; i++) {
            const node = nodesToTraverse.shift();

            if(i < childrenCount / 2) {
                symmetryStack.push(node?.val);
            } else {
                if(symmetryStack[symmetryStack.length - 1] !== node?.val) {
                    return false;
                } else {
                    symmetryStack.pop();
                }
            }

            if(!node) {
                continue;
            }

            level.push(node.left);
            level.push(node.right);
        }

        nodesToTraverse.push(...level);
    }

    return true;
}

export default setupArguments;