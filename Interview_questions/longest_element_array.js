// Find the longest element in an array

const arr = ["dog", "elephant", "cat", "hippopotamus", "bat"];

let longest = arr.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr
})

// console.log(`Longest element in an array is ${longest}`)

// with for loop


function longestElement(arr) {

    let longest = "";

    for( let i = 0; i< arr.length; i++){
        if(arr[i].length > longest.length ){
            longest = arr[i]
        }
    }
    return longest
}

// console.log(`Longest Element via forloop is ${longestElement(arr)}`)


let string =  "Tamal";
let reversed = "";
for (let i = string.length-1; i>=0 ; i--){
   reversed += string[i]
}
console.log(reversed) // lamT
