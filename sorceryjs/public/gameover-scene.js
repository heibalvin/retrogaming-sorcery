export default class GameOverScene extends Phaser.Scene {
	constructor() {
		super('gameover-scene')
	}

	preload() {
        this.load.image('gameover-screen', './assets/cpc.screen/gameover-screen.png')
    }

    create() {
		this.add.image(160, 100, 'gameover-screen')

        this.timedEvent = this.time.delayedCall(2000, this.swapscene, [], this);
	}

    swapscene() {
        this.scene.start('high-score-scene')
        this.scene.stop('gameover-scene') 
    }    
}