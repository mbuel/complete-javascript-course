'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = e => {
    console.log(e.target.textContent);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = e => {

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
        if (!overlay.classList.contains('.hidden')) {
            closeModal();
      }
  }
});

btnsOpenModal.forEach((btn, index) => {
    btn.addEventListener('click', openModal);
    
});

console.log(btnsOpenModal);

