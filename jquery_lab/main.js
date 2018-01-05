// Exercise: Try Selecting
//
// 1. Select the 2nd button
$('#button-2');
$('button:nth-of-type(2)');
// 2. Select all anchor tags inside li tags
$('li a');
// 3. Count the number of blue circles
$('.blue.circle').length

// DEMO: Attributes, Classes & Removal
// 1. Set “href” attribute of all links on the page to “http://www.nyan.cat”.

// To read an attribute of a node use, `.attr()` with a single argument
// being the attribute name.
$('a').attr('href'); // returns the value of href for ONLY THE FIRST node
// in the selection

// Whenever a something is read with jQuery, only the first node in
// the collection is read.

// To access an individual in jQuery from a collection of nodes, use
// the `.eq()` instead of []. [] will return a pure javascript node that
// doesn't have nifty jQuery methods.
$('a').eq(2).attr('href'); // returns href value of third node in selection

// When writing in jQuery, all nodes in the collection are affected.
// We do need to iterate over the entire jQuery collection to change
// all the nodes.

// This replaces the value of href all anchor tags with 'http://www.nyan.cat'
$('a').attr('href', 'http://www.nyan.cat');

// 2. Remove the "blue" class from all shapes and replace it with the "red"
// class.

$('.blue.shape').removeClass('blue').addClass('red');
// Nearly all jQuery methods return the jQuery collection of nodes everytime.
// This allows to chain method after method to succinctly edit nodes.


// Exercise: Practice
// 1. Set the “class” attribute of all anchors to “highlight” with attr method.
$('a').attr('class', 'highlight')
// 2. Replace all “circle” classes with the “diamond” class.
$('.circle').removeClass('circle').addClass('diamond');
// 3. Remove all shapes in the green & purple container.
$('#purple-container .shape, #green-container .shape');
// Use `.find()` on a jQuery list to search with CSS query
// all of the descendants of the nodes in the list.
$('#purple-container, #green-container').find('.shape');
$('#purple-container, #green-container').find('.shape').remove();

// Demo: html, children and parent
// 1. Get "html" of the reset button
$('#reset').html();
// 2. Try to get the "html" of all links

// To get the html of all links, we'll have to iterate over each one.
// jQuery provides a map method for its collections however its
// callback gets the index and value in reverse order compared to
// JavaScript Array#map.
$('a').map((index, value) => value.innerHTML);

// When iterating over a jQuery collection, the nodes we get back are
// regular JavaScript nodes and need to be wrapped with the $ function
// to be used with jQuery methods
$('a').map((index, value) => $(value).html());

// 3. Change the "reset" button to read "Launch Doggos!"
$('#reset').html('Launch Doggos!');
// Exercise: Practice
// 1. Replace contents of every "td" with "yass"
$('td').html('yass');
// 2. Select parents of all "td" tags
$('td').parent(); // shared parents are not duplicated
$('td').parents('section'); // searches ancestors for first ancestor
// that matches given CSS query.


// Demo
// 1. Create a "small blue diamond"
$(`
<div class="small blue diamond shape"></div>
`)
// 2. Append "small blue diamond" to all containers
$('.container').append(
  $(`
    <div class="small blue diamond shape"></div>
  `)
)
// 3. Prepend a new link to the link list
$('ul').prepend(
  $(`<li><a href="http://nyan.cat">Nyan Cat</a></li>`)
);

// Exercise: Practice
// 1. Create a div with the "container" class
$(`<div class="container"></div>`)
// 2. Prepend it to the first section tag in the body
$('section:first-of-type').prepend($(`<div class="container"></div>`));
$('section').first().prepend($(`<div class="container"></div>`));
$('section').eq(0).prepend($(`<div class="container"></div>`));
// 3. Append a "small black circle" to the container
$('section:first-of-type').prepend(
  $(`<div class="container"></div>`)
    .prepend(
      $('<div class="small black square shape"></div>')
    )
);

// Demo: Events with on
$('.blue.circle').on('mouseenter', e => {
  console.log('Blue Circle: Go away!')
});

$('.blue.circle').on('mouseleave', e => {
  console.log('Blue Circle: Come back!')
});

$('#button-1').on('click', e => {
  $('.shape').remove();
});

// Exercise: Practice
// 1. When "button 2" is clicked, disable "button 2"
$("#button-2").on('click', e => {
  $(e.currentTarget).attr('disabled', 'disabled');
});
// 2. When "button 3" is clicked, set the button message to "Button 3 was
// clicked"
$("#button-3").on('click', e => {
  $('#button-message').html('Button 3 was clicked!');
});
// 3. When your mouse enters any "tr", add the "highlight" class to it.
$('tr').on('mouseenter', e => {
  $(e.currentTarget).addClass('highlight');
});












// bump
