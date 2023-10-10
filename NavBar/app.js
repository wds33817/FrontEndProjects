const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

navToggle.addEventListener('mouseenter', function () {
  links.classList.toggle('show-links');
});
