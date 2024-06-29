# Dev Questions

## Difference between ReactJs and NextJs
- `ReactJs` is a JavaScript library for building user interfaces and `NextJs` is a framework built on top of ReactJs.
- To do `ReactJS`, you need to know Javacript, but to do `NextJS`, you need to know ReactJS as well as Javascript.
- `ReactJs` is a client side rendering library and `NextJs` is a server side rendering framework.
- In ReactJs, first the code comes inside the browser and then it renders, but in NextJs, the code first renders inside the server and then it comes to the browser. So it is good for SEO purposes. Now, the google crawler, will see the pages at first in the server side only before coming to the browser.
- Also `React` Official documentation says that, if you are building a website which is not going to be small or project based, then you can use ReactJs, but if you are building a large project, then you should use ReactJs's framework i.e, `NextJs`.

- ReactJs is a library for building UI components and NextJs is a framework for building full stack ReactJs applications.
- ReactJs is a library for building UI components and NextJs is a library for building UI components and routing between them.
- ReactJs is a library for building UI components and NextJs is a library for building UI components and routing between them.


## Which is better in ReactJs, Class Component or Functional Component?
> Both class components and functional components are used in React, but functional components have become the preferred approach in recent years. 

- `Simplicity and readability`: Functional components tend to be simpler and more concise than class components. They use regular JavaScript functions and don't require managing a separate state object. This simplicity often leads to improved code readability and maintainability.

- `State`: Class components are called stateful components because it allows you to store and update component state. Functional components (stateless components) don't have access to state by default, but React introduced the useState hook to address this need. With useState, functional components can achieve similar functionality to class component state.

- `Lifecycle methods`: Class components have access to lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount. Although functional components didn't have direct equivalents to these methods initially, React introduced the useEffect hook to address this need. With useEffect, functional components can achieve similar functionality to class component lifecycle methods.

- `Reusability and composition`: Functional components promote reusability and composability through the use of hooks. Hooks allow you to extract and reuse specific pieces of stateful or side-effect logic, making it easier to build and maintain complex UI components.

- `Performance`: Functional components are generally more performant than class components. This is because functional components leverage React's built-in optimization mechanisms like memoization and hooks, which can help reduce unnecessary re-renders and improve overall performance.



## Difference between setInterval() and setTimeout
>  `setTimeout()` executes a function once after a specified delay, while `setInterval()` repeatedly executes a function at a fixed interval until it is canceled. `clearTimeout()` is used to cancel the setTimeout and `clearInterval()` is used to cancel the setInterval

```
// SetTimeout (Executes the function after 2 seconds)

const timeoutId = setTimeout(() => {
  console.log("This will be executed once after 2 seconds.");
}, 2000);

clearTimeout(timeoutId); // Cancel the timeout before it executes

```

```
// SetInterval (Executes the function every 1 second)

const intervalId = setInterval(() => {
  console.log("This will be executed every 1 second.");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId); // Cancel the interval after 5 seconds
}, 5000);
```


## Differentiate between Promise and async/await
> Both `Promises` and `async/await` are mechanisms in JavaScript that deal with asynchronous code execution and make it easier to work with asynchronous operations. However, they have different syntax and underlying mechanisms.

- Promises are objects that represent the eventual completion or failure of an asynchronous operation and allow you to handle the result.
- They have three states: pending, fulfilled, or rejected.
- Promises provide a .then() method to handle the successful completion of an operation and a .catch() method to handle any errors.
- You can chain multiple .then() methods to handle multiple asynchronous operations sequentially.

```
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

```

- `async/await` is a syntactical feature introduced in ECMAScript 2017 (ES8) that allows you to write asynchronous code in a more synchronous-like manner.
- It provides a cleaner and more readable way to handle Promises.
- The async keyword is used to define an asynchronous function, and within that function, you can use the await keyword to pause the execution until a Promise is fulfilled and retrieve its result.
- await can only be used within an async function.
- async/await code is structured like synchronous code, making it easier to understand and write.

```
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
};

const fetchDataAsync = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchDataAsync();

```

