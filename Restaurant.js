// Nav Bar Scroll Height
const welcomeNavButton = document.getElementById('button-landing-page_div');
const welcomeSec = document.getElementById('landing-page_div');

welcomeNavButton.addEventListener('click', () => {
    let welcomeSecPosition = welcomeSec.getBoundingClientRect().top;
    const scrollToWelcomeSec = window.scrollY + welcomeSecPosition - 75;
    window.scrollTo({
        top: scrollToWelcomeSec,
        behavior: 'smooth'
    });
})

const infoNavButton = document.getElementById('button-info_div');
const infoSec = document.getElementById('info_div');

function scrollToInfoWithOffset() {
    let infoSecPosition = infoSec.getBoundingClientRect().top;
    const scrollToInfoSec = window.scrollY + infoSecPosition - 75;
    window.scrollTo({
        top: scrollToInfoSec,
        behavior: 'smooth'
    });
};
infoNavButton.onclick = scrollToInfoWithOffset;

const menuNavButton = document.getElementById('button-menu_div');
const menuSec = document.getElementById('menu_div');

function scrollToMenuWithOffset() {
    let menuSecPosition = menuSec.getBoundingClientRect().top;
    const scrollToMenuSec = window.scrollY + menuSecPosition - 75;
    window.scrollTo({
        top: scrollToMenuSec,
        behavior: 'smooth'
    });
};
menuNavButton.onclick = scrollToMenuWithOffset;

const storyNavButton = document.getElementById('button-story_div');
const storySec = document.getElementById('story_div');

storyNavButton.addEventListener('click', () => {
    let storySecPosition = storySec.getBoundingClientRect().top;
    const scrollToStorySec = window.scrollY + storySecPosition - 75;
    window.scrollTo({
        top: scrollToStorySec,
        behavior: 'smooth'
    });
})

const pictureNavButton = document.getElementById('button-picdiv');
const pictureSec = document.getElementById('picdiv');

pictureNavButton.addEventListener('click', () => {
    let pictureSecPosition = pictureSec.getBoundingClientRect().top;
    const scrollToPictureSec = window.scrollY + pictureSecPosition - 75;
    window.scrollTo({
        top: scrollToPictureSec,
        behavior: 'smooth'
    });
})

// Nav Bar Shrink after Scroll

const navBar = document.getElementsByTagName('nav')[0];
const logo = document.getElementById('logo-img');
const navBarText = document.getElementsByClassName('top-li');

window.addEventListener('scroll', () => {
    logo.style.height = '75px';
    logo.style.width = '75px';
    Array.from(navBarText).forEach(text => {
       text.style.paddingTop = '30px';
    })
    if (window.scrollY === 0) {
        logo.style.height = '115px';
        logo.style.width = '115px';
        Array.from(navBarText).forEach(text => {
            text.style.paddingTop = '70px';
         })
    }
})

// Declaring Variables

const track = document.getElementById('carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('carousel-button-right');
const prevButton = document.getElementById('carousel-button-left');

// Getting Slide Width

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
console.log(slideWidth);

// Setting the slides

slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';
slides[3].style.left = slideWidth * 3 + 'px';
slides[4].style.left = slideWidth * 4 + 'px';


// Auto Scroll 

function startAutoScroll() {
    autoScrollInterval = setInterval(moveToNextSlide, 4000);
};

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

startAutoScroll();

//Button Function

function moveToNextSlide() {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;

    if (!nextSlide) {
        nextSlide = slides[0];
    }

    let amountToMove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
    resetAutoScroll();
}

nextButton.onclick = moveToNextSlide;
nextButton.ontouchstart  = moveToNextSlide;

function moveToPrevSlide() {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;

    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
    }

    let amountToMove = prevSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
    resetAutoScroll();
}

prevButton.onclick = moveToPrevSlide;
prevButton.ontouchstart  = moveToPrevSlide;


// Menu Buttons

const lunchMenuButton = document.getElementById('menu_lunch-button');
const lunchMenu = document.getElementById('menu_lunch');
const dinnerMenuButton = document.getElementById('menu_dinner-button');
const dinnerMenu = document.getElementById('menu_dinner');
const drinksMenuButton = document.getElementById('menu_drinks-button');
const drinksMenu = document.getElementById('menu_drinks');

function showLunchMenu() {
    lunchMenu.style.display = 'block';
    dinnerMenu.style.display = 'none';
    drinksMenu.style.display = 'none';
};

lunchMenuButton.onclick = showLunchMenu;
lunchMenuButton.ontouchstart = showLunchMenu;

function showDinnerMenu() {
    dinnerMenu.style.display = 'block';
    lunchMenu.style.display = 'none';
    drinksMenu.style.display = 'none';
};

dinnerMenuButton.onclick = showDinnerMenu;
dinnerMenuButton.ontouchstart = showDinnerMenu;

function showDrinksMenu() {
    drinksMenu.style.display = 'block';
    lunchMenu.style.display = 'none';
    dinnerMenu.style.display = 'none';
};

drinksMenuButton.onclick = showDrinksMenu;
drinksMenuButton.ontouchstart = showDrinksMenu;

//Picture Hover

const pictures = document.querySelectorAll('.picture');
const pictureGrid = document.getElementsByClassName('pic_grid')[0];

pictures.forEach(picture => {
    picture.addEventListener('mouseover', () => {
        picture.style.transform = 'scale(1.03, 1.03)';
        picture.style.border = '3px solid #500d06';
    })

    picture.addEventListener('mouseout', () => {
        picture.style.transform = 'scale(1, 1)';
        picture.style.border = '2px solid #500d06';
    })
})