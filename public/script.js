// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

function openLightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = image.src; // Set the source of the lightbox image
    lightbox.style.display = 'flex'; // Display the lightbox
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
  }