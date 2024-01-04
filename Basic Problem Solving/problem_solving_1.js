const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

// How to remove duplicate elements from this array?
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// How to find out the largest/lowest elements from this array?
const largest = Math.max(...arr);
const lowest = Math.min(...arr);
console.log('Largest:', largest); // This will print the largest element
console.log('Lowest:', lowest); // This will print the lowest element

// How to slice(22, 48) from this array?
const startIndex = arr.indexOf(22);
const endIndex = arr.indexOf(48);
const slicedArray = arr.slice(startIndex, endIndex + 1);
console.log(slicedArray); // This will print the sliced array containing elements between 22 and 48
