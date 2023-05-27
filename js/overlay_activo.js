// Obtener todas las imágenes de la galería
const galleryItems = document.querySelectorAll('.gallery-item');

// Agregar evento de clic a cada imagen
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remover la clase 'expanded' de todas las imágenes
    galleryItems.forEach(item => {
      item.classList.remove('expanded');
    });

    // Agregar la clase 'expanded' a la imagen clickeada
    item.classList.add('expanded');
  });
});
