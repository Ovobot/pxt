namespace SpriteKind {
    export const Obstacle = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, bunny)
    if (bunny.ay == 0) {
        bunny.vy = -160
        bunny.ay = gravity
    }
})
function setupFrames() {
    birdFrames = [img`
        . . . . . . . . . . . .
        . . . . . 1 1 1 1 . . .
        . . . . 1 1 1 1 . . . .
        . . . . 1 1 1 . . . . .
        . . . . 1 1 1 . . . . .
        . . . . 1 1 1 . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . 1 1 1 1 1 1 . .
        . . . 1 1 1 1 1 . . . .
        . . . 1 1 1 1 . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . 1 1 1 1 . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 1 1 1 1 .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 . . .
        . . . . 1 1 1 1 1 1 1 .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 . . . . .
        . . . 1 1 1 1 . . . . .
        . . . . 1 1 1 1 1 . . .
        . . . . . 1 1 1 1 1 . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 . . . . .
        . . . 1 1 1 1 . . . . .
        . . . . 1 1 1 1 1 . . .
        . . . . . 1 1 1 1 1 . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 . . .
        . . . . 1 1 1 1 1 1 1 .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . 1 1 1 1 . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 1 1 1 1 .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . 1 1 1 1 1 1 . .
        . . . 1 1 1 1 1 . . . .
        . . . 1 1 1 1 . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . .
        . . . . . 1 1 1 1 . . .
        . . . . 1 1 1 1 . . . .
        . . . . 1 1 1 . . . . .
        . . . . 1 1 1 . . . . .
        . . . . 1 1 1 . . . . .
        . . 1 1 1 1 1 1 . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
    `]
    animation.loopImageAnimation(bird, birdFrames, 40)
    obstacles = [img`
        . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 7 . . . . . . . . . . .
        . . . . . . . . . . 7 7 . . . . . . . . . .
        . . . . . . . . . 6 7 7 . . . . . . . . . .
        . . . . . . . . 6 6 7 7 7 . . . . . . . . .
        . . . . . . . . 6 6 7 7 7 . . . . . . . . .
        . . . . . . . . 6 6 7 7 7 7 . . . . . . . .
        . . . . . . . 6 6 7 7 7 7 7 . . . . . . . .
        . . . . . . 6 6 6 7 7 7 7 7 . . . . . . . .
        . . . . . . . . 6 6 6 6 6 . . . . . . . . .
        . . . . . . . . 6 6 6 6 . . . . . . . . . .
        . . . . . . . 6 6 6 6 6 7 7 . . . . . . . .
        . . . . . . 6 6 6 7 7 7 7 7 7 . . . . . . .
        . . . . . . 6 6 6 7 7 7 7 7 7 7 . . . . . .
        . . . . . . 6 6 7 7 7 7 7 7 7 7 7 . . . . .
        . . 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 . . .
        . . . 6 6 6 6 6 7 7 7 7 7 6 6 6 6 6 . . . .
        . . . . . . . . 6 6 6 6 7 7 . . . . . . . .
        . . . . . . . . 6 6 6 7 7 7 . . . . . . . .
        . . . . . . 6 6 7 7 7 7 7 7 7 . . . . . . .
        . . . 6 6 6 7 7 7 7 7 7 7 7 7 7 7 . . . . .
        6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . .
        6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6
        . . . 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 6 .
        . . . . . 6 6 6 6 e e e e 7 7 7 7 7 6 6 6 .
        . . . . . . . . . e e e e . . . . . . . . .
        . . . . . . . . . e e e e . . . . . . . . .
        . . . . . . . . . e e e e . . . . . . . . .
        . . . . . . . 6 . e e e e . . 6 . . . . . .
        . . . 6 6 6 . . . e e e e . 6 . . . . . . .
        . . . 6 . 6 . . . e e e e . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . e e e e e . . . . .
        . . . . e e b b b e e . . . .
        . . . e e b e e e b e e . . .
        . . . e e b e e b b e e . . .
        . . . . e e b b e e e . . . .
        . . . e b e e e e b b e . . .
        . . . e e b b b b e e e . . e
        . . . e e e e e e e e . . e .
        . . . e b e e b e b e . e . e
        . . . e b e e e e b e e . . .
        . . . e e e b e e e e . . . .
        . . e e b e b e b e e e . . .
        . e e e e e e e e e e e e . .
        . . . . . . e e . . . . . . .
    `]
    trees = [img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b . . b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . b b b . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b . b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . b b b b . b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . b b b b b . . b b b b b . b b b b . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . b b b . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b . b b . . . . . . . . . . . . .
        . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . b b b b b b . . b b b b . b b b . . . . . . . . . . .
        . . . . . . . . . . b b b b b . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . .
        . . . . . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . . .
        . . . . . . . . . b b b b . b b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . b b . . . . b b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . b b b b b b b b b b b b b b b b b b b b . . . . . . . .
        . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b . . . . . .
        . . . . . . b b b b b b b b . . . b b b b b b b b b . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . b b b b . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b . b b b b . . . . . . . . . . .
        . . . . . . . . . . . . b b b b b . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . b b b . . b b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . b b b b . b b b b b b b b . b . . . . . . . . . .
        . . . . . . . . . . . . b . . . b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b b b b . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b . b b b b . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b b b b b b b b b . . . . . . . .
        . . . . . . . . . . . b b b b . b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b . b b . . . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . . b b b b b b b b b b b b b b . . . . . . . . . .
        . . . . . . . . . . . . b b b b b b b b b b . . b b b . . . . . . . . .
        . . . . . . . . . b b b b b b b b b b b b b b . . b b b b . . . . . . .
        . . . . . . . . b b . . . b b b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . . b b b b . b b b b b b b b . . . . . . . . . . .
        . . . . . . . . b b b b . b . . . b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b . . b b b b . . . . . . . . .
        . . . . . . . . . . . . . b b b b b . b b b b b b b b . . . . . . . . .
        . . . . . . . . . b b b b b b . . b b b b . . b b b b b . . . . . . . .
        . . . . . . . . b b . b . . . . b b b b b . . . . . b b b . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . b b b b . . b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . b b b b b b b b b b b b b b b b b b b b . . . . . . . .
        . . . . . . . . . . . b b b b b b b b b b b b b b b b . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b b . b . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b . . . . . .
        . . . . . . . . . . . b b b b b b b b b b b b b b b b b b . . . . . . .
        . . . . . . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . .
        . . . . . . . . . . b b b b b . . . b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b . b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b . b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
    `]
    grassImages = [img`
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . b . . .
        . . . . b . . .
        . . . b b . . .
        . . . b b . . .
   `, img`
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . b . . . .
        . . . b . . . .
        . . . b b . b .
        . . . b b . b .
   `, img`
        . . . . . . . .
        . . . . . . . .
        b . . . . . . .
        b . . b . . . .
        b . . b b . . .
        b . b b b . . .
        b . b b b . b .
        b b b b b . b .
   `, img`
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . b
        . . . b . . . b
        . . . b . . . b
        . . . b b . b b
        . . . b b . b b
   `, img`
        . . . . . . . .
        . . . . . . . .
        . . . b . . . .
        . . . b . . . .
        . . b b . . . .
        . . b b b . . .
        . . b b b . . .
        . . b b b . . .
   `, img`
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . b . . . . . .
        . b . . . . . .
        . b b . . . b .
        . b b . . . b .
        . b b . . . b .
    `]
    clouds = [img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . .
        . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . .
        . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . .
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
   `, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
        . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
        . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
        . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
        . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
        . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . .
        . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . .
        . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . .
   `, img`
        . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . .
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . .
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . .
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . .
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . .
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . .
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . 1 1 1 1 . . 1 1 1 1 1 1 . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . .
        . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . .
        . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
        . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . .
        . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . .
    `]
}
function createTree() {
    tree = sprites.createProjectileFromSide(trees[Math.randomRange(0, trees.length - 1)], (-100 - game.runtime() / 250) / 2, 0)
    tree.bottom = 100
    tree.z = -1
}
function createCloud() {
    cloud = sprites.createProjectileFromSide(clouds[Math.randomRange(0, clouds.length - 1)], -30, 0)
    cloud.bottom = Math.randomRange(30, 55)
    cloud.z = -2
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
let grass: Sprite = null
let projectile: Sprite = null
let cloud: Sprite = null
let tree: Sprite = null
let clouds: Image[] = []
let grassImages: Image[] = []
let trees: Image[] = []
let obstacles: Image[] = []
let birdFrames: Image[] = []
let bird: Sprite = null
let gravity = 0
let bunny: Sprite = null
scene.setBackgroundColor(13)
bunny = sprites.create(img`
    . . . . . . . . . . . .
    . . . 1 1 . 1 1 . . . .
    . . . 1 3 . 1 3 . . . .
    . . . . 1 3 . 1 3 . . .
    . . . . 1 3 . 1 3 . . .
    . . . 1 1 1 1 1 1 . . .
    . . 1 1 1 1 1 1 1 1 . .
    . . 1 1 1 f 1 1 f 1 . .
    . . 1 1 1 1 1 1 1 1 . .
    . . 1 1 1 1 f f 1 1 . .
    . . . 1 1 1 1 1 1 . . .
    . 1 1 1 1 1 1 1 1 1 1 .
    . 1 1 1 1 1 1 1 1 1 1 .
    . . . . 1 1 1 1 . . . .
    . . . . 1 1 1 1 . . . .
    . . . . 1 1 1 1 . . . .
    . . . . 1 1 1 1 . . . .
    . . . . . 1 1 . . . . .
    . . . . . . 1 . . . . .
    . . . . . . . . . . . .
    . . . . . . . . . . . .
`, SpriteKind.Player)
gravity = 400
bunny.ay = gravity
bunny.x = 20
bird = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)
bird.setPosition(160, 20)
bird.setVelocity(-120, 0)
setupFrames()
game.onUpdate(function () {
    if (bunny.bottom > 105) {
        bunny.bottom = 105
        bunny.vy = 0
        bunny.ay = 0
    }
})
game.onUpdate(function () {
    if (bird.x < 0) {
        bird.setPosition(Math.randomRange(160, 240), Math.randomRange(20, 60))
    }
})
game.onUpdateInterval(100, function () {
    bird.x += -1
})
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
forever(function () {
    let difficultyFactor = game.runtime() / 250
    let osbstacleSpeed = 100 + difficultyFactor
    let numObstacles = Math.randomRange(1, 3);
    for (let i = 0; i < numObstacles; i++) {
        let newObstacle = obstacles[Math.randomRange(0, obstacles.length - 1)]
        projectile = sprites.createProjectileFromSide(newObstacle, -osbstacleSpeed, 0)
        projectile.bottom = 105
        projectile.setKind(SpriteKind.Obstacle)
        pause(11500.0 / osbstacleSpeed)
    }
    pause(Math.randomRange(1500, 2500))
})
game.onUpdateInterval(200, function () {
    if (Math.percentChance(40)) {
        grass = sprites.createProjectileFromSide(grassImages[Math.randomRange(0, grassImages.length - 1)], (-100 - game.runtime() / 250) / 2, 0)
        grass.bottom = 100
        grass.z = -1
    }
})
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(20)) {
        createCloud()
    }
})
forever(function () {
    if (Math.percentChance(60)) {
        createTree()
        if (Math.percentChance(50)) {
            pause(Math.randomRange(150, 300))
            createTree()
        }
    }
    pause(1500)
})