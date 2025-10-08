
// Seleccionamos el botón y el menú
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Escuchamos el click
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show'); // agrega o quita la clase 'show'
});