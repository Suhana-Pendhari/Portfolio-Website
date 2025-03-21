document.addEventListener("DOMContentLoaded", function () {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const projectsCarousel = document.querySelector(".projects-carousel");

    let isPaused = false;
    let scrollPosition = 0;
    let lastTimestamp = 0;
    const scrollSpeed = 0.3; // Adjust speed if needed

    function animateScroll(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        let deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        if (!isPaused) {
            scrollPosition -= scrollSpeed * deltaTime;
            if (Math.abs(scrollPosition) >= carouselWrapper.scrollWidth / 2) {
                scrollPosition = 0; // Reset for infinite loop effect
            }
            carouselWrapper.style.transform = `translateX(${scrollPosition}px)`;
        }
        requestAnimationFrame(animateScroll);
    }

    projectsCarousel.addEventListener("mouseenter", function () {
        isPaused = true;
    });

    projectsCarousel.addEventListener("mouseleave", function () {
        isPaused = false;
    });

    requestAnimationFrame(animateScroll);
});

// Home page Animation
var typed = new Typed('#element', {
    strings: ['Engineer.', 'Web Developer.', 'Problem Solver.', 'DSA Enthusiast.', 'JAVA Developer', 'C++ Developer'],
    typeSpeed: 50,
});

// Contact Page details database using Excel sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzJL6S3hRgka3h6fccBLi3jZHIzel6gGafdvBnVYiewFQfzyTDgUuNGIfQimninTkWj/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    msg.innerHTML = "Sending..."; // Show loading state

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (!response.ok) throw new Error('Network response error');
            msg.innerHTML = "Message sent successfully!";
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error);
            msg.innerHTML = "Failed to send message. Please try again.";
        })
        .finally(() => {
            setTimeout(() => msg.innerHTML = "", 5000);
        });
});

// Menu bar
// ========== Mobile Menu Script ========== 
document.addEventListener('DOMContentLoaded', function () {
    // Create mobile menu elements
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.createElement('div');
    const overlay = document.createElement('div');

    // Create menu structure
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="menu-close"><i class="fas fa-times"></i></div>
        <ul>
            ${document.querySelector('.right ul').innerHTML}
        </ul>
    `;

    // Create overlay
    overlay.className = 'overlay';

    // Add to DOM
    document.body.appendChild(mobileMenu);
    document.body.appendChild(overlay);

    // Toggle logic
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.style.display = 'block';
    });

    document.querySelector('.menu-close').addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.style.display = 'none';
    });
});