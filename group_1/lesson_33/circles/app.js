$(function() {

  // 1. Обработать событие движения мыши
  // 2. Определить где находиться мыш
  // 3. Создать новый кружочек
  // 4. В место мыши поставить кружочек

  $('body').on('mousemove', function(event) {
    // console.log('Мыш движется', event.pageX, event.pageY)

    let o = $('<div class="box"></div>')

    o.css('position', 'absolute')
    o.css('top', event.pageY + 'px')
    o.css('left', event.pageX + 'px')
    o.css('width', '15px')
    o.css('height', '15px')
    o.css('background', 'blue')
    o.css('border-radius', '50%')
    o.css('opacity', '0.2')

    window.setTimeout(function() {
      o.remove()
    }, 1000)

    $('body').append(o)
  })

})