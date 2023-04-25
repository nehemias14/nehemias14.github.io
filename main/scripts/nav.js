const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
document.documentElement.setAttribute('data-theme', currentTheme);
/* 
    This script is used for the navigation buttons, and their functions
    This script is located on every page that the navigation bar is on
*/

const home = document.getElementById("homeBtn");
const back = document.getElementById("backBtn");
const options = document.getElementById("options");

function findHome() {
  let currentPageUrl = window.location.pathname;
  let pathArray = currentPageUrl.split("/");
  let relativePath = "";
  for (let i = 1; i < pathArray.length - 2; i++) {
    relativePath += "../";
  }
  console.log(relativePath)
  return relativePath;
}

var homeLink = findHome();
var optionsLink = home + "/main/options";

home.addEventListener("click", function () {
  window.location = homeLink;
});

back.addEventListener("click", function () {
  history.back();
});

options.addEventListener("click", function () {
  window.location = optionsLink;
});

/* Theme handling */

function themeValue(toggleState) {
  if (toggleState == 1) {
      document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'dark');
  }
  if (toggleState == 2) {
      document.documentElement.setAttribute('data-theme', 'sunset');
    
    localStorage.setItem('theme', 'sunset');
  }
  if (toggleState == 3) {
      document.documentElement.setAttribute('data-theme', 'pink');
    
    localStorage.setItem('theme', 'pink');
  }
}
