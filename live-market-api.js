const API_URL = 579b464db66ec23bdd0000015f77b57d96134b6762464b38c1b86fda

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
