const prevBtn = document.querySelector(".btn1")
const nextBtn = document.querySelector(".btn2")
const slides = document.querySelectorAll(".slide")

let currentSlide = 0;

slides[currentSlide].classList.add("active");

function updateSlides() {
    slides.forEach( (slide,index) => {
        slide.style.transform = `translateX(${(index - currentSlide)*100}%)`;
    });
}

updateSlides();


nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
});


prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
});








