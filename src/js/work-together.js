document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('modal-together');
  const modalMessage = document.getElementById('modal-message');
  const closeModalBtn = document.querySelector('.close');
  const body = document.body;

  const handleOutsideClick = (event) => {
    if (event.target === modal) {
      console.log('Outside click detected');
      closeModal();
    }
  };

  const handleEscapeKey = (event) => {
    console.log('Keydown event detected: ', event.key);
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    console.log('Modal is closing');
    modal.classList.remove('is-open');
    body.style.overflow = '';
    removeEventListeners();
  };

  const addEventListeners = () => {
    console.log('Adding event listeners');
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleEscapeKey);
  };

  const removeEventListeners = () => {
    console.log('Removing event listeners');
    closeModalBtn.removeEventListener('click', closeModal);
    window.removeEventListener('click', handleOutsideClick);
    window.removeEventListener('keydown', handleEscapeKey);
  };

  const openModal = () => {
    console.log('Opening modal');
    modal.classList.add('is-open');
    body.style.overflow = 'hidden';
    addEventListeners();
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api-docs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        modalMessage.innerHTML = `
          <h3 class="modal-success">Thank you for your interest in cooperation!</h3>
          <p class="modal-info">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>`;
        form.reset();
      } else {
        modalMessage.textContent = 'There was an error with your request. Please try again.';
      }

      openModal();
    } catch (error) {
      modalMessage.textContent = 'An error occurred. Please try again.';
      openModal();
    }
  });
});
