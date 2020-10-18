namespace SpriteKind {
    export const Hoop = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    basketball = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 f 4 4 4 . . . . . 
        . . . 4 4 4 4 f 4 4 4 4 . . . . 
        . . f 4 4 4 4 f 4 4 4 4 f . . . 
        . 4 4 f 4 4 4 f 4 4 4 f 4 4 . . 
        . 4 4 4 f 4 4 f 4 4 f 4 4 4 . . 
        . 4 4 4 f 4 4 f 4 4 f 4 4 4 . . 
        . f f f f f f f f f f f f f . . 
        . 4 4 4 f 4 4 f 4 4 f 4 4 4 . . 
        . 4 4 4 f 4 4 f 4 4 f 4 4 4 . . 
        . 4 4 f 4 4 4 f 4 4 4 f 4 4 . . 
        . . f 4 4 4 4 f 4 4 4 4 f . . . 
        . . . 4 4 4 4 f 4 4 4 4 . . . . 
        . . . . 4 4 4 f 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, baller, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Hoop, function (sprite, otherSprite) {
    game.over(true)
})
let basketball: Sprite = null
let baller: Sprite = null
scene.setBackgroundImage(img`
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111211111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111112111111111111
    1111111111111121111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111121111111111111
    1111111111111121111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111121111111111111
    1111111111111121111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111121111111111111
    1111111111111121111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111121111111111111
    1111111111111121111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111121111111111111
    1111111111111112111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111211111111111111
    1111111111111112111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111211111111111111
    1111111111111112111111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111111211111111111111
    1111111111111111211111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111112111111111111111
    1111111111111111211111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111112111111111111111
    1111111111111111211111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111112111111111111111
    1111111111111111121111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111121111111111111111
    1111111111111111121111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111121111111111111111
    1111111111111111121111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111121111111111111111
    1111111111111111112111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111211111111111111111
    1111111111111111112111111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111111211111111111111111
    1111111111111111111211111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111112111111111111111111
    1111111111111111111211111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111112111111111111111111
    1111111111111111111211111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111112111111111111111111
    1111111111111111111121111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111121111111111111111111
    1111111111111111111121111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111121111111111111111111
    1111111111111111111112111111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111111211111111111111111111
    1111111111111111111111211111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111112111111111111111111111
    1111111111111111111111211111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111112111111111111111111111
    1111111111111111111111121111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111121111111111111111111111
    1111111111111111111111121111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111121111111111111111111111
    1111111111111111111111112111111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111111211111111111111111111111
    1111111111111111111111111211111111111111111111111111111111111112222222222222222222222222222222221111111111111111111111111111111111111112111111111111111111111111
    1111111111111111111111111121111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111121111111111111111111111111
    1111111111111111111111111121111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111121111111111111111111111111
    1111111111111111111111111112111111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111111211111111111111111111111111
    1111111111111111111111111111211111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111112111111111111111111111111111
    1111111111111111111111111111121111111111111111111111111111111112111111111111111111111111111111121111111111111111111111111111111111121111111111111111111111111111
    1111111111111111111111111111112111111111111111111111111111111111211111111111111111111111111111211111111111111111111111111111111111211111111111111111111111111111
    1111111111111111111111111111112111111111111111111111111111111111211111111111111111111111111111211111111111111111111111111111111111211111111111111111111111111111
    1111111111111111111111111111111211111111111111111111111111111111211111111111111111111111111111211111111111111111111111111111111112111111111111111111111111111111
    1111111111111111111111111111111121111111111111111111111111111111121111111111111111111111111112111111111111111111111111111111111121111111111111111111111111111111
    1111111111111111111111111111111112111111111111111111111111111111112111111111111111111111111121111111111111111111111111111111111211111111111111111111111111111111
    1111111111111111111111111111111111221111111111111111111111111111111211111111111111111111111211111111111111111111111111111111122111111111111111111111111111111111
    1111111111111111111111111111111111112111111111111111111111111111111221111111111111111111112211111111111111111111111111111111211111111111111111111111111111111111
    1111111111111111111111111111111111111211111111111111111111111111111112111111111111111111121111111111111111111111111111111112111111111111111111111111111111111111
    1111111111111111111111111111111111111121111111111111111111111111111111211111111111111111211111111111111111111111111111111121111111111111111111111111111111111111
    1111111111111111111111111111111111111112211111111111111111111111111111122211111111111222111111111111111111111111111111112211111111111111111111111111111111111111
    1111111111111111111111111111111111111111121111111111111111111111111111111122222222222111111111111111111111111111111111121111111111111111111111111111111111111111
    1111111111111111111111111111111111111111112111111111111111111111111111111111111111111111111111111111111111111111111111211111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111221111111111111111111111111111111111111111111111111111111111111111111111122111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111112211111111111111111111111111111111111111111111111111111111111111111112211111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111121111111111111111111111111111111111111111111111111111111111111111121111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111112211111111111111111111111111111111111111111111111111111111111112211111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111122211111111111111111111111111111111111111111111111111111112221111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111122111111111111111111111111111111111111111111111111111221111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111222111111111111111111111111111111111111111111111222111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111222111111111111111111111111111111111111111222111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111222111111111111111111111111111111111222111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111222221111111111111111111111122222111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222211111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
baller = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f e e e e e e f e f 
    f f f f e e e e f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 f b b b b b b f 4 e 
    4 d f d d d d d d c d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
baller.setPosition(80, 95)
baller.setVelocity(50, 0)
baller.setFlag(SpriteFlag.BounceOnWall, true)
let theHoop = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f . . 
    . f . . . . . . . . . . . f . . 
    . f f f f f f f f f f f f f . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Hoop)
theHoop.setPosition(80, 10)
