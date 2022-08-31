function portfolioSlider() {
    var swiper = new Swiper('.portfolio .swiper-container', {
        slidesPerView: 2.2,
        spaceBetween: 10,
        breakpoints: {
            320: {
                slidesPerView: 1.3,
            },
            450: {
                slidesPerView: 1.8,
            },
            500: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 2.2,
            },
        }
    })
}


let portfolioSlidersArray = []

function projectsSliders() {
    $(".projects__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        portfolioSlidersArray[index] = new Swiper(`.projects__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 10,
        })
    })
}

let trustSlidersArray = []

function trustSliders() {
    $(".trust__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        trustSlidersArray[index] = new Swiper(`.trust__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 10,
        })
    })
}


$(document).ready(function() {
    // $('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });


    if (window.innerWidth < 768) {
        portfolioSlider()
    }
    if (window.innerWidth < 1200) {
        projectsSliders()
        trustSliders()
    }

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__right").toggleClass("header__right--active")
    })


    // $('.video').parent().click(function() {
    //     if ($(this).children(".video").get(0).paused) {
    //         $(this).children(".video").get(0).play();
    //         $(this).children(".playpause").fadeOut();
    //     } else {
    //         $(this).children(".video").get(0).pause();
    //         $(this).children(".playpause").fadeIn();
    //     }
    // });
});
