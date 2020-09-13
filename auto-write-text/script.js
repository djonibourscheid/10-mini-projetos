const message = "Arrume a postura, e tome água :)" 

let index = 0

function writeText() {
  document.body.innerText = message.slice(0, index)

  index++

  if (index > message.length) {
    setTimeout(() => {index = 0}, 500)
  }
}

setInterval(writeText, 100)