setInterval(() => {
  const timeContainer = document.getElementById("time");
  const time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let amPM = "AM";

  
  if (hours > 12) {
    hours -= 12;
    amPM = "PM";
  };

  if (seconds < 10) {
    seconds = "0" + seconds;
  };
  if (minutes < 10) {
    minutes = "0" + minutes;
  };
  if (hours < 10) {
    hours = "0" + hours;
  };
  
  timeContainer.textContent = `${hours}:${minutes}:${seconds} ${amPM}`;
}, 1000);