const slider = document.querySelector('.slide-images');
let isTransitioning = false;

function slideToNextImage() {
  if (!isTransitioning) {
    isTransitioning = true;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      isTransitioning = false;
    }, 500);
  }
}

setInterval(slideToNextImage, 7000); // Change slide every 7 seconds
