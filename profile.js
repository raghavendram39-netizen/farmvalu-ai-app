// =======================================
// FarmValu AI - Profile
// Part 1
// =======================================

// Load Saved Data

window.onload = function () {

    loadProfile();

};

// =============================
// Edit Profile
// =============================

function editProfile() {

    let name = prompt("Enter your Name", localStorage.getItem("name") || "");

    if (name == null) return;

    let mobile = prompt("Enter Mobile Number", localStorage.getItem("mobile") || "");

    if (mobile == null) return;

    let village = prompt("Enter Village", localStorage.getItem("village") || "");

    if (village == null) return;

    let crop = prompt("Enter Main Crop", localStorage.getItem("crop") || "");

    if (crop == null) return;

    let land = prompt("Enter Land Area", localStorage.getItem("land") || "");

    if (land == null) return;

    localStorage.setItem("name", name);

    localStorage.setItem("mobile", mobile);

    localStorage.setItem("village", village);

    localStorage.setItem("crop", crop);

    localStorage.setItem("land", land);

    loadProfile();

    alert("✅ Profile Updated Successfully");

}

// =============================
// Load Profile
// =============================

function loadProfile() {

    document.getElementById("farmerName").innerHTML =
        localStorage.getItem("name") || "Farmer Name";

    document.getElementById("farmerLocation").innerHTML =
        "📍 " + (localStorage.getItem("village") || "Karnataka");

    document.getElementById("name").innerHTML =
        localStorage.getItem("name") || "Farmer Name";

    document.getElementById("mobile").innerHTML =
        localStorage.getItem("mobile") || "9876543210";

    document.getElementById("village").innerHTML =
        localStorage.getItem("village") || "Your Village";

    document.getElementById("crop").innerHTML =
        localStorage.getItem("crop") || "Tomato";

    document.getElementById("land").innerHTML =
        localStorage.getItem("land") || "2 Acres";

}
// =======================================
// FarmValu AI - Profile
// Part 2
// Language, Notifications & Favourite Crops
// =======================================

// Language

let language = "English";

function changeLanguage() {

    if (language === "English") {

        language = "Kannada";

        alert("🇮🇳 Language changed to Kannada");

    } else {

        language = "English";

        alert("🇬🇧 Language changed to English");

    }

    localStorage.setItem("language", language);

}

// =============================
// Notifications
// =============================

let notificationStatus =
localStorage.getItem("notifications") || "ON";

function notifications() {

    if (notificationStatus === "ON") {

        notificationStatus = "OFF";

        alert("🔕 Notifications Disabled");

    } else {

        notificationStatus = "ON";

        alert("🔔 Notifications Enabled");

    }

    localStorage.setItem("notifications", notificationStatus);

}

// =============================
// Favourite Crops
// =============================

let favouriteCrops = JSON.parse(localStorage.getItem("favouriteCrops")) || [];

// Add Favourite Crop

function addFavouriteCrop() {

    let crop = prompt("Enter Crop Name");

    if (crop == null || crop.trim() == "") return;

    favouriteCrops.push(crop);

    localStorage.setItem(
        "favouriteCrops",
        JSON.stringify(favouriteCrops)
    );

    alert("❤️ " + crop + " added to favourites.");

}

// View Favourite Crops

function favorites() {

    if (favouriteCrops.length === 0) {

        alert("No favourite crops added.");

        return;

    }

    alert(
        "❤️ Favourite Crops\n\n" +
        favouriteCrops.join("\n")
    );

}

// Remove Favourite Crop

function removeFavouriteCrop() {

    let crop = prompt("Enter crop name to remove");

    if (crop == null) return;

    favouriteCrops = favouriteCrops.filter(
        item => item.toLowerCase() !== crop.toLowerCase()
    );

    localStorage.setItem(
        "favouriteCrops",
        JSON.stringify(favouriteCrops)
    );

    alert("🗑 Favourite crop removed.");

}

// =============================
// Profile Summary
// =============================

function profileSummary(){

    alert(

        "👤 Farmer : " + (localStorage.getItem("name") || "Farmer") +

        "\n📍 Village : " + (localStorage.getItem("village") || "Unknown") +

        "\n🌾 Crop : " + (localStorage.getItem("crop") || "Not Set") +

        "\n📏 Land : " + (localStorage.getItem("land") || "Not Set")

    );

}
// =======================================
// FarmValu AI - Profile
// Part 3
// Help, About, Logout & Premium Features
// =======================================

// =============================
// Help & Support
// =============================

function support(){

    alert(
        "📞 FarmValu AI Support\n\n" +
        "Email: support@farmvaluai.com\n" +
        "Phone: +91 9876543210\n\n" +
        "Support is available 24×7."
    );

}

// =============================
// About App
// =============================

function about(){

    alert(
        "🌾 FarmValu AI\n\n" +
        "Version: 1.0\n\n" +
        "Features:\n" +
        "• AI Farming Assistant\n" +
        "• Live Market Prices\n" +
        "• Weather Forecast\n" +
        "• Crop Recommendations\n" +
        "• Government Schemes\n" +
        "• Price Prediction\n\n" +
        "Made for Farmers ❤️"
    );

}

// =============================
// Rate App
// =============================

function rateApp(){

    let rating = prompt("Rate FarmValu AI (1-5)");

    if(rating==null) return;

    if(rating>=1 && rating<=5){

        alert("⭐ Thank you for giving " + rating + " star(s)!");

    }else{

        alert("Please enter a rating between 1 and 5.");

    }

}

// =============================
// Reset Profile
// =============================

function resetProfile(){

    let confirmReset = confirm(
        "Delete all saved profile information?"
    );

    if(confirmReset){

        localStorage.clear();

        alert("✅ Profile reset successfully.");

        location.reload();

    }

}

// =============================
// Logout
// =============================

function logout(){

    let confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if(confirmLogout){

        alert("👋 Logged out successfully.");

        window.location.href="index.html";

    }

}

// =============================
// Welcome Notification
// =============================

setTimeout(function(){

    let farmer = localStorage.getItem("name") || "Farmer";

    console.log("Welcome " + farmer);

},1000);
