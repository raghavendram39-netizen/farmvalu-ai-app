const API_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=YOUR_API_KEY&format=json&limit=100";

async function loadLiveMarket() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayLiveMarket(data.records);
    } catch (error) {
        console.error("Error loading market data:", error);
    }
}

function displayLiveMarket(records) {
    const container = document.getElementById("marketContainer");

    container.innerHTML = "";

    records.forEach(record => {
        container.innerHTML += `
            <div class="market-card">
                <h2>🌾 ${record.commodity}</h2>
                <p><strong>State:</strong> ${record.state}</p>
                <p><strong>Market:</strong> ${record.market}</p>
                <p><strong>Min Price:</strong> ₹${record.min_price}</p>
                <p><strong>Max Price:</strong> ₹${record.max_price}</p>
                <p><strong>Modal Price:</strong> ₹${record.modal_price}</p>
            </div>
        `;
    });
}

window.onload = loadLiveMarket;
