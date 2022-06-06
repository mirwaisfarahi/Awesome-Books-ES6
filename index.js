import Methods from './modules/utils.js';

import { DateTime } from './modules/luxon.js';

// Event to display books
document.addEventListener('Content', Methods.display());

// get form data to add it
const bookForm = document.querySelector('#add-book');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  Methods.add(title, author);
});

// Function to Hide sections
const listBtn = document.querySelector('.list-btn');
const addBtn = document.querySelector('.add-btn');
const contactBtn = document.querySelector('.contact-btn');
const homeBtn = document.querySelector('.title');

listBtn.addEventListener('click', () => {
  document.querySelector('.list-heading').style.display = 'block';
  document.querySelector('.booklist').style.display = 'block';
  document.querySelector('.add-book').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
});

addBtn.addEventListener('click', () => {
  document.querySelector('.add-book-heading').style.display = 'block';
  document.querySelector('.add-book').style.display = 'flex';
  document.querySelector('.add-book').style.flexDirection = 'column';
  document.querySelector('.add-book').style.alignItems = 'center';
  document.querySelector('.add-book-form').style.display = 'flex';
  document.querySelector('.list-heading').style.display = 'none';
  document.querySelector('.booklist').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  document.querySelector('.contact-section').style.display = 'flex';
  document.querySelector('.booklist').style.display = 'none';
  document.querySelector('.add-book').style.display = 'none';
  document.querySelector('.list-heading').style.display = 'none';
});

homeBtn.addEventListener('click', () => {
  document.querySelector('.list-heading').style.display = 'block';
  document.querySelector('.booklist').style.display = 'block';
  document.querySelector('.add-book').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
});

// Display date method
const today = document.querySelector('.date');
const showDateTime = () => {
  today.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
setInterval(showDateTime, 1000);