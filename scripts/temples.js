const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.style.display === 'block';
  navMenu.style.display = isOpen ? 'none' : 'block';
  hamburger.textContent = isOpen ? '☰' : '✖';
});

// Set copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('lastModified').textContent = document.lastModified;