- In summary, Promises are a lower-level abstraction that allow you to handle asynchronous operations using .then() and .catch(), while async/await is a higher-level syntactic sugar built on top of Promises, providing a more synchronous-like coding experience.


## Explain what is Redux? / What is state management in React?
Let's take an e-commerce website for example. An e-commerce website will have several components like the cart component, user profile component, previously viewed section component, and so on.

We'll take the cart component which displays the number of items in a user's cart. The state of the cart component will consist of all the items the user has added to the cart and the total number of those items. At all times the application is up and running, this component has to show the updated number of items in the user's cart.

Whenever a user adds an item to the cart, the application has to internally handle that action by adding that item to the cart object. It has to maintain its state internally and also show the user the total number of items in the cart in the UI.

Similarly, removing an item from the cart should decrease the number of items in the cart internally. It should remove the item from the cart object and also display the updated total number of items in the cart in the UI.

We may very well maintain the internal state of the components inside them, but as and when an application grows bigger, it may have to share some state between components. This is not just only to show them in the view, but also to manage or update them or perform some logic based on their value.

This task of handling multiple states from multiple components efficiently can become challenging when the application grows in size.

This is where Redux comes into the picture. Being a state management library, Redux will basically store and manage all the application's states.

    <<<<<<<<< Redux Lifecycle >>>>>>>>


        +------ Javascript -----+
        |         (app)         |
        |                       |
        |                       |
      Store                  Action
        |                       |
        |                       |
        |                       |
        +-------- Reducers -----+


    So, (App) --> Action --> Reducers --> Store --> (App)               

For example (Comparing Redux to a Ice-cream shop)
- Action : Customers giving the order to the shopkeeper
- Reducers : Shopkeeper taking the order from customer and giving it to the store
- Store : Store is the place where all the items are stored\



## Differentiate between ForEach, Map, Filter
> `forEach()`, `map()`, and `filter()` are array methods in JavaScript. They are used to iterate over an array and perform different actions on each item in the array.

```

(a) forEach():
forEach is used to iterate through each element of an array and execute a provided function for each element.
It does not create a new array; it modifies the existing array in place.
It's generally used when you want to perform some action for each element in the array but do not need to return a new array.

Example:
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number * 2);
});

(b) map():
map is used to create a new array by applying a provided function to each element in the original array.
It returns a new array with the same length as the original array.
The values in the new array are the results of applying the function to each element.

Example:
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

(c) filter():
filter is used to create a new array with elements that pass a provided test (specified by a function).
It returns a new array containing only the elements for which the test function returns true.

The length of the new array may be different from the original array.
Example:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

Summary:

forEach: Use when you want to perform an action for each element in the array without creating a new array.
map: Use when you want to create a new array by transforming each element based on a provided function.
filter: Use when you want to create a new array containing only the elements that satisfy a condition specified by a function.

```


## Can we do server side rendering in ReactJs?
``` Yes, we can do server side rendering in ReactJs using NextJs. NextJs is a framework built on top of 
ReactJs that provides server side rendering capabilities. It allows you to render React components on the
 server and send the generated HTML to the client, improving performance and SEO.
- npm init vite-plugin-ssr@latest
```

## What are the performance improvement techniques we can use in ReactJs and NextJs?
```
ReactJS :
- useMemo
- React Lazy Loading

NextJs :
- Server Side Rendering

```


## Implement Filter function unside react app

```
  const [userData, setUserData] = useState([]);
  const [userValue, setUserValue] = useState("");
  
    <p>{userData?.filter((e) => (!userValue? true : e.userId === parseInt(userValue) )).map((item, index) => (
       <div key={index} className="user">
        <p>UserId = {item?.userId}</p>
        <p>{item?.title}</p>
        <p>{item?.body}</p>
      </div>
    ))}</p>

```


## Use Async to call api instead of .then 

```

  useEffect(() => {
    async function callFunction() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setUserData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Error =>", err);
      }
    }
    callFunction();
  }, []);

```


## When to use ContextAPI and Redux [Link]("https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p) ?

