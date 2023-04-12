/* 
    This file is used for user configuration/overrides.
    As of now, it's only used for the romLocation variable.
*/


let currentPageUrl = window.location.pathname;
let pathArray = currentPageUrl.split('/');
let relativePath = '';
for (let i = 1; i < pathArray.length - 2; i++) {
  relativePath += '../';
}
relativePath += '../gba-host/';

localStorage.setItem('romLocation', relativePath);