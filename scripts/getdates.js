// Get and display the current year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get and display the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;