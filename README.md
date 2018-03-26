# CS Day 1 Afternoon

Here are problems to work through on your own.

## Recursion

Use recursion to solve these.

* Finish the directory listing from this morning.
* Determine if a number is even, without using modulo (`%`).
* Reverse a string.
* Write a function `exponent(number, exp)` that raises number to the power of exp. E.g. `exponent(8, 2)` would print 64.
* Write a function `binarySearch(array, number)` that returns whether `number` is found within the `array`. Do a binary search. Assume `array` is a sorted list of integers, and `number` is an integer.
  * At first, use `.slice()` to create left and right halves of the array.
  * For a harder challenge, do not use `.slice()`. Instead, your function signature should be `binarySearch(array, number, startIndex, endIndex)`. This way it's more efficient because it's not copying sections of the array.
* Make a function called `fibonacci(n)` that returns that the nth number in the fibonacci sequence
  * The fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc. So `fibonacci(10)` would be the 10th value in the sequence which is 55.
  * Hint: Each value in the sequence is sum of the previous two values, until you get to the first two values in the sequence which are 1. Figure out the base case.
  