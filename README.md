# GBA2.0-Beta

## What is this?
This is the successor to our GBA site.
## What new features will it have?
Enhanced console-wide search, Global Search, Multiplayer Support (Made by us, doesn't use Netplay), faster in general, less cluttered, cleaner UI + More!

## Multiplayer:
Multiplayer is a WIP, expected by 2.0 update. It's still in development by our team. Please be patient. We'll let you know any and all updates!

# Contributions:
## Modules:
Modules are still a WIP, they will allow you to make edits to the site, and in the future you can apply for your module to be added to a store-like page, where people can activate them! They will be able to add new pages to nav, themes, + more!

## Project Structure:
The project structure is meant to be very modular, and easy to grasp what things are, and where they would be.

### /main
This directory is the main directory for almost all content.
Generally, styling assets are not stored in this diretory.

### /main/consoles
Contains all relavent console pages placed in folders named accordingly, as well as a JS folder that does pagehandling.
> /main/consoles/{console} -
> This will include a json folder containing all the json files with all the games for each console.

### /main/options
{unfinished}
Has all relavent pages for options, as well as some page-specific scripts.

### /main/play
This folder contains all the Emulator data + page for it. It also contains a JS folder which inside, has a file that will handle ROMs passed in, and display properly.

### /main/scripts
Scripts within this folder are used throughout the project usually, and not just in one place. They are named properly & all have proper comments explaining them.

### /main/search
Our Search function, contains a handler folder, with a JSON file with all the search data being handled, as well as a handler file that handles the actual search features.

### /assets 
All relavent assets to the project (pictures, icons, etc)

### /styles
Stylesheets
 
