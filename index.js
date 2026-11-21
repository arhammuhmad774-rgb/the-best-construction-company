window.onload = function() {
    alert("Welcome to The Best Construction Company!");
};

function greetUser() {

    // Get user's name
    let name = document.getElementById("userName").value.trim();

    // Check empty input
    if (name === "") {
        document.getElementById("message").innerHTML =
            "Please enter your name!";
        return;
    }

    // Get current hour
    let hour = new Date().getHours();

    let greeting;

    // Check time
    if (hour < 12) {
        greeting = "Good Morning";
    }
    else if (hour < 17) {
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Evening";
    }

    // Display greeting
    document.getElementById("message").innerHTML =
        greeting + ", " + name + "! 👋 Welcome to our website.";

}



// Function 1: Show Details
function showDetails() {

    let details = document.getElementById("details");

    if (details.style.display === "block") {
        details.style.display = "none";
    }
    else {
        details.style.display = "block";
    }

}


// Function 2: Change Theme
function changeTheme() {

    document.body.classList.toggle("dark-mode");

}


// Function 3: Show Alert
function showMessage() {

    alert("Welcome to The Best Construction Company!");

}


// Function 4: Hide Content
function hideContent() {

    let company = document.getElementById("company");

    if (company.style.display === "none") {
        company.style.display = "block";
    }
    else {
        company.style.display = "none";
    }

}


