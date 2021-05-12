function menuOpen(e) {
  e.preventDefault()

  document.querySelector('body').classList.add('menu-open')
}

function menuClose(e) {
  e.preventDefault()

  document.querySelector('body').classList.remove('menu-open')
}