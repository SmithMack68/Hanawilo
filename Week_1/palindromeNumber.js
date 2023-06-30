/** 
  * ? Question Information:
  * Given an integer x, return true if x is a palindrome, and false otherwise.
  * 
  * ! Example 1:
  * Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left. 
  * ! Example 2:
  * Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
  * ! Example 3:
  * Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {};

// Testing
// const checkCases = [121, -121, 10, 0100, 01001, 101, 55455];
const palindromeAns = [true, false, false, false, false, true, true];
let checkedCases = { passing: [], failing: [] };
for (let i = 0; i < checkCases.length - 1; i++) {
  const check = isPalindrome(checkCases[i]) === palindromeAns[i];
  if (check) {
    checkedCases.passing.push(checkCases[i]);
  } else {
    checkedCases.failing.push(checkCases[i]);
  }
}
console.log(`Passing tests: ${checkedCases.passing}`);
console.log(`Failing tests: ${checkedCases.failing}`);

// STRING BASED REVERSAL
// var isPalindrome = function (x) {
//   return x == x.toString().split('').reverse().join('')
// };

// // Testing
// const checkCases = [121, -121, 10, 0100, 01001];
// for (let i = 0; i < checkCases.length - 1; i++) {
//   isPalindrome(checkCases[i]);
// }

// console.log(isPalindrome(checkCases[0]))
// 
// // if x == x.toString().split('').reverse().join('')


// NUMBER BASED REVERSAL - does not convert to a string
// modulus- used to compute the remainder of an integer division that 
// would otherwise be lost symbolized by a % 
// can be used for  checking odd/even
// tracking the next position in a circular array
// MODULUS if (x % 10 === 0) can't be a palindrome
// LOGIC
// 1. check if less than 0, if yes return false
// 2. initialize a var temp with X
// 3. initialize the reverse var with 0
// 4. loop over the number until <= 0
// 5.??? x the reversed var with 10 + the last number of digit to it
// 6. remove last digit of X
// 7. when loop ends have reversed number
// 8. if reversed == temp return true
// 9. else false

function isPalindrome(x) {
  // if (x < 0) return false
  if (x < 0 || (x % 10 == 0 && x > 0)) return false

  let reverse = 0

  for (let i = x; i >= 1; i = Math.floor(i/10)) reverse = reverse * 10 + i % 10
  return reverse === x

}

// var isPalindrome = function(x) {
//   const isNegative = x< 0 ? true : false

//   if(isNegative){
//     return false
//   }

//   const temp = x
//   let reversed = 0

//   while(x>0){
//     reversed = (reversed * 10) + (x%10)
//     x = parseInt(x/10)
//   }

//   return reversed == temp
// }

var isPalindrome = function(x){
  if (x < 0) return false
  if (x % 10 === 0) return false
  //if (x % 10 ===0 && x !== 0)

  var reversedNumber = 0
  
  while  (x > reversedNumber) {
    reversedNumber = reversedNumber * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return x === reversedNumber || x === Math.floor(reversedNumber /10)
}

// TWO POINTER METHOD
// Take one digit from the start, and another from the last. 
// Check if both are equal if not, the number is not a palindrome.
// fastest converts toString

// var isPalindrome = function (x) {

//   if (x < 0) {
//     return false;
//   }

//   if (x < 10) {
//     return true;
//   }

//   if (x % 10 === 0 && x !== 0) {
//     return false;
//   }

//   const str = String(x);
//   let i = 0, j = str.length - 1;

//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }

//     i++;
//     j--;
//   }

//   return true;
// };