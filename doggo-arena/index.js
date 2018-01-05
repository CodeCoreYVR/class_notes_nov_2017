// Selection

// document.querySelector
// Use document.querySelector() by providing a CSS selector string
// as an argument to get a DOM node object back.

// The following returns toxicTim DOM node and assigns it to
// toxicTim variable.
let toxicTim = document.querySelector('#toxic-tim');

// Only the first node that matches the selection is returned
// even the CSS selection might match a lot of nodes.
let firstDiv = document.querySelector('div');
let teamTealTitle = document.querySelector('.team:last-child h1');

// document.querySelectorAll()
// Use document.querySelectorAll() by providing a CSS selector string as
// an argument to get all DOM nodes that match the selector.

// Returns all doggo nodes in a NodeList object. A NodeList object is
// similar to arrays. It can be iterated with a for loop or you can
// use the forEach method as well.
let allDoggos = document.querySelectorAll('.doggo.fighter');
let allNodes = document.querySelectorAll('*');

// .querySelector and .querySelectorAll can also be used as methods of
// any node. When used this, the selection will be restricted to
// descendants of that node.

let teamSalmon = document.querySelector('.team.salmon');
let teamSalmonTitle = teamSalmon.querySelector('h1');
let teamSalmonDoggos = teamSalmon.querySelectorAll('.doggo.fighter');

// Exercise: Picking Doggos
// 1. Select Moneybags Michael & Larry The Lion
document.querySelectorAll('#moneybags-michael, #larry-the-lion');

// 2. Select all Team Teal Doggos but the first
document.querySelectorAll('.team.teal .doggo:not(:first-child)');

// 3. Select the second doggo in every team
document.querySelectorAll('.team .doggo:nth-child(2)');

// Navigation

// <node>.nextElementSibling

// A property that returns the next sibling element node of <node>. A sibling
// is a node shares the same parent node.

let bumbleBertha = toxicTim.nextElementSibling;
let ninaTheNinja = bumbleBertha.nextElementSibling;

// If there are no sibling nodes left, `.nextElementSibling` will return
// `null`

ninaTheNinja.nextElementSibling; // returns `null`

// <node>.previousElementSibling

// A property that returns the previous sibling element node of <node>. A sibling
// is a node shares the same parent node.

toxicTim.previousElementSibling; // returns null

// <node>.parentElement

// Returns the parent node of a <node>.

let teamSalmonRoster = toxicTim.parentElement;

// <node>.children

// Returns all child nodes of a <node> in a
// HTMLCollection (an array-like object).

teamSalmonRoster.children; // returns all doggos

// <node>.matches()

// Takes a CSS selector string as argument and returns
// if the <node> matches that selector otherwise returns false.

toxicTim.matches('a') // false
toxicTim.matches('div') // true
toxicTim.matches('#toxic-tim') // true

// Manipulation

// Modifying in-line styles

// `<node>.style`

// Nodes have a style properties that holds an object which contain
// all availabe styles. Their values are based the in-line styles
// of the node only. You can set styles this by referring to them
// as properties of `.style`.

toxicTim.style.border = 'medium solid lime';
// When reading or writing styles this way, make sure to write
// the property names as camelCase instead of kebab-case.
toxicTim.style.borderRadius = '5px';

// Sometimes its necessary to read the actual computed value
// of a style property on a node. To do this, use the
// global function `getComputedStyle`. This will return
// a CSSStyleDeclaration object which contains all CSS
// proterties and their values.

getComputedStyle(toxicTim);
getComputedStyle(toxicTim).backgroundColor;
getComputedStyle(toxicTim)['color'];
getComputedStyle(toxicTim)['border-radius'];

// Changing and reading a node's contents

// <node>.innerHTML

// The `innerHTML` property contains all the HTML inside of a node.
// It can be written to replace content with some other html.

toxicTim.innerHTML; // returns '<h1>Toxic Tim</h1>'
// toxicTim.innerHTML = '<h1>Bobby Bigwig</h1>';

// <node>.outerHTML

