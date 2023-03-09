// Add the link to the button
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  window.location.href = 'https://example.com';
});

// Change the sub-header color
const subheaders = document.querySelectorAll('h3');
subheaders.forEach(subheader => {
  subheader.addEventListener('click', () => {
    subheader.style.color = 'red';
  });
});

// Change the body text color
const bodyText = document.querySelector('body');
bodyText.addEventListener('click', () => {
  bodyText.style.color = 'blue';
});