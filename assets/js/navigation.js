// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  var openmenu = document.querySelector(".main-menu");
  var nomenu = document.querySelectorAll(":not(a)");

// On click
hamburger.addEventListener("click", function() {

  // Toggle class "is-active"
   hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
   openmenu.classList.toggle("open");
  });
