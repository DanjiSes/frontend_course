let sum = 5000;

$(function () {
  // Цвет коврика

  $('input[type="radio"][name="color"]').on('change', function () {
    let $input = $(this)
    let colorIdx = $input.val()
    let $img = $('.calc-capter')

    if (colorIdx < 10) colorIdx = '0' + colorIdx

    $img.attr('src', `img/carpet/romb/${colorIdx}.png`)
  })

  // Цвет канта

  $('input[type="radio"][name="border-color"]').on('change', function () {
    let $input = $(this)
    let colorIdx = $input.val()
    let $img = $('.calc-border')

    $img.attr('src', `img/border/b (${colorIdx}).png`)
  })

  $('input[name="dop1"').on('change', function() {
    let $input = $(this)
    let checked = $input.is(':checked')

    if (checked) {
      sum += 500
    } else {
      sum -= 500
    } 

    $('.sum').html(`Итого: ${sum} сом`)
  })
  
})