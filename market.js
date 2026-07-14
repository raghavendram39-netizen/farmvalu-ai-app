// ==========================
// FarmValu AI - Market Page
// ==========================

// Search Crops
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {
        let value = search.value.toLowerCase();
        let cards = document.querySelectorAll(".crop-card");

        cards.forEach(card => {
            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Category Buttons
const buttons = document.querySelectorAll(".category-btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        let category = this.dataset.category;

        let cards = document.querySelectorAll(".crop-card");

        cards.forEach(card => {

            if (category === "all") {

                card.style.display = "flex";

            } else {

                if (card.dataset.category === category) {

                    card.style.display = "flex";

                } else {

                    card.style.display = "none";

                }

            }

        });

    });

});

// Crop Click
const crops = document.querySelectorAll(".crop-card");

crops.forEach(crop => {

    crop.addEventListener("click", function () {

        let cropName = this.querySelector("h3").innerText;

        alert(
            "📈 " +
            cropName +
            "\n\nToday's Price : ₹25 - ₹40/kg\n\nAI Prediction : Price may increase tomorrow."
        );

    });

});

// Banner Advertisement
setTimeout(function () {

    let ad = document.getElementById("marketAd");

    if (ad) {

        ad.style.display = "block";

        setTimeout(function () {

            ad.style.display = "none";

        }, 15000);

    }

}, 5000);
