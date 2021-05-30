
export default class GameScene extends Phaser.Scene {
	constructor() {
		super('game-scene')

		this.doors = []
		this.wizards = []
		this.ennemies = []
		this.items = []
	}

	preload() {
        // this.load.image('game-screen', './assets/cpc.screen/village-spawn-1.png')
		this.load.image('game-menu', './assets/cpc.screen/village-menu-1.png')

		this.load.image('tiles', './assets/cpc.maps/sorcery-village-1-tileset.png')
		this.load.tilemapTiledJSON('tilemap', './assets/cpc.maps/sorcery-village-1-tilemap.json')
		// this.load.tilemapCSV('tilemap', './assets/cpc.maps/village-spawn-1_map.csv')

		this.load.atlas('spritesheet', './assets/cpc-spritesheet.png', './assets/cpc-spritesheet-atlas.json')
    }

    create() {
		const map = this.make.tilemap({ key: 'tilemap', tileWidth: 8, tileHeight: 8 })
		const tileset = map.addTilesetImage('sorcery-village-1-tileset.png', 'tiles')
		const layer = map.createLayer('samples/sorcery-village-1-layer-1', tileset)
		// const layer = map.createLayer(0, tileset, 0, 0)
		// layer.setCollisionFromCollisionGroup();

		this.add.image(160, 172, 'game-menu')
		this.physics.world.setBounds(0, 0, 320, 144)

		this.doors.push(this.add.sprite(1*8+4, 1*8+4, 'spritesheet', 'door-0'))
		this.doors.push(this.add.sprite(3*8+4, 15*8+4, 'spritesheet', 'door-0'))
		this.physics.add.existing(this.doors[0], { immovable: true, allowGravity: false})
		this.physics.add.existing(this.doors[1], { immovable: true, allowGravity: false})

		this.items.push(this.add.sprite(32*8+4, 14*8+4, 'spritesheet', 'ball-and-chain'))
		this.items.push(this.add.sprite(35*8+4, 3*8+4, 'spritesheet', 'shooting-star'))
		this.physics.add.existing(this.items[0], { immovable: true, allowGravity: false})
		this.physics.add.existing(this.items[1], { immovable: true, allowGravity: false})

		this.ennemies.push(this.add.sprite(4*8+4, 7*8+4, 'spritesheet', 'mask-0'))
		this.ennemies.push(this.add.sprite(23*8+4, 15*8+4, 'spritesheet', 'monk-0'))
		this.physics.add.existing(this.ennemies[0], { allowGravity: false})
		this.physics.add.existing(this.ennemies[1], { allowGravity: false})

		this.wizards.push(this.add.sprite(17*8+4, 2*8+4, 'spritesheet', 'wizard-0'))
		this.physics.add.existing(this.wizards[0])
		this.wizards[0].body.setCollideWorldBounds(true)
		
		this.cursors = this.input.keyboard.createCursorKeys()
	}

	update(time, delta) {
		//  Horizontal movement every 250ms
		if (this.input.keyboard.checkDown(this.cursors.left))
		{
			this.wizards[0].body.velocity.x = -50;
		}
		else if (this.input.keyboard.checkDown(this.cursors.right))
		{
			this.wizards[0].body.velocity.x = 50;
		}
	
		//  Vertical movement every 150ms
		if (this.input.keyboard.checkDown(this.cursors.up))
		{
			this.wizards[0].body.velocity.y = -50;
		}
		else if (this.input.keyboard.checkDown(this.cursors.down))
		{
			this.wizards[0].body.velocity.y = 50;
		}
	}
}