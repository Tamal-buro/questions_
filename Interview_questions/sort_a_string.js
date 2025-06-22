let text = "this is tamal buro";

let split = text.split(' ')

console.log(split);

let newText = []

for (let i = 0; i < split.length; i ++) {
    for (let j = 0 ; j < split.length - i - 1; j ++) {
        if(split[j].length > split[j + 1].length){
            let temp = split[j]
            split[j] = split[j +1]
            split[j+1] = temp
        }
    }
}

let sortedText = split
console.log(sortedText.join(' ')); // Output: is this buro tamal



///////// alternative 
let text2 = "this is tamal buro";

let split2 = text2.split(' ')

let sorted = split2.sort((a ,b) => a.length - b.length)
console.log(sorted)