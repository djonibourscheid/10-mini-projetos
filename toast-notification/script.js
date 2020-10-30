const container = document.getElementById("container")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notify = document.createElement("div")
  const linkEl = document.createElement("a")
  
  linkEl.innerText = "Redeem your $300 now!"
  linkEl.href = "https://github.com/djonibourscheid"
  linkEl.target = "_blank"

  notify.classList.add("toast")

  notify.appendChild(linkEl)
  container.appendChild(notify)

  setTimeout(() => {
    notify.remove();
  }, 3500);
}