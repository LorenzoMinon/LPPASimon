document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
  
    contactForm.addEventListener('submit', function(event) {
      if (!validateName(nameInput.value) || !validateEmail(emailInput.value) || !validateMessage(messageInput.value)) {
        event.preventDefault();
        alert('Por favor, completa todos los campos correctamente.');
      }
    });
  
    function validateName(name) {
      return /^[a-zA-Z0-9\s]+$/.test(name);
    }
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function validateMessage(message) {
      return message.length > 5;
    }
  });
  