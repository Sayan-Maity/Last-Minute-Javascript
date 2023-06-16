# Last-Minute-Javascript

## Reference of some websites
[ProTechStack](https://protechstack.com/interview/javascript-interview-questions) \
[InterviewBit](https://www.interviewbit.com/javascript-interview-questions/)  
[W3schools](https://www.w3schools.com/jsref/jsref_splice.asp) \
[geeksforgeeks](https://www.geeksforgeeks.org/javascript-array-slice-method/) \
[tutorialspoint](https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm) 

## Types in Javascript
    `Number` = 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
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

## Null, Undefined
    Undefined = Something hasn't been initialized
    Null = Something is currently unavailable

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

## Closures
> ```Closure``` is function along with its lexical scope bundled together

```
// example 1 :
// here lexical scope is defined in a good way i.e, 'b' can't be accessed by func() since b
// is inside the child and not in the parent hierarchy
    function func() {
        var a = 40;
        function func2() {
            var b = 80;
            console.log(a)
        }
        func2()
        console.log(b)
    }
    func()

    Output :
    40


// example 2 : [Perfect example]
// though result is only having func2() but func2() remembers where it came from, whats
// a's value is, and in this ways it is able to return the value. This is the beauty of 
// functions in javascript.

    function func() {
        var a = 3;
        function func2() {
            console.log(a)
        }
        return func2;
    }

    var result = func()
    console.log(result)
    result()

    Output :
    func2()
    3   


// example 2 :
// I am not getting 10 here, instead am getting 30 because func2() is having the reference
// to 'a', not the value of 'a'

    function func() {
        var a = 10;
        function func2() {
            console.log(a);
        }
        a = 30;
        return func2;
    }

    var result = func()
    console.log(result)
    result()

    Output : 
    func2()
    30

```

```
// Can write like this :
    function func () {
        var i = 2;
        setTimeout(function func2 () {
            console.log(i);
        }, 1000)
    }
    func()


// Can also write like this :
    function func () {
        var i = 2;
        function func2 () {
            console.log(i);
        }
        setTimeout(func2, 2000)
    }
    func()


// you must be thinking that func() will wait for 3 seconds to execure func2() and then the
// "hello" will be printed in the console, but no its not like that, javascript waits for none,
// and it will put the settimeout to some other place and will keep on executing the other lines of code
    function func () {
        var i = 2;
        setTimeout(function func2 () {
            console.log(i);
        }, 1000)
        console.log("hello")
    }
    func()

    Output :
    hello
    2


// Another question :
    function func () {
        for(var i=1; i<=5;i++) {
            setTimeout(function func2 () {
                console.log(i);
            }, 1000)
        }
        console.log("hello")
    }
    func()

    Output :
    hello
    6
    6
    6
    6
    6


```

```
Uses of Closures :
- module design pattern
- maintaining state in async world
- currying 
- funciton like once
- memoize
- setTimeout
```

## Callbacks
```
Importance of Callbacks
- Callbacks are super powerful to handle async javascript infact async programs in JS exists
  because callback exists
```
```
Issues with Callbacks
- Callback Hell:
   When multiple asynchronous operations depend on each other, callbacks can lead to nested
   and unreadable code. This is commonly referred to as callback hell or the pyramid of doom,
   where the code structure becomes convoluted and hard to follow.

    asyncOperation1(function (result1) {
        asyncOperation2(result1, function (result2) {
            asyncOperation3(result2, function (result3) {
            // .....
            });
        });
    });


- Inversion of control:
  When using callbacks, the control flow of the program is handed over to the callbacks. This
  inversion of control can make the code harder to reason about, especially in complex scenarios
- Difficulty in Code Maintenance:
  Callbacks can make the code harder to read, understand,and maintain, especially as the
  complexity of the program grows.
```

## Methods in Javacsript

| No. | Array          | String          |  Object      | Math          | Date       | DOM                        |
| --- | -------------- | --------------- | ------------ | ------------- | ---------- | -------------------------- |
| 1   | concat()       | charAt()        | assign()     | abs()         | now()      | getElementById()           |
| 2   | filter()       | concat()        |              | ceil()        | parse()    | getElementsByClassName()   |
| 3   | find()         | includes()      |              | floor()       | UTC()      | getElementsByTagName()     |
| 4   | forEach()      | indexOf()       |              | max()         |            | querySelector()            |
| 5   | includes()     | toLowerCase()   |              | min()         |            | querySelectorAll()         |
| 6   | indexOf()      | toUpperCase()   |              | pow()         |            | createElement()            |
| 7   | join()         | trim()          |              | random()      |            |                            |
| 8   | map()          | replace()       |              | round()       |            |                            |
| 9   | pop()          | slice()         |              | sqrt()        |            |                            |
| 10  | push()         | split()         |              |               |            |                            |
| 11  | reduce()       | substring()     |              |               |            |                            |
| 12  | reverse()      | substr()        |              |               |            |                            |
| 13  | shift()        |                 |              |               |            |                            |
| 14  | slice()        |                 |              |               |            |                            | 
| 15  | sort()         |                 |              |               |            |                            |
| 16  | splice()       |                 |              |               |            |                            |
| 17  | unshift()      |                 |              |               |            |                            |
| 18  | length()       |                 |              |               |            |                            |
| 18  |                |                 |              |               |            |                            |



## Array Methods () :
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

## String Methods () :
### charAt()
> Returns the character at the specified index.

``` 
const str = 'Hello World';
console.log(str.charAt(0)); // Output: "H"
```

### concat()
> Joins two or more strings and returns a new string.

```
const str1 = 'Hello';
const str2 = 'World';
const str3 = str1.concat(' ', str2);
console.log(str3); // Output: "Hello World"
```

### includes()
> Checks if a string contains the specified value and returns true or false.

```
const str = 'Hello World';
console.log(str.includes('Hello')); // Output: true
console.log(str.includes('Foo')); // Output: false
```

### indexOf()
> Returns the index of the first occurrence of the specified value in a string, or -1 if not found.

```
const str = 'Hello World';
console.log(str.indexOf('Hello')); // Output: 0
console.log(str.indexOf('Foo')); // Output: -1
```

### toLowerCase()
> Converts a string to lowercase letters.

```
const str = 'Hello World';
console.log(str.toLowerCase()); // Output: "hello world"
```

### toUpperCase()
> Converts a string to uppercase letters.

```
const str = 'Hello World';
console.log(str.toUpperCase()); // Output: "HELLO WORLD"
```

### trim()
> Removes whitespace from both ends of a string.

```
const str = ' Hello World ';
console.log(str.trim()); // Output: "Hello World"
```

### replace()
> Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

```
const str = 'Hello World';
console.log(str.replace('World', 'Foo')); // Output: "Hello Foo"
```

### slice()
> Extracts a section of a string and returns a new string.

```
const str = 'Hello World';
console.log(str.slice(0, 5)); // Output: "Hello"
```

### split()
> Splits a string into an array of substrings.

```
const str = 'Hello World';
console.log(str.split(' ')); // Output: ["Hello", "World"]
```

### substring()
> Extracts the characters from a string, between two specified indices.

```
const str = 'Hello World';
console.log(str.substring(0, 5)); // Output: "Hello"
```

### substr()
> Extracts the characters from a string, beginning at a specified start position, and through the specified number of character.

```
const str = 'Hello World';
console.log(str.substr(0, 5)); // Output: "Hello"
```

## Object Methods () :
### Object.assign()
> Copies the values of all enumerable own properties from one or more source objects to a target object.

```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }
```

## Math Methods () :
### Math.abs()
> Returns the absolute value of a number.

```
console.log(Math.abs(-1)); // Output: 1
```

### Math.ceil()
> Returns the smallest integer greater than or equal to a number.

```
console.log(Math.ceil(1.5)); // Output: 2
```

### Math.floor()
> Returns the largest integer less than or equal to a number.

```
console.log(Math.floor(1.5)); // Output: 1
```

### Math.max()
> Returns the largest of zero or more numbers.

```
console.log(Math.max(1, 2, 3)); // Output: 3
```

### Math.min()
> Returns the smallest of zero or more numbers.

```
console.log(Math.min(1, 2, 3)); // Output: 1
```

### Math.pow()
> Returns the base to the exponent power.

```
console.log(Math.pow(2, 3)); // Output: 8
```

### Math.random()
> Returns a pseudo-random number between 0 and 1.

```
console.log(Math.random()); // Output: 0.12345678901234567
```

### Math.round()
> Returns the value of a number rounded to the nearest integer.

```
console.log(Math.round(1.5)); // Output: 2
```

### Math.sqrt()
> Returns the square root of a number.

```
console.log(Math.sqrt(4)); // Output: 2
```

## Date Methods () :
### Date.now()
> Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

```
console.log(Date.now()); // Output: 1619147480000
```

### Date.parse()
> Parses a string representation of a date and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

```
console.log(Date.parse('2021-04-23')); // Output: 1619147480000
```

### Date.UTC()
> Accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.

```
console.log(Date.UTC(2021, 3, 23)); // Output: 1619147480000
```

## DOM Methods () :
### document.getElementById()
> Returns the element that has the ID attribute with the specified value.

```
const element = document.getElementById('myId');
```

### document.getElementsByClassName()
> Returns a collection of all elements in the document with the specified class name.

```
const elements = document.getElementsByClassName('myClass');
```

### document.getElementsByTagName()
> Returns a collection of all elements in the document with the specified tag name.

```
const elements = document.getElementsByTagName('div');
```

### document.querySelector()
> Returns the first element within the document that matches the specified selector, or group of selectors.

```
const element = document.querySelector('#myId');
```

### document.querySelectorAll()
> Returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

```
const elements = document.querySelectorAll('.myClass');
```

### document.createElement()
> Creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.

```
const element = document.createElement('div');
```


