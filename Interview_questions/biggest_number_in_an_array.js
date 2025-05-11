// Find the biggest number in an array 

function largestNumber(arr) {

    let max = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

let arr = [1,2,22,34,54,3,20,9]
// console.log(largestNumber(arr))



// Solve with reduce 

const largest = arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr
}, arr[0])

console.log(largest)
