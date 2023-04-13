// Game List
// Games in sep file
// Parse console query parameter from URL
var urlParams = new URLSearchParams(window.location.search);
var consoleFilter = urlParams.get('console');

// Filter games by console
var filteredGames = games.filter(function (game) {
  return !consoleFilter || game.console === consoleFilter;
});

// Create index and add documents to it
var index = lunr(function () {
  this.ref('name');
  this.field('name', { boost: 10 });
  this.field('console', { boost: 5 });

  // Add fuzzy matching modifiers to name field
  this.field('name', {
    boost: 10,
    usePipeline: true,
    threshold: 0.3,
    tokenizer: lunr.tokenizer,
    term: lunr.tokenizer.term
  });

  filteredGames.forEach(function (game) {
    this.add(game);
  }, this);
});


var searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', handleSearchInput);

function handleSearchInput() {
    var query = searchInput.value.toLowerCase() + '*'; // Convert query to lowercase and add wildcard
    var searchResults = document.querySelector('#search-results');
    
    if (searchInput.value === '') {
        searchResults.innerHTML = '';
        console.log("real")
        return;
      }
    
    // Clear existing search results
    searchResults.innerHTML = '';
  
    // Perform a case-insensitive and partial search on the index
    var results = index.query(function (q) {
      q.term(query, {
        boost: 10,
        wildcard: lunr.Query.wildcard.TRAILING,
        usePipeline: true
      });
      q.term(query, {
        boost: 5,
        wildcard: lunr.Query.wildcard.TRAILING,
        usePipeline: true
      });
    });
  
    // Loop through search results and show
    if (results.length > 0) {
      results.forEach(function (result) {
        var game = filteredGames.find(function (g) { return g.name === result.ref; });
        var li = document.createElement('li');
        if (game) {
          li.textContent = game.name;
        } else {
          li.textContent = "No Games Found";
        }
        li.classList.add('rom-title');
        let consoleType = game.console;
        let providedGame = game.name;
        let newLink = '../play/index.html?console=' + consoleType + '&game=' + providedGame;
        li.onclick = function() {
            window.location.href = newLink;
        }
        searchResults.appendChild(li);
      });
    } else { // Otherwise nothing found
      var li = document.createElement('li');
      li.textContent = 'No results found';
      li.style.textAlign = 'center';
      searchResults.appendChild(li);
    }
  }
  
