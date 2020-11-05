const menuItems = document.querySelectorAll('nav a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();

  const navbarHeight = document.querySelector('header').clientHeight;
  const to = getScrollTopByHref(event.target) - navbarHeight;
  console.log(to)
  scrollToPosition(to);
}

function scrollToPosition(to) {
  removeMenu();
  
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}


// navbar responsive
const btnEl = document.getElementById('btn-responsive');
btnEl.addEventListener('click', removeMenu);

function removeMenu() {
  const navEl = document.querySelector('nav');

  btnEl.classList.toggle('open');
  navEl.classList.toggle('open');
}