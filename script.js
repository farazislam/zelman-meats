const hamburger = document.getElementById('hamburger')
const hamburgerMenu = document.getElementById('hamburger_menu')
const booking = document.getElementById('booking')
const menu = document.getElementById('menu')
const about = document.getElementById('about')
const social = document.getElementById('social')
const parties = document.getElementById('parties')
const signup = document.getElementById('signup')
const contact = document.getElementById('contact')
const footer = document.getElementById('footer')
const foodMenuNavCollection = document.getElementsByClassName('food-menu-tab')
const menuCollection = document.getElementsByClassName('menu-content')

// Hamburger functionality
hamburger.addEventListener('click', navToggle);

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
    footer.classList.toggle('hidden')
}

// Google Map functionality
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

// MENU PAGE

// Add click event listeners to each menu element
Array.from(foodMenuNavCollection).forEach(menuitem => {
    menuitem.addEventListener('click', function() {
        // Remove active class from all
        removeAllActive()
        // Then add active class to the one which has been clicked
        menuitem.classList.add('active')
        changeMenu(menuitem.dataset.menuindex)
    })
})

function removeAllActive() {
    Array.from(foodMenuNavCollection).forEach(menuitem => {
        menuitem.classList.remove('active')
    })
}

function changeMenu(index) {
    Array.from(menuCollection).forEach(menu => {
        if(menu.dataset.menuindex === index) {
            menu.classList.add('menu-active')
            menu.classList.remove('menu-inactive')
        } else {
            menu.classList.add('menu-inactive')
            menu.classList.remove('menu-active')
        }
    })
}