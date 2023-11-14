const hamburger = document.getElementById('hamburger')
const hamburgerMenu = document.getElementById('hamburger_menu')
const booking = document.getElementById('booking')
const menu = document.getElementById('menu')
const about = document.getElementById('about')
const social = document.getElementById('social')
const parties = document.getElementById('parties')
const signup = document.getElementById('signup')
const contact = document.getElementById('contact')

function navToggle() {
    hamburger.classList.toggle('open');
    hamburgerMenu.classList.toggle('hidden')
    booking.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    about.classList.toggle('hidden')
    social.classList.toggle('hidden')
    parties.classList.toggle('hidden')
    signup.classList.toggle('hidden')
    contact.classList.toggle('hidden')
}

hamburger.addEventListener('click', navToggle);

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const position = {lat: 51.50172, lng: -0.15939}

    const map = new Map(document.getElementById("map"), {
        mapId: "d914f1f267307ea9",
        center: position,
        zoom: 16,
    });

    const marker = new google.maps.Marker({
         position: position,
         map: map,
         icon: 'images/mapmarker.png',
    });
}

initMap();