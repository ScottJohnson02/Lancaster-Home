window.onscroll = function() {
  var element = document.getElementById("nav-id");
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    element.classList.add('scrolled')
  } else {
    element.classList.remove('scrolled')
  }
}