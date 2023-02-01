"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// We create this function to re-use adding back the .hidden class. In this instance, we are using it to add back the .hidden class when the user click the X on the modal, and clicks outside of the modal "closing" the modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// We create this function to re-use removing the .hidden class. In this instance, we are using it to remove the .hidden class when the user clicks one of the buttons with the class .show-modal based on our for loop below
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// We add a for loop here for the class .show-modal buttons becaue they're more than one, and the loop allows for JavaScript to run though a for loop looking for each button with the class .show-modal. Then we declare the function openModal.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// We declare the function  "closeModal" in the listener for the variable btnCloseModal and the variable overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
