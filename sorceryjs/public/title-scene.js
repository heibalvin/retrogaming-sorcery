export default class TitleScene extends Phaser.Scene {
	constructor() {
		super('title-scene')
	}

	preload() {
        this.load.image('title-screen', './assets/cpc.screen/title-screen.png')
    }

    create() {
		this.add.image(160, 100, 'title-screen')

        this.input.on('pointerdown', () => {
            this.scene.start('game-scene')
            this.scene.stop('title-scene')            
        })
	}
}