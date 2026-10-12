/** Small page behaviour: current year in the footer. */
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('current-year');
  if (y) y.textContent = new Date().getFullYear();
});
