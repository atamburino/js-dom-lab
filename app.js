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


// Fuction to add a new item to the list when the button is clicked
const addItemBtn = document.getElementById('add-item-btn');
addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = "Another new item";
    newItem.style.color = 'blue';
    itemList.appendChild(newItem);
});

const highlightBtn = document.getElementById('highlight-title-btn');
highlightBtn.addEventListener('click', function() {
  mainTitle.classList.toggle('highlight');
});


// Function -- updates the footer with today's date
function updateFooter() {
    const footer = document.getElementById('footer-text');
    const today = new Date().toLocaleDateString();
    footer.textContent = `DOM Manipulation Lab © ${today}`;
  }
  
  // invokes the function whe the page loads -- Updates the footer
  updateFooter();