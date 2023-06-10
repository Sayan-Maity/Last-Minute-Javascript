# Last-Minute-Javascript

## Reference of some websites
[ProTechStack](https://protechstack.com/interview/javascript-interview-questions) \
[InterviewBit](https://www.interviewbit.com/javascript-interview-questions/)  
[W3schools](https://www.w3schools.com/jsref/jsref_splice.asp) \
[geeksforgeeks](https://www.geeksforgeeks.org/javascript-array-slice-method/) \
[tutorialspoint](https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm) 

## Types in Javascript
    `Number` = 1, 2, 3, 4, 5, 6, 7, 8, 9
    `String` = "Hello World"
    `Boolean` = true, false
    `Undefined` = undefined
    `Null` = null
    `Object` = {key: value}
    `Array` = [1, 2, 3, 4, 5]

## Scope in Javascript
    Global Scope = Globally declared variables (eg: outside a function)
    Local Scope = Locally declared variables (eg: inside a function)
    Block Scope = Variables declared inside a block (eg: inside a for loop)

## Let, Var, Const
    Var = reassignable, global, local
    Let = reassignable, global, local, block
    Const = cant be reassigned, global, local, block

## =, ==, ===
    = is assignment operator (eg: assigns a value)
    == is equality operator (eg: checks if the value is equal)
    === is strict equality operator (eg: checks if the value and type are equal)

## Hoisting
> ```Hoisting``` is a JavaScript mechanism where variables and function declarations are moved to the top
of their scope before code execution.

```
function doSomething() {
    x = 33;
    console.log(x);
    var x;
} 
```

To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

```
"use strict";
x = 23; // Gives an error since 'x' is not declared
var x;
```

## Methods in Javacsript

| No. | Array           | String          |
| --- | --------------- | --------------- |
| 1   | concat()        | charAt()        |
| 2   | filter()        | concat()        |
| 3   | find()          | includes()      |
| 4   | forEach()       | indexOf()       |
| 5   | includes()      | toLowerCase()   |
| 6   | indexOf()       | toUpperCase()   |
| 7   | join()          | trim()          |
| 8   | map()           | replace()       |
| 9   | pop()           | slice()         |
| 10  | push()          | split()         |
| 11  | reduce()        | substring()     |
| 12  | reverse()       | substr()        |
| 13  | shift()         |                 |
| 14  | slice()         |                 |
| 15  | sort()          |                 |
| 16  | splice()        |                 |
| 17  | unshift()       |                 |
| 18  | length()        |                 |
| 19  |                 |                 |



### concat()
> Joins two or more strings or arrays and returns a new string or array.

```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```

### filter()
> Creates a new array with elements that pass a certain condition.

```
const numbers = [1, 2, 3, 4, 5];
const filteredArray = numbers.filter(num => num > 2);
console.log(filteredArray); // Output: [3, 4, 5]
```

### find()
> Returns the first element in the array that satisfies a condition.

```
const numbers = [1, 2, 3, 4, 5];
const foundElement = numbers.find(num => num > 3);
console.log(foundElement); // Output: 4
```

### forEach()
> Executes a provided function once for each array element.

```
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3
```

### includes()
> Checks if an array includes a certain value and returns true or false.

```
const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // Output: true
console.log(numbers.includes(4)); // Output: false
```

### indexOf()
> Returns the first index at which a given element can be found in the array, or -1 if not found.

```
const numbers = [1, 2, 3];
console.log(numbers.indexOf(2)); // Output: 1
console.log(numbers.indexOf(4)); // Output: -1
```

### join()
> Joins all array elements into a string using a specified separator.

```
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(', ');
console.log(result); // Output: "apple, banana, orange"
```

### map()
> Creates a new array by performing a function on each array element.

```
const numbers = [1, 2, 3];
const doubledArray = numbers.map(num => num * 2);
console.log(doubledArray); // Output: [2, 4, 6]
```

### pop()
> Removes the last element from the array and returns that element.

```
const numbers = [1, 2, 3];
const removedElement = numbers.pop();
console.log(numbers); // Output: [1, 2]
console.log(removedElement); // Output: 3
```

### push()
> Adds one or more elements to the end of the array and returns the new length.

```
const numbers = [1, 2, 3];
const newLength = numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
```

### length()
> It returns the length of the array.

```
const array = [1, 2, 3, 4, 5];
const length = array.length;
console.log(length); // Output: 5
```

### reduce()
> Adds one or more elements to the end of the array and returns the new length.

```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```

### reverse()
> Reverses the order of elements in the array.

```
const numbers = [1, 2, 3];
const reversedArray = numbers.reverse();
console.log(reversedArray); // Output: [3, 2, 1]

```

### shift()
> Reverses the order of elements in the array.

```
const numbers = [1, 2, 3];
const shiftedElement = numbers.shift();
console.log(numbers); // Output: [2, 3]
console.log(shiftedElement); // Output: 1
```

### unshift()
> Adds one or more elements to the beginning of the array and returns the new length.

```
const numbers = [2, 3];
const newLength = numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3]
console.log(newLength); // Output: 3
```

### slice()
> Extracts a section of the array into a new array.

```
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 3);
console.log(slicedArray); // Output: [2, 3]
```

### splice()
> Changes the contents of an array by removing, replacing, or adding 

```
const numbers = [1, 2, 3, 4, 5];
const removedElements = numbers.splice(1, 2);
console.log(numbers); // Output: [1, 4, 5]
console.log(removedElements); // Output: [2, 3]
```

### sort()
> Sorts the elements of an array in place.

```
const numbers = [3, 1, 2, 5, 4];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```
