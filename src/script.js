// script.js

// Get the Home and About Us buttons
const homeButton = document.querySelector('a[href="index.html"]');
const aboutButton = document.querySelector('a[href="info.html"]');

// Add event listeners for mouseover and mouseout
homeButton.addEventListener('mouseover', () => {
  homeButton.style.color = 'blue';
});

homeButton.addEventListener('mouseout', () => {
  homeButton.style.color = '';
});

aboutButton.addEventListener('mouseover', () => {
  aboutButton.style.color =  'blue';
});

aboutButton.addEventListener('mouseout', () => {
  aboutButton.style.color = '';
});
