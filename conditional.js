function checkProject() {

    // Get user information
    let name = document.getElementById("projectName").value.trim();
    let budget = Number(document.getElementById("budget").value);
    let type = document.getElementById("projectType").value;

    let result = document.getElementById("result");

    // Conditional statements

    if (name === "" || budget <= 0 || type === "") {

        result.className = "rejected";
        result.innerHTML = "⚠️ Please fill all fields correctly.";

    }

    else if (budget >= 5000000 && type === "commercial") {

        result.className = "approved";
        result.innerHTML =
            "✅ Project Status: Priority Review<br>" +
            "Welcome " + name + "!<br>" +
            "Your commercial project qualifies for priority review.";

    }

    else if (budget >= 2000000) {

        result.className = "approved";
        result.innerHTML =
            "✅ Project Status: Eligible for Review<br>" +
            "Welcome " + name + "!<br>" +
            "Your project is eligible for an initial review.";

    }

    else if (budget >= 500000) {

        result.className = "review";
        result.innerHTML =
            "⚠️ Project Status: Budget Review<br>" +
            "Welcome " + name + "!<br>" +
            "Please review your estimated project budget.";

    }

    else {

        result.className = "rejected";
        result.innerHTML =
            "❌ Project Status: Budget Below Demo Limit<br>" +
            "Your entered budget is below this demo system's minimum limit.";

    }

    result.style.display = "block";
}