// Write a function createCounter. 
// It should accept an initial integer init. 
// It should return an object with three functions.

// The three functions are:

// 1.increment() increases the current value by 1 and then returns it.
// 2.decrement() reduces the current value by 1 and then returns it.
// 3.reset() sets the current value to init and then returns it.



function createCounter(init) {
    let count = init;
  
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      reset: function() {
        count = init;
        return count;
      }
    };
  }
  
  // Example usage
  const counter = createCounter(5);
  console.log(counter.increment()); // Output: 6
  console.log(counter.decrement()); // Output: 5
  console.log(counter.reset());     // Output: 5
  