import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments(descendantOneString, descendantTwoString) {
    console.log("Terminal logs not implemented for BST, using default structure.");
    const descendantOne = new BinaryTreeNode(parseInt(descendantOneString));
    const descendantTwo = new BinaryTreeNode(parseInt(descendantTwoString));

    const nodeFive = new BinaryTreeNode(5);
    const nodeThree = new BinaryTreeNode(3);
    const nodeFour = new BinaryTreeNode(4, nodeThree, nodeFive);

    const nodeZero = new BinaryTreeNode(0);
    const nodeTwo = new BinaryTreeNode(2, nodeZero, nodeFour);

    const nodeNine = new BinaryTreeNode(9);
    const nodeSeven = new BinaryTreeNode(7);
    const nodeEight = new BinaryTreeNode(8, nodeSeven, nodeNine);

    const root = new BinaryTreeNode(6, nodeTwo, nodeEight);

    return lowestCommonAncestor(root, descendantOne, descendantTwo);
};

function lowestCommonAncestor(root, descendantOne, descendantTwo) {
    let currNode = root;

    while(currNode) {
        if(descendantOne.val > currNode.val && descendantTwo.val > currNode.val) {
            currNode = currNode.right;
            continue;
        }

        if(descendantOne.val < currNode.val && descendantTwo.val < currNode.val) {
            currNode = currNode.left;
            continue;
        }

        return currNode;
    }

    return null;
}

export default setupArguments;