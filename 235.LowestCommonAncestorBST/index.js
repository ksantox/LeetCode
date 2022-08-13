import BinaryTreeNode from "../common/BinaryTreeNode.js";

function setupArguments(decendantOneString, decendantTwoString) {
    console.log("Terminal logs not implemented for BST, using default structure.");
    const decendantOne = new BinaryTreeNode(parseInt(decendantOneString));
    const decendantTwo = new BinaryTreeNode(parseInt(decendantTwoString));

    const nodeFive = new BinaryTreeNode(5);
    const nodeThree = new BinaryTreeNode(3);
    const nodeFour = new BinaryTreeNode(4, nodeThree, nodeFive);

    const nodeZero = new BinaryTreeNode(0);
    const nodeTwo = new BinaryTreeNode(2, nodeZero, nodeFour);

    const nodeNine = new BinaryTreeNode(9);
    const nodeSeven = new BinaryTreeNode(7);
    const nodeEight = new BinaryTreeNode(8, nodeSeven, nodeNine);

    const root = new BinaryTreeNode(6, nodeTwo, nodeEight);

    return lowestCommonAncestor(root, decendantOne, decendantTwo);
};

function lowestCommonAncestor(root, decendantOne, decendantTwo) {
    let currNode = root;

    while(currNode) {
        if(decendantOne.val > currNode.val && decendantTwo.val > currNode.val) {
            currNode = currNode.right;
            continue;
        }

        if(decendantOne.val < currNode.val && decendantTwo.val < currNode.val) {
            currNode = currNode.left;
            continue;
        }

        return currNode;
    }

    return null;
}

export default setupArguments;