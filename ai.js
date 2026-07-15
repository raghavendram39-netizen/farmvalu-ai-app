// ====================================
// FarmValu AI Assistant - Part 1
// Chat System
// ====================================

const chatBox = document.querySelector(".bot-message");

function sendQuestion() {

    const input = document.getElementById("question");

    const message = input.value.trim().toLowerCase();

    if (message === "") {

        chatBox.innerHTML = "🤖 Please enter your question.";

        return;

    }

    let answer = "";

    // Greetings

    if (message.includes("hi") || message.includes("hello")) {

        answer = "👋 Hello Farmer! Welcome to FarmValu AI.";

    }

    // Market

    else if (message.includes("market")) {

        answer = "💰 Open the Market page to view today's crop prices.";

    }

    // Weather

    else if (message.includes("weather")) {

        answer = "🌦 Today's weather is suitable for irrigation.";

    }

    // Tomato

    else if (message.includes("tomato")) {

        answer = "🍅 Tomato prices are expected to remain stable today.";

    }

    // Onion

    else if (message.includes("onion")) {

        answer = "🧅 Onion prices may increase tomorrow.";

    }

    // Rice

    else if (message.includes("rice")) {

        answer = "🌾 Rice prices are stable this week.";

    }

    // Default

    else {

        answer = "🤖 Sorry, I don't know that yet. More AI knowledge will be added soon.";

    }

    chatBox.innerHTML = answer;

    input.value = "";

}

// =============================
// Voice Assistant (Demo)
// =============================

function voiceAssistant(){

alert("🎤 Voice Assistant coming soon.");

}

// =============================
// Language
// =============================

function english(){

chatBox.innerHTML="🇬🇧 Language changed to English.";

}

function kannada(){

chatBox.innerHTML="🇮🇳 ಕನ್ನಡ ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ.";

}
// ====================================
// FarmValu AI Assistant - Part 2
// Fertilizer, Soil, Irrigation,
// Pest & Disease Recommendations
// ====================================

const cropData = {

tomato:{
fertilizer:"NPK 19:19:19, Calcium Nitrate, Organic Compost",
soil:"Well-drained loamy soil",
irrigation:"Water every 2-3 days",
pest:"Fruit Borer, Whitefly",
disease:"Early Blight, Late Blight"
},

onion:{
fertilizer:"DAP, Urea, Potash",
soil:"Sandy loam soil",
irrigation:"Water every 4 days",
pest:"Thrips",
disease:"Purple Blotch"
},

potato:{
fertilizer:"DAP, Potash, Urea",
soil:"Loose fertile soil",
irrigation:"Water every 3 days",
pest:"Aphids",
disease:"Late Blight"
},

rice:{
fertilizer:"Urea, DAP, Zinc Sulphate",
soil:"Clay soil",
irrigation:"Keep field flooded",
pest:"Stem Borer",
disease:"Blast Disease"
},

wheat:{
fertilizer:"Urea, DAP",
soil:"Loamy soil",
irrigation:"Every 7 days",
pest:"Armyworm",
disease:"Rust"
},

maize:{
fertilizer:"NPK 20:20:20",
soil:"Well-drained soil",
irrigation:"Every 5 days",
pest:"Fall Armyworm",
disease:"Leaf Blight"
},

banana:{
fertilizer:"Urea, Potash",
soil:"Rich loamy soil",
irrigation:"Daily in summer",
pest:"Banana Weevil",
disease:"Panama Wilt"
},

mango:{
fertilizer:"Organic Compost, NPK",
soil:"Deep loamy soil",
irrigation:"Weekly",
pest:"Fruit Fly",
disease:"Powdery Mildew"
},

cotton:{
fertilizer:"Urea, DAP",
soil:"Black soil",
irrigation:"Every 5 days",
pest:"Pink Bollworm",
disease:"Leaf Curl"
},

sugarcane:{
fertilizer:"Urea, DAP, Potash",
soil:"Fertile loamy soil",
irrigation:"Every 7 days",
pest:"Early Shoot Borer",
disease:"Red Rot"
}

};

// ================================
// Crop Recommendation Function
// ================================

function cropRecommendation(){

let crop=prompt("Enter Crop Name");

if(crop===null)return;

crop=crop.toLowerCase();

if(cropData[crop]){

let c=cropData[crop];

chatBox.innerHTML=

"🌱 <b>"+crop.toUpperCase()+"</b><br><br>"+

"🧪 <b>Fertilizer</b><br>"+c.fertilizer+"<br><br>"+

"🌾 <b>Soil</b><br>"+c.soil+"<br><br>"+

"💧 <b>Irrigation</b><br>"+c.irrigation+"<br><br>"+

"🐛 <b>Pests</b><br>"+c.pest+"<br><br>"+

"🍃 <b>Diseases</b><br>"+c.disease;

}

else{

chatBox.innerHTML="❌ Crop not found.<br>More crops will be added soon.";

}

}

// Quick Functions

function fertilizerGuide(){
cropRecommendation();
}

function soilGuide(){
cropRecommendation();
}

function irrigationGuide(){
cropRecommendation();
}

function pestGuide(){
cropRecommendation();
}

function diseaseGuide(){
cropRecommendation();
}
// ====================================
// FarmValu AI Assistant - Part 3
// Market, Weather, Profit & Schemes
// ====================================

// Market Prices (Demo)

const marketPrices = {

tomato:28,
onion:35,
potato:24,
rice:42,
wheat:31,
maize:26,
banana:48,
mango:75,
cotton:82,
sugarcane:4

};

