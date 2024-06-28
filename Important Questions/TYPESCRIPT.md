


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
- can use intersections

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






























