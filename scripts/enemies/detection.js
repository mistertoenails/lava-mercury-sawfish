class Detector{
  constructor(range, enemy, scene){
    this.update =  () => {
        if (Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y) < range) {
          console.log('detected')
            enemy.rotation = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y) + 1.5708
          scene.physics.moveToObject(enemy, scene.player, 100)
          enemy.play('crawl', true)
         
        }
      else{
        enemy.body.velocity.x = 0
        enemy.body.velocity.y = 0
      }
    }
  }
}