```

ContextAPI :
- good for static data that is not often refreshed or updated
- requires less boilerplate code
- good for small to medium-sized applications
- debugging can be hard in highly nested component

Redux :
- works well with both static and dynamic data
- requires extensive boilerplate code
- good for large applications with complex state management
- Redux Dev Tools for easy debugging

```

## What are react hooks?
> ```React Hooks``` are functions that let you use state and other React features in functional components. Before hooks, state and lifecycle methods could only be used in class components.

- ```useState```: Allows you to add state to functional components.
- ```useEffect```: Allows you to perform side effects in your functional components.
- ```useContext```: Allows you to use context in your functional components.
- ```useRef```: Allows you to create mutable object that persists for the entire lifecycle of the component.
- ```useReducer```: Allows you to manage state transitions in a more predictable way.
- ```useCallback```: Allows you to memoize functions to prevent unnecessary re-renders.
- ```useMemo```: Allows you to memoize values to prevent unnecessary calculations.


## When to use map and forEach in ReactJs?
`map()` and `forEach()` are both array methods in JavaScript that can be used to iterate over an array
and perform an action on each element. However, they have different use cases in ReactJS.


MAP() :
- returns a new array with transformed elements.
- chainable since returns new array. (eg: `array.map().filter().reduce()`)

FOREACH() :
- does not return anything. (returns `undefined`)
- not chainable since it returns undefined.

MAP() :
```

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

```

FOREACH() :
```

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10 (each on a new line)

```

MAP() :
```

import React from 'react';

const items = ['Apple', 'Banana', 'Cherry'];

function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;

```

FOREACH() :
```

import React from 'react';

const items = ['Apple', 'Banana', 'Cherry'];

function ItemList() {
  const itemList = [];
  items.forEach((item, index) => {
    itemList.push(<li key={index}>{item}</li>);
  });

  return <ul>{itemList}</ul>;
}

export default ItemList;

```

## When to use slice and splice?
> `slice()` and `splice()` are array methods in JavaScript that can be used to extract or modify elements in an array. They have different use cases and behaviors.

SLICE() :
- returns a portion of an array into a new array from begin to end (end not included)
- does not modify the original array

SPLICE() :
- returns an array of the removed elements
- modifies the original array by removing, replacing, or adding elements

SLICE() :
```

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);

console.log(citrus); // ["Orange", "Lemon"]
console.log(fruits); // ["Banana", "Orange", "Lemon", "Apple", "Mango"]

```

SPLICE() :
```

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const removed = fruits.splice(2, 2, 'Kiwi', 'Grapes');

console.log(removed); // ["Lemon", "Apple"]
console.log(fruits); // ["Banana", "Orange", "Kiwi", "Grapes", "Mango"]

```

## difference between Props and State ?
> `Props` and `State` are both plain JavaScript objects used in React to manage data and control the behavior of components. However, they have different use cases and behaviors.

PROPS :
- Props are immutable, cannot be modified by the component itself.
- Props are like function parameters
- passed from one component to another

STATE :
- State is mutable, can be modified by the component itself using `setState()`.
- State is similar to variables
- passed within the component

## How do browser read JSX?
- Babel compiles JSX into JavaScript that browsers can understand, otherwise browsers are not capable of reading JSX directly.

## What is Reconcliation in ReactJs?
- `Reconciliation` is the process by which React updates the DOM in response to changes in the component tree. When a component's state or props change, React compares the new tree with the previous tree and determines what changes need to be made to the DOM to reflect the new state of the application.

- ```Keys``` play a crucial role in the reconciliation process when dealing with lists of elements. They help React identify which items have changed, been added, or been removed. Without keys, React would not be able to correctly determine these changes, leading to inefficient updates and potential bugs.

## Difference between normal function and arrow function in JS?
- ```Normal Functions``` are more versatile in terms of this binding and can be used in a variety of contexts, including as constructors and methods.
- ```Arrow Functions``` provide a more concise syntax and lexically bind this, making them more suitable for situations where the function does not need its own this context, such as callbacks and functional programming.