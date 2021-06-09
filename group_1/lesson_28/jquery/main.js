$('.box').addClass('active')

$('.box').css('width', '100px')
$('.box').css('height', '100px')
$('.box').css('background', 'url(redball.png)')
$('.box').css('background-size', 'cover')
$('.box').css('background-position', 'center')

$('.box').css({
  position: 'fixed',
  left: '50%',
  top: '50%',
  margin: '-50px 0 0 -50px',
  borderRadius: '50%',
})

// let i = 0

onHover()

$('.box').on('mouseenter', onHover)

function onHover() {
  // i++

  // if (i % 2 == 0) {
  //   $('.box').css('background', 'yellow')
  // } else {
  //   $('.box').css('background', 'black')
  // }

  let top = Math.floor(Math.random() * 100)
  let left = Math.floor(Math.random() * 100)
  let diffTop;
  let diffLeft;

  if (top > 50) {
    diffTop = -50
  } else {
    diffTop = 50
  }

  if (left > 50) {
    diffLeft = -50
  } else {
    diffLeft = 50
  }

  $('.box').css('top', `calc(${top}% + ${diffTop}px)`)
  $('.box').css('left', `calc(${left}% + ${diffLeft}px)`)
}