// script.js
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    errorMessage.textContent = 'Please enter both username and password.';
  } else {
    errorMessage.textContent = 'Login successful!';
    
  }
});