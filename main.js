// Menu Hamburger
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

// Ajoute un écouteur d'événement au redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    // Vérifie si le menu mobile est affiché et que la largeur de la fenêtre est supérieure à 900 pixels
    if (navLinks.classList.contains('mobile-menu') && window.innerWidth > 900) {
        navLinks.classList.remove('mobile-menu');
    }
});

// fonction lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

// boutons next et previous du slider lightbox 
let sections = document.querySelectorAll('section');

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}



// scrolltop js 
// execute la fonction lorsque la fenêtre est scrollée
window.onscroll = function () { scrollFunction() };

// lorsque user scroll down à 30px du haut de la page, montre le bouton
function scrollFunction() { 
// récupère le bouton
var mybutton = document.getElementById("scrollToTopButton");

if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.opacity = 1;
    mybutton.style.visibility = "visible";
    
} else {
    mybutton.style.opacity = 0;
    mybutton.style.visibility = "hidden";
    
}
}

// lorsque user click sur le bouton, scroll to the top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
