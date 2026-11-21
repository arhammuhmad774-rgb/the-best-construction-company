document.addEventListener("DOMContentLoaded", function () {

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    const previewImage =
        document.getElementById("previewImage");

    const previewTitle =
        document.getElementById("previewTitle");


    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            // Click ki hui image preview mein show hogi
            previewImage.src = image.src;

            // Click ki hui image ka title preview mein show hoga
            previewTitle.textContent =
                image.parentElement
                .querySelector("h3")
                .textContent;

        });

    });

});