// The 'outerHTML' property is similar to innerHTML, but includes
// the node itself as well.
// Writing will replace the node and its contents.

toxicTim.outerHTML;
// toxicTim.outerHTML = ''; // effectively removes toxic-tim


// Reading and Writing HTML attributes

// Standard HTML attributes such as id, href, action, etc can read
// written to by using their names as a property of the node.

toxicTim.id; // returns 'toxic-tim'
// toxicTim.id = 'bumble-bertha'; // replaces id with new one
toxicTim.href;

//  `<node>.getAttribute()`
// This method takes a html attribute name string as an argument and
// returns the value of that attribute. Unlike the technique above
// this allows you to also read custom attribute that are not
// part of the html standard.

toxicTim.getAttribute('id');
toxicTim.getAttribute('class');
toxicTim.getAttribute('data-target');
toxicTim.getAttribute('my-own-attribute');

// `<node>.setAttribute()`
// This method takes an html attribute name string as a first argument
// and takes a value as a second argument then sets an html attribute
// with that on the node.

toxicTim.setAttribute('data-target', '.team.salmon');

// <node>.remove()
// This method completely removes a node from the DOM.

// toxicTim.remove(); // removes toxicTim

// <node>.classList
// Use this property and its methods to manipulate and read class
// of a node.

// <node>.classList.add()
// To add classes.

// toxicTim.classList.add('labourer')

// <node>.classList.remove()
// To remove classes.

// toxicTim.classList.remove('fighter');
// toxicTim.classList.add('cancer');
// toxicTim.classList.remove('doggo', 'cancer', 'labourer')

// <node>.classList.contains()
// Verify that a class exists.
// toxicTim.classList.contains('doggo')

// Exercise: Vandalise the Arena

// 1. Change the color of all teams to fuchsia
// document.querySelectorAll('.team').style.backgroundColor // BAD

// for (let node of document.querySelectorAll('.team')) {
//   node.style.backgroundColor = 'fuchsia';
// }

// document.querySelectorAll('.team')).forEach(node => {
//   node.style.backgroundColor = 'fuchsia';
// })


// 2. Rename all doggos to Rob The Slob
// document.querySelectorAll('.doggo.fighter').forEach(node => {
//   node.innerHTML = '<h1>Rob The Slob</h1>';
//
//   // 3. Change all doggo pictures to that of a cat from the internet
//   node.style.backgroundImage = 'url(https://i.imgur.com/aehTVLD.jpg)';
// });


// Creation

// `document.createElement()`
// This method takes a tag name string as the first and only argument.
// It returns a DOM node that is not yet inside the DOM. We'll need
// other methods to place it in the DOM.

const drillBitDarel = document.createElement('div');

drillBitDarel.id = 'drill-bit-darel';
drillBitDarel.classList.add('doggo', 'fighter');
drillBitDarel.innerHTML = '<h1>Drill Bit Darel</h1>';
drillBitDarel.style.backgroundImage = 'url(./images/drill_bit_darel.jpg)';

// `<node>.appendChild()`

// This method takes a node as an argument and adds it to the DOM
// as the last child node of <node>.

teamSalmonRoster.appendChild(drillBitDarel);

// <node>.prepend()

// This method takes a node as an argument and adds it to the DOM
// as the first child node of <node>.

document.querySelector('.team.teal .roster').prepend(toxicTim);

// <node>.cloneNode()

// `.appendChild()`, `.prepend()` and other similar similar actually
// moves nodes. They can not copy them. If a node is not yet in the
// DOM, these methods move it inside the document.

// To copy a node, use the `.cloneNode()` method. It can take a optional
// boolean as an argument. When it is set to true, `.cloneNode()` will not
// only clone <node> it will also clone all descendant nodes of <node>.

let drillBitDarelClone = drillBitDarel.cloneNode(true);
drillBitDarelClone.setAttribute('id', 'drill-bit-darel-clone');
teamSalmonRoster.appendChild(drillBitDarelClone);

// Exercise: Another Fighter Joins The Team

