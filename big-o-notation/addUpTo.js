// Solution 1 ================
function addUpTo(n) {
  let total = 0;

  for (let i = 0; i < n + 1; i++) {
    total += i;
  }

  return total;
}

console.log(addUpTo(3));

// Solution 2 ================
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo2(3));

let t1 = performance.now();
addUpTo2(1000000000);
let t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
