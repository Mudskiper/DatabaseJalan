document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Predefined username and password
      const correctUsername = 'admin';
      const correctPassword = 'password123';

      if (username === correctUsername && password === correctPassword) {
        window.location.href = 'map.html'; // Redirect to home page on successful login
      } else {
        document.getElementById('error-message').textContent = 'Incorrect username or password';
      }
    });