// Create a new doggo from one of the images in the images directory
// and add them to the team of your choice.

let paws = drillBitDarel.cloneNode(true);
paws.id = 'paws';
paws.querySelector('h1').innerText = 'P.A.W.S.';
paws.style.backgroundImage = 'url(./images/paws.jpg)';

teamSalmonRoster.prepend(paws);

// Pro-Tips

// Shortcut functions for `.querySelector()` and `.querySelectorAll()`
function q(query, node) {
  return (node || document).querySelector(query);
}

function qs(query, node) {
  return (node || document).querySelectorAll(query);
}



// EVENTS & THE LOOP

// .addEventListener is method available on nodes
// and the document object.

// It takes at least two arguments:

// - A string named after an event (e.g. 'click', 'submit',
//   'mouseenter', 'keydown', etc.)
//   List of events: https://developer.mozilla.org/en-US/docs/Web/Events

// - A callback function, named "listener", that is called when
//   the event is triggered. This is where you should all of your
//   that would run in response to user interaction.

// toxicTim.addEventListener('click', () => {
//   console.log('Toxic Tim was clicked!')
// })
//
// document.addEventListener('click', () => {
//   console.log('Document was clicked!')
// })

// Exercise: Clicking Titles
// When creating event listener, you have to iterate
// over all the nodes that will trigger the events.
// You can't declare an event listener on a NodeList.
// qs('.doggo h1').forEach(node => {
//   node.addEventListener('click', () => {
//     console.log('Doggo name was clicked!')
//   });
// });

// To check if an object is a Node, use the `instanceof` operator.

toxicTim instanceof Node // true
"Am I a node?" instanceof Node // false

// EVENT OBJECT

/*
teamSalmon.addEventListener('click', function (event) {
  console.log('=====================');
  console.log(event);
  // The `currentTarget` property holds a reference
  // the node that calls the .addEventListener method.
  // The listening node.
  console.log('currentTarget:', event.currentTarget);
  // The `target` property holds a reference to the node
  // that is the original source of the triggering event.
  // It must always be a descendant of the `currentTarget`.
  // Sometimes the `target` and `currentTarget` can be the same.
  console.log('target:', event.target);
  console.log('client x, y:', event.clientX, event.clientY);
  console.log('offset x, y:', event.offsetX, event.offsetY);
  // `this` inside a listener callback is always the `currentTarget`.
  // I recommend that you use `currentTarget` instead of `this`
  // in listeners, because `this` will not work with arrow functions.
  console.log('this:', this);
});
*/

// Exercise: Last in Queue
// When a doggo is clicked, move them to the end of the team.

// for (let doggo of qs('.doggo')) {
//   doggo.addEventListener('click', event => {
//     const currentTarget = event.currentTarget;
//     const roster = currentTarget.parentElement;
//     roster.appendChild(currentTarget);
//   });
// }

// MOUSE EVENTS


qs('.doggo').forEach(node => {
  // dblclick
  node.addEventListener('dblclick', e => {
      const doggo = e.currentTarget;
      doggo.classList.toggle('invert');
  });

  node.addEventListener('mousedown', e => {
    const doggo = e.currentTarget;
    doggo.classList.add('rot45deg');
  });

  node.addEventListener('mouseup', e => {
    const doggo = e.currentTarget;
    doggo.classList.remove('rot45deg');
  });
});

// Exercise: Crouching Mouse Hidden Doggo

qs('.doggo').forEach(node => {
  node.addEventListener('mouseenter', e => {
    e.currentTarget.classList.add('monochrome');
  });

  node.addEventListener('mouseleave', e => {
    e.currentTarget.classList.remove('monochrome');
  });
});

// FORM EVENTS
// input

const random = n =>  Math.ceil(Math.random() * n);
const keySound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

qs('#application-form input').forEach(input => {
  input.addEventListener('input', e => {
    // The best to get the current data in a input field
    // when an input event triggers is by grabbing the value
    // of the `value` property of the `currentTarget`.
    // console.log(e.currentTarget.value);
    keySound().play();
  });
});

