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
const bookingPage = document.getElementById('bookingpage')
const foodMenuNav = document.getElementById('food-menu-nav')
const menus = document.getElementById('menus')
const buttonContainer = document.getElementById('button-container')


// Hamburger functionality
hamburger.addEventListener('click', navToggle);

function navToggle() {
    hamburger.classList.toggle('open')
    hamburgerMenu.classList.toggle('hidden')
    booking!==null && booking.classList.toggle('hidden')
    menu!==null && menu.classList.toggle('hidden')
    menus!==null && menus.classList.toggle('hidden')
    foodMenuNav!==null && foodMenuNav.classList.toggle('hidden')
    buttonContainer!==null && buttonContainer.classList.toggle('hidden')
    about!==null && about.classList.toggle('hidden')
    social!==null && social.classList.toggle('hidden')
    parties!==null && parties.classList.toggle('hidden')
    signup!==null && signup.classList.toggle('hidden')
    contact!==null && contact.classList.toggle('hidden')
    footer!==null && footer.classList.toggle('hidden')
    bookingpage!==null && bookingpage.classList.toggle('hidden')
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