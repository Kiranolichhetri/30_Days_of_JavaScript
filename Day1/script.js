// Write a function createHelloWorld. 
// It should return a new function that always returns "Hello World".

function createHelloWorld(){
    return function() {
        return "Hello World";
    }
}
const HelloWorld = createHelloWorld();
console.log(createHelloWorld());



// Input: args = []
// Output: "Hello World"
