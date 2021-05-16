export default class HighScoreScene extends Phaser.Scene {
	constructor() {
		super('high-score-scene')
	}

	preload() {
        this.load.image('high-score-screen', './assets/cpc.screen/high-score-screen.png')
    }

    create() {
		this.add.image(160, 100, 'high-score-screen')

		this.input.on('pointerdown', () => {
            this.scene.start('hall-of-fame-scene')
            this.scene.stop('high-score-scene')            
        })
	}
}