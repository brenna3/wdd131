// Featured Drink of the Day (index.html)
const featuredDrink = {
  name: "Cinnamon Vanilla Latte",
  description: "Warm, spicy, and smooth – perfect for cozy mornings!",
  image: "images/featured-drink.jpg"
};

const drinkContainer = document.querySelector(".drink-container");
if (drinkContainer) {
  drinkContainer.innerHTML = `
    <img src="${featuredDrink.image}" alt="${featuredDrink.name}" loading="lazy">
    <h3>${featuredDrink.name}</h3>
    <p>${featuredDrink.description}</p>
  `;
}

// Menu Filter (menu.html)
const menuItems = [
  { name: "Espresso", type: "coffee" },
  { name: "Latte", type: "coffee" },
  { name: "Chai Tea", type: "tea" },
  { name: "Croissant", type: "pastry" }
];

const filter = document.getElementById("filter");
const menuGrid = document.getElementById("menu-items");

if (filter && menuGrid) {
  function displayMenu(filterValue) {
    menuGrid.innerHTML = "";
    const filtered = filterValue === "all"
      ? menuItems
      : menuItems.filter(item => item.type === filterValue);
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `<h3>${item.name}</h3><p>Category: ${item.type}</p>`;
      menuGrid.appendChild(div);
    });
  }

  filter.addEventListener("change", (e) => {
    displayMenu(e.target.value);
  });

  displayMenu("all");
}

// Contact Form Storage
const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const feedback = {
      name,
      email,
      message,
      timestamp: new Date()
    };

    localStorage.setItem("feedback", JSON.stringify(feedback));
    confirmation.textContent = "Thank you for your message!";
    form.reset();
  });
}