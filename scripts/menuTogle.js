const toggleButton = document.getElementById("toggleButton"); // SVG
const menuItems = document.getElementById("menuItems")

/*
 * Listening the clicks
 */
toggleButton.addEventListener("click", menuVisibility);


function menuVisibility() {
  console.log(menuItems.classList);
  if (menuItems.classList.contains("menu--hidden")) {
    menuItems.classList.remove("menu--hidden");
    menuItems.classList.add("menu--visible");
  } else {
    menuItems.classList.remove("menu--visible");
    menuItems.classList.add("menu--hidden");
  }
  
}
