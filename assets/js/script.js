"use strict";

const modal = document.getElementById("addEdu");
const modalBtn = document.getElementById("addEduBtn");
const closeBtn = document.getElementById("closeBtn");

modalBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

// for close click
closeBtn.addEventListener("click", closeModal);

// for outside click
window.addEventListener("click", outsideClick);

function closeModal() {
  modal.style.display = "none";
}

// to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
