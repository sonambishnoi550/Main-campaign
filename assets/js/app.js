// -----------nav tab ---------------
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

const removeActiveClasses = () => {
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
};

const setActiveTab = (tab) => {
    const targetId = tab.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    tab.classList.add('active');
    targetContent.classList.add('active');
};
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        removeActiveClasses();
        setActiveTab(tab);
    });
});
// --------slider one
$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// --------------second slider----------
$('.slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// backto-top-button
const mybutton = document.querySelector(".top-btn");
const show = document.querySelector(".active")

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        mybutton.classList.add("active")
    }
    else {
        mybutton.classList.remove("active")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});