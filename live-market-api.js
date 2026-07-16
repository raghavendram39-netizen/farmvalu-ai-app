// =======================================
// FarmValu AI - Live Market API
// =======================================

// Replace with your real API URL
const API_URL = "YOUR_API_URL_HERE";

// Fetch Live Market Data
async function fetchLiveMarketData() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to fetch market data.");
        }

        const data = await response.json();

        updateMarketCards(data);

    } catch (error) {

        console.error(error);

        console.log("Using offline market data.");

    }

}

// Display Live Market Data
function updateMarketCards(data) {

    const container = document.getElementById("marketContainer");

    container.innerHTML = "";

    data.forEach(item => {

        container.innerHTML += `

        <div class="market-card">

            <h2>🌾 ${item.crop}</h2>

            <p><strong>Price:</strong> ₹${item.price}</p>

            <p><strong>Market:</strong> ${item.market}</p>

            <p><strong>State:</strong> ${item.state}</p>

            <button onclick="saveFavourite('${item.crop}')">

                ⭐ Favourite

            </button>

        </div>

        `;

    });

}

// Refresh Every 5 Minutes
setInterval(fetchLiveMarketData, 300000);

// Load Data When Page Opens
window.addEventListener("load", fetchLiveMarketData);
