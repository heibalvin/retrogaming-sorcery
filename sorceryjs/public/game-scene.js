export default class GameScene extends Phaser.Scene {
	constructor() {
		super('game-scene')
	}

	preload() {
        this.load.image('game-screen', './assets/cpc.screen/game-screen.png')
    }

    create() {
		this.add.image(160, 100, 'game-screen')
	}
}