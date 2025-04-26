// factorial of 5 = 5 * 4 * 3 * 2 * 1 = 120

// Example 1: Factorial using recursion
function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

// console.log(factorial(5)); // Output: 120


// Example 2: Factorial without recursion
function factorial2(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;

}
// console.log(factorial2(5));


// Exapmple 3: countdown using recursion

function countdown(n) {
    console.log(n)
    let nextNumber = n - 1
    if (n > 1) {
        countdown(nextNumber)
    }
}
// countdown(5)

// Example 5: Greatest common divisor 

function gcd(a, b) {
    if (b === 0) { return a }
    return gcd(b, a % b)
}
// console.log(gcd(20, 8))


// Example 6: Sum of all natural numbers from 1 to n 
function sum(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + sum(n - 1);
    }
}
// console.log(sum(4));


// Example 7: get the integer between two number range 
function range(a, b) {
    if (b - a === 2) {
        return [a + 1]
    } else {
        let list = range(a, b - 1)
        list.push(b - 1)
        return list
    }
}

// console.log(range(2,9))

// Example 8: sum off array 

function summArray(array) {
    if (array.length === 0) {
        return 0
    }
    else {
        return array[0] + summArray(array.slice(1))
    }
}

let array = [2, 3, 4]
console.log(array.slice(1))
console.log(summArray(array))
