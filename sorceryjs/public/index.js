import SplashScene from './splash-scene.js'
import TitleScene from './title-scene.js'
import GameScene from './game-scene.js'
import GameOverScene from './gameover-scene.js'
import HighScoreScene from './high-score-scene.js'
import HallOfFameScene from './hall-of-fame-scene.js'

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
  },
  scene: [SplashScene, TitleScene, GameScene, GameOverScene, HighScoreScene, HallOfFameScene]
};

const game = new Phaser.Game(config);