$(function() {
  let time = 0 // время в секундах
  let intervalId;
  let pomodoroLength = 25 * 60

  intervalId = window.setInterval(function () {
    time++

    let currentPomodoroLength = pomodoroLength - time
    
    let minutes = Math.floor(currentPomodoroLength / 60)
    let seconds = currentPomodoroLength % 60;
    
    $('.min').html(minutes)
    $('.sec').html(seconds)
  }, 1000)
});