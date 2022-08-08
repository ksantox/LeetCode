import FizzBuzz from "../412.FizzBuzz/index.js";
import RansomNote from "../383.RansomNote/index.js";
import RomanToInteger from "../13.RomanToInteger/index.js";
import FindPivotIndex from "../724.FindPivotIndex/index.js";
import DuplicateZeros from "../1089.DuplicateZeros/index.js";
import RunningSumArray from "../1480.RunningSumArray/index.js";
import MergeSortedArray from "../88.MergeSortedArray/index.js";
import MaxConsecutiveOnes from "../485.MaxConsecutiveOnes/index.js";
import MiddleOfLinkedList from "../876.MiddleOfLinkedList/index.js";
import StepsToReduceToZero from "../1342.StepsToReduceToZero/index.js";
import SquaresOfSortedArray from "../977.SquaresOfSortedArray/index.js";
import PalindromeLinkedList from "../234.PalindromeLinkedList/index.js";
import RichestCustomerWealth from "../1672.RichestCustomerWealth/index.js";
import TheWeakestRowsInMatrix from "../1337.TheWeakestRowsInMatrix/index.js";
import FindNumbersWithEvenDigits from "../1295.FindNumbersWithEvenDigits/index.js";

export const ProblemMap = {
    13: {
        requiredArguments: 1,
        solution: RomanToInteger,
        link: "https://leetcode.com/problems/roman-to-integer/"
    },
    88: {
        requiredArguments: 4,
        solution: MergeSortedArray,
        link: "https://leetcode.com/problems/merge-sorted-array/"
    },
    234: {
        requiredArguments: 1,
        solution: PalindromeLinkedList,
        link: "https://leetcode.com/problems/palindrome-linked-list/"
    },
    383: {
        requiredArguments: 2,
        solution: RansomNote,
        link: "https://leetcode.com/problems/ransom-note/"
    },
    412: {
        requiredArguments: 1,
        solution: FizzBuzz,
        link: "https://leetcode.com/problems/fizz-buzz/"
    },
    485: {
        requiredArguments: 1,
        solution: MaxConsecutiveOnes,
        link: "https://leetcode.com/problems/max-consecutive-ones/"
    },
    724: {
        requiredArguments: 1,
        solution: FindPivotIndex,
        link: "https://leetcode.com/problems/find-pivot-index/"
    },
    876: {
        requiredArguments: 1,
        solution: MiddleOfLinkedList,
        link: "https://leetcode.com/problems/middle-of-the-linked-list/"
    },
    977: {
        requiredArguments: 1,
        solution: SquaresOfSortedArray,
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/"
    },
    1089: {
        requiredArguments: 1,
        solution: DuplicateZeros,
        link: "https://leetcode.com/problems/duplicate-zeros/"
    },
    1295: {
        requiredArguments: 1,
        solution: FindNumbersWithEvenDigits,
        link: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/"
    },
    1337: {
        defaults: ["matrix"],
        requiredArguments: 1,
        solution: TheWeakestRowsInMatrix,
        link: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"
    },
    1342: {
        requiredArguments: 1,
        solution: StepsToReduceToZero,
        link: "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/"
    },
    1672: {
        requiredArguments: 1,
        solution: RichestCustomerWealth,
        link: "https://leetcode.com/problems/richest-customer-wealth/"
    },
    1480: {
        requiredArguments: 1,
        solution: RunningSumArray,
        link: "https://leetcode.com/problems/running-sum-of-1d-array/"
    }
}