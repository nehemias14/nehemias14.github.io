const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

function handler() {
    let console = params.console;
    let title = document.getElementById('pageTitle');

    if (console == "gba") {
        title.innerHTML += ' - GBA';
    } else if (console == "gb") {
        title.innerHTML += ' - GB';
    } else if (console == "nds") {
        title.innerHTML += ' - NDS';
    } else if (console == "nes") {
        title.innerHTML += ' - NES';
    } else if (console == "snes") {
        title.innerHTML += ' - SNES';
    } else if (console == "n64") {
        title.innerHTML += ' - N64';
    } else if (console == "gbc") {
        title.innerHTML += ' - GBC';
    } else if (console == "segamd") {
        title.innerHTML += ' - Sega MD';
    } else {
        title.innerHTML += ' - Other';
    }
}

handler();