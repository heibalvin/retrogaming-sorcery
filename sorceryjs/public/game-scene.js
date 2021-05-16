export default class GameScene extends Phaser.Scene {
	constructor() {
		super('game-scene')
	}

	preload() {
        this.load.image('game-screen', './assets/cpc.screen/game-screen.png')
		this.load.atlas('spritesheet', './assets/cpc-spritesheet.png', './assets/cpc-spritesheet-atlas.json')
    }

    create() {
		this.add.sprite(160, 100, 'spritesheet', 'wizard-0')

	}
}