let currentIndex = 0;
let currentImages = [];

function openLightbox(image) {
  currentImages = Array.from(document.querySelectorAll('.gallery .image'))
    .filter(img => img.style.display !== 'none');

  currentIndex = currentImages.indexOf(image);

  document.getElementById("lightbox-img").src = image.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById("lightbox-img").src = currentImages[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById("lightbox-img").src = currentImages[currentIndex].src;
}

function filterImages(category) {
  const images = document.querySelectorAll('.gallery .image');

  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}