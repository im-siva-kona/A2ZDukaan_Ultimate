// contact.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  var issueType = document.getElementById('issueType').value;
  var name = document.getElementById('name').value;
  var contact = document.getElementById('contact').value;
  var message = document.getElementById('message').value;
  
  // Basic form validation
  if (!issueType || !name || !contact || !message) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Validate contact number format
  var contactRegex = /^\d{10}$/; // Regex for exactly 10 digits
  if (!contact.match(contactRegex)) {
    alert('Please enter a valid 10-digit contact number.');
    return;
  }
  
  // Send form data to server (placeholder)
  alert('Form submitted successfully!\nIssue Type: ' + issueType + '\nName: ' + name + '\nContact: ' + contact + '\nMessage: ' + message);
});
