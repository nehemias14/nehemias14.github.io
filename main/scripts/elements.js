class RomList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    // Template/Code
    let console = this.getAttribute("console");
    let textToFilter = this.getAttribute("game");

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "../../../styles/consoles.css");

    this.shadowRoot.appendChild(linkElem);

    const gameTitle = document.createElement("h1");
    gameTitle.classList.add("rom-title");

    gameTitle.onclick = function() {
        window.location.href = sendGameInfo();
    }

    let filteredText = textToFilter.replace(/(\([^\)]*\)|\.[^.]+|_)+$/g, '').replace(/_/g, ' ');
    gameTitle.innerHTML = filteredText;

    this.shadowRoot.appendChild(gameTitle);

    function sendConsoleInfo() {
        let providedConsole = console;
        if (providedConsole == "gba") {
            return "gba";
        } else if (providedConsole == "gb") {
            return "gb";
        } else if (providedConsole == "nds") {
            return "nds";
        } else if (providedConsole == "nes") {
            return "nes";
        } else if (providedConsole == "snes") {
            return "snes";
        } else if (providedConsole == "n64") {
            return "n64";
        } else if (providedConsole == "gbc") {
            return "gbc";
        } else if (providedConsole == "segamd") {
            return "segamd";
        } else {
            return "other";
        }
    }

    function sendGameInfo() {
        let providedGame = textToFilter;
        let console = sendConsoleInfo();
        let romLocation = localStorage.getItem('romLocation');
        let ext;
        if (console == "gba") {
            ext = ".gba";
        } else if (console == "gb") {
            ext = ".7z";
        } else if (console == "nds") {
            ext = ".zip";
        } else if (console == "nes") {
            ext = ".nes.zip";
        } else if (console == "snes") {
            ext = ".zip";
        } else if (console == "n64") {
            ext = ".7z";
        } else if (console == "gbc") {
            ext = ".7z";
        } else if (console == "segamd") {
            ext = ".7z";
        } else {
            ext = ".zip";
        }
        let newLink = romLocation + console + '-alt/' + providedGame + ext;
        return newLink;
    }
  }
}

customElements.define("rom-add", RomList);
