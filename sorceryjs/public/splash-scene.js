export default class SplashScene extends Phaser.Scene {
	constructor() {
		super('splash-scene')
	}

	preload() {
        this.load.image('splash-screen', './assets/cpc.screen/splash-screen.png')
    }

    create() {
		this.add.image(160, 100, 'splash-screen')

        this.timedEvent = this.time.delayedCall(2000, this.swapscene, [], this);
	}

    swapscene() {
        this.scene.start('title-scene')
        this.scene.stop('splash-scene') 
    }    
}