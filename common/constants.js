import FizzBuzz from "../412.FizzBuzz/index.js";
import RansomNote from "../383.RansomNote/index.js";
import RomanToInteger from "../13.RomanToInteger/index.js";
import PalindromeLinkedList from "../234.PalindromeLinkedList/index.js";

export const ProblemMap = {
    13: {
        requiredArguments: 1,
        solution: RomanToInteger,
        link: "https://leetcode.com/problems/roman-to-integer/"
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
    }
}