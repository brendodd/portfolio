window.addEventListener("scroll", function() {
  var name = document.getElementById('name');
  var anthony = document.getElementById('anthony');
  var dodd = document.getElementById('dodd');

  if (window.scrollY > 0) { // Change the value based on when you want the effect to occur
    anthony.classList.add('hidden');
    dodd.classList.add('hidden');
  } else {
    anthony.classList.remove('hidden');
    dodd.classList.remove('hidden');
  }
});
