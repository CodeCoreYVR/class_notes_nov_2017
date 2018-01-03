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



// bump
