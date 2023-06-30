/**
  * ? Question Information
    * ? Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    * ? You may assume that each input would have exactly one solution, and you may not use the same element twice.
    * ? You can return the answer in any order.
  * ! Example 1:
    * Input: nums = [2,7,11,15], target = 9
      Output: [0,1]
      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  * ! Example 2:
    * Input: nums = [3,2,4], target = 6
      Output: [1,2]
  * ! Example 3:
    * Input: nums = [3,3], target = 6
      Output: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {};

// Runs the method above with shown params
const numbers = [2, 3, 4, 7, 15, 11, 13];
const target = 11;
const answer = twoSum(numbers, target);

function validate(answer) {
  if (answer.includes(4) && answer.includes(7)) {
    console.log(`Your answer was ${answer} and is valid`);
  } else {
    console.log(`Your answer was ${answer} and was not valid`);
  }
}

validate(answer);

// What does the question mean? 
// Things to look for: is the array sorted?? Duplicates??
// Only one valid answer!!!!! Not an empty array
// 1. Iterate through whole array
// 2. pick first value
// 3. go through remaining array
// 4. check for a value that will hit target number
// two pointer method

function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i]+nums[j] === target) {
        return [i,j]
    }
   }
  }
}
// Added a nested loop to cross check the current num with other nums in arr

// One Loop HashMap Solution
// Hashmap { value : index }
// numToFind = target - currentNum
// [3, 2, 4], target = 6 example
// Logic 6-3 = 3 is there another 3 NO store in hashmap
// { 
//  3:0
// }
// then loops 6-2 = 4
// stores in hashmap
// {
// 3:0
// 2:1
// }
// since the 2 was stored we can return the index for the 2

// const twoSum = (nums, target) => {
//   const hashMap = {}

//   for(let i=0; i<nums.length; i++){
//       const currentNum = nums[i]
//       const numToFind = target - currentNum

//       if(hashMap[numToFind] >= 0){
//         return [hashMap[numToFind], i]
//       }else{
//         hashMap[currentNum] = i
//       }
//   }

// }

const twoSum = (nums, target) => {
  let obj = {}
  for(let i=0; i<nums.length; i++){
    if(target - nums[i] in obj) {
      return[obj[target-nums[i]], i]
    } else {
      obj[nums[i]] = i
    }
  }
}

// can be map or obj





// look for the difference |b| target and X values
// 1. Create a hash table obj - removes nested for loop  note:hashmap/numObj
 //takes each number, and looks for the number which when added to itself, would equalize the target 
 //(i.e the complement). For each number in the array, it creates this complement variable. 
 //If that complement number exists in the key:value object called numObj we created (i.e, it’s not undefined)
 // Return that number’s position in the object along with the position of number we’re looking at
 // If not, then add the number we’re looking at, and it’s position, in the numObj object.

// const twoSums = (nums, target) => {
//   let numObj = {}
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (numObj[complement] !== undefined) {
//       return [numObj[complement], i]
//     }
//     numObj [nums[i]] = i
//   }

// }






// const twoSum = (array, goal) => {
//     let mapOfNumbers = {};
//         let twoIndexes = [];

//         for (let i = 0; i < array.length; i++) {
//         mapOfNumbers[array[i]] = i;
//     }

//     for (let i = 0; i < array.length; i++) {
//           let target = goal - arr[i];
//       if(mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
//         twoIndexes.push(i);
//             twoIndexes.push(mapOfNumbers[target]);
//       }
//         }

//       return twoIndexes;
// }
