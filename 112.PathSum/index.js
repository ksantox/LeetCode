import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments(stringNumber) {
    console.log("Terminal logs not implemented for BST, using default structure.");

    const nodeOne = new BinaryTreeNode(1);
    const nodeSix = new BinaryTreeNode(6, null, nodeOne);
    const nodeThirteen = new BinaryTreeNode(13);
    const nodeEight = new BinaryTreeNode(8, nodeThirteen, nodeSix);
    
    const nodeTwo = new BinaryTreeNode(2);
    const nodeSeven = new BinaryTreeNode(7);
    const nodeEleven = new BinaryTreeNode(11, nodeSeven, nodeTwo);
    const nodeFour = new BinaryTreeNode(4, nodeEleven);

    const target = parseInt(stringNumber);
    const root = new BinaryTreeNode(5, nodeFour, nodeEight);

    return hasPathSum(root, target);
}

function hasPathSum(root, target, sum = 0) {
    if(!root) {
        return false;
    }

    sum += root.val;

    if(sum === target && !root.left && !root.right) {
        return true;
    }

    const doesLeftHavePathSum = hasPathSum(root.left, target, sum);

    if(doesLeftHavePathSum) {
        return true;
    }

    const doesRightHavePathSum = hasPathSum(root.right, target, sum);

    if(doesRightHavePathSum) {
        return true;
    }
    
    return false;
}

export default setupArguments;