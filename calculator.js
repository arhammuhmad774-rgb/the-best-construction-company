
function calculateCost() {

    // Get user input
    let area = Number(document.getElementById("area").value);
    let rate = Number(document.getElementById("rate").value);
    let budget = Number(document.getElementById("budget").value);

    let error = document.getElementById("errorMessage");
    let result = document.getElementById("resultBox");

    // Input validation
    if (area <= 0 || rate <= 0 || budget <= 0) {

        error.textContent = "Please enter valid values in all fields.";
        result.style.display = "none";

        return;
    }

    error.textContent = "";

    // Calculate total construction cost
    let totalCost = area * rate;

    // Calculate remaining budget
    let remaining = budget - totalCost;

    // Format Pakistani currency
    function formatMoney(amount) {
        return "Rs. " + amount.toLocaleString("en-PK");
    }

    // Show entered details
    document.getElementById("totalCost").textContent =
        formatMoney(totalCost);

    document.getElementById("showArea").textContent =
        area.toLocaleString("en-PK") + " Sq. Ft.";

    document.getElementById("showRate").textContent =
        formatMoney(rate) + " / Sq. Ft.";

    document.getElementById("showBudget").textContent =
        formatMoney(budget);


    // Check budget status
    if (remaining > 0) {

        document.getElementById("budgetStatus").textContent =
            "Within Budget";

        document.getElementById("remainingAmount").textContent =
            formatMoney(remaining) + " Remaining";

    }

    else if (remaining === 0) {

        document.getElementById("budgetStatus").textContent =
            "Budget Fully Utilized";

        document.getElementById("remainingAmount").textContent =
            "Rs. 0";

    }

    else {

        document.getElementById("budgetStatus").textContent =
            "Over Budget";

        document.getElementById("remainingAmount").textContent =
            formatMoney(Math.abs(remaining)) + " Extra Required";

    }

    // Show result section
    result.style.display = "block";

}


// Reset calculator
function resetCalculator() {

    document.getElementById("area").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("budget").value = "";

    document.getElementById("errorMessage").textContent = "";

    document.getElementById("resultBox").style.display = "none";

}
