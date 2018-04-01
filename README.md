# Functional Concepts

An intoduction to functional paradigma using ECMAScript 6.

This reflects the LISP heritage of JavaScript.

## Pure Functions 

A pure function has two features:
 
 * No side effects - does not affect the state of the outside.  
 * Referential transparency - the same inputs always produce the same return output.

 Pure functions are the most important functional concept because:
 * they are easier to read
 * more compact
 * focused - Linux philosophy of making small sharp tools.
 * reusable
 * easier to debug - focus on expected output for given input, by thinking about the body statements.
 * memoization: function calls can be stored for reuse,for future calls with the same inputs.

## Avoid Mutation

Reassigning identifiers is confusing, potentially introducing bugs and affects the speed of executing code. It is best avoided.

## Scope

A program can have many scopes. A scope is at:

* The Global level
* A Function level
* A Block level (as of ES6)

Inside a scope we have vision of variables and their values. Once the scope is changed the variables available and their values can change too.

## Closures

## Array functional methods

### Map

### Reduce

### Filter