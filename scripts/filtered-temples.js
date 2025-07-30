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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add your 3 new temple objects here:
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 25000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 24000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984-09-20",
    area: 32000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple.jpg"
  }
];

const albumGrid = document.querySelector('.album-grid');

function displayTemples(templesToShow) {
  albumGrid.innerHTML = '';

  templesToShow.forEach(temple => {
    const figure = document.createElement('figure');

    figure.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString()}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;

    albumGrid.appendChild(figure);
  });
}

// Initial display - show all temples
displayTemples(temples);

function filterTemples(filter) {
  switch(filter) {
    case 'old':
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
      break;
    case 'new':
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
      break;
    case 'large':
      displayTemples(temples.filter(t => t.area > 90000));
      break;
    case 'small':
      displayTemples(temples.filter(t => t.area < 10000));
      break;
    default:
      displayTemples(temples);
  }
}

// Add event listeners for nav menu filters
document.getElementById('filter-home').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('all');
});
document.getElementById('filter-old').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('old');
});
document.getElementById('filter-new').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('new');
});
document.getElementById('filter-large').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('large');
});
document.getElementById('filter-small').addEventListener('click', (e) => {
  e.preventDefault();
  filterTemples('small');
});