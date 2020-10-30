const container = document.querySelector(".container");
container.appendChild(createImg());


window.addEventListener("resize", () => {
  const oldImg = document.querySelector('img');
  
  container.removeChild(oldImg);
  container.appendChild(createImg());
});


function createImg() {
  const newImg = document.createElement("img");

  const width = window.screen.width;
  const height = window.screen.height;
  
  newImg.src = `https://picsum.photos/${width-75}/${height-160}`;
  newImg.alt = "Imagem sorteada";

  return newImg;
}