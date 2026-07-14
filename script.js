// Splash Screen - Show for 2 seconds
window.onload = function () {

    const loadingBar = document.getElementById("loading-bar");

    let width = 0;

    const interval = setInterval(function () {
        width += 5;
        if (loadingBar) {
            loadingBar.style.width = width + "%";
        }

        if (width >= 100) {
            clearInterval(interval);

            setTimeout(function () {
                window.location.href = "market.html";
            }, 300);
        }
    }, 100);

};
