import TreeNode from "../common/TreeNode.js";

function setupArguments(decendantOneString, decendantTwoString) {
    console.log("Terminal logs not implemented for BST, using default structre of 5 with left: 1, right: 4 with left: 3, right: 6");
    const decendantOne = new TreeNode(parseInt(decendantOneString));
    const decendantTwo = new TreeNode(parseInt(decendantTwoString));

    const nodeFive = new TreeNode(5);
    const nodeThree = new TreeNode(3);
    const nodeFour = new TreeNode(4, nodeThree, nodeFive);

    const nodeZero = new TreeNode(0);
    const nodeTwo = new TreeNode(2, nodeZero, nodeFour);

    const nodeNine = new TreeNode(9);
    const nodeSeven = new TreeNode(7);
    const nodeEight = new TreeNode(8, nodeSeven, nodeNine);

    const root = new TreeNode(6, nodeTwo, nodeEight);

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