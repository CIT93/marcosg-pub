const add2 = function(...a) {
  return 2 + a[3];
}

const result = add2(1, 2, 3, 4);

// spread argument

//IIFE

// const a = 3;

(function(a){
  console.log("inside IIFE");
  console.log (a);
})(a);

# Week 10 - JavaScript Functions  

## Understanding Function Return Values  

1. **Returning a Value**  
   - When a function returns a value, that value needs to be captured in a variable to be used later.  
   - Example:  
     ```javascript
     function addTwo(num) {
         return num + 2;
     }
     const result = addTwo(5); // Now we can use 'result'
     console.log(result); // Outputs: 7
     ```

2. **Default Function Parameters**  
   - If no argument is passed, a default value can be used to prevent errors.  
   - Example:  
     ```javascript
     function greet(name = "Guest") {
         console.log(`Hello, ${name}!`);
     }
     greet(); // Outputs: Hello, Guest!
     greet("Marcos"); // Outputs: Hello, Marcos!
     ```

3. **Spread Operator (`...`) in Functions**  
   - Allows passing multiple arguments as an array.  
   - Example:  
     ```javascript
     function sumAll(...numbers) {
         return numbers.reduce((total, num) => total + num, 0);
     }
     console.log(sumAll(1, 2, 3, 4)); // Outputs: 10
     ```

4. **Understanding Scope in Functions**  
   - Inner functions can access variables from their outer scope, but the reverse is not true.  
   - Example:  
     ```javascript
     function outer() {
         let outerVar = "I am outside!";
         function inner() {
             console.log(outerVar); // Can access outerVar
         }
         inner();
     }
     outer(); // Outputs: I am outside!
     ```

5. **Closures**  
   - Functions remember variables from their outer scope even after execution.  
   - Example:  
     ```javascript
     function counter() {
         let count = 0;
         return function () {
             count++;
             return count;
         };
     }
     const increment = counter();
     console.log(increment()); // Outputs: 1
     console.log(increment()); // Outputs: 2
     ```

6. **Immediately Invoked Function Expressions (IIFE)**  
   - Executes as soon as it is defined.  
   - Example:  
     ```javascript
     (function () {
         console.log("This runs immediately!");
     })();
     ```

## Summary  
- Capturing return values is necessary to use them later.  
- Default parameters help prevent errors.  
- The spread operator allows flexible function arguments.  
- Inner functions can access outer variables (scope).  
- Closures help functions retain access to variables.  
- IIFE functions execute immediately upon definition.  

### Resources  
- [JavaScript Functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)  
- [JavaScript Closures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  
