const API_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=YOUR_API_KEY&format=json&limit=1000";
async function loadLiveMarket() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        displayLiveMarket(data.records);

    } catch (error) {

        console.error("Error loading market data:", error);

    }

}
