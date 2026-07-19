// =======================================
// FarmValu AI - Government Schemes
// =======================================

// Government Schemes Data

const schemes = [

{
title:"PM-KISAN",
description:"Income support of ₹6,000 per year for eligible farmer families."
},

{
title:"PMKSY",
description:"Pradhan Mantri Krishi Sinchayee Yojana helps improve irrigation."
},

{
title:"Soil Health Card",
description:"Provides soil testing reports and fertilizer recommendations."
},

{
title:"Kisan Credit Card",
description:"Offers low-interest agricultural loans to farmers."
},

{
title:"Crop Insurance",
description:"Protects farmers against crop losses due to natural disasters."
},

{
title:"National Agriculture Market (e-NAM)",
description:"Online trading platform connecting agricultural markets."
}

];

// =============================
// Display Schemes
// =============================

function displaySchemes(list){

const container=document.getElementById("schemeContainer");

container.innerHTML="";

list.forEach(function(item){

container.innerHTML+=`

<div class="scheme-card">

<h2>🌾 ${item.title}</h2>

<p>${item.description}</p>

<button onclick="readMore('${item.title}')">

Read More

</button>

</div>

`;

});

}

// =============================
// Search Scheme
// =============================

function searchScheme(){

let search=document.getElementById("searchScheme").value.toLowerCase();

let result=schemes.filter(function(item){

return item.title.toLowerCase().includes(search) ||

item.description.toLowerCase().includes(search);

});

displaySchemes(result);

}

// =============================
// Read More
// =============================

function readMore(name){

let message="";

switch(name){

case "PM-KISAN":

message="PM-KISAN provides ₹6,000 annually in three installments to eligible farmer families.";

break;

case "PMKSY":

message="PMKSY supports efficient irrigation and water conservation.";

break;

case "Soil Health Card":

message="Get your soil tested and receive crop-wise fertilizer recommendations.";

break;

case "Kisan Credit Card":

message="Provides affordable loans for agriculture and allied activities.";

break;

case "Crop Insurance":

message="Helps protect farmers from financial losses due to crop damage.";

break;

case "National Agriculture Market (e-NAM)":

message="Enables transparent online buying and selling of agricultural produce.";

break;

default:

message="More information will be available soon.";

}

alert(message);

}

// =============================
// Favourite Scheme
// =============================

function saveFavouriteScheme(title){

localStorage.setItem("FavouriteScheme",title);

alert("⭐ "+title+" added to favourites.");

}

// =============================
// View Favourite Scheme
// =============================

function viewFavouriteScheme(){

let fav=localStorage.getItem("FavouriteScheme");

if(fav){

alert("⭐ Favourite Scheme: "+fav);

}else{

alert("No favourite scheme selected.");

}

}

// =============================
// Welcome
// =============================

window.onload=function(){

displaySchemes(schemes);

setTimeout(function(){

alert("🏛 Welcome to Government Schemes");

},1000);

};
