let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-inner > .slide').length;

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const translateValue = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${translateValue}%)`;
}
