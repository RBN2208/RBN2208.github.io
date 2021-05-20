function openNavigation() {
  const burgerNavigation = document.querySelector(
    '[data-id=burgermenu-navigation]'
  )
  const openButton = document.querySelector('[data-id=burgermenu-open]')
  openButton.addEventListener('click', function () {
    burgerNavigation.classList.add('burgermenu_active')
    openButton.style.setProperty('display', 'none')
  })
}

function closeNavigation() {
  const burgerNavigation = document.querySelector(
    '[data-id=burgermenu-navigation]'
  )
  const openButton = document.querySelector('[data-id=burgermenu-open]')
  closeButton.addEventListener('click', function () {
    burgerNavigation.classList.remove('burgermenu_active')
    openButton.style.removeProperty('display')
  })
}
