input.onGesture(Gesture.LogoUp, function () {
    _1.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    _1.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.A, function () {
    game.resume()
})
input.onGesture(Gesture.LogoDown, function () {
    _1.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    game.pause()
})
input.onGesture(Gesture.TiltRight, function () {
    _1.change(LedSpriteProperty.X, 1)
})
let _1: game.LedSprite = null
game.setLife(3)
game.setScore(0)
_1 = game.createSprite(0, 0)
let _2 = game.createSprite(4, 4)
let _3 = game.createSprite(2, 2)
basic.forever(function () {
    if (_1.isTouching(_2)) {
        game.addScore(1)
        game.addLife(1)
        _2.set(LedSpriteProperty.X, randint(0, 5))
        _2.set(LedSpriteProperty.Y, randint(0, 5))
        _1.set(LedSpriteProperty.X, randint(0, 5))
        _1.set(LedSpriteProperty.Y, randint(0, 5))
        _3.set(LedSpriteProperty.X, randint(0, 5))
        _3.set(LedSpriteProperty.X, randint(0, 5))
    }
    if (_1.isTouching(_3)) {
        game.removeLife(1)
        _2.set(LedSpriteProperty.X, randint(0, 5))
        _2.set(LedSpriteProperty.Y, randint(0, 5))
        _1.set(LedSpriteProperty.X, randint(0, 5))
        _1.set(LedSpriteProperty.Y, randint(0, 5))
        _3.set(LedSpriteProperty.X, randint(0, 5))
        _3.set(LedSpriteProperty.X, randint(0, 5))
    }
})
basic.forever(function () {
    basic.pause(5000)
    if (_1.get(LedSpriteProperty.X) < _3.get(LedSpriteProperty.X)) {
        _3.change(LedSpriteProperty.X, -1)
    }
    if (_1.get(LedSpriteProperty.X) > _3.get(LedSpriteProperty.X)) {
        _3.change(LedSpriteProperty.X, 1)
    }
    if (_1.get(LedSpriteProperty.Y) < _3.get(LedSpriteProperty.Y)) {
        _3.change(LedSpriteProperty.Y, -1)
    }
    if (_1.get(LedSpriteProperty.Y) > _3.get(LedSpriteProperty.Y)) {
        _3.change(LedSpriteProperty.Y, 1)
    }
})
