const API_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000015f77b57d96134b6762464b38c1b86fda&format=json&limit=100";
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
