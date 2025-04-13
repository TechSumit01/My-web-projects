const cardList = document.querySelector(".card-list");
const cardItems = document.querySelectorAll(".card-item")

let currentIndex = 0;
const cardsPerView = 3;
const totalCards = cardItems.length;

function updateSlider() {
    const offset = -currentIndex * (cardItems[0].offsetWidth + 16); // Calculate offset
    cardList.style.transform = `translateX(${offset}px)`; // Move the card list
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        // Slide to the right
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
            updateSlider();
        }
    } else if (e.key === "ArrowLeft") {
        // Slide to the left
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
});

// Add responsive resizing
window.addEventListener("resize", () => {
    updateSlider(); // Recalculate offsets when resizing
});