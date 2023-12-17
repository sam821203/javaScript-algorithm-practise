// ===========================================================================================
// Write a function which takes in a string and returns counts of each character in the string
// ===========================================================================================

// (a) understand the problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are a part of the problem?

// (b) explore concrete problem
// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}
// charCount(""); // empty string
// charCount("Hello hi"); // lower or upper case

// (c) break it down
// (d) solve/simplify
function charCountSimplify(str) {
  // make object to return at end
  const result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    // 如果物件裡，有該 number/letter 值，新增該值的 count 計數
    if (result[char] > 0) {
      result[char]++;
    }
    // 如果物件裡，沒有該 number/letter 值，新增該值，並新增該值的 count 到 1
    else {
      result[char] = 1;
    }
  }

  // 如果該值是其他值 (如：space, period, etc.)，不做任何事

  // return object at end
  return result;
}

// (d) look back and refactor
function charCountSolutionOne(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    // 是否為 number/letter 值
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }

  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }

  return true;
}

function charCountSolutionTwo(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

console.log(charCountSolutionTwo("dobbb"));
