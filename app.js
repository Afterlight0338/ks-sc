/**
 * KrunchieSnack — Minimal, purposeful client behavior
 * Zero bloat, no external library dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year dynamically
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Pack buttons interaction -> syncs package select & scrolls to form
  const packButtons = document.querySelectorAll('.pack-btn');
  const packSelect = document.getElementById('pack-choice');
  const inquiryBox = document.querySelector('.order-inquiry-box');

  packButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const chosenPack = e.target.getAttribute('data-pack');
      if (packSelect && chosenPack) {
        packSelect.value = chosenPack;
      }

      if (inquiryBox) {
        inquiryBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const nameInput = document.getElementById('customer-name');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 400);
        }
      }
    });
  });

  // Flavour card select buttons -> sync with package inquiry
  const flavorButtons = document.querySelectorAll('.flavour-select-btn');
  flavorButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const flavor = e.target.getAttribute('data-flavor');
      if (inquiryBox) {
        inquiryBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const feedback = document.getElementById('form-feedback');
        if (feedback && flavor) {
          feedback.textContent = t('Selected flavor note: {flavor}. Enter your details below to request a pack.', { flavor: t(flavor) });
          feedback.className = 'form-feedback';
        }
      }
    });
  });

  // Handle Order Form Submission
  const orderForm = document.getElementById('order-form');
  const feedback = document.getElementById('form-feedback');
  
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('customer-name').value.trim();
      const contact = document.getElementById('customer-contact').value.trim();
      const pack = packSelect.selectedOptions[0].text;

      if (!name || !contact) {
        feedback.textContent = t('Please provide both your name and phone/email.');
        feedback.className = 'form-feedback';
        return;
      }

      // Simulate instantaneous order reservation
      feedback.textContent = t("Thank you, {name}! Your request for {pack} has been logged. We'll contact {contact} within 24 hours.", { name, pack, contact });
      feedback.className = 'form-feedback success';

      // Clear input fields
      document.getElementById('customer-name').value = '';
      document.getElementById('customer-contact').value = '';
    });
  }
});
