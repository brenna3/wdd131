// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.style.display === 'block';
  navMenu.style.display = isOpen ? 'none' : 'block';
  hamburger.textContent = isOpen ? '☰' : '✖';
});

// Temple data array (11+ temples)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 32000,
    imageUrl: "images/temple12.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 38500,
    imageUrl: "images/temple10.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 12000,
    imageUrl: "images/temple11.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 11",
    area: 12000,
    imageUrl: "images/temple13.jpg"
  }
];

// Container element
const container = document.getElementById('temple-container');

// Parse "dedicated" string to Date
function parseDedicatedDate(dedicatedStr) {
  // Example input: "2005, August, 7"
  return new Date(dedicatedStr);
}

// Create temple card figure element
function createTempleCard(temple) {
  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = 'lazy'; // native lazy loading
  figure.appendChild(img);

  const caption = document.createElement('figcaption');
  caption.innerHTML = `
    <strong>${temple.templeName}</strong><br>
    ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Area: ${temple.area.toLocaleString()} sq ft
  `;
  figure.appendChild(caption);

  return figure;
}

// Render temples by filter
function renderTemples(filter = 'all') {
  container.innerHTML = '';

  let filteredTemples = temples;

  if (filter === 'old') {
    filteredTemples = temples.filter(t => parseDedicatedDate(t.dedicated).getFullYear() < 1900);
  } else if (filter === 'new') {
    filteredTemples = temples.filter(t => parseDedicatedDate(t.dedicated).getFullYear() > 2000);
  } else if (filter === 'large') {
    filteredTemples = temples.filter(t => t.area > 90000);
  } else if (filter === 'small') {
    filteredTemples = temples.filter(t => t.area < 10000);
  }

  if (filteredTemples.length === 0) {
    container.textContent = 'No temples match this filter.';
  } else {
    filteredTemples.forEach(temple => {
      container.appendChild(createTempleCard(temple));
    });
  }
}

// Initial render all temples
renderTemples();

// Navigation filter event listeners
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const filter = link.dataset.filter;
    renderTemples(filter);

    // Hide nav on mobile after selection
    if (navMenu.style.display === 'block') {
      navMenu.style.display = 'none';
      hamburger.textContent = '☰';
    }
  });
});

// Footer year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;