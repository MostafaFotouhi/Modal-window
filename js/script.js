'use strict';

const showModalButtons = document.querySelectorAll('.show-modal');

const modalContainer = document.querySelector('.modal');
const overlayContainer = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');

const closeModal = function () {
  modalContainer.classList.add('hidden');
  overlayContainer.classList.add('hidden');
};

const openModal = function () {
  modalContainer.classList.remove('hidden');
  overlayContainer.classList.remove('hidden');
};

for (let i = 0; i < showModalButtons.length; i++) {
  showModalButtons[i].addEventListener('click', openModal);
}

closeModalButton.addEventListener('click', closeModal);
overlayContainer.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
    closeModal();
  }
});
