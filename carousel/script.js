const images = document.querySelector(".images");
let counter = 0;

// Alternate image
function alternateImage() {
  counter++;
  if (counter == images.children.length - 1) {counter = 0;}

  images.style.transform = `translateX(${-counter * 850}px)`;
}

setInterval(alternateImage, 2500);