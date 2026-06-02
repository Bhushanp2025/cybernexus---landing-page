document.addEventListener("DOMContentLoaded", function () {

    console.log("CyberNexus Loaded Successfully!");

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px)";
            this.style.boxShadow = "0 0 25px #00e5ff";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "none";
        });

    });

});