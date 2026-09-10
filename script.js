const adminBtn = document.getElementById('adminBtn');
const adminMenu = document.getElementById('adminMenu');

adminBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  adminMenu.classList.toggle('active');
});

document.addEventListener('click', function() {
  adminMenu.classList.remove('active');
});