// ===============================
// FarmValu AI - Weather Page
// ===============================

// Sample Weather Data
const weather = {
    temperature: "28°C",
    condition: "Sunny ☀️",
    humidity: "70%",
    wind: "12 km/h",
    rain: "30%"
};

console.log("Today's Weather");
console.log(weather);

// Farming Tips
const tips = [
    "🌱 Good day for irrigation.",
    "🌾 Spray pesticides in the evening.",
    "🌧 Low chance of heavy rainfall.",
    "🚜 Best time for harvesting is morning."
];

// Show a random farming tip
const tipElement = document.querySelector(".tips p");

if (tipElement) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipElement.innerHTML = randomTip;
}

// Weather Alert
setTimeout(function () {
    alert("🌦 Weather Alert\n\nNo heavy rainfall expected today.");
}, 3000);

// Banner Advertisement
setTimeout(function () {
    const ad = document.querySelector(".banner-ad");
    if (ad) {
        ad.style.display = "block";
    }
}, 5000);
