const API_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001bc0e21c9ea32420542918cb35ef2d290&format=json&limit=100";

async function loadLiveMarket() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load market data");
        }

        const data = await response.json();
        displayLiveMarket(data.records);

    } catch (error) {
        console.error("Error:", error);

        document.getElementById("marketContainer").innerHTML =
            "<p>Unable to load live market data.</p>";
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

function searchCrop() {
    const input = document.getElementById("cropSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".market-card");

    cards.forEach(card => {
        if (card.innerText.toLowerCase().includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

window.onload = loadLiveMarket;
