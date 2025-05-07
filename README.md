# Namaste-JS

Welcome to the **Namaste-JS** repository! This repository is a collection of JavaScript concepts, examples, and code snippets designed to help you understand and master JavaScript fundamentals and advanced topics.

---

## **Table of Contents**
- [Namaste-JS](#namaste-js)
  - [**Table of Contents**](#table-of-contents)
  - [**Introduction**](#introduction)
  - [**Folder Structure**](#folder-structure)
    - [**1. FundamentalJS**](#1-fundamentaljs)
    - [**2. S1**](#2-s1)
    - [**3. S2**](#3-s2)
  - [**Key Concepts Covered**](#key-concepts-covered)
  - [**How to Use**](#how-to-use)
    - [**Event Delegation**](#event-delegation)
    - [**Debouncing**](#debouncing)

---

## **Introduction**
This repository is not meant to be descriptive but rather focuses on practical examples and code snippets. Each file contains comments and explanations to help you understand the underlying concepts. Whether you're a beginner or an experienced developer, this repository can serve as a reference for JavaScript concepts.

---

## **Folder Structure**
The repository is organized into the following folders:

### **1. FundamentalJS**
Contains examples and explanations of core JavaScript concepts:
- **HTML Files**:
  - `windowStorageEvent.html`: Demonstrates the `storage` event in localStorage.
- **JS Files**:
  - `call-apply-bind.js`: Explains the `call`, `apply`, and `bind` methods.
  - `deboucing-concept.js`: Demonstrates the concept of debouncing.
  - `event-bubbling-n-capturing.js`: Explains event bubbling and capturing.
  - `event-delegation.js`: Covers event delegation with examples.
  - `function-currying.js`: Explains function currying using closures and `bind`.
  - `localstorage-concept.js`: Demonstrates the use of `localStorage` and `sessionStorage`.
  - `polyfill-for-bind-method.js`: Implements a polyfill for the `bind` method.
  - `prototypal-inheritance.js`: Explains prototypal inheritance in JavaScript.
  - `throttling-concept.js`: Demonstrates the concept of throttling.

### **2. S1**
Contains examples of basic JavaScript concepts:
- `learning-js.js`: A collection of various JavaScript concepts and examples.
- `simple-circle-code.js`: Basic implementation of circle calculations.
- `optimise-circle-code.js`: Optimized implementation of circle calculations.
- `optimise-code1.js`: Demonstrates higher-order functions for circle calculations.

### **3. S2**
Contains examples of asynchronous JavaScript:
- `basic-promise.js`: Explains promises and their usage.
- `promise-api.js`: Demonstrates `Promise.all`, `Promise.race`, `Promise.allSettled`, and `Promise.any`.
- `async-await.js`: Explains `async/await` with examples.
- `this-keyword.js`: Covers the behavior of the `this` keyword in different contexts.

---

## **Key Concepts Covered**
- **JavaScript Fundamentals**:
  - Variables, Hoisting, Closures, and Scopes.
  - Prototypal Inheritance and Object-Oriented Programming.
- **Asynchronous JavaScript**:
  - Promises, `async/await`, and APIs like `Promise.all`.
- **Event Handling**:
  - Event Bubbling, Capturing, and Delegation.
- **Performance Optimization**:
  - Debouncing and Throttling.
- **Browser Storage**:
  - `localStorage` and `sessionStorage`.
- **Advanced JavaScript**:
  - Function Currying, Polyfills, and Higher-Order Functions.

---

## **How to Use**
1. Clone the repository:
   ```bash
   git clone https://github.com/rishabhkbakshi/Namaste-JS.git
2. Open the **index.html** files in your browser to see the examples in action.
3. Explore the JavaScript files to understand the concepts. Each file contains detailed comments and explanations.

## **Examples**

### **Promise.all**
```javascript
// Example of Promise.all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
});

````markdown
Promise.all([p1, p2, p3])
    .then((result) => {
        console.log('Promise.all ====>', result);
    })
    .catch((error) => {
        console.error('Promise.all ====>', error);
    });
```

### **Event Delegation**
```javascript
document.querySelector('#category')
    .addEventListener('click', (event) => {
        if (event.target.tagName.toLowerCase() === 'li') {
            window.location.href = '/' + event.target.id;
        }
    });
```

### **Debouncing**
```javascript
// Example of Debouncing
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Example usage
function fetchData(query) {
    console.log('Fetching data for:', query);
}

const debounceFetch = debounce(fetchData, 500);

// Simulating user input
debounceFetch('JavaScript');
debounceFetch('Debouncing');
debounceFetch('Optimization');
```

