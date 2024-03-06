// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more 
// than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n) {
    let counter = n;
    return function() {
        return counter++;
    };
}

// Example usage
const counter = createCounter(5);
console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7