window.addEventListener("scroll", function() {
  var navbar = document.querySelector('.navbar'); // adjust to your HTML structure
  var anthony = document.getElementById('anthony');
  var dodd = document.getElementById('dodd');

  if (window.scrollY > 0) { // Change the value based on when you want the effect to occur
    anthony.classList.add('hidden');
    dodd.classList.add('hidden');
    navbar.classList.add('small-navbar'); // Add the small-navbar class
  } else {
    anthony.classList.remove('hidden');
    dodd.classList.remove('hidden');
    navbar.classList.remove('small-navbar'); // Remove the small-navbar class
  }
});
