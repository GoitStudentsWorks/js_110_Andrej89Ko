document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const closeModalBtn = document.querySelector('.close');
  const body = document.body;

  const closeModal = () => {
    modal.classList.remove('is-open');
    body.style.overflow = '';
  };

  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

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

      modal.classList.add('is-open');
      body.style.overflow = 'hidden';
    } catch (error) {
      modalMessage.textContent = 'An error occurred. Please try again.';
      modal.classList.add('is-open');
      body.style.overflow = 'hidden'; 
    }
  });
});
