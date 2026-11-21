
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const duration = 1500;
            const startTime = performance.now();

            function updateCounter(currentTime) {

                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                const value = Math.floor(progress * target);

                counter.textContent = value;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(updateCounter);

            observer.unobserve(counter);
        }

    });

}, {
    threshold: 0.5
});

counters.forEach(function(counter) {
    observer.observe(counter);
});

function checkProject() {

    // Get checkbox values
    let budget = document.getElementById("budget").checked;
    let design = document.getElementById("design").checked;
    let materials = document.getElementById("materials").checked;
    let team = document.getElementById("team").checked;
    let approval = document.getElementById("approval").checked;

    let result = document.getElementById("result");

    // AND Operator
    if (budget && design && materials && team && approval) {

        result.innerHTML =
            "READY TO START!<br>All project requirements are completed.";

        result.className = "result success";

    }

    // OR Operator
    else if (!budget || !design || !team || !approval) {

        result.innerHTML =
            "NOT READY!<br>Important project requirements are missing.";

        result.className = "result error";

    }

    // Remaining Condition
    else {

        result.innerHTML =
            "NEEDS REVIEW!<br>Construction materials are not confirmed.";

        result.className = "result warning";

    }

}
