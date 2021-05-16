# SORCERY JS

This is a custom SoceryCPC version written using Javascript / Phaser3 game engine.   
 * Run the local server: `npm start`    
 * In your webbrowser run url `http://localhost:8080`       

## PHASER3 GAME

Multiple Scenes to manage the game:   
 * **SplashScene** just a Sorcery Logo picture, will fadeout after 2 sec
 * **TitleScene** with Sorcery Logo and awaiting mouse/touch
 * **GameScene** the Sorcery Game.


## PHASER3 SPRITESHEET

[GammaFP Atlas Packer](https://gammafp.com/tool/atlas-packer/)  
[GammaFP Animator](https://gammafp.com/tool/animator/)
 

## PHASER3 AUTOCOMPLETION

Steps:
 * Create a folder dist: `mkdir dist`
 * Download [phaser.ts](https://github.com/photonstorm/phaser/blob/master/types/phaser.d.ts) and add to dist folder
 * Create an empty '{ }' file jsconfig.json: `touch jsconfig.json && echo '{ }' >> jsconfig.json`  


## LOCAL SERVER DEPLOYMENT

Steps:
 * Install NodeJS.
 * Create a new project folder: `mkdir sorceryjs && cd sorceryjs`  
 * Initialize a new NodeJS project: `npm init -y`  
 * Install Express / Nodemon: `npm install express nodemon`  
 * Create a server.js file: `touch server.js`
 * Create a public folder (all game related source code): `mkdir public`  
 * Create first html/javascript code: `touch public/index.html && touch public/index.js`
 * Update **package.json**, **server.js**, **public/index.html**, **public/index.js** files as described below.
 * Run the local server: `npm start` 
 * In your webbrowser run url `http://localhost:8080`  

**package.json**
```
{
  "name": "sorceryjs",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.7"
  }
```

**server.js**
```
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});
```

**public/index.html**
```
<!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sorcery JS</title>
    <style>
        html, body {
            height: 100%;
            margin: 1%;
            background-color: #66057e;
        }
    </style>
  </head>
  <body>
    <script src="//cdn.jsdelivr.net/npm/phaser@3.54.0/dist/phaser-arcade-physics.js"></script>
    <script type= "module" src="index.js"></script>
  </body>
</html>
```

**public/index.js**
```
const DEFAULT_WIDTH = 320
const DEFAULT_HEIGHT = 200
const ratio = DEFAULT_HEIGHT/DEFAULT_WIDTH

const config = {
  type: Phaser.AUTO,
  backgroundcolor: '#000000',
  audio: {
    disableWebAudio: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      fps: 60
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  }
};

const game = new Phaser.Game(config);
```

## REFERENCE

 * [Phaser3 Autocompletion](https://phaser.discourse.group/t/getting-autocomplete-in-vsc/2389)
 * [Getting Started with Phaser3 and Node.js](https://dev.to/cschratz/getting-started-with-phaser-3-and-node-js-4mb)
 * [Making Phaser3 Full Screen game](https://phaser.discourse.group/t/making-a-full-screen-game/1136/2)

