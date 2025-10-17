input.onButtonPressed(Button.A, function () {
    actualValue += 1
    basic.showNumber(actualValue)
})
input.onButtonPressed(Button.AB, function () {
    actualValue = 0
})
input.onButtonPressed(Button.B, function () {
    actualValue += -1
    basic.showNumber(actualValue)
})
let actualValue = 0
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
