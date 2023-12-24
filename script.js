document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach(function (video) {
        video.addEventListener("mouseover", function () {
            video.play();
            video.volume = 0.0;
        });

        video.addEventListener("mouseout", function () {
            video.pause();
            video.volume = 0.0;
        });
    });
});

document.addEventListener('click', (event) => {
    const menuElement = event.target.closest('.menu');
    const menuWrapperElement = document.querySelector('.menu_wrapper');
    const hiddenMenuElement = document.querySelector('.menu_hidden');

    if (menuElement) {
        menuWrapperElement.classList.toggle('show');
        hiddenMenuElement.classList.toggle('show');
    } else if (event.target.classList.contains('menu_hidden')) {
        // Remove 'show' class when clicking on menu_hidden
        menuWrapperElement.classList.remove('show');
        hiddenMenuElement.classList.remove('show');
    }
});


const search  = document.getElementById("search");
const leftDiv = document.querySelector(".header-left");
const rightDiv = document.querySelector(".header-right");
const responDiv = document.querySelector(".responsive_mid");
const midDiv = document.querySelector(".header-middle");
const header = document.querySelector(".header");
const searchInput = document.getElementById("searchInput");
const arrow = document.querySelector('.arrow');

search.addEventListener("click", ()=>{
    leftDiv.classList.add("hide");
    rightDiv.classList.add("hide");
    responDiv.classList.add("hide");
    midDiv.classList.add("flex");
    arrow.classList.add("block");
    header.style.justifyContent = "center";

    searchInput.focus();


    function resetClasses() {
        leftDiv.classList.remove("hide");
        rightDiv.classList.remove("hide");
        responDiv.classList.remove("hide");
        midDiv.classList.remove("flex");
        arrow.classList.remove("block");
        header.style.justifyContent = ""; // Reset justifyContent to its default value if needed
    }

    arrow.addEventListener("click", resetClasses);
});