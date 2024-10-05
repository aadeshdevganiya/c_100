// JavaScript to add 'sticky' class on scroll
window.onscroll = function () {
    stickyHeader();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

$(document).ready(function () {
    // Initialize the Slick slider
    $('.members-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        speed: 600,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            }
        ]
    });

    // Custom click event for sliding on click of items
    $('.member-card').on('click', function () {
        var clickedIndex = $(this).data('slick-index');
        var centerIndex = $('.members-slider .slick-center').data('slick-index');

        if (clickedIndex > centerIndex) {
            $('.members-slider').slick('slickNext');
        } else if (clickedIndex < centerIndex) {
            $('.members-slider').slick('slickPrev');
        }
    });
});

// how we do
// Function to animate the number counting
function animateNumber(element, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentNumber = Math.floor(progress * (end - start) + start);

        element.textContent = currentNumber; // Update the number text

        if (progress < 1) {
            requestAnimationFrame(step); // Continue the animation
        } else {
            element.textContent = end; // Ensure it ends at the final number
        }
    };

    requestAnimationFrame(step);
}

// Select elements and start animations
document.addEventListener('DOMContentLoaded', () => {
    const membersElement = document.querySelector('.box-items:nth-child(1) .number');
    const valuationElement = document.querySelector('.box-items:nth-child(2) .number');
    const aumElement = document.querySelector('.box-items:nth-child(3) .number');
    const ventureCapitalElement = document.querySelector('.box-items:nth-child(4) .number');

    animateNumber(membersElement, 0, 500, 2000); // Animate from 0 to 500
    animateNumber(valuationElement, 0, 100, 2000); // Animate from 0 to 100B
    animateNumber(aumElement, 0, 80, 2000); // Animate from 0 to 80B
    animateNumber(ventureCapitalElement, 0, 5, 2000); // Animate from 0 to 5B
});



