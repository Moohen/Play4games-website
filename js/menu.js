document.getElementById("burger").onclick = function() {showMenu()};

function showMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}