const temples = [
  {
    templeName: "Oquirrh Mountain",
    location: "South Jordan, Utah, United States",
    dedicated: "2000-01-15",
    area: 110000,
    imageUrl: "images/temple1.jpg"
  },
  {
    templeName: "Washington DC",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Draper Utah",
    location: "Draper, Utah, United States",
    dedicated: "2009-03-20",
    area: 97000,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014-03-02",
    area: 85000,
    imageUrl: "images/temple4.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 40000,
    imageUrl: "images/temple5.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 107240,
    imageUrl: "images/temple7.jpg"
  },
  {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta, Canada",
    dedicated: "2012-10-28",
    area: 17000,
    imageUrl: "images/temple8.jpg"
  },
  {
    templeName: "Brigham City Utah",
    location: "Brigham City, Utah, United States",
    dedicated: "2012-08-19",
    area: 11700,
    imageUrl: "images/temple9.jpg"
  },
  // Added temples with local images:
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984-09-20",
    area: 32000,
    imageUrl: "images/temple11.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 31000,
    imageUrl: "images/temple12.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 10000,
    imageUrl: "images/temple13.jpg"
  }
];

// Get references
const container = document.getElementById('temple-container');
const navLinks = document.querySelectorAll('nav ul li a');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  const isOpen = navMenu.style.display === 'block';
  navMenu.style.display = isOpen ? 'none' : 'block';
  hamburger.textContent = isOpen ? '☰' : '✖';
});

// Function to create temple cards
function createTempleCard(temple) {
  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = 'lazy';
  figure.appendChild(img);

  const caption = document.createElement('figcaption');
  caption.innerHTML = `
    <strong>${temple.templeName}</strong><br />
    Location: ${temple.location}<br />
    Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}<br />
    Area: ${temple.area.toLocaleString()} sq ft
  `;
  figure.appendChild(caption);

  return figure;
}

// Function to render temples based on filter
function renderTemples(filter = 'all') {
  container.innerHTML = ''; // Clear current temples

  let filteredTemples = temples;

  if (filter === 'old') {
    filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  } else if (filter === 'new') {
    filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  } else if (filter === 'large') {
    filteredTemples = temples.filter(t => t.area > 90000);
  } else if (filter === 'small') {
    filteredTemples = temples.filter(t => t.area < 10000);
  }

  filteredTemples.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

// Set copyright year
document.getElementById('year').textContent = new Date().getFullYear();
// Set last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Initial render of all temples
renderTemples();

// Add filter event listeners
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    renderTemples(filter);
    // Close menu on mobile after click
    navMenu.style.display = 'none';
    hamburger.textContent = '☰';
  });
});