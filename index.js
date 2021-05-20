///////////////////////////
///// animations icons ////
///////////////////////////

const headerIcons = document.querySelectorAll('.link_list > a')

let interval = 300
headerIcons.forEach(function (el, index) {
  setTimeout(function () {
    el.classList = 'slidein'
  }, index * interval)
})

///////////////////////////
///// toggle Workepx //////
///////////////////////////

const experienceButton = document.querySelectorAll(
  '[data-id=experience_button]'
)

experienceButton.forEach(button => {
  button.addEventListener('click', function () {
    const content = button.querySelector('.experience_content')
    content.classList.toggle('display_flex')
  })
})

///////////////////////////
///// navigation menu /////
///////////////////////////

const openButton = document.querySelector('[data-id=burgermenu-open]')
const closeButton = document.querySelector('[data-id=burgermenu-close]')
const burgerNavigation = document.querySelector(
  '[data-id=burgermenu-navigation]'
)
const naviButtons = document.querySelectorAll('.burgermenu_navigation > a')

naviButtons.forEach(button => {
  button.addEventListener('click', function () {
    burgerNavigation.classList.remove('burgermenu_active')
    openButton.style.removeProperty('display')
  })
})
openButton.addEventListener('click', function () {
  burgerNavigation.classList.add('burgermenu_active')
  openButton.style.setProperty('display', 'none')
})
closeButton.addEventListener('click', function () {
  burgerNavigation.classList.remove('burgermenu_active')
  openButton.style.removeProperty('display')
})

///////////////////////////
//// typewriter effect ////
///////////////////////////

const textElement = document.querySelector('[data-id=interests_text]')
new Typewriter(textElement, {
  strings: [
    'CODE',
    'REACT',
    'JAVASCRIPT',
    'MUSIC FOR CODING',
    'MY PETS',
    'BUILDING STUFF',
  ],
  autoStart: true,
  loop: true,
})
