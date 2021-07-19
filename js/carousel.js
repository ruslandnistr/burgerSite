const images = [
    'img/photo_2021-06-17_11-44-52.jpg',
    'img/photo_2021-06-17_11-44-53 (2).jpg',
    'img/photo_2021-06-17_11-44-53 (3).jpg',
    'img/photo_2021-06-17_11-44-53.jpg',
];

let currentSlide = 0;

function showCurrentSlide() {
    const imageContainer = document.querySelector('.products-carousel .product-image');
    imageContainer.src = images[currentSlide];
}

function next() {
    currentSlide++;
    if (currentSlide > images.length - 1) currentSlide = 0;
    showCurrentSlide();
}

setInterval(next, 3000);

showCurrentSlide();

document.querySelector('.products-carousel .next').addEventListener('click', next)
document.querySelector("#products").classList.add('zebra-bg');