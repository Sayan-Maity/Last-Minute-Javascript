
## Types in TypeScript
(a) Built-in types
- number
- string
- boolean
- void
- null
- undefined

(b) User-defined types
- arrays
- enums
- classes
- interfaces


## Difference types and interfaces?
> ```Interfaces``` are used to define the structure of an object whereas ```Types``` are used to define a type of a variable, a function, an object, or a class.

INTERFACES :
- multiple declaration of same name is allowed
- can extend other interfaces

```
interface A {
  x: number;
}

interface A {
  y: number;
}

const obj: A = { x: 1, y: 2 }; // Works fine
```
```
interface A {
  x: number;
}

interface B extends A {
  y: number;
}

const obj: B = { x: 1, y: 2 };
```

TYPES :
- multiple declaration of same name is not allowed
- can use intersections (&), unions (|), typeof, etc.

```
type A = {
  x: number;
};

type A = {
  y: number;
}; // Error: Duplicate identifier 'A'
```
```
type A = {
  x: number;
};

type B = A & {
  y: number;
};

const obj: B = { x: 1, y: 2 };
```


## Behavior of 'arrays' in typescript?
- arrays defined in typescript are different from JS. In typescript, the arrays
  are defined by specifying the static data types and can only store the multiple
  values of a single kind of data type.

```

const typedArray1:number[] = [1, 23, 28, 56];
console.log(typedArray1);  // 1, 23, 28, 56

const typedArray2:number[] = [1, 23, 28, 56, "GeeksforGeeks"];
console.log(typedArray2); 
// Throws an error: Type 'string' is not assignable to type 'number'.

```

## When does 'any, 'void' and 'never' types are used in typescript?
- 'any' type is used to represent the values that can be of any data type.
- 'void' type is used to represent the absence of any type.
- 'never' type is used to represent the values that never occur. It is mainly used with the function that return nothing and always thrown an exception or error

```
let studentData: string = `{
    "studentName": "Aakash",
    "studentID": 12345,
    "studentCourse": "B. Tech"
}`;
let student: any = JSON.parse(studentData);

console.log(student.studentName, student.studentID, student.studentCourse);
// Prints: Aakash 12345 B. Tech
```
```
function favGame(): void{
    console.log("My Favourite game is Cricket.");
}
favGame(); 
// Prints: My Favourite game is Cricket.
```
```
function neverFunc(): never{
    // Function Statements
}
```


## How to use the 'union' in typescript?
- If you want a variable to accept null or undefined, you can use a union type
  to explicitly allow these values.

```
let x: number | null | undefined;
x = null;  // Ok
x = undefined;  // Ok
```

## Typescript examples 

(1) Rest parameters

```

function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4, 5);  // Outputs: 15

```




## How do you use TypeScript with external libraries that don't have type definitions?

- To get around this, you can create a declaration file with a ```.d.ts``` extension in your project to tell TypeScript how the module is shaped. For instance, if you are using a JavaScript library called ```jsLibrary```, you would create a ```jsLibrary.d.ts``` file:

- For more complex libraries, TypeScript provides an option to install type definitions from DefinitelyTyped using npm also:
```
npm install --save @types/library-name
```


## Difference between 'number' and 'Number' in typescript?
- 'number' is a primitive data type in typescript that represents the numeric values.
- 'Number' is a wrapper object that can hold a number value.

```
let a: number = 5;
```
```
let b: Number = new Number(5);
```








