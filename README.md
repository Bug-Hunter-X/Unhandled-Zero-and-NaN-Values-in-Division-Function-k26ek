# Unhandled Zero and NaN Values in Division Function

This repository demonstrates a common error in JavaScript where a division function doesn't properly handle zero or NaN values, leading to unexpected `Infinity` or `NaN` results.  The `bug.js` file shows the erroneous function, while `bugSolution.js` provides a corrected version.

## Problem

The original function `myFunction` incorrectly returns 0 when either `a` or `b` is 0.  It also doesn't handle `NaN` values appropriately.  This results in incorrect calculations and potential errors in the application.

## Solution

The solution involves adding explicit checks for `NaN` values and using a ternary operator to avoid division by zero. The improved function handles edge cases gracefully.