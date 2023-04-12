/* 
    This script is used for the navigation buttons, and their functions
    This script is located on every page that the navigation bar is on
*/

const home = document.getElementById("homeBtn");
const back = document.getElementById("backBtn");
const options = document.getElementById("options");

var homeLink = "/";
var optionsLink = "/options";

home.addEventListener("click", function() {
    window.location = homeLink;
});

back.addEventListener("click", function() {
    history.back();
});

options.addEventListener("click", function() {
    window.location = optionsLink;
});