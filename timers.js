
var seconds = 57;
var minutes = 59;
var hours = 0;
var intervalID;
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

function startTime() {
  var clock = document.getElementById('timer');
  clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  seconds ++
  if (seconds >= 60) {
    seconds = 0;
    minutes ++
  }
  if (minutes >= 60) {
      minutes = 0;
      hours ++
  }
}

start.addEventListener('click', function(event) {
  event.preventDefault();
  intervalID = setInterval(startTime, 1000);
});

pause.addEventListener('click', function(event) {
  event.preventDefault();
  window.clearInterval(intervalID);
});

reset.addEventListener('click', function(event) {
  event.preventDefault();
  window.clearTimeout(startTime, 1000);
});
