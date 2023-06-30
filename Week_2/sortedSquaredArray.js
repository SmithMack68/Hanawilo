/** 
  * Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  * Example 1
    Input: array = [1, 2, 3, 5, 6, 8, 9]
    Output: [1, 4, 9, 25, 36, 64, 81]
  * Example 2:
    Input: array = [-10, -5, 0, 5, 10]
    Output: [0, 25, 25, 100, 100]
*/

function sortedSquaredArray(array) {
  // Write your code here.
}

// Test Case
const testArray = [-10, -5, 0, 5, 10];
let testOutputArray = [0, 25, 25, 100, 100];
let answer = sortedSquaredArray(testArray);

if (answer.toString() === testOutputArray.toString()) {
  console.log("Test Case Passed");
} else {
  console.log(
    `Test Case Failed; Expected ${testOutputArray} and got ${answer}`
  );
}


// thoughts 
  // 1. create a new empty arr
  // 2. loop through given arr and square all the numbers
  // 3. put squared numbers into a new arr
  // 4. sort new arr
  // how to square??? x * x or Math.power(x, y) = x^y
  // Ryan said I could use .sort() arr2.sort()??
  // O(nlogn) sorting method 


  // O(nlogn)
//   function sortedSquaredArray(array) {
//     // Write your code here.
//        let squaredArray = []
//         //let arr2 = new Array(array.length).fill(0) 
//         for(let i = 0; i < array.length; i++){

//             // put squared value in squaredArray

//         }
//         return squaredArray.sort((a,b) => a-b)
//   }

  // const sortedSquareArray = (nums) => {
  //    return .map()
  //}

  // O(n) Multiple pointers

  function sortedSquaredArray(array) {
    // create an empty array
    let squaredArray = []
    // define pointers
    let left = 0;
    let right = arr.length -1;

    // create a loop
    for(let i = arr.length -1; i < -1; i--) {
        //define ref inside what value at in array start and end
        //let start = Math.abs(arr[left])
        //let end = Math.abs(arr[right])
        let start = arr[left]**arr[left]
        let end = arr[right]**arr[right]
        if(start > end) {
            squaredArray.add(start);
            left++;
        } else {
          squaredArray.add(end);
          right--;
        }
    
       


        


    }

}