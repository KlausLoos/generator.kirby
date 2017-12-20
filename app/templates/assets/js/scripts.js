document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById('mobile-menu').addEventListener('click', triggerMenu);
});

function triggerMenu() {
  document.getElementsByClassName('block-nav')[0].classList.toggle('mobile');
}
