$(document).ready(function(){
  $('#signInBtn').click(function(){
    $('#signInModal').fadeIn();
  });

  $('#registerBtn').click(function(){
    $('#registerModal').fadeIn();
  });

  $('.close').click(function(){
    $('.modal').fadeOut();
  });

  $(window).click(function(event){
    if (event.target.className === 'modal') {
      $('.modal').fadeOut();
    }
  });

  // Form Validation
  $('#signInForm').submit(function(event){
    event.preventDefault();
    // Validate form fields here
    alert('Sign In Form Submitted');
  });

  $('#registerForm').submit(function(event){
    event.preventDefault();
    // Validate form fields here
    alert('Registration Form Submitted');
  });
});