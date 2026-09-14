// =========================
// SRIHARI KARATE
// WEBSITE JAVASCRIPT
// =========================


// Welcome message
window.addEventListener("load", function () {

    console.log("🥋 Welcome to Srihari Karate!");

});


// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});
