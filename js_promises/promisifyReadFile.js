// fs.readFile() is a node method to read the contents of
// file on your system. This only works in node and doesn't exist in the
// browser.

// fs.readFile() is an asynchronous functions where you can only
// get the data of the read file with a callback.
/*
fs.readFile("index.js", (err, data) => {
  console.log(data.toString())
})
*/

// We want to use it with our promised based code. We'll have to convert
// to use a promise.
const fs = require('fs');

function readFile (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) reject(error);
      resolve(data);
    })
  })
}

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

// usage:
/*
readFile("index.js")
  .then(data => data.toString())
  .then(text => console.log(text));
*/

// ASYNC FUNCTIONS

// The `async` keyword allows to declare functions that
// promises differently. Inside async functions,
// use the `await` keyword to wait for a promise resolve
// before executing the next line. This effectively
// makes some forms of asynchronous appear synchronous.

async function test () {
  // The `await` keyword can ONLY be used aside functions.
  await delay(1000);
  const fileText = (await readFile("index.js")).toString()
  await delay(2000);
  console.log(fileText);
  // `async` functions always return a promise.
  // Whatever value is returned will be that promise's resolve value.
  return 10;
}

// Even arrow functions can be async.
const arrowFun = async () => {
  await delay(5000);
}

class DemoClass {
  // Methods as well.
  async myFun () {
    await delay(5000);
  }
}

test();










// bump
