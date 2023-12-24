// ===========================================================================================
// Concept: use an objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// Question: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// ===========================================================================================

// (a) understand the problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are a part of the problem?

// (b) explore concrete problem
// validAnagram('', ''); // true
// validAnagram('aaz', 'zza'); // false
// validAnagram('anagram', 'nagaram'); // true

// (c) break it down
// (d) solve/simplify
function validAnagram_1(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let arr1 = string1.split("");
  let arr2 = string2.split("");

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(string1[i]);
    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }
  return true;
}

// (d) look back and refactor
// My solution
function validAnagram_2(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  // 創建物件
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // 是否已經有該值，沒有就 +1
  for (let char of string1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of string2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // 檢查是否有對應
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

// Teacher's solution
function validAnagram_3(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  // 創建物件
  let lookup = {};

  // 是否已經有該值
  for (let char of string1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let char of string2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram_3("texttwisttime", "timetwisttext"));