// submit

q('#application-form').addEventListener('submit', e => {
  // To prevent a form from doing a http request when
  // it is submitted, use the `.preventDefault()` method on
  // the event object. You can also use this method to prevent
  // the default behaviour of any other node such anchors.
  e.preventDefault();
  const formNode = e.currentTarget;

  // Use the FormData constructor on a form node
  // to easily gather all the values of its input fields.
  const fData = new FormData(formNode);
  console.log(fData);

  // Use the `.get()` method instances of the FormData object
  // to get the values of specific input fields. `.get()` will
  // take the `name` of the input field as an argument.
  console.log('name:', fData.get('name'));
  console.log('picture-url:', fData.get('picture-url'));
  // To get all values from a FormData instance, use the
  // `.entries()` method which returns a 2-dimensional array
  // where each sub-array contains the name and value of an input
  // field. You need to call `Array.from()` to get that data as an array.
  console.log('Form Data Entries:', Array.from(fData.entries()))

  const pictureUrl = fData.get('picture-url');
  if (pictureUrl.includes('http') && pictureUrl.includes('jpg')) {
    q('.doggo.blank').style.backgroundImage = `url(${pictureUrl})`;
  }
});

// KEYBOARD EVENTS

// keydown
document.addEventListener('keydown', e => {
  // Easy way to find out the keyCode of letter is by logging
  // the `keyCode` property of an event and pressing keys.
  // console.log('keyCode:', e.keyCode);
  // When Shift-Ctrl-N are pressed, send the user to
  // http://nyan.cat
  if (e.shiftKey && e.ctrlKey && e.keyCode == 78) {
    window.location.href = 'http://nyan.cat';
  }
});


// Exercise: Shortcuts of the Ninja
// Typing 'panic' sends the user to 'http://hackertyper.net'.

let inputBuffer = '';
document.addEventListener('keydown', e => {
  const {key} = e;
  if (key.length === 1) {
    inputBuffer = (inputBuffer + key).slice(-5);
  }

  if (inputBuffer.toLowerCase() === 'panic') {
    console.log('Sending user to...');
    window.location.href = 'http://hackertyper.net'
  }
  console.log(inputBuffer);
});

// EVENT PROPAGATION

// DOM event objects spread through the document in a specific manner.
// They always begin at the eldest node then trickle downwards to the
// the target triggering any listener along the way. This is the
// CAPTURING PHASE.

// Once an event reaches the target node, it is in a transition phase
// named `AT_TARGET`. Afterwards, the event bubbles up from parent
// to parent until it reaches the eldest ancestor node. This
// is the BUBBLING PHASE the default behaviour of `.addEventListener()`.

function toPhaseName (eventPhaseId) {
  switch (eventPhaseId) {
    case 0:
      return 'none';
    case 1:
      return 'capturing phase';
    case 2:
      return 'target phase';
    case 3:
      return 'bubbling phase';
  }
}

function propagationLogger (e) {
  // console.log(e);
  const currentTarget = e.currentTarget;
  const {id, tagName, className} = currentTarget;
  // destructuring syntax 👆 shortcut for 👇
  // const id = currentTarget.id;
  // const tagName = currentTarget.tagName;
  // const className = currentTarget.className;

  if (currentTarget.matches('.doggo') /*&& e.eventPhase === 3*/) {
    // `event.stopPropagation()` can be used to prevent an event
    // from propagating further. You can do this during the capturing phase
    // which means that the event would never reach the default bubbling phase.
    // This comes in handy when we have a lot of event listeners and
    // we may not want a node's ancestor listeners to trigger.
    e.stopPropagation();
    // 👆 prevents the event from spreading once it reaches a node with
    // the doggo class.
  }

  console.log(id, tagName, className, 'Phase:', toPhaseName(e.eventPhase));
}

qs('.doggo, .roster, .team, .teams, body').forEach(node => {
  node.addEventListener('click', propagationLogger, { capture: false });
  node.addEventListener('click', propagationLogger, { capture: true });
});








// bump
