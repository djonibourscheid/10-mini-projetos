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
  
  scrollToPosition(to);
}

function scrollToPosition(to) {
  toggleMenu();
  
  window.scroll({
    top: to,
    behavior: "smooth"
  });
}


// navbar responsive
const btnEl = document.getElementById('btn-responsive');
btnEl.addEventListener('click', toggleMenu);

function toggleMenu() {
  const navEl = document.querySelector('nav');

  btnEl.classList.toggle('open');
  navEl.classList.toggle('open');
}


// scroll to top
const scrollToTop = document.querySelector('.scrollTop');
scrollToTop.onclick = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
};