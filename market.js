// ====================================
// FarmValu AI - Market Database
// Part 1
// ====================================

const marketData = {

"Andhra Pradesh":[
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2300 / Quintal"},
{crop:"Groundnut",category:"Oilseed",price:"₹6200 / Quintal"},
{crop:"Cotton",category:"Fiber",price:"₹7200 / Quintal"},
{crop:"Chilli",category:"Spice",price:"₹9500 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8200 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2600 / Quintal"},
{crop:"Mango",category:"Fruit",price:"₹4200 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1800 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2200 / Quintal"}
],

"Arunachal Pradesh":[
{crop:"Rice",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2300 / Quintal"},
{crop:"Orange",category:"Fruit",price:"₹4800 / Quintal"},
{crop:"Kiwi",category:"Fruit",price:"₹9000 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7600 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8100 / Quintal"},
{crop:"Cabbage",category:"Vegetable",price:"₹2000 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2400 / Quintal"}
],

"Assam":[
{crop:"Rice",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Tea",category:"Plantation",price:"₹18000 / Quintal"},
{crop:"Mustard",category:"Oilseed",price:"₹6500 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2600 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3400 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7400 / Quintal"},
{crop:"Brinjal",category:"Vegetable",price:"₹2100 / Quintal"},
{crop:"Cabbage",category:"Vegetable",price:"₹2000 / Quintal"}
],

"Bihar":[
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Wheat",category:"Cereal",price:"₹2400 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2250 / Quintal"},
{crop:"Litchi",category:"Fruit",price:"₹6200 / Quintal"},
{crop:"Makhana",category:"Special Crop",price:"₹12000 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2300 / Quintal"},
{crop:"Mustard",category:"Oilseed",price:"₹6400 / Quintal"}
],"Chhattisgarh":[
{crop:"Rice",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2200 / Quintal"},
{crop:"Soybean",category:"Oilseed",price:"₹4800 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1800 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Brinjal",category:"Vegetable",price:"₹2100 / Quintal"},
{crop:"Chilli",category:"Spice",price:"₹9000 / Quintal"},
{crop:"Coriander",category:"Spice",price:"₹7800 / Quintal"}
],

"Goa":[
{crop:"Rice",category:"Cereal",price:"₹2600 / Quintal"},
{crop:"Coconut",category:"Plantation",price:"₹3200 / Quintal"},
{crop:"Cashew",category:"Nut",price:"₹14000 / Quintal"},
{crop:"Mango",category:"Fruit",price:"₹5000 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2800 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3500 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1900 / Quintal"},
{crop:"Chilli",category:"Spice",price:"₹9200 / Quintal"}
],

"Gujarat":[
{crop:"Cotton",category:"Fiber",price:"₹7400 / Quintal"},
{crop:"Groundnut",category:"Oilseed",price:"₹6400 / Quintal"},
{crop:"Wheat",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Bajra",category:"Cereal",price:"₹2200 / Quintal"},
{crop:"Cumin",category:"Spice",price:"₹16500 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2400 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹3000 / Quintal"}
],

"Haryana":[
{crop:"Wheat",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Mustard",category:"Oilseed",price:"₹6500 / Quintal"},
{crop:"Cotton",category:"Fiber",price:"₹7200 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1800 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2300 / Quintal"},
{crop:"Cauliflower",category:"Vegetable",price:"₹2500 / Quintal"}
],"Himachal Pradesh":[
{crop:"Apple",category:"Fruit",price:"₹8000 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2500 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2300 / Quintal"},
{crop:"Peas",category:"Vegetable",price:"₹3200 / Quintal"},
{crop:"Cauliflower",category:"Vegetable",price:"₹2600 / Quintal"},
{crop:"Cabbage",category:"Vegetable",price:"₹2100 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7600 / Quintal"},
{crop:"Garlic",category:"Spice",price:"₹9200 / Quintal"}
],

"Jharkhand":[
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2250 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1900 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2300 / Quintal"},
{crop:"Brinjal",category:"Vegetable",price:"₹2100 / Quintal"},
{crop:"Mustard",category:"Oilseed",price:"₹6300 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8100 / Quintal"}
],

"Karnataka":[
{crop:"Ragi",category:"Cereal",price:"₹4200 / Quintal"},
{crop:"Rice",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2300 / Quintal"},
{crop:"Coffee",category:"Plantation",price:"₹25000 / Quintal"},
{crop:"Pepper",category:"Spice",price:"₹62000 / Quintal"},
{crop:"Arecanut",category:"Plantation",price:"₹52000 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2000 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2800 / Quintal"}
],

"Kerala":[
{crop:"Coconut",category:"Plantation",price:"₹3200 / Quintal"},
{crop:"Rubber",category:"Plantation",price:"₹18500 / Quintal"},
{crop:"Pepper",category:"Spice",price:"₹62000 / Quintal"},
{crop:"Cardamom",category:"Spice",price:"₹98000 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹3000 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3600 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7600 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8200 / Quintal"}
],"Madhya Pradesh":[
{crop:"Wheat",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Soybean",category:"Oilseed",price:"₹5000 / Quintal"},
{crop:"Gram",category:"Pulse",price:"₹5600 / Quintal"},
{crop:"Garlic",category:"Spice",price:"₹9500 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2300 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1900 / Quintal"},
{crop:"Orange",category:"Fruit",price:"₹4500 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2800 / Quintal"}
],

"Maharashtra":[
{crop:"Cotton",category:"Fiber",price:"₹7300 / Quintal"},
{crop:"Soybean",category:"Oilseed",price:"₹5100 / Quintal"},
{crop:"Sugarcane",category:"Cash Crop",price:"₹340 / Quintal"},
{crop:"Grapes",category:"Fruit",price:"₹6500 / Quintal"},
{crop:"Pomegranate",category:"Fruit",price:"₹8500 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2500 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2000 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8300 / Quintal"}
],

"Manipur":[
{crop:"Rice",category:"Cereal",price:"₹2550 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2300 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7600 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8200 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3500 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2800 / Quintal"},
{crop:"Cabbage",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Chilli",category:"Spice",price:"₹9200 / Quintal"}
],

"Meghalaya":[
{crop:"Rice",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2400 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7700 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8100 / Quintal"},
{crop:"Orange",category:"Fruit",price:"₹4800 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3600 / Quintal"},
{crop:"Cabbage",category:"Vegetable",price:"₹2100 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2000 / Quintal"}
],"Mizoram":[
{crop:"Rice",category:"Cereal",price:"₹2600 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2350 / Quintal"},
{crop:"Orange",category:"Fruit",price:"₹5000 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2900 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3700 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7800 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8400 / Quintal"},
{crop:"Cabbage",category:"Vegetable",price:"₹2200 / Quintal"}
],

"Nagaland":[
{crop:"Rice",category:"Cereal",price:"₹2550 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2300 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2400 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2000 / Quintal"},
{crop:"Naga Chilli",category:"Spice",price:"₹25000 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7600 / Quintal"},
{crop:"Orange",category:"Fruit",price:"₹4900 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3600 / Quintal"}
],

"Odisha":[
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Groundnut",category:"Oilseed",price:"₹6200 / Quintal"},
{crop:"Cotton",category:"Fiber",price:"₹7100 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8200 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2700 / Quintal"},
{crop:"Mango",category:"Fruit",price:"₹4300 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1800 / Quintal"},
{crop:"Brinjal",category:"Vegetable",price:"₹2100 / Quintal"}
],

"Punjab":[
{crop:"Wheat",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2250 / Quintal"},
{crop:"Cotton",category:"Fiber",price:"₹7200 / Quintal"},
{crop:"Mustard",category:"Oilseed",price:"₹6500 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2300 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2400 / Quintal"},
{crop:"Cauliflower",category:"Vegetable",price:"₹2600 / Quintal"}
],"Rajasthan":[
{crop:"Wheat",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Mustard",category:"Oilseed",price:"₹6700 / Quintal"},
{crop:"Bajra",category:"Cereal",price:"₹2300 / Quintal"},
{crop:"Gram",category:"Pulse",price:"₹5800 / Quintal"},
{crop:"Cumin",category:"Spice",price:"₹17000 / Quintal"},
{crop:"Guar",category:"Cash Crop",price:"₹6200 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2400 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1900 / Quintal"}
],

"Sikkim":[
{crop:"Large Cardamom",category:"Spice",price:"₹85000 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7800 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2400 / Quintal"},
{crop:"Rice",category:"Cereal",price:"₹2600 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2500 / Quintal"},
{crop:"Orange",category:"Fruit",price:"₹5200 / Quintal"},
{crop:"Cabbage",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2100 / Quintal"}
],

"Tamil Nadu":[
{crop:"Rice",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Sugarcane",category:"Cash Crop",price:"₹350 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹3000 / Quintal"},
{crop:"Coconut",category:"Plantation",price:"₹3300 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8400 / Quintal"},
{crop:"Cotton",category:"Fiber",price:"₹7200 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2000 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2300 / Quintal"}
],

"Telangana":[
{crop:"Rice",category:"Cereal",price:"₹2480 / Quintal"},
{crop:"Cotton",category:"Fiber",price:"₹7250 / Quintal"},
{crop:"Maize",category:"Cereal",price:"₹2300 / Quintal"},
{crop:"Chilli",category:"Spice",price:"₹9800 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8300 / Quintal"},
{crop:"Mango",category:"Fruit",price:"₹4500 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1900 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2200 / Quintal"}
],"Tripura":[
{crop:"Rice",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Rubber",category:"Plantation",price:"₹18000 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3600 / Quintal"},
{crop:"Jackfruit",category:"Fruit",price:"₹2800 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2900 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7700 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8200 / Quintal"},
{crop:"Cabbage",category:"Vegetable",price:"₹2200 / Quintal"}
],

"Uttar Pradesh":[
{crop:"Wheat",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Rice",category:"Cereal",price:"₹2400 / Quintal"},
{crop:"Sugarcane",category:"Cash Crop",price:"₹340 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1900 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2300 / Quintal"},
{crop:"Mango",category:"Fruit",price:"₹4500 / Quintal"},
{crop:"Guava",category:"Fruit",price:"₹3500 / Quintal"}
],

"Uttarakhand":[
{crop:"Rice",category:"Cereal",price:"₹2550 / Quintal"},
{crop:"Wheat",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Apple",category:"Fruit",price:"₹8200 / Quintal"},
{crop:"Litchi",category:"Fruit",price:"₹6400 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2400 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2000 / Quintal"},
{crop:"Ginger",category:"Spice",price:"₹7800 / Quintal"},
{crop:"Turmeric",category:"Spice",price:"₹8300 / Quintal"}
],

"West Bengal":[
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Jute",category:"Fiber",price:"₹5200 / Quintal"},
{crop:"Tea",category:"Plantation",price:"₹18500 / Quintal"},
{crop:"Potato",category:"Vegetable",price:"₹2200 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹1800 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2800 / Quintal"},
{crop:"Mango",category:"Fruit",price:"₹4300 / Quintal"},
{crop:"Pineapple",category:"Fruit",price:"₹3500 / Quintal"}
],"Andaman and Nicobar Islands":[
{crop:"Coconut",category:"Plantation",price:"₹3400 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹3000 / Quintal"},
{crop:"Arecanut",category:"Plantation",price:"₹5300 / Quintal"}
],

"Chandigarh":[
{crop:"Wheat",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2000 / Quintal"}
],

"Dadra and Nagar Haveli and Daman and Diu":[
{crop:"Rice",category:"Cereal",price:"₹2450 / Quintal"},
{crop:"Sugarcane",category:"Cash Crop",price:"₹340 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹2900 / Quintal"}
],

"Delhi":[
{crop:"Wheat",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Onion",category:"Vegetable",price:"₹2400 / Quintal"},
{crop:"Tomato",category:"Vegetable",price:"₹2000 / Quintal"}
],

"Jammu and Kashmir":[
{crop:"Apple",category:"Fruit",price:"₹9000 / Quintal"},
{crop:"Walnut",category:"Nut",price:"₹18000 / Quintal"},
{crop:"Saffron",category:"Spice",price:"₹350000 / Quintal"},
{crop:"Rice",category:"Cereal",price:"₹2600 / Quintal"}
],

"Ladakh":[
{crop:"Barley",category:"Cereal",price:"₹2800 / Quintal"},
{crop:"Apricot",category:"Fruit",price:"₹7000 / Quintal"},
{crop:"Apple",category:"Fruit",price:"₹8500 / Quintal"}
],

"Lakshadweep":[
{crop:"Coconut",category:"Plantation",price:"₹3500 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹3000 / Quintal"},
{crop:"Breadfruit",category:"Fruit",price:"₹3200 / Quintal"}
],

"Puducherry":[
{crop:"Rice",category:"Cereal",price:"₹2500 / Quintal"},
{crop:"Sugarcane",category:"Cash Crop",price:"₹350 / Quintal"},
{crop:"Coconut",category:"Plantation",price:"₹3300 / Quintal"},
{crop:"Banana",category:"Fruit",price:"₹3000 / Quintal"}
]
    function showCategory(category) {
    const state = document.getElementById("state").value;
    const results = document.getElementById("market-results");

    if (!state) {
        alert("Please select a state first.");
        return;
    }

    const crops = marketData[state];

    const filtered = crops.filter(crop => {
        if (category === "Vegetables") return crop.category === "Vegetable";
        if (category === "Fruits") return crop.category === "Fruit";
        if (category === "Cereals") return crop.category === "Cereal";
        if (category === "Pulses") return crop.category === "Pulse";
        if (category === "Spices") return crop.category === "Spice";
        if (category === "Flowers") return crop.category === "Flower";
        return true;
    });

    let html = `
        <h2>${state} - ${category}</h2>
        <table style="width:100%;border-collapse:collapse;">
        <tr style="background:#2e7d32;color:white;">
            <th>Crop</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
    `;

    filtered.forEach(crop => {
        html += `
        <tr>
            <td>${crop.crop}</td>
            <td>${crop.category}</td>
            <td>${crop.price}</td>
        </tr>
        `;
    });

    html += "</table>";

    results.innerHTML = html;
}
function searchCrop() {
    const input = document.getElementById("searchCrop").value.toLowerCase();
    const rows = document.querySelectorAll("#market-results table tr");

    rows.forEach((row, index) => {
        if (index === 0) return; // Keep table header visible

        const crop = row.cells[0].textContent.toLowerCase();

        if (crop.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }):
    // ==========================================
// LIVE AGMARKNET / DATA.GOV.IN MARKET API
// ==========================================

// IMPORTANT:
// Replace this with your NEW API key.
// Do NOT use the old key that was visible in screenshots.
const API_KEY = "579b464db66ec23bdd00000110f2ef7e2460447a73f96b000bd1f535";

const API_URL =
    "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070";


// ==========================================
// FETCH LIVE MARKET PRICES
// ==========================================

async function fetchLiveMarketPrices(state = "", commodity = "") {

    try {

        const params = new URLSearchParams();

        params.set("api-key", API_KEY);
        params.set("format", "json");
        params.set("limit", "100");

        // State filter
        if (state) {
            params.set("filters[state]", state);
        }

        // Commodity filter
        if (commodity) {
            params.set("filters[commodity]", commodity);
        }

        const url = `${API_URL}?${params.toString()}`;

        console.log("Live Market API:", url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `API request failed: ${response.status}`
            );
        }

        const data = await response.json();

        console.log("Live Market Data:", data);

        return data.records || [];

    } catch (error) {

        console.error("Live Market API Error:", error);

        return [];
    }
}


// ==========================================
// LOAD LIVE MARKET PRICES
// ==========================================

alert("Live market function is running!");

    const stateElement = document.getElementById("state");
    const results = document.getElementById("market-results");

    if (!stateElement || !results) {
        console.error(
            "State selector or market-results element was not found."
        );
        return;
    }

    const state = stateElement.value;

    if (!state) {

        alert("Please select a state first.");

        return;
    }

    // Show loading message
    results.innerHTML = `
        <h3>Loading live market prices...</h3>
        <p>Please wait...</p>
    `;


    // Fetch live data
    const records = await fetchLiveMarketPrices(state);


    // No data
    if (!records.length) {

        results.innerHTML = `
            <h3>No live market data found.</h3>
            <p>
                The government API did not return market
                prices for the selected state.
            </p>
        `;

        return;
    }


    // ==========================================
    // CREATE TABLE
    // ==========================================

    let html = `

        <h2>Live Market Prices - ${state}</h2>

        <div style="overflow-x:auto;">

        <table
            style="
                width:100%;
                border-collapse:collapse;
                margin-top:15px;
            "
        >

            <tr
                style="
                    background:#2e7d32;
                    color:white;
                "
            >

                <th style="padding:10px;">
                    Commodity
                </th>

                <th style="padding:10px;">
                    Market
                </th>

                <th style="padding:10px;">
                    State
                </th>

                <th style="padding:10px;">
                    Min Price
                </th>

                <th style="padding:10px;">
                    Max Price
                </th>

                <th style="padding:10px;">
                    Modal Price
                </th>

            </tr>
    `;


    // ==========================================
    // ADD RECORDS
    // ==========================================

    records.forEach(item => {

        html += `

            <tr>

                <td style="padding:8px;border:1px solid #ddd;">
                    ${item.commodity || "N/A"}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ${item.market || "N/A"}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ${item.state || state}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ₹${item.min_price || "N/A"}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ₹${item.max_price || "N/A"}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ₹${item.modal_price || "N/A"}
                </td>

            </tr>

        `;
    });


    html += `

        </table>

        </div>

        <p
            style="
                margin-top:10px;
                font-size:13px;
                color:#666;
            "
        >
            Source: Government of India -
            Data.gov.in / Agmarknet
        </p>

    `;


    results.innerHTML = html;
}


// ==========================================
// OPTIONAL COMMODITY SEARCH
// ==========================================

async function loadLiveMarketByCommodity() {

    const stateElement = document.getElementById("state");
    const searchElement = document.getElementById("searchCrop");
    const results = document.getElementById("market-results");

    if (!stateElement || !results) {
        return;
    }

    const state = stateElement.value;

    const commodity =
        searchElement
            ? searchElement.value.trim()
            : "";


    if (!state) {

        alert("Please select a state first.");

        return;
    }


    results.innerHTML = `
        <h3>Loading live market prices...</h3>
    `;


    const records =
        await fetchLiveMarketPrices(
            state,
            commodity
        );


    if (!records.length) {

        results.innerHTML = `
            <h3>No live market data found.</h3>
            <p>
                Try another commodity or state.
            </p>
        `;

        return;
    }


    let html = `

        <h2>
            ${commodity
                ? commodity + " - "
                : ""
            }Live Market Prices
        </h2>

        <div style="overflow-x:auto;">

        <table
            style="
                width:100%;
                border-collapse:collapse;
            "
        >

            <tr
                style="
                    background:#2e7d32;
                    color:white;
                "
            >

                <th style="padding:10px;">
                    Commodity
                </th>

                <th style="padding:10px;">
                    Market
                </th>

                <th style="padding:10px;">
                    State
                </th>

                <th style="padding:10px;">
                    Min Price
                </th>

                <th style="padding:10px;">
                    Max Price
                </th>

                <th style="padding:10px;">
                    Modal Price
                </th>

            </tr>
    `;


    records.forEach(item => {

        html += `

            <tr>

                <td style="padding:8px;border:1px solid #ddd;">
                    ${item.commodity || "N/A"}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ${item.market || "N/A"}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ${item.state || state}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ₹${item.min_price || "N/A"}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ₹${item.max_price || "N/A"}
                </td>

                <td style="padding:8px;border:1px solid #ddd;">
                    ₹${item.modal_price || "N/A"}
                </td>

            </tr>

        `;
    });


    html += `

        </table>

        </div>
    `;


    results.innerHTML = html;
}


// ==========================================
// END OF LIVE MARKET API
// ==========================================
