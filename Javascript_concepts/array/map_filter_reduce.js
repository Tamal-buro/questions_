import { extendArrayPrototype } from "./polyfill_map_filter_reduce.js";
extendArrayPrototype();

// What is map() ?

const nums = [1, 2, 3, 4, 5];

const multiplyBy = nums.map((num, i, arr) => {
    // console.log(num , i , 'This is the arr', arr)
    return num * 3;
})

// console.log(multiplyBy)

/* 
    Polyfill for map()
*/


// What is filter() ? 
// If the condition is true 

const nums1 = [1, 2, 3, 4]

const moreThanTwo = nums1.filter((num) => {
    return num > 2
})

// console.log(moreThanTwo)


// What is reduce() ?
// reduces an arry of value down to one value 

const nums2 = [1, 2, 3, 4]

const sum = nums2.reduce((acc, curr, i , arr) => {
    // console.log("acc ",acc, i, curr, arr)
    return acc + curr
}, 0);

// console.log(sum)

/* 
   --- map() and forEach()

    Question 1: what is the difference between map vs forEach
    1. These both are array functions that loop through the items of array
    2. map() returns the new array without modifing the current array, we can chain on map((callback)=>{}).filter()
    3. forEach() returns a new modified array, we cannot chain as forEach() doesn't return an array, it modifies the array
*/

const arr = [2,4,6,8]

const resultMap = arr.map((ar) => {
    return ar + 2
})

const resultForEach = arr.forEach((ar, i) => {
    arr[i] = ar + 3
})

// console.log(resultMap)
// console.log(resultForEach)
// console.log(arr)




/* 
   output bases questions 
   map, filter and reduce 

   Question 1:  Return only the name of students in Capital
*/

let students = [
    {name: "Tom", rollNumber: 31, marks: 50},
    {name: "Jerry", rollNumber: 20, marks: 60},
    {name: "John", rollNumber: 1, marks: 99},
    {name: "Jonny", rollNumber: 11, marks: 9},
   
]

let names = [];

for(let i = 0; i < students.length; i++){
    names.push(students[i].name.toUpperCase())
}
console.log(names)

// through using map()

const namesMap =  students.map((stu, i, arr)=>{
     return stu.name.toLocaleUpperCase()
})
console.log(namesMap)

/* 
   Question 2: Return sutdents which has more than 60 marks
*/

const marks = students.filter((stu, i, arr) => {
    if(stu.marks >= 60){
        return stu.marks
    }
})

console.log(marks)


/* 
   Question 3: get all the sum of the marks using reduce
*/

const sumMarks = students.reduce((acc, curr) =>{
    return acc + curr.marks
}, 0)

console.log(sumMarks)