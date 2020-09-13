const btn = document.getElementById("btn")
const nav = document.getElementById("nav")
const navWidth = nav.clientWidth

btn.addEventListener("click", () => {
  nav.classList.toggle("open")
  btn.classList.toggle("open")
})