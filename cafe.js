let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

let hanburgerMenu = document.querySelector(".hamburgerMenu");
let menuContainer = document.querySelector(".MenuContainer");

hanburgerMenu && hanburgerMenu.addEventListener("click", (e) => {
    if(menuContainer.classList.contains("active")){
        menuContainer.classList.remove("active");
    } else {
        menuContainer.classList.add("active");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}
window.addEventListener("scroll", () => {
    const scrollButton = document.querySelector(".scroll-to-top");
    if (document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});
