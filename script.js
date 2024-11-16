const barberMenu = document.querySelector('.barber-menu');

barberMenu.addEventListener("click", function() {
  document.querySelector(".nav-menu").classList.toggle("show");
  barberMenu.classList.toggle('rotated');
});
