```javascript
function myFunction(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN values
  }
  return b === 0 ? Infinity : a / b; // Handle division by zero
}

console.log(myFunction(10, 0)); // Returns Infinity
console.log(myFunction(10, NaN)); // Returns NaN
console.log(myFunction(NaN, 10)); // Returns NaN
console.log(myFunction(10, 2)); // Returns 5
```