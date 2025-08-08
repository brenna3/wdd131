document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle button for mobile
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('active');
    });
  }

  // Menu filtering functionality
  const filterSelect = document.getElementById('filter');
  const menuItemsContainer = document.getElementById('menu-items');

  // Sample menu items data — replace or expand as needed
  const menuItems = [
    {
      id: 1,
      name: 'Espresso',
      category: 'coffee',
      description: 'Rich and bold espresso shot.',
      price: '$3.00',
      image: 'images/espresso.jpg',
    },
    {
      id: 2,
      name: 'Latte',
      category: 'coffee',
      description: 'Creamy steamed milk with espresso.',
      price: '$4.50',
      image: 'images/latte.jpg',
    },
    {
      id: 3,
      name: 'Green Tea',
      category: 'tea',
      description: 'Refreshing and soothing green tea.',
      price: '$3.00',
      image: 'images/greentea.jpg',
    },
    {
      id: 4,
      name: 'Chai Latte',
      category: 'tea',
      description: 'Spiced tea with steamed milk.',
      price: '$4.50',
      image: 'images/chai.jpg',
    },
    {
      id: 5,
      name: 'Croissant',
      category: 'pastry',
      description: 'Buttery flaky French pastry.',
      price: '$2.50',
      image: 'images/croissant.jpg',
    },
    {
      id: 6,
      name: 'Muffin',
      category: 'pastry',
      description: 'Freshly baked blueberry muffin.',
      price: '$3.00',
      image: 'images/muffin.jpg',
    },
  ];

  function renderMenuItems(filter = 'all') {
    if (!menuItemsContainer) return;

    let filteredItems =
      filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

    menuItemsContainer.innerHTML = filteredItems
      .map(
        item => `
      <section class="feature-section" aria-label="${item.name}">
        <img src="${item.image}" alt="${item.name}" class="feature-image" />
        <div class="feature-description">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p><strong>${item.price}</strong></p>
        </div>
      </section>
    `
      )
      .join('');
  }

  if (filterSelect) {
    filterSelect.addEventListener('change', e => {
      renderMenuItems(e.target.value);
    });
  }

  // Initial menu render on page load
  renderMenuItems();

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const confirmation = document.getElementById('confirmation');

  if (contactForm && confirmation) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        confirmation.textContent = 'Please fill in all fields.';
        confirmation.style.color = 'red';
        return;
      }

      // Basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        confirmation.textContent = 'Please enter a valid email address.';
        confirmation.style.color = 'red';
        return;
      }

      // Here you can add actual submission logic, e.g. fetch API to backend

      confirmation.textContent = `Thank you, ${name}! Your message has been sent.`;
      confirmation.style.color = 'green';

      contactForm.reset();
    });
  }
});