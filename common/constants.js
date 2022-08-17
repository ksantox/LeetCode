import TwoSum from "../1.TwoSum/index.js";
import FizzBuzz from "../412.FizzBuzz/index.js";
import MoveZeroes from "../283.MoveZeroes/index.js";
import RansomNote from "../383.RansomNote/index.js";
import NumberOfBits from "../191.NumberOfBits/index.js";
import BinarySearch from "../704.BinarySearch/index.js";
import ValidAnagram from "../242.ValidAnagram/index.js";
import ReverseString from "../344.ReverseString/index.js";
import IsSubsequence from "../392.IsSubsequence/index.js";
import RomanToInteger from "../13.RomanToInteger/index.js";
import FindPivotIndex from "../724.FindPivotIndex/index.js";
import DuplicateZeros from "../1089.DuplicateZeros/index.js";
import PascalsTriangle from "../118.PascalsTriangle/index.js";
import FirstBadVersion from "../278.FirstBadVersion/index.js";
import LinkedListCycle from "../141.LinkedListCycle/index.js";
import RunningSumArray from "../1480.RunningSumArray/index.js";
import MergeSortedArray from "../88.MergeSortedArray/index.js";
import ReshapeTheMatrix from "../566.ReshapeTheMatrix/index.js";
import FindNearestPoint from "../1779.FindNearestPoint/index.js";
import LinkedListCycle2 from "../142.LinkedListCycleII/index.js";
import LongestPalindrome from "../409.LongestPalindrome/index.js";
import IsomorphicStrings from "../205.IsomorphicStrings/index.js";
import ReverseLinkedList from "../206.ReverseLinkedList/index.js";
import ContainsDuplicate from "../217.ContainsDuplicate/index.js";
import MaxConsecutiveOnes from "../485.MaxConsecutiveOnes/index.js";
import MiddleOfLinkedList from "../876.MiddleOfLinkedList/index.js";
import MergeTwoSortedLists from "../21.MergeTwoSortedLists/index.js";
import StepsToReduceToZero from "../1342.StepsToReduceToZero/index.js";
import SearchInsertPosition from "../35.SearchInsertPosition/index.js";
import FirstUniqueCharacter from "../387.FirstUniqueCharacter/index.js";
import SquaresOfSortedArray from "../977.SquaresOfSortedArray/index.js";
import PalindromeLinkedList from "../234.PalindromeLinkedList/index.js";
import UniqueMorseCodeWords from "../804.UniqueMorseCodeWords/index.js";
import SignOfProductOfArray from "../1822.SignOfProductOfArray/index.js";
import RichestCustomerWealth from "../1672.RichestCustomerWealth/index.js";
import TheWeakestRowsInMatrix from "../1337.TheWeakestRowsInMatrix/index.js";
import ReverseWordsInStringIII from "../557.ReverseWordsInStringIII/index.js";
import LowestCommonAncestorBST from "../235.LowestCommonAncestorBST/index.js";
import ValidateBinarySearchTree from "../98.ValidateBinarySearchTree/index.js";
import LargestPerimeterTriangle from "../976.LargestPerimeterTriangle/index.js";
import RemoveLinkedListElements from "../203.RemoveLinkedListElements/index.js";
import CountOddNumbersFromRange from "../1523.CountOddNumbersFromRange/index.js";
import IntersectionOfTwoArraysII from "../350.IntersectionOfTwoArraysII/index.js";
import NaryTreePreorderTraversal from "../589.NaryTreePreorderTraversal/index.js";
import BestTimeToBuyAndSellStock from "../121.BestTimeToBuyAndSellStock/index.js";
import FindNumbersWithEvenDigits from "../1295.FindNumbersWithEvenDigits/index.js";
import BinaryTreeLevelOrderTraversal from "../102.BinaryTreeLevelOrderTraversal/index.js";
import SubtractProductAndSumOfDigits from "../1281.SubtractProductAndSumOfDigits/index.js";
import AverageSalaryExcludingMinAndMax from "../1491.AverageSalaryExcludingMinAndMax/index.js";

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
    102: {
        requiredArguments: 0,
        solution: BinaryTreeLevelOrderTraversal,
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    118: {
        requiredArguments: 1,
        solution: PascalsTriangle,
        link: "https://leetcode.com/problems/pascals-triangle/"
    },
    121: {
        requiredArguments: 1,
        solution: BestTimeToBuyAndSellStock,
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    },
    141: {
        requiredArguments: 2,
        solution: LinkedListCycle,
        link: "https://leetcode.com/problems/linked-list-cycle/"
    },
    142: {
        requiredArguments: 2,
        solution: LinkedListCycle2,
        link: "https://leetcode.com/problems/linked-list-cycle-ii/"
    },
    191: {
        requiredArguments: 1,
        solution: NumberOfBits,
        link: "https://leetcode.com/problems/number-of-1-bits/"
    },
    203: {
        requiredArguments: 2,
        solution: RemoveLinkedListElements,
        link: "https://leetcode.com/problems/remove-linked-list-elements/"
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
    235: {
        requiredArguments: 2,
        solution: LowestCommonAncestorBST,
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
    },
    242: {
        requiredArguments: 2,
        solution: ValidAnagram,
        link: "https://leetcode.com/problems/valid-anagram/"
    },
    278: {
        requiredArguments: 2,
        solution: FirstBadVersion,
        link: "https://leetcode.com/problems/first-bad-version/"
    },
    283: {
        requiredArguments: 1,
        solution: MoveZeroes,
        link: "https://leetcode.com/problems/move-zeroes/"
    },
    344: {
        requiredArguments: 1,
        solution: ReverseString,
        link: "https://leetcode.com/problems/reverse-string/"
    },
    350: {
        requiredArguments: 2,
        solution: IntersectionOfTwoArraysII,
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/"
    },
    383: {
        requiredArguments: 2,
        solution: RansomNote,
        link: "https://leetcode.com/problems/ransom-note/"
    },
    387: {
        requiredArguments: 1,
        solution: FirstUniqueCharacter,
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/"
    },
    392: {
        requiredArguments: 2,
        solution: IsSubsequence,
        link: "https://leetcode.com/problems/is-subsequence/"
    },
    409: {
        requiredArguments: 1,
        solution: LongestPalindrome,
        link: "https://leetcode.com/problems/longest-palindrome/"
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
    557: {
        requiredArguments: 0,
        solution: ReverseWordsInStringIII,
        link: "https://leetcode.com/problems/reverse-words-in-a-string-iii/"
    },
    566: {
        requiredArguments: 3,
        solution: ReshapeTheMatrix,
        link: "https://leetcode.com/problems/reshape-the-matrix/"
    },
    589: {
        requiredArguments: 0,
        solution: NaryTreePreorderTraversal,
        link: "https://leetcode.com/problems/n-ary-tree-preorder-traversal/"
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
    804: {
        requiredArguments: 1,
        solution: UniqueMorseCodeWords,
        link: "https://leetcode.com/problems/unique-morse-code-words/"
    },
    876: {
        requiredArguments: 1,
        solution: MiddleOfLinkedList,
        link: "https://leetcode.com/problems/middle-of-the-linked-list/"
    },
    976: {
        requiredArguments: 1,
        solution: LargestPerimeterTriangle,
        link :"https://leetcode.com/problems/largest-perimeter-triangle/"
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
    1281: {
        requiredArguments: 1,
        solution: SubtractProductAndSumOfDigits,
        link: "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"
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
    1491: {
        requiredArguments: 1,
        solution: AverageSalaryExcludingMinAndMax,
        link: "https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"
    },
    1523: {
        requiredArguments: 2,
        solution: CountOddNumbersFromRange,
        link: "https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/"
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
    },
    1779: {
        requiredArguments: 3,
        solution: FindNearestPoint,
        link: "https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/"
    },
    1822: {
        requiredArguments: 1,
        solution: SignOfProductOfArray,
        link: "https://leetcode.com/problems/sign-of-the-product-of-an-array/"
    }
}