var imagen = document.getElementById('imagen');

document.addEventListener('mousemove', function(event) {
  var xPos = (event.clientX / window.innerWidth - 0.5) * 40;
  var yPos = (event.clientY / window.innerHeight - 0.5) * 40;
  
  imagen.style.transform = 'translate(' + xPos + 'px, ' + yPos + 'px)';
});
