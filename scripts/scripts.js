function calculateWindChill(tempC, windKmh) {
  if (tempC <= 10 && windKmh > 4.8) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;

  const lastMod = new Date(document.lastModified);
  document.getElementById("lastModified").textContent = lastMod.toLocaleString();

  const temp = parseFloat(document.getElementById("temperature").textContent);
  const wind = parseFloat(document.getElementById("windSpeed").textContent);
  const chill = calculateWindChill(temp, wind);
  document.getElementById("windChill").textContent = chill;
});