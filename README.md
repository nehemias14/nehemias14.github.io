# GBA 2.0

[![Deploy to Heroku](https://binbashbanana.github.io/deploy-buttons/buttons/remade/heroku.svg)](https://heroku.com/deploy/?template=https://github.com/Cattn/gba)
[![Run on Replit](https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg)](https://replit.com/github/Cattn/gba)
[![Remix on Glitch](https://binbashbanana.github.io/deploy-buttons/buttons/remade/glitch.svg)](https://glitch.com/edit/#!/import/github/Cattn/gba)
[![Deploy to IBM Cloud](https://binbashbanana.github.io/deploy-buttons/buttons/remade/ibmcloud.svg)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/Cattn/gba)
[![Deploy to Amplify Console](https://binbashbanana.github.io/deploy-buttons/buttons/remade/amplifyconsole.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/Cattn/gba)
[![Run on Google Cloud](https://binbashbanana.github.io/deploy-buttons/buttons/remade/googlecloud.svg)](https://deploy.cloud.run/?git_repo=https://github.com/Cattn/gba)
[![Deploy to Oracle Cloud](https://binbashbanana.github.io/deploy-buttons/buttons/remade/oraclecloud.svg)](https://cloud.oracle.com/resourcemanager/stacks/create?zipUrl=https://github.com/Cattb/gba/archive/refs/heads/main.zip)
[![Deploy on Railway](https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg)](https://railway.app/new/template?template=https://github.com/Cattn/gba)
[![Deploy to Vercel](https://binbashbanana.github.io/deploy-buttons/buttons/remade/vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/Cattn/gba)
[![Deploy to Netlify](https://binbashbanana.github.io/deploy-buttons/buttons/remade/netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Cattn/gba)
[![Deploy to Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/Cattn/gba&branch=main&name=gba)
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg)](https://render.com/deploy?repo=https://github.com/Cattn/gba)
[![Deploy to Cyclic](https://binbashbanana.github.io/deploy-buttons/buttons/remade/cyclic.svg)](https://app.cyclic.sh/api/app/deploy/Cattn/gba)

## Need more deployment help?
Click [here!](docs/deployment.md)

## What is this?
This is the successor to our GBA site.

## What new features does it have?
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
 
