# TypeScript Type Error: Argument of type string[] is not assignable to parameter of type string

This repository demonstrates a common TypeScript error and its solution. The error occurs when a function expecting a string argument is called with an array of strings instead.  The solution involves type checking and either modifying the function signature or adapting the input to match the expected type.

## Bug Description

The `greeter` function is designed to take a single string as input and return a greeting. However, when called with an array of strings, it throws a TypeScript compilation error. 

## Solution

The solution demonstrates how to fix this by either changing the function to accept an array of strings or converting the array input into a single string before passing it to the function.