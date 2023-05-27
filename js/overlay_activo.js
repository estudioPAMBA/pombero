document.addEventListener('DOMContentLoaded', function() {
    var galleryItems = document.querySelectorAll('.gallery-item');
  
    galleryItems.forEach(function(item) {
      var img = item.querySelector('img');
      var overlay = item.querySelector('.image-overlay');
  
      img.addEventListener('click', function(event) {
        event.stopPropagation();
        overlay.style.display = 'flex';
      });
  
      overlay.addEventListener('click', function(event) {
        event.stopPropagation();
        overlay.style.display = 'none';
      });
    });
  
    document.addEventListener('click', function() {
      var overlays = document.querySelectorAll('.image-overlay');
      overlays.forEach(function(overlay) {
        overlay.style.display = 'none';
      });
    });
  });



  