/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a roman numeral, convert it to an integer.

  * Example 1:
    Input: s = "III"
    Output: 3
    Explanation: III = 3.
  * Example 2:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {};

// Test Cases
const inputs = ["III", "LVIII"];
const outputs = [3, 58];
const validations = { passing: [], failing: [] };
for (let i = 0; i < inputs.length; i++) {
  const check = romanToInt(inputs[i]);
  if (check === outputs[i]) {
    validations.passing.push(inputs[i]);
  } else {
    validations.failing.push(inputs[i]);
  }
}
console.log(`Passing tests: ${validations.passing}`);
console.log(`Failing tests: ${validations.failing}`);

// O(n)
var romanToInt = function(s) {
  let table = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  
  let result = 0;
  for (let i = 0; i < s.length; i++) {
      //if the next roman numeral is larger > subtract this number
      if (table[s[i]] < table[s[i+1]]) {
          result-=table[s[i]]
      } 
      //otherwise, add like normal. 
      else {
          result+=table[s[i]]
      }
  }
  return result
  
};


var romanToInt = function (s) {
  const numerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  };

  // const strLen = string.length;
  let total = 0;

  // Loop through the letters
  for (let i = 0; i < s.length; i++) {
      // Check if the current letter is followed by one with a higher value (indicating a deduction)
      if (i < s.length - 1 && numerals[s[i + 1]] > numerals[s[i]]) {
          // Remove the current letter's numeric value from the total
          total -= numerals[s[i]];
      } else {
          // Add the current letter's numeric value to the total
          total += numerals[s[i]];
      }
  }

  return total;
};


// O(1)