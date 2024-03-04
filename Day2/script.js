// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. 
// If they are not equal, it should throw an error "Not Equal".

// notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".

function expect(val) {
    return {
        toBe: function (otherVal) {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function (otherVal) {
            if (val === otherVal) {
                throw new Error("Equal");
            }
            return true;
        }
    };
}

// Example usage
try {
    expect(5).toBe(5); // This will not throw an error
    expect(5).notToBe(10); // This will not throw an error
    expect(5).toBe(10); // This will throw an error
    expect(5).notToBe(5); // This will throw an error
} catch (error) {
    console.error(error.message);
}
