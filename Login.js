// =======================================
// FarmValu AI - Login
// =======================================

// Check if already logged in
window.onload = function () {

    if (localStorage.getItem("loggedIn") === "true") {
        console.log("User already logged in");
    }

};

// =============================
// Login Function
// =============================

function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {

        alert("⚠ Please enter both username and password.");

        return;

    }

    // Demo Login
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

    alert("✅ Login Successful!\n\nWelcome " + username + "!");

    window.location.href = "index.html";

}

// =============================
// Logout Function
// =============================

function logout() {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    alert("👋 Logged out successfully.");

    window.location.href = "login.html";

}

// =============================
// Check Login Status
// =============================

function checkLogin() {

    if (localStorage.getItem("loggedIn") !== "true") {

        alert("Please login first.");

        window.location.href = "login.html";

    }

}

// =============================
// Welcome Message
// =============================

setTimeout(function () {

    let user = localStorage.getItem("username");

    if (user) {

        console.log("Welcome " + user);

    }

}, 1000);
