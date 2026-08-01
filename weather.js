const apiKey =
"ea240ac2886fec9b8ecede46af73a527";

function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather, showError);
    } else {
        alert("Geolocation is not supported.");
    }
}

function showWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        apiKey +
        "&units=metric";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            document.getElementById("city").innerHTML = data.name;
            document.getElementById("temp").innerHTML = data.main.temp + "°C";
            document.getElementById("condition").innerHTML = data.weather[0].description;
            document.getElementById("humidity").innerHTML = data.main.humidity + "%";
            document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
            document.getElementById("feels").innerHTML = data.main.feels_like + "°C";

            let advice = "";

            if (data.main.temp > 35) {
                advice = "🌞 Very hot. Irrigate crops early morning or evening.";
            } else if (data.weather[0].main === "Rain") {
                advice = "🌧 Rain expected. Avoid spraying pesticides.";
            } else if (data.main.humidity > 80) {
                advice = "🌿 High humidity. Watch for fungal diseases.";
            } else {
                advice = "✅ Weather looks good for normal farming activities.";
            }

            document.getElementById("advice").innerHTML = advice;
        })
        .catch(error => {
            console.log(error);
            alert("Unable to load weather.");
        });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Location permission denied.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location unavailable.");
            break;
        case error.TIMEOUT:
            alert("Location request timed out.");
            break;
        default:
            alert("An unknown error occurred.");
    }
}

window.onload = getWeather;
