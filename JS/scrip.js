
// Seleccionamos el botón y el menú
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Escuchamos el click
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show'); // agrega o quita la clase 'show'
});


// --------------FORMULARIO---------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const mensaje = document.getElementById("mensaje-exito");

  form.addEventListener("submit", () => {
    // Mostrar el mensaje de éxito cuando se envía
    mensaje.style.display = "block";

    // Limpiar los campos del formulario
    form.reset();

    
  });
});

// -------------FIN FORMULARIO-----------------