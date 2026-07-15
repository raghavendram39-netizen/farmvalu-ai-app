// =======================================
// FarmValu AI - Agriculture News
// =======================================

// Demo News Data
const news = [

{
title:"🌾 Tomato prices expected to increase",
category:"Market",
content:"Tomato prices are expected to rise due to reduced supply."
},

{
title:"🌦 Rain forecast for Karnataka",
category:"Weather",
content:"Light to moderate rainfall is expected over the next two days."
},

{
title:"🏛 PM-KISAN Scheme Update",
category:"Government",
content:"Eligible farmers can check the latest PM-KISAN installment status."
},

{
title:"🌱 New Fertilizer Guidelines",
category:"Agriculture",
content:"Use balanced fertilizers based on soil test recommendations."
},

{
title:"🐛 Pest Alert",
category:"Crop Protection",
content:"Farmers are advised to monitor crops for Fall Armyworm."
}

];

// ============================
// Display News
// ============================

function displayNews(list){

const container=document.getElementById("newsContainer");

container.innerHTML="";

list.forEach(item=>{

container.innerHTML+=`

<div class="news-card">

<h2>${item.title}</h2>

<p>${item.content}</p>

<small><b>Category:</b> ${item.category}</small>

</div>

`;

});

}

// ============================
// Search News
// ============================

function searchNews(){

const search=document
.getElementById("searchNews")
.value
.toLowerCase();

const result=news.filter(item=>

item.title.toLowerCase().includes(search) ||

item.content.toLowerCase().includes(search) ||

item.category.toLowerCase().includes(search)

);

displayNews(result);

}

// ============================
// Auto Load News
// ============================

window.onload=function(){

displayNews(news);

};

// ============================
// Auto Refresh (Demo)
// ============================

setInterval(function(){

console.log("Checking for latest news...");

},60000);

// ============================
// Welcome Message
// ============================

setTimeout(function(){

alert("📰 Welcome to FarmValu AI News!");

},1000);
