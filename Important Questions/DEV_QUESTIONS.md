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