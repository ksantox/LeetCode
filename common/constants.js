import TwoSum from "../1.TwoSum/index.js";
import FizzBuzz from "../412.FizzBuzz/index.js";
import RansomNote from "../383.RansomNote/index.js";
import BinarySearch from "../704.BinarySearch/index.js";
import IsSubsequence from "../392.IsSubsequence/index.js";
import RomanToInteger from "../13.RomanToInteger/index.js";
import FindPivotIndex from "../724.FindPivotIndex/index.js";
import DuplicateZeros from "../1089.DuplicateZeros/index.js";
import FirstBadVersion from "../278.FirstBadVersion/index.js";
import RunningSumArray from "../1480.RunningSumArray/index.js";
import MergeSortedArray from "../88.MergeSortedArray/index.js";
import LinkedListCycle2 from "../142.LinkedListCycle2/index.js";
import IsomorphicStrings from "../205.IsomorphicStrings/index.js";
import ReverseLinkedList from "../206.ReverseLinkedList/index.js";
import ContainsDuplicate from "../217.ContainsDuplicate/index.js";
import MaxConsecutiveOnes from "../485.MaxConsecutiveOnes/index.js";
import MiddleOfLinkedList from "../876.MiddleOfLinkedList/index.js";
import MergeTwoSortedLists from "../21.MergeTwoSortedLists/index.js";
import StepsToReduceToZero from "../1342.StepsToReduceToZero/index.js";
import SearchInsertPosition from "../35.SearchInsertPosition/index.js";
import SquaresOfSortedArray from "../977.SquaresOfSortedArray/index.js";
import PalindromeLinkedList from "../234.PalindromeLinkedList/index.js";
import RichestCustomerWealth from "../1672.RichestCustomerWealth/index.js";
import TheWeakestRowsInMatrix from "../1337.TheWeakestRowsInMatrix/index.js";
import ValidateBinarySearchTree from "../98.ValidateBinarySearchTree/index.js";
import FindNumbersWithEvenDigits from "../1295.FindNumbersWithEvenDigits/index.js";

export const ProblemMap = {
    1: {
        requiredArguments: 2,
        solution: TwoSum,
        link: "https://leetcode.com/problems/two-sum/"
    },
    13: {
        requiredArguments: 1,
        solution: RomanToInteger,
        link: "https://leetcode.com/problems/roman-to-integer/"
    },
    21: {
        requiredArguments: 2,
        solution: MergeTwoSortedLists,
        link: "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    35: {
        requiredArguments: 2,
        solution: SearchInsertPosition,
        link: "https://leetcode.com/problems/search-insert-position/"
    },
    88: {
        requiredArguments: 4,
        solution: MergeSortedArray,
        link: "https://leetcode.com/problems/merge-sorted-array/"
    },
    98: {
        requiredArguments: 0,
        solution: ValidateBinarySearchTree,
        link: "https://leetcode.com/problems/validate-binary-search-tree/"
    },
    142: {
        requiredArguments: 2,
        solution: LinkedListCycle2,
        link: "https://leetcode.com/problems/linked-list-cycle-ii/"
    },
    205: {
        requiredArguments: 2,
        solution: IsomorphicStrings,
        link: "https://leetcode.com/problems/isomorphic-strings/"
    },
    206: {
        requiredArguments: 1,
        solution: ReverseLinkedList,
        link: "https://leetcode.com/problems/reverse-linked-list/"
    },
    217: {
        requiredArguments: 1,
        solution: ContainsDuplicate,
        link: "https://leetcode.com/problems/contains-duplicate/"
    },
    234: {
        requiredArguments: 1,
        solution: PalindromeLinkedList,
        link: "https://leetcode.com/problems/palindrome-linked-list/"
    },
    278: {
        requiredArguments: 2,
        solution: FirstBadVersion,
        link: "https://leetcode.com/problems/first-bad-version/"
    },
    383: {
        requiredArguments: 2,
        solution: RansomNote,
        link: "https://leetcode.com/problems/ransom-note/"
    },
    392: {
        requiredArguments: 2,
        solution: IsSubsequence,
        link: "https://leetcode.com/problems/is-subsequence/"
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
    704: {
        requiredArguments: 2,
        solution: BinarySearch,
        link: "https://leetcode.com/problems/binary-search/solution/",
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