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

// 

let sections = document.querySelectorAll('section');

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


// fonction lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
  