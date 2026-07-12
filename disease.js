function detectDisease() {

    const result = document.getElementById("result");

    result.innerHTML = `
        <h3>🦠 Disease Detected: Leaf Blight</h3>
        <p><strong>Confidence:</strong> 96%</p>
        <p><strong>Treatment:</strong> Spray Copper Oxychloride fungicide once every 7 days.</p>
        <p><strong>Recommended Fertilizer:</strong> NPK 19-19-19 + Organic Compost</p>
    `;

}
