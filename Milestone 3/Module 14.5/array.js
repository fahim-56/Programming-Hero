const array = [10, 20, 30, 40, 50];
console.log(array);

array.push(60); // Adds 60 to the end of the array
console.log(array);

array.pop(); // Removes the last element
console.log(array);

array.shift(); // Removes the first element
console.log(array);

array.unshift(10); // Restores the original array
console.log(array); 

console.log(array.includes(30)); // Checks if 30 is in the array
console.log(array.includes(80));    // Checks if 80 is in the array

console.log(array.indexOf(40)); // Returns the index of the first occurrence of 40
console.log(array.indexOf(70)); // Returns -1 as 70 is not found

const newArray = array.slice(0, 4); // Creates a new array from index 0 to 3
console.log(newArray);

const splicedArray = array.splice(2, 2, 25, 35); // Removes 2 elements at index 2 and adds 25 and 35
console.log(array);
console.log(splicedArray);

console.log(Array.isArray(array)); // Checks if 'array' is an array

const joinedString = array.join(" - "); // Joins array elements into a string with " - " as separator
console.log(joinedString);

//concatenate
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);