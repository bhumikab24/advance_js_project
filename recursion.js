// Factorial using recursion
function factorial(n) {
    if (n < 0) return "Not defined for negative numbers";
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // Output: 120
  
  // Recursive function to calculate Fibonacci sequence
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(6)); // Output: 8
  