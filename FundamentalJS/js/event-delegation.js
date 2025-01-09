document.querySelector('#category')
    .addEventListener('click', (event) => {

        console.log(event.target);
        if (event.target.tagName === 'li') {
            window.location.href = '/' + event.target.id;
        }

    });


document.querySelector('#form')
    .addEventListener('keyup', (event) => {

        console.log(event);
        if (event.target.dataset.uppercase != undefined) {
            event.target.value = event.target.value.toUpperCase();
        }

    });

// so what is event delegation -
// Instead of attaching an event listener to each individual element, you attach it to a parent element.
// The event listener then checks to see if the event occurred on the target element or any of its children.
// This is much more efficient and scalable.

// What is the benefit of the event delegation
// 1. Memory Efficiency: It consumes less memory because we attach the event listener directly to the parent element instead of multiple child elements.
// 2. Less Code: We need to write less code as we're attaching the event listener to a single parent element rather than multiple child elements.
// 3. Dynamic Elements: It works for dynamically added elements. New elements added to the DOM that match the selector will automatically get the event handling functionality.
// 4. Improved Performance: Fewer event listeners means better performance, especially for pages with many interactive elements.
// 5. Simplified Maintenance: It's easier to manage and update a single event listener on a parent element than multiple listeners on child elements.

/**
 * Benefits of Event Delegation:
 * 1. Memory Efficiency: Reduces the number of event listeners, saving memory.
 * 2. Less Code: Simplifies implementation by using a single listener on a parent.
 * 3. Dynamic Elements: Automatically handles events for newly added DOM elements.
 * 4. Improved Performance: Fewer listeners lead to better overall page performance.
 * 5. Simplified Maintenance: Easier to manage and update a single listener.
 * 6. Event Management: Allows for centralized event handling logic.
 * 7. Flexibility: Can easily add or remove handled events without changing child elements.
 */

/**
 * Limitations of Event Delegation:
 * 1. Not All Events Bubble: Some events like focus, blur, and submit don't bubble up the DOM tree, making them unsuitable for event delegation.
 * 2. Performance for Deep DOM: In cases of very deep DOM structures, the event bubbling process might impact performance.
 * 3. Complexity in Handling: For complex scenarios, the event handling logic in the parent element might become complicated.
 * 4. Difficulty with Some Event Types: Events like mouseenter and mouseleave can be tricky to handle with delegation as they don't bubble.
 * 5. Potential for Unintended Triggers: If not implemented carefully, events might be triggered on unintended elements.
 * 6. Limited Access to Child Element Properties: You might need additional code to access specific properties of child elements.
 * 7. Overhead for Simple Scenarios: For very simple cases with few elements, direct binding might be more straightforward.
 */