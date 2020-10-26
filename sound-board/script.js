const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound => {
  // creation play button
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("btn");
  buttonEl.innerText = sound;
  
  // play song
  buttonEl.addEventListener("click", () => {
    pauseSound();

    document.getElementById(sound).play();
  });

  document.body.appendChild(buttonEl);
});

// stoping all songs
function pauseSound() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  })
}