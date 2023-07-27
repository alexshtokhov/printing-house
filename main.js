
const modal = document.getElementById("my-modal");

const btn = document.getElementById("my-btn");

const span = document.getElementsByClassName("close-modal-window")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}