// ===============================
// Market Price
// ===============================

function checkMarketPrice(){

let crop = prompt("Enter Crop Name");

if(crop==null)return;

crop=crop.toLowerCase();

if(marketPrices[crop]){

chatBox.innerHTML=
"💰 <b>"+crop.toUpperCase()+"</b><br><br>"+
"Today's Market Price<br><br>"+
"₹"+marketPrices[crop]+" per Kg";

}else{

chatBox.innerHTML="❌ Market price not available.";

}

}

// ===============================
// AI Price Prediction
// ===============================

function predictPrice(){

let crop=prompt("Enter Crop Name");

if(crop==null)return;

crop=crop.toLowerCase();

if(marketPrices[crop]){

let today=marketPrices[crop];

let tomorrow=(today+Math.floor(Math.random()*6)+1);

chatBox.innerHTML=

"📈 <b>"+crop.toUpperCase()+" Price Prediction</b><br><br>"+

"Today's Price : ₹"+today+"/Kg<br>"+

"Tomorrow : ₹"+tomorrow+"/Kg<br><br>"+

"AI Prediction : Likely to Increase 📈";

}else{

chatBox.innerHTML="Prediction unavailable.";

}

}

// ===============================
// Weather Advice
// ===============================

function weatherAdvice(){

chatBox.innerHTML=

"🌦 Today's Weather Advice<br><br>"+

"✅ Temperature : 29°C<br>"+

"✅ Humidity : 72%<br>"+

"✅ Rain Chance : 20%<br><br>"+

"Best time for irrigation is evening.";

}

// ===============================
// Profit Calculator
// ===============================

function profitCalculator(){

let income=prompt("Enter Total Selling Amount");

if(income==null)return;

let expense=prompt("Enter Total Expenses");

if(expense==null)return;

let profit=Number(income)-Number(expense);

chatBox.innerHTML=

"💰 Profit Report<br><br>"+

"Income : ₹"+income+"<br>"+

"Expense : ₹"+expense+"<br><br>"+

"<b>Net Profit : ₹"+profit+"</b>";

}

// ===============================
// Government Schemes
// ===============================

function governmentSchemes(){

chatBox.innerHTML=

"🏛 Government Schemes<br><br>"+

"✅ PM-KISAN<br>"+

"✅ PM Fasal Bima Yojana<br>"+

"✅ Soil Health Card<br>"+

"✅ Kisan Credit Card<br>"+

"✅ e-NAM Market";

}

// ===============================
// Market Analysis
// ===============================

function marketAnalysis(){

chatBox.innerHTML=

"📊 Market Analysis<br><br>"+

"📈 Tomato : High Demand<br>"+

"📉 Onion : Stable<br>"+

"📈 Mango : Good Profit<br>"+

"📈 Banana : Strong Demand<br>"+

"🌾 Rice : Stable Market";

}
// ====================================
// FarmValu AI Assistant - Part 4
// Voice, Language & Premium Features
// ====================================

// Voice Recognition
function voiceAssistant() {

    if (!('webkitSpeechRecognition' in window)) {

        alert("Voice recognition is not supported on this device.");

        return;
    }

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-IN";

    recognition.start();

    recognition.onresult = function(event) {

        const speech = event.results[0][0].transcript;

        document.getElementById("question").value = speech;

        sendQuestion();

    };

}

// ================================
// Language Switching
// ================================

let currentLanguage = "en";

function english() {

    currentLanguage = "en";

    document.querySelector(".bot-message").innerHTML =
    "🇬🇧 English language selected.";

}

function kannada() {

    currentLanguage = "kn";

    document.querySelector(".bot-message").innerHTML =
    "🇮🇳 ಕನ್ನಡ ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ.";

}

// ================================
// Notifications
// ================================

function showNotification(message){

    alert("🔔 " + message);

}

// ================================
// Favourite Crops
// ================================

let favouriteCrops=[];

function addFavourite(){

    let crop=prompt("Enter Crop Name");

    if(crop==null || crop=="") return;

    favouriteCrops.push(crop);

    showNotification(crop+" added to favourites.");

}

function viewFavourite(){

    if(favouriteCrops.length==0){

        chatBox.innerHTML="❤️ No favourite crops.";

        return;

    }

    chatBox.innerHTML="❤️ Favourite Crops<br><br>"+favouriteCrops.join("<br>");

}

// ================================
// Crop Calendar
// ================================

function cropCalendar(){

chatBox.innerHTML=

"📅 Crop Calendar<br><br>"+

"🌾 June–July : Rice<br>"+

"🌽 June–July : Maize<br>"+

"🥔 October : Potato<br>"+

"🍅 Year Round : Tomato<br>"+

"🥭 March–June : Mango";

}

// ================================
// About App
// ================================

function aboutApp(){

chatBox.innerHTML=

"🌾 <b>FarmValu AI</b><br><br>"+

"Version : 1.0<br>"+

"Developer : Raghavendra<br>"+

"AI Farming Assistant<br>"+

"Market Prices<br>"+

"Weather Forecast<br>"+

"Government Schemes<br>"+

"AI Price Prediction";

}

// ================================
// Welcome Message
// ================================

window.onload=function(){

chatBox.innerHTML=

"🤖 Welcome to FarmValu AI!<br><br>"+

"Ask me about crops, fertilizers, weather, diseases, market prices or government schemes.";

};
