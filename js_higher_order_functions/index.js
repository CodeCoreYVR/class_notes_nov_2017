// Arrow Functions

const barkAsFunction = function (name, sound = "Woof!") {
    return `${name} barks "${sound}"`;
}

// 👇 is effectively "syntax sugar" for the above 👆
// A new concise way to write functions.
const barkAsArrow = (name, sound = "Woof!") =>
  `${name} barks "${sound}"`

// ...except that arrow functions behave slightly differently

// Arrow functions can't act as constructors
new barkAsFunction() // 👈 WORKS
//new barkAsArrow() // 👈 throws an error
// Uncaught TypeError: barkAsArrow is not a constructor


// EXERCISE: toArrowFunction

// add

const add = (a, b) => a + b;
// const add = (a, b) => {
//    return a + b;
// }

// notNull

const notNull = obj => obj !== null;

// flip

/*
const flip = fn => {
  return function (a, b) {
    return fn(b, a);
  }
}
*/

const flip =  fn => (a, b) => fn(b, a);

// usage:
function minus (num1, num2) {
  return num1 - num2;
}

const flippedMinus =  flip(minus)
flippedMinus(20, 5) === flip(minus)(20, 5) === minus(5, 20) // returns true

// Arrow functions' this is scoped to the block it is declared in.
// Meaning that it is set when created and can never change.

const myObj = {
  a: () => this, // this is the Window
  b: function () { return (() => this)() } // this is myObj
}

// DEMO: A Loud Function
// Loud is a higher-order function
// Its argument, `fn`, is a callback.

// EXERCISE: Custom logger
function loud (logFn, fn, ...args) {
  logFn(`Calling ${fn.name} with `, args);
  const returnedVal = fn(...args); // 👈 `fn` is called.
  logFn(`Called ${fn.name} & returned ${returnedVal}`);
  return returnedVal;
}

// Higher-Order: each

function each (fn, arr) {
  for (let i = 0, max = arr.length; i < max; i += 1) {
    fn(arr[i], i, arr);
  }
}

// usage:
each((val, index) => console.log(val, index), [1,2,3,4,5])

// Exercise: Higher-Order: map

function map (fn, arr) {
  let newArr = [];
  for (let i = 0, max = arr.length; i < max; i += 1) {
    newArr.push(fn(arr[i], i, arr));
  }
  return newArr;
}

// usage:

map(() =>  'Woof!', [1,23,3,4,4,5])
// returns ["Woof!", "Woof!", "Woof!", "Woof!", "Woof!", "Woof!"]
map((val, index) => index, [1,23,3,4,4,5])
// returns [0, 1, 2, 3, 4, 5]
map((val, index) => index ** index, [1,23,3,4,4,5])
// returns [1, 1, 4, 27, 256, 3125]

// Higher-order function: setTimeout
// Use setTimeout to call a function a number of milliseconds
// later.
// The first argument is a callback or the function to be called
// later.
// The second argument is the delay in milliseconds.
let a = 1;
console.log('Before setTimeout:', a)
setTimeout(() => {
  a += 1;
  console.log('After setTimeout:', a)
}, 1000)
console.log('Line after setTimeout:', a)
// setTimeout is an asynchronous function meaning that JavaScript
// will not for its delay to be complete before executing code
// on the following the call to setTimeout.

// Higher-order function: setInterval

// setInterval is a similar function to setTimeout. It takes the
// same arguments in the same order, but it will instead
// call the callback function every delay in milliseconds.

/*
let count = 0;
const intervalId = setInterval(() => {
    console.log(`This callback was called ${count += 1}`)
  },
  1000
);

setTimeout(() => {
    clearInterval(intervalId)
  },
  20000
);
*/

// Closures

let scriptLocal = "I'm global";

function foo (fooArg) {
  let fooLocal = "I'm foo";
  return function bar (barArg) {
    console.log(
      fooLocal, fooArg, barArg
    );
  };
};

const fooBar = foo("An arg");



function countsUpTo (num) {
  let count = 0;

  // The counter function is declared inside of
  // countsUpTo meaning that whenever countsUpTo
  // is called a `counter` function is created
  // an all variables that are part of the `countsUpTo`
  // scope are tied to `counter` in a closure.

  // A new closure for counter is created everytime `countsUpTo`
  // is called allowing counters to run independently of each other.
  const counter = () => {
    if (count > num) return clearInterval(intervalId);
    console.log(`At num ${count += 1}`);
  };

  console.dir(counter)

  const intervalId = setInterval(counter , 500);
}

// Demo: What!? Loud is evolving

const loudAdd = loudWith(console.log, add);

loudAdd(1,2) // returns 3
// loud(console.log, add, 1, 2)

function loudWith (logFn, fn) {
  return function (...args) {
    logFn(`Calling ${fn.name} with `, args);
    const returnedVal = fn(...args); // 👈 `fn` is called.
    logFn(`Called ${fn.name} & returned ${returnedVal}`);
    return returnedVal;
  }
}

// Demo: once higher-order function

function once (fn) {
  let initialValue;
  return function (...args) {
    if (!initialValue) {
      initialValue = fn(...args);
    }
    return initialValue;
  }
}













// bump
