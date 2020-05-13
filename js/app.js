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

