### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
You can use "await" which waits for a promise to resolve and extracts resolved value; then it resumes the async function's execution

You can place async functions as methods inside objects.
You can also make async instance methods with "class" syntax.

- What is a Promise?
A promise is a one time guarantee of a future value. Promises in JavaScript are objects. They have 3 states: pending (doesn't have value), resolved (successfully obtained value), and rejected (failed to obtain value for some reason)

- What are the differences between an async function and a regular function?
Async functions always return a promise, and a regular function does not.  An async function can use the "await" keyword to suspend its execution.

- What is the difference between Node.js and Express.js?
Comparing it to a previous lesson, Node is like Python where it is the syntax and layout used to make things happen.  Express is like Flask where it is the shell you put your Node/Python into to help it run smoothly.

- What is the error-first callback pattern?
When your first argument involves handling an error that may be returned.

- What is middleware?
The code that runs in the middle of a request/response cycle.  They get access to the request and response objects and can also call the "next" function

- What does the `next` function do?
It allows Express to move on to the next thing (a route that matches or an error handler).

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
```js 
let baseURL = "https://api.github.com/users"
$.getJSON(`${baseURL}/elie`)
  .then(n1 => {
    return $.getJSON(`${baseURL}/joelburton`);
  })
  .then(n2 => {
    return $.getJSON(`${baseURL}/mmmaaatttttt`);
  })
  .catch(err => console.log(err));
  ```