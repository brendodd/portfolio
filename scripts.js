// ================== //
//   Navbar Styling   //
// ================== //

window.addEventListener("scroll", function() {
  var navbar = document.querySelector('.navbar');
  var anthony = document.getElementById('anthony');
  var dodd = document.getElementById('dodd');

  if (window.innerWidth > 1024) {
    navbar.style.position = 'sticky'; // Ensure the navbar is sticky

    if (window.scrollY > 0) {
      anthony.classList.add('hidden');
      dodd.classList.add('hidden');
      navbar.classList.add('small-navbar');
    } else {
      anthony.classList.remove('hidden');
      dodd.classList.remove('hidden');
      navbar.classList.remove('small-navbar');
    }
  } else {
    navbar.style.position = 'relative'; // Make navbar non-sticky for widths less than 1024px
  }
});

// ====================== //
//   Scroll Up Function   //
// ====================== //

const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ====================== //
//   Email Confirmation   //
// ====================== //

document.addEventListener("DOMContentLoaded", function () {
  var contactLink = document.getElementById("contactLink");

  contactLink.addEventListener("click", function (e) {
      e.preventDefault();

      // Show a confirmation dialog
      var confirmSendEmail = window.confirm("Do you want to send an email?");

      if (confirmSendEmail) {
          // If the user confirms, open the email client
          window.location.href = "mailto:brendananthonydodd@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Brendan!";
      }
  });
});
