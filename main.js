window.onscroll = function() {
  var element = document.getElementById("nav-id");
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    element.classList.add('scrolled')
  } else {
    element.classList.remove('scrolled')
  }
}


//create a function to make certain classes vissable or invissible when button is clicked

//classes: all kitchen bathrooms decks

function hideProjects(button) {
  var all_projects = document.getElementsByClassName('all');
  var all_menu_items = document.getElementsByClassName('project-filters');
  var menu_item = document.getElementById(button);
  var projects = document.getElementsByClassName(button);
  for (i = 0; i < all_projects.length; i++) {
    all_projects[i].style.display = 'none';
  }
  for (i = 0; i < projects.length; i++) {
    projects[i].style.display = 'block';
  }
  for (i = 0; i < all_menu_items.length; i++) {
    all_menu_items[i].style.color = '#55565b';
  }

  menu_item.style.color = 'black';
}


function menuToggle() {
  var menu = document.getElementById("mobile-menu");
  var element = document.getElementById("nav-id");
  element.classList.add('scrolled')

  if (menu.style.display == 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
  //menu.style.display = 'none';

}