var consoleType = location.href.split("/").slice(-1).toString().replace(".html", "").split("?")[0];
var urlParams = new URLSearchParams(window.location.search);
var page = urlParams.get("page");
if (!page) {
    page = 1;
}

let pageNum = document.getElementsByClassName("page-text")[0];
pageNum.innerHTML = 'Page: ' + page;

function loadGames() {
  // Load the JSON data from the file
  console.log("json/" + consoleType + ".json");
  fetch("json/" + consoleType + ".json")
    .then(response => response.json())
    .then(data => {
      const gamesPerPage = 50;
      const startIndex = (page - 1) * gamesPerPage;
      const endIndex = startIndex + gamesPerPage;
      const games = data.slice(startIndex, endIndex);
      console.log(data);

      // Create a new rom-add element for each game
      games.forEach(game => {
        console.log(game);
        const romAdd = document.createElement("rom-add");
        romAdd.setAttribute("console", game.console);
        romAdd.setAttribute("game", game.game);
        document.body.appendChild(romAdd);
      });
    })
    .catch(error => {
      console.error("Error loading JSON data:", error);
    });
}

loadGames();