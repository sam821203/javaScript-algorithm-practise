// ===========================================================================================
// Concept: use an objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// Question: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
// ===========================================================================================

// (a) understand the problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are a part of the problem?

// (b) explore concrete problem
// same([1,2,3], [1,4,9]); // true
// same([1,2,3], [1,9]); // false
// same([1,2,1], [4,4,1]); // false

// (c) break it down
// (d) solve/simplify
function same_1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    console.log(correctIndex);
    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }

  return true;
}

// (d) look back and refactor
// 3n O
function same_2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // 檢查是否有次方對應
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // 檢查是否有相對應的次數
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  // console.log(frequencyCounter1);
  // console.log(frequencyCounter2);
  return true;
}

console.log(same_2([1, 2, 3, 2, 5], [4, 1, 4, 25, 9]));
