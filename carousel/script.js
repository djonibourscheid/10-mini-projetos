const images = document.querySelector(".images");
let counter = 0;

let widthImage = document.querySelector(".images img").width;
window.addEventListener("resize", () => {
  widthImage = document.querySelector(".images img").width;
})

// Alternate image
function alternateImage() {
  counter++;
  if (counter == images.children.length) {counter = 0;}

  images.style.transform = `translateX(${-counter * widthImage}px)`;
}

setInterval(alternateImage, 3500);