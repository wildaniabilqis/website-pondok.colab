const images = document.querySelectorAll('.gallery-grid img');

images.forEach(img => {
    img.addEventListener('click', () => {
        alert("Gambar: " + img.alt);
    });
});
