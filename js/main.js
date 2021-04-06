// ===== Sticky Menu =====
$(document).ready(function(){
    $('.js-about').waypoint(function(direction){
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
});

// ===== Mobile Navigation =====
let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileNav = document.querySelector('.mobileNav');

hamberger.addEventListener('click', function() {
    mobileMenu.classList.add('open')
});
times.addEventListener('click', function(){
    mobileMenu.classList.remove('open');
});
mobileNav.addEventListener('click', function(){
    mobileMenu.classList.remove('open');
});

// ===== Analysis Button =====
let downBtn = document.querySelector('.downBtn');
let infoBox = document.querySelector('.info');

downBtn.addEventListener('click', function(){
    infoBox.classList.toggle('open');
});