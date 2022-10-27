
class CampRoom extends Room {
  constructor(coordinates, floor) {
    super({ x: coordinates.x + 10, y: coordinates.y + 10 });
    this.x = coordinates.x + 10;
    this.y = coordinates.y + 10;
    this.floorData = floor;

  }
  preload() {
    super.preload();
    this.load.spritesheet("lantern", "assets/props/lantern.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet("lantern2", "assets/props/lantern2.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.image('flame_particles', 'assets/particles/flame_particles.png')

    this.floorData.load(this);
    this.load.image("wall1", "assets/walls_and_floors/camp_wall.png");
  }
  create() {
    this.lightedObjects = [];
    this.anims.create({
      key: "flame",
      frames: this.anims.generateFrameNumbers("lantern"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "flame2",
      frames: this.anims.generateFrameNumbers("lantern2"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "u",
      frames: this.anims.generateFrameNumbers("upWalk"),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "d",
      frames: this.anims.generateFrameNumbers("downWalk"),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "l",
      frames: this.anims.generateFrameNumbers("leftWalk"),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "r",
      frames: this.anims.generateFrameNumbers("rightWalk"),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "ul",
      frames: this.anims.generateFrameNumbers("up-leftWalk"),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "ur",
      frames: this.anims.generateFrameNumbers("up-rightWalk"),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "dl",
      frames: this.anims.generateFrameNumbers("down-leftWalk"),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "dr",
      frames: this.anims.generateFrameNumbers("down-rightWalk"),
      frameRate: 7,
      repeat: -1,
    });
    var room = [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,],
    [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,],
    [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,],
     ]
    
    this.floor = this.add.tileSprite(0, 0, 2816, 2816, 'pebble').setScale(3)
    this.map = this.make.tilemap({ data: room, tileWidth: 64, tileHeight: 64 });
     var tiles = this.map.addTilesetImage('wall1');
    var layer = this.map.createLayer(0, tiles, 0, 0).setScale(3)
   let tile = this.map.getTileAt(0, 1)
   

    super.create();

  }
  update() {



    super.update();
  }
}
class StartingRoomTemp extends CampRoom {
  constructor(coordinates) {
    super({ x: coordinates.x, y: coordinates.y }, pebbles.config);
  }
  preload() {
    super.preload();
  }
  create() {
    super.create();
  }
  update() {
    super.update();
  }
}
class CampBoss1 extends CampRoom {
  constructor(coordinates) {
    super({ x: coordinates.x, y: coordinates.y }, pebbles.config);
  }
  preload() {
    super.preload();
  }
  create() {
    super.create();
  }
  update() {
    super.update();
  }
}
class CampTreasure1 extends CampRoom {
  constructor(coordinates) {
    super({ x: coordinates.x, y: coordinates.y }, pebbles.config);
  }
  preload() {
    super.preload();
  }
  create() {
    super.create();
  }
  update() {
    super.update();
  }
}
class CampBattle1 extends CampRoom {
  constructor(coordinates) {
    super({ x: coordinates.x, y: coordinates.y }, pebbles.config);
  }
  preload() {
    super.preload();
  }
  create() {
    super.create();
  }
  update() {
    super.update();
  }
}
class CampFiller1 extends CampRoom {
  constructor(coordinates) {
    super({ x: coordinates.x, y: coordinates.y }, pebbles.config);
  }
  preload() {
    super.preload();
  }

  create() {
    super.create();
  }
  update() {
    super.update();
  }
}
class CampHealing1 extends CampRoom {
  constructor(coordinates) {
    super({ x: coordinates.x, y: coordinates.y }, pebbles.config);
  }
  preload() {
    super.preload();
  }

  create() {
    super.create();
  }
  update() {
    super.update();
  }
}
