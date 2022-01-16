const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;

function displaySlides(index){
    slides.forEach((slide)=> {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}

function nextSlide() {
    index++;
    if (index > slides.length){
        index = 0;
    }
    displaySlides(index);
}

function prevSlide() {
    index--;
    if (index < 0){
        index = slides.length - 1;
    }
    displaySlides(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
displaySlides(index);