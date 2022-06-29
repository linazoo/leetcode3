/**
 * @param {number[]} nums
 * @return {number}
 */

//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
  //sort the array
  const sortedArray = nums.sort();
  console.log({ sortedArray });
  //compare pairs to see if they are duplicated
  for (let i = 0; i < sortedArray.length; i += 2) {
    const num1 = sortedArray[i];
    console.log({ num1 });
    const num2 = sortedArray[i + 1];
    console.log({ num2 });
    if (num1 !== num2) {
      return num1;
    }
    if (num2 === undefined) {
      return num1;
    }
  }
};

const nums = [1, 2, 2, 5, 6, 7, 5, 4, 4, 4, 3, 3, 2];
const answer = singleNumber(nums);
console.log({ answer });
