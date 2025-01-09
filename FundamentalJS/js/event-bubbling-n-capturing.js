document.querySelector('#grandparent')
    .addEventListener('click', function () {
        // if (event.target.tagName === 'BUTTON') {
        console.log('Grand Parent Button clicked');
        // }
    }, false); // if third parameter(of .addEventListener) is false it means that it is event bubbling [down to top in the hierarchy].
// if third parameter is true it means that it is event capturing / event trickling [top to down in the hierarchy].
// By default its false, means that it is event bubbling

document.querySelector('#parent')
    .addEventListener('click', function () {
        // if (event.target.tagName === 'BUTTON') {
        console.log('Parent Button clicked');
        // }
    }, false);

document.querySelector('#child')
    .addEventListener('click', function (event) {
        // if (event.target.tagName === 'BUTTON') {
        console.log('Child Button clicked');
        event.stopPropagation(); // stop bubbling events
        // }
    }, false);

// In this example, when child button is clicked,
// it will first log 'Child Button clicked', then 'Parent Button clicked',
// and finally 'Grand Parent Button clicked'.

// This is because the event bubbling mechanism in JavaScript starts from the target element and goes up to the parent element,
// executing the event listeners in the order they were added.

// In contrast, event capturing is similar to event bubbling, but starts from the parent element and goes down to the target element.

// event.stopPropagation is used to stop the event bubbling / capturing
/**
 * The stopPropagation() method prevents propagation of the same event from being called.
 * Propagation means bubbling up to parent elements or capturing down to child elements.
 */