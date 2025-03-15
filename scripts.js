document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".dropdown > a").forEach(dropdown => {
        dropdown.addEventListener("click", (event) => {
            event.preventDefault();
            event.target.nextElementSibling.classList.toggle("show");
        });
    });

    // Adjust navigation bar color
    document.querySelector(".navbar").style.backgroundColor = "white";

    // Ensure bold text appears larger
    document.querySelectorAll("b").forEach(boldText => {
        boldText.style.fontSize = "1.5rem";
    });
});
