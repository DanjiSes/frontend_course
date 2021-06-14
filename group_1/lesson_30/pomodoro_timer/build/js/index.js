$(function() {
  /**
   * Data
   */

  let intervalId;             // айди итервала
  let pomodoroLength      = 25 // длина помидорки в секундах
  let shortBreakLength    = 5 // длинна короткого перерыва
  let logBrackLength      = 15 // длинна большего перерыва
  let longBrackPeriud     = 4 // количество помидорок до длиного перерыва
  let time                = pomodoroLength // текущее время в секундах
  let currentState        = ['p', 'b']

  /**
   * Functions
   */

  function play() {
    // проверка на то закончилось время или нет
    $('#progress circle').css('transition', 'all 1s linear')

    if (time === -1) {
      // Менять состояние нашего таймера
      currentState.reverse()
      $('#progress circle').css('transition', 'none')
      
      if (currentState[0] === 'p') {
        time = pomodoroLength
        $('.bg-red').css('opacity', '1')
        $('.bg-blue').css('opacity', '0')
      }

      if (currentState[0] === 'b') {
        
        // Здесь добавляем првоерку на то какой помидор идет
        // и если этот помидор делится без остатка на 4
        // то в переменную time записываем longBrackPeriud

        time = shortBreakLength
        $('.bg-red').css('opacity', '0')
        $('.bg-blue').css('opacity', '1')
      }
    }
    
    let minutes = Math.floor(time / 60)
    let seconds = time % 60;
    
    $('.min').html(minutes > 9 ? minutes : '0' + minutes)
    $('.sec').html(seconds > 9 ? seconds : '0' + seconds)
    
    let allTime

    if (currentState[0] === 'p') allTime = pomodoroLength
    if (currentState[0] === 'b') allTime = shortBreakLength
    
    let progress = (time / allTime) * 880

    $('#progress circle').attr('stroke-dashoffset', progress)

    time--
  }

  function pause() {
    window.clearInterval(intervalId)
  }

  function stop() {
    // ...
  }

  function continues() {
    // ...
  }

  /**
   * Handlers
   */

  $('.js-start').on('click', function() {
    intervalId = window.setInterval(play, 1000)
  });

  $('.js-pause').on('click', pause)

  play()
});
