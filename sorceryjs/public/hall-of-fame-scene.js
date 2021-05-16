export default class HallOfFameScene extends Phaser.Scene {
	constructor() {
		super('hall-of-fame-scene')
	}

	preload() {
        this.load.image('hall-of-fame-screen', './assets/cpc.screen/hall-of-fame-screen.png')
    }

    create() {
		this.add.image(160, 100, 'hall-of-fame-screen')

		this.input.on('pointerdown', () => {
            this.scene.start('splash-scene')
            this.scene.stop('hall-of-fame-scene')            
        })
	}
}