// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

function openLightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = image.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Add hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.querySelector('.navigation');

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (menuToggle && menuToggle.checked) {
            const isClickInsideNav = navigation.contains(event.target);
            const isClickOnToggle = event.target === menuToggle;

            if (!isClickInsideNav && !isClickOnToggle) {
                menuToggle.checked = false;
            }
        }
    });

    // Close menu when clicking a navigation link
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.checked = false; // Close the menu when clicking an option
        });
    });
});
