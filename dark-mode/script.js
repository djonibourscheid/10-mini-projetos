const button = document.getElementById("toggle")
const iconMenu = document.querySelectorAll("#back-to-menu-container a img")

button.addEventListener("click", () => {
  document.body.classList.toggle("dark")

  // Back to Menu
  iconMenu.forEach(e => {
    e.classList.toggle('hide');
  });
})