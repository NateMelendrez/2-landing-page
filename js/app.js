/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById("navbar__list");
const containerCount = document.getElementsByClassName("landing__container").length;

/**
 * End Global Variables
 * Begin Events
*/

// Build the navigation menu

for (let i = 0; i < containerCount; i++) {
    const targetSection = document.querySelectorAll("section")[i];
    const listName = targetSection.dataset.nav;
    const newLi = document.createElement("li");
    const listText = document.createTextNode(listName);
    const listItem = "top-nav-" + i;
    newLi.setAttribute("id", listItem); //set new #id
    newLi.setAttribute("class", "menu__link"); //set new .class
    newLi.appendChild(listText); //add ID to new li 
    navbarList.appendChild(newLi); //add Class to new li
// Scroll to section on link click
    const clickNav = document.getElementById(listItem); //get #id from each navbar list
    clickNav.addEventListener( 'click', () => {
        targetSection.scrollIntoView ({ //scroll to target(each section) smoothly 
            behavior: 'smooth',
            block: 'start'
        })
    })
}

 // Add class 'active' to section when near top of viewport

 window.addEventListener('scroll', activeClassStyle);

function activeClassStyle () {
    const getAllSection = document.querySelectorAll('section');
    for (i = 0; i < getAllSection.length; i++) {
        if(isInViewport(getAllSection[i])) {
            getAllSection[i].classList.add('your-active-class')
        } else {
            getAllSection[i].classList.remove('your-active-class')
        }

    }
}
 
 // get position in viewport per feedback review https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
 var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// // Nav bar will tell which section is being viewed

const navs = document.querySelectorAll('li');
navs.forEach(nav => {
    nav.addEventListener('click', function () {
        navs.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});