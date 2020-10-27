const btn = document.getElementById("btn")
const nav = document.getElementById("nav")

btn.addEventListener("click", () => {
  nav.classList.toggle("open")
  btn.classList.toggle("open")
})