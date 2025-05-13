const toggleBtn = document.getElementById('toggle-btn');
const themeLabel = document.getElementById('theme-label');

// Load theme from localStorage on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
};

toggleBtn.addEventListener('click', () => {
  // Toggle between light and dark theme
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newTheme);

  // Trigger animation
  toggleBtn.classList.add('animate');
  setTimeout(() => toggleBtn.classList.remove('animate'), 400);
});

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    themeLabel.textContent = 'Dark';
  } else {
    document.body.classList.remove('dark');
    themeLabel.textContent = 'Light';
  }

  // Save preference in localStorage
  localStorage.setItem('theme', theme);
}
