// Main Title Variable
const mainTitle = document.getElementById('main-title');

// Paragrapgh inside the content section Variable
const paragraph = document.querySelector('#content p');

console.log(mainTitle);
console.log(paragraph);

// Updating text content values 
mainTitle.textContent = 'DOM Manipulation with JavaScript';
paragraph.textContent = 'Hello, I am Andy and I am learning DOM manipulation!';

// creaitng a new item based on the paramater used -- in this case its a li
const newItem = document.createElement('li');

// Set the text of the new item
newItem.textContent = 'Newly added item';

// Append new item to list
const itemList = document.getElementById('item-list');
itemList.appendChild(newItem);