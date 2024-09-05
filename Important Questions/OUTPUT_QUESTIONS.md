
## Output based interview questions :

(1).
```
let x = "5";
let y = 2;

console.log(x + y);
console.log(x - y);
```
```
52
3

In the first console.log, the + operator is used for concatenation. In the second console.log,
the - operator is used for subtraction. Since the first operand is a string,
the - operator will convert the string to a number.
```

(2).
```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```
```
3 3 3

0 1 2

var is global scope. let is block scope.
```

(3).
```
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Ayush', 'Verma');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```
```
TypeError
```

(4).
```
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const ayush = new Person('Ayush', 'Verma');
const sarah = Person('Sarah', 'Smith');

console.log(ayush);
console.log(sarah);
```
```
Person { firstName: 'Ayush', lastName: 'Verma' }
undefined

For sarah, we didn't use the new keyword
```

(5).
```
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
```

(6).
```
const object = {
  who: 'World',

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

console.log(object.greet());
console.log(object.farewell());
```

(7).
```
let arr = [0, 0, 0, 0, 0];
for (var i = 0; i < arr.length - 1; i++) {
  setTimeout(() => {
      ++arr[i];
      console.log(arr);
  }, 1000 * i);  
}
```

(Q8).

```

console.log('a')

async function b() {
    setTimeout(() => {
        console.log('b')
    }, 0)
}
b()

console.log('c')

async function d () {
    return new Promise ((resolve, reject) => {
        console.log('d')
        resolve()
    })
}
d()

console.log('e')


Output: 
a
c
d
e
b

```

(Q9).

```

let a=b=4;
console.log(a, b)


Output :
4 4

```

(Q10).

```

function func () {
  console.log('1')
  setTimeout(() => {
    console.log('2')
  }, 0)
  console.log('3')
}
func()


Output:
1
3
2

```
