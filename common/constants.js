import FizzBuzz from "../412.FizzBuzz/index.js";
import RansomNote from "../383.RansomNote/index.js";
import RomanToInteger from "../13.RomanToInteger/index.js";
import MiddleOfLinkedList from "../876.MiddleOfLinkedList/index.js";
import StepsToReduceToZero from "../1342.StepsToReduceToZero/index.js";
import PalindromeLinkedList from "../234.PalindromeLinkedList/index.js";
import RichestCustomerWealth from "../1672.RichestCustomerWealth/index.js";
import TheWeakestRowsInMatrix from "../1337.TheWeakestRowsInMatrix/index.js";

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
    },
    876: {
        requiredArguments: 1,
        solution: MiddleOfLinkedList,
        link: "https://leetcode.com/problems/middle-of-the-linked-list/"
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
    }
}