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