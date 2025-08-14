function modifyArray(inputArray) {
  let numsArray = [1, 2, 3];
  let strArray = ["a", "b", "c"];

  // 1 & 2. Combine arrays
  let combinedArray = numsArray.concat(strArray);

  // 3. Copy first 3 elements to position 4
  combinedArray.copyWithin(4, 0, 3);

  // 4. Fill index 2–4 with "filled"
  combinedArray.fill("filled", 2, 5);

  // 5. Remove last
  combinedArray.pop();

  // 6. Remove first
  combinedArray.shift();

  // 7. Add 100 & 200 to beginning
  combinedArray.unshift(100, 200);

  return combinedArray;
}