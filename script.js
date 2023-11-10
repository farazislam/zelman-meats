const hamburger = document.getElementById('hamburger')
const hamburgerMenu = document.getElementById('hamburger_menu')
const booking = document.getElementById('booking')
const menu = document.getElementById('menu')
const about = document.getElementById('about')
const social = document.getElementById('social')
const parties = document.getElementById('parties')
const signup = document.getElementById('signup')

function navToggle() {
    hamburger.classList.toggle('open');
    hamburgerMenu.classList.toggle('hidden')
    booking.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    about.classList.toggle('hidden')
    social.classList.toggle('hidden')
    parties.classList.toggle('hidden')
    signup.classList.toggle('hidden')
}

hamburger.addEventListener('click', navToggle);