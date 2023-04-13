let searchBar = document.getElementById("console-search");
let goSearch = document.getElementById("goSearch");

goSearch.addEventListener("click", function() {
    let home = findHome();
    var fileName = location.href.split("/").slice(-1).toString().replace(".html", "").split("?")[0];
    window.location = home + "search/index.html?console=" + fileName + "&s=" + searchBar.value;
});