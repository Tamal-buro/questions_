/* The at() method of Array instances takes an integer value and returns
   the item at that index, allowing for positive and negative integers. 
   Negative integers count back from the last item in the array.
*/
const array = [2, 3, 4, 5, 6]
let index = 2
console.log(`An Index of ${index} resturns ${array.at(index)}`)

/* The concat() method of Array instances is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.
*/


const array1 = [2, 3, 4, 5, 6]
const array2 = [7, 8, 9, 10]

console.log("This is concated array" , array1.concat(array2))