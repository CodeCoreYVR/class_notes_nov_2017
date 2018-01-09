// PROMISE

// Use a constructor to create promise

// new Promise(); // invalid promise

// The constructor requires an argument named "resolver"
// or "executor". This argument is a callback that contains
// the asynchronous code that promise is waiting on.

new Promise(() => {}); // valid, but useless

new Promise((resolve, reject) => {
  // The "resolver" (the callback passed to promise constructor)
  // will be passed two arguments:
  // - the first is a function usually named `resolve`
  // - the second is function usually named `reject`

  // To transition a promise from "pending" to "resolved",
  // we call the resolve function.
  resolve("I am complete!");
  // An argument passed to resolve will be the Promise Value
  // or the value that we're waiting for.

  // To transition a promise from "pending" to "rejected",
  // we call the reject function. We only do this
  // when something goes wrong. It is considered an error.
  reject("Oh, no!");
  // reject takes on argument which should be the error object.

  // A promise can only transtion from the "pending" state once.
  // If it occurs, we'll get that first value and it can never change.
  // In other words, resolve or reject can only be called once. The
  // rest will be ignored.
});

// Demo: Flipping Coins

/*
function flipCoin () {
  return new Promise((resolve, reject) => {
    const coinFace = ['HEADS', 'TAILS'][Math.floor(Math.random() * 2)];
    resolve(coinFace);
  });
}
*/

function flipCoinCb (cbFn) {
  const coinFace = ['HEADS', 'TAILS'][Math.floor(Math.random() * 2)];
  cbFn(coinFace);
}

// Exercise: Roll Die
function rollDie (numOfFaces = 6) {
  return new Promise((resolve, reject) => {
    const result = Math.ceil(Math.random() * numOfFaces);
    resolve(result);
  });
}

// Demo: Throwing the coin too far

function flipCoin () {
  return new Promise((resolve, reject) => {
    const coinFace = ['HEADS', 'TAILS'][Math.floor(Math.random() * 2)];
    setTimeout(
      () => {
        resolve(coinFace);
      },
      (Math.random() * 2000) + 1000
    );

    setTimeout(
      () => {
        reject("Coin thrown too far!")
      },
      2000
    );
  });
}

// Using Promises

// To use value of a succesfully resolve, you must use the
// `.then()` method on the promise. It takes a callback as
// an argument wich will be called with the PromiseValue
// once the promise transitions from "pending" to "resolved".

/*
flipCoin()
  .then(promiseValue => {
    console.log(`Face is ${promiseValue}`)
  });
*/

// `.then()` always a new promise. This promise will resolve
// with Promise Value that is the return value of callback given to then.
flipCoin()
  .then(promiseValue => {
    return "Hello!"
  });

// 👆 the promise returned by `.then()` above will have a promise
// value of "Hello!"

/*
flipCoin()
  .then(face => {
    // when the callback passed to ".then()" returns a promise (then-promise),
    // its Promise Value will be return from the promise return by then.
    return rollDie(); // rollDie() returns a promise
  })
  .then(dieRoll => {
    // This `.then()` will get Promise Value of the previous promise which
    // is the result of rollDie() in this case.
    console.log(dieRoll);
  })
*/

// Handling rejected promises
// When a promise is rejected at any point in a series of thens,
// all the remaining `.then()` will be ignored until a `.catch()`.
// Use `.catch()` to prevent a reject promise from crashing your
// program and doing something productive with the error.

/*
  flipCoin()
  	.then(face =>  console.log(face))
    .catch(error => console.log('Uh, oh! Something went wrong.'))
*/

// Demo: Promisify setTimeout (Delay function)

/*
function delay (waitTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
      },
      waitTime
    )
  });
}
*/

// usage example:

delay(1000)
  .then(() => {
    console.log('Wait finished!')
    return delay(2000);
  })
  .then(() => {
    console.log('Waited another 2s')
  })


// Exercise: Wait to flip with delay
delay(2000)
.then(() => flipCoin())
.then(result => console.log(result))

// Exercise: Upgrade delay
function delay (waitTime, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('time:', waitTime, 'value:', value);
        resolve(value);
      },
      waitTime
    )
  });
}

// Promise Utilities

// Promise.resolve() returns promise that is already with a Promise Value
// passed in as argument.

// usage:
Promise.resolve("My Promise Value")
// equivalent
new Promise((resolve, reject) => resolve("My Promise Value"))

// Promise.reject()

// usage:
Promise.reject("My promise's error")
// equivalent
new Promise((resolve, reject) => reject("My promise's error"))

// Demo: Sequential vs. Parallel
function random (n) {
  return Math.floor(Math.random() * n);
}

function sequentialDemo () {
  console.time('sequentialDemo')
  return delay(1000 + random(1000), 10)
    .then(() => delay(1000 + random(1000), 20))
    .then(() => delay(1000 + random(1000), 30))
    .then(() => delay(1000 + random(1000), 40))
    .then(() => delay(1000 + random(1000), 50))
    .then(() => console.timeEnd('sequentialDemo'))
}

function parallelDemo () {
  console.time('parallelDemo');
  return Promise.all([
    delay(1000 + random(1000), 10),
    delay(1000 + random(1000), 20),
    delay(1000 + random(1000), 30),
    delay(1000 + random(1000), 40),
    delay(1000 + random(1000), 50),
    60,
    70,
    80
  ])
    .then(resolvedValue => {
      console.log(resolvedValue);
      console.timeEnd('parallelDemo');
    })
}








// bump
