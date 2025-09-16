// Dark mode toggle functionality
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const modeText = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  document.getElementById('toggle-dark-mode').innerText = modeText;
});

// Auto-generate semester cards

