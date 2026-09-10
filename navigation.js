/* =========================================
   UNIVERSAL NAVIGATION SYSTEM
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       NAVIGATION LINKS
       ----------------------------------------- */

    const navigationLinks = [
        {
            name: "About Me",
            url: "index.html"
        },
        {
            name: "Experience",
            url: "experience.html"
        },
        {
            name: "Projects",
            url: "projects.html"
        },
        {
            name: "Contact",
            url: "contact.html"
        }
    ];


    /* -----------------------------------------
       DETERMINE CURRENT PAGE
       ----------------------------------------- */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    /* -----------------------------------------
       CREATE TOP NAVIGATION
       ----------------------------------------- */

    const topNavigation =
        document.querySelector("#top-navigation");

    if (topNavigation) {

        const navList = document.createElement("ul");

        navigationLinks.forEach(function (link) {

            const listItem = document.createElement("li");

            const anchor = document.createElement("a");

            anchor.href = link.url;
            anchor.textContent = link.name;

            /* Highlight current page */

            if (currentPage === link.url) {
                anchor.classList.add("active");
            }

            listItem.appendChild(anchor);
            navList.appendChild(listItem);
        });

        topNavigation.appendChild(navList);
    }


    /* -----------------------------------------
       CREATE LEFT NAVIGATION
       ----------------------------------------- */

    const leftNavigation =
        document.querySelector("#left-navigation");

    if (leftNavigation) {

        const heading = document.createElement("h2");

        heading.textContent = "Navigation";

        leftNavigation.appendChild(heading);


        const navList = document.createElement("ul");


        navigationLinks.forEach(function (link) {

            const listItem = document.createElement("li");

            const anchor = document.createElement("a");

            anchor.href = link.url;
            anchor.textContent = link.name;

            /* Highlight current page */

            if (currentPage === link.url) {
                anchor.classList.add("active");
            }

            listItem.appendChild(anchor);
            navList.appendChild(listItem);
        });


        leftNavigation.appendChild(navList);
    }


    /* -----------------------------------------
       CREATE FOOTER LINKS
       ----------------------------------------- */

    const footerLinks =
        document.querySelector("#footer-links");

    if (footerLinks) {

        navigationLinks.forEach(function (link) {

            const listItem = document.createElement("li");

            const anchor = document.createElement("a");

            anchor.href = link.url;
            anchor.textContent = link.name;

            listItem.appendChild(anchor);

            footerLinks.appendChild(listItem);
        });
    }


    /* -----------------------------------------
       UPDATE COPYRIGHT YEAR
       ----------------------------------------- */

    const yearElement =
        document.querySelector("#copyright-year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

});
