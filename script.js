var aguja = document.querySelector('.aguja');

function actualizarBrujula(evento) {
  var x = evento.clientX - (window.innerWidth / 2);
  var y = evento.clientY - (window.innerHeight / 2);
  var radianes = Math.atan2(y, x);
  // Math.atan2 --> Calcula la diferencia entre dos puntos (y1 - y2, x1 - x2) y devuelve el ángulo en radianes.
  var angulo = radianes * 180 / Math.PI;
  // Math.Pi --> 3.141592653589793 lo cambio de radianes a grados. Ya que Pi radianes son 180 grados.
  aguja.style.transform = 'rotate(' + angulo + 'deg)';
  document.querySelector('.x').innerHTML = x;
  document.querySelector('.y').innerHTML = y;
  document.querySelector('.radianes').innerHTML = radianes + ' rads';
  document.querySelector('.angulo').innerHTML = angulo + 'º';
}

document.addEventListener('mousemove', actualizarBrujula);