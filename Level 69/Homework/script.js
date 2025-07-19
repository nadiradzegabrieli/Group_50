// 1. Returns the number of elements in an array
function getArrayLength(arr) {
  return arr.length;
}

// 2. Concatenates two arrays and returns the new array
function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// 3. Adds a value to the end of an array using push() and returns new length
function pushToArray(arr, value) {
  return arr.push(value);
}

// 4. Removes the last element using pop() and returns the removed element
function popFromArray(arr) {
  return arr.pop();
}

// 5. Concatenates two arrays and pushes a new value to the end, returning new array
function concatAndPush(arr1, arr2, value) {
  let newArray = arr1.concat(arr2);
  newArray.push(value);
  return newArray;
}

// 6. Returns the sum of all elements in an array using a for loop
function sumArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 7. Creates a new array with only even-indexed elements
function getEvenIndexedElements(arr) {
  let evenElements = [];
  for (let i = 0; i < arr.length; i += 2) {
    evenElements.push(arr[i]);
  }
  return evenElements;
}

// 8. Returns a new array with the length of each string
function getStringLengths(arr) {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}