/**
 * Why we use localStorage or sessionStorage over cookies
 */
// 1. Storage Capacity: localStorage and sessionStorage typically offer more storage space (usually around 5-10MB) compared to cookies (usually limited to 4KB).
// This allows storing larger amounts of data on the client-side.
// 2. Data Transfer: Cookies are sent with every HTTP request to the server, which can increase network traffic.
// localStorage and sessionStorage data stays in the browser and is not automatically sent to the server, reducing unnecessary data transfer.
// 3. Ease of Use: Web Storage (localStorage and sessionStorage) provides a simpler API for storing and retrieving data compared to cookies.
// They use a key-value pair system that's easy to work with in JavaScript.
// 4. Security: Cookies can be vulnerable to CSRF (Cross-Site Request Forgery) attacks if not properly secured.
// Web Storage is not accessible by server-side scripts, reducing some security risks.
// 5. Persistence: localStorage persists even after the browser window is closed, making it useful for long-term local storage.
// sessionStorage persists for the duration of the browser session (until the tab or window is closed), which can be useful for temporary data storage.
// 6. No Expiration Handling: Unlike cookies, localStorage and sessionStorage don't require handling expiration dates.
// 7. Performance: Accessing data from Web Storage is generally faster than accessing cookie data, as it doesn't involve server communication.

// Using localStorage
localStorage.setItem('user', JSON.stringify({ name: 'John', age: 30 }));
const userFromLS = JSON.parse(localStorage.getItem('user'));
console.log(userFromLS); // { name: 'John', age: 30 }

// Using cookies (more complex)
document.cookie = "user=" + JSON.stringify({ name: 'John', age: 30 }) + "; expires=" + new Date(Date.now() + 86400000).toUTCString();
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
};
console.log(getCookie('user')); // { name: 'John', age: 30 }


/**
 * LocalStorage vs sessionStorage
 */
// 1. Persistence: localStorage data persists until explicitly cleared.
// sessionStorage data is cleared when the session ends (tab is closed).
// 2. Scope: localStorage is shared across all tabs/windows from the same origin.
// sessionStorage is limited to a single tab/window.
// 3. Use Cases: Use localStorage for data that should persist across browser sessions (e.g., user preferences).
// Use sessionStorage for temporary data specific to a single session (e.g., form data, shopping cart).
// 4. Security: Both should not be used for sensitive data as they are accessible via client-side scripts.
// 5. Storage Event: localStorage changes can be detected across tabs using the 'storage' event.
// This doesn't work for sessionStorage.
// 6. Performance: Both offer better performance than cookies for client-side storage.
// 7. API Similarity: Both use the same methods (setItem, getItem, removeItem, clear).
// 8. Data Types: Both store data as strings.Use JSON for complex data structure

// 1. Persistence
// localStorage: Data persists even when the browser is closed and reopened.
localStorage.setItem('persistentData', 'This will remain after browser restart');

// sessionStorage: Data is cleared when the page session ends (i.e., when the tab is closed).
sessionStorage.setItem('temporaryData', 'This will be cleared when the tab is closed');

// 2. Scope
// localStorage: Shared between all tabs and windows from the same origin.
// sessionStorage: Limited to the tab or window that created it.

// 3. Usage example
function storeData(storage, key, value) {
    storage.setItem(key, value);
    console.log(`Stored in ${storage === localStorage ? 'localStorage' : 'sessionStorage'}: ${key} = ${value}`);
}

storeData(localStorage, 'user', 'John');
storeData(sessionStorage, 'tempUser', 'Alice');

// 4. Retrieving data
console.log('From localStorage:', localStorage.getItem('user'));
console.log('From sessionStorage:', sessionStorage.getItem('tempUser'));

// 5. Clearing data
// localStorage.clear(); // Clears all localStorage data
// sessionStorage.clear(); // Clears all sessionStorage data

// 6. Storage event (only works for localStorage)
window.addEventListener('storage', function (e) {
    console.log('Storage changed:', e.key, e.oldValue, e.newValue);
});

// 7. Size limit
// Both typically have a limit of 5-10MB per origin, but this can vary by browser.


/**
 * you can use localStorage like that window.localStorage
 * actually localStorage is the part of browser
 * window is the global object
 * 
 * localStorage.setItem is use to save the data in the browser.
 * It is stored the data in key-value pairs. 
 * It will remain stored in the same even the session/tab/browser is closed
 * 
 * It returns nothing => Means if below line is executed in console then it will show 'undefined'
 * 
 */
localStorage.setItem('key', 'value');

/**
 * localStorage.getItem is use to get the saved data from the browser.
 * It takes the key as a parameter and return the corresponding value.
 * 
 * It returns null => Means if the key does not exist in localStorage
 */
localStorage.getItem('key') // it will print 'value'

/**
 * localStorage.removeItem is use to remove the saved data from the browser.
 * It takes the key as a parameter.
 * 
 * It returns nothing (undefined) => Means if the key does not exist in localStorage
 */
localStorage.removeItem('key');


/**
 * localStorage.clear is use to remove all saved data from the browser.
 * It does not take any parameter.
 * 
 * It returns nothing (undefined) => Means if there is no data in localStorage
 */
// localStorage.clear() 

// to check if localStorage is empty or not
if (localStorage.length === 0) {
    console.log('Local Storage is empty');
} else {
    console.log('Local Storage is not empty');
}

// to iterate over all the keys and values in localStorage
for (let i = 0; i < localStorage.length; i++) {
    console.log('Key:', localStorage.key(i), 'Value:', localStorage.getItem(localStorage.key(i)));
}

// to delete all keys in localStorage
localStorage.clear();
console.log('All keys in Local Storage are deleted');
console.log('Local Storage is empty:', localStorage.length === 0); // it will print 'true' as localStorage is empty now

/**
 * But it will not work in same way with object type data
 * 
 * Have a look below
 */
const userObj = {
    firstName: 'Rishabh',
    lastName: 'Bakshi'
}
// if you do like this
// localStorage.setItem('user', user); // it will store like [object Object]
// if you are accessing user data like this 
// localStorage.getItem('user'); // it will print like '[object Object]' in the console

/**
 * So if you want to store object type data in the localStorage
 * 
 * You have to do like this
 */
localStorage.setItem('user', JSON.stringify(userObj)); // convert object to JSON string

// to get an object from localStorage
const user = JSON.parse(localStorage.getItem('user')); // convert JSON string to object
console.log(user); // it will print the object {name: 'John', age: 30}
