function updatetime() {
  var datetime = new Date();
  var hours = datetime.getHours();
  var minutes = datetime.getMinutes();
  var seconds = datetime.getSeconds();
  var ampm = document.getElementById("ampm");

  if (hours >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }
  
  if (hours > 12) {
    hours = hours - 12;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
setInterval(updatetime, 1000);
