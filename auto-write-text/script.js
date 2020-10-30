const message = "Follow me on GitHub: djonibourscheid :)" 
const container = document.querySelector('.message')

let index = 0

function writeText() {
  container.innerText = message.slice(0, index)

  index++

  if (index > message.length) {
    setTimeout(() => {index = 0}, 500)
  }
}

setInterval(writeText, 100)