const container = document.getElementById("container");
const img = document.querySelector('img');

// PC
container.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  zoom(x, y);
})

container.addEventListener("mouseleave", returnToCenter);


// Mobile
container.addEventListener("touchmove", (e) => {
  const x = e.touches[0].clientX; - e.target.offsetLeft;
  const y = e.touches[0].clientY; - e.target.offsetTop;

  zoom(x, y);
});

container.addEventListener("touchend", returnToCenter);


// Functions
function zoom(x, y) {
  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(2)";
}

function returnToCenter() {
  console.log("A")
  img.style.transformOrigin = `center center`;
  img.style.transform = "scale(1)";
}