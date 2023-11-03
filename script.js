const hamburger = document.getElementById('hamburger')
const hamburgerMenu = document.getElementById('hamburger_menu')
const booking = document.getElementById('booking')
const menu = document.getElementById('menu')
const about = document.getElementById('about')

function navToggle() {
    hamburger.classList.toggle('open');
    hamburgerMenu.classList.toggle('hidden')
    booking.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    about.classList.toggle('hidden')
}

hamburger.addEventListener('click', navToggle);