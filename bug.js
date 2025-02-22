```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause an error if a or b is NaN
  }
  return a / b; 
}

console.log(myFunction(10, 0)); // Throws error: Infinity
console.log(myFunction(10, NaN)); // Throws error: NaN
```