const container = document.getElementById("container")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notify = document.createElement("div")
  const linkEl = document.createElement("a")
  
  linkEl.innerText = "Resgate já seus 300$"
  linkEl.href = "https://github.com/djonibourscheid"
  linkEl.target = "_blank"

  notify.classList.add("toast")

  notify.appendChild(linkEl)
  container.appendChild(notify)

  setTimeout(() => {
    notify.remove();
  }, 